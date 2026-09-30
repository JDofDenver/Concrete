import { NextResponse } from "next/server"

const SUBMIT_URL = "https://jobsiteserver-193310108175.us-west1.run.app/api/submit"
const CLIENT_REF = "CLT-f6b3338a202e92cb"

function field(value: unknown, max = 2000): string {
  if (typeof value !== "string") return ""
  return value.trim().slice(0, max)
}

function turnstileResponse(value: unknown): string {
  if (typeof value !== "string") return ""
  const token = value.trim()
  if (!token || token.length > 2048) return ""
  return token
}

export async function POST(request: Request) {
  const apiKey = process.env.JOBSITE_API_KEY
  if (!apiKey) {
    console.error("JOBSITE_API_KEY is not set")
    return NextResponse.json(
      { error: "Quote form is not configured." },
      { status: 500 },
    )
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 })
  }
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 })
  }

  const raw = body as Record<string, unknown>
  if (field(raw.company_website)) {
    return NextResponse.json({ ok: true })
  }

  const turnstileToken = turnstileResponse(raw["cf-turnstile-response"])
  if (!turnstileToken) {
    return NextResponse.json({ error: "Verification failed." }, { status: 403 })
  }

  const firstName = field(raw.firstName, 100)
  const lastName = field(raw.lastName, 100)
  const email = field(raw.email, 200)
  const phone = field(raw.phone, 40)
  const jobType = field(raw.projectType, 100)
  const message = field(raw.message)

  if (!firstName || !lastName || !email || !phone) {
    return NextResponse.json(
      { error: "First name, last name, email, and phone are required." },
      { status: 400 },
    )
  }

  const payload: Record<string, string> = {
    client_ref: CLIENT_REF,
    name: `${firstName} ${lastName}`,
    firstName,
    lastName,
    email,
    phone,
  }
  if (jobType) payload.job_type = jobType
  if (message) payload.message = message
  payload["cf-turnstile-response"] = turnstileToken

  const ip =
    request.headers.get("x-real-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "X-API-Key": apiKey,
  }
  if (ip) headers["X-Forwarded-For"] = ip

  let upstream: Response
  try {
    upstream = await fetch(SUBMIT_URL, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    })
  } catch (error) {
    console.error("jobsite submit request failed", error)
    return NextResponse.json(
      { error: "Could not send your request. Please call us." },
      { status: 502 },
    )
  }

  if (upstream.status === 403) {
    return NextResponse.json({ error: "Verification failed." }, { status: 403 })
  }

  if (!upstream.ok) {
    console.error("jobsite submit rejected", upstream.status)
    return NextResponse.json(
      { error: "Could not send your request. Please call us." },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true })
}
