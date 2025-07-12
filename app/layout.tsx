import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Luna Concrete | 30+ Years of Professional Concrete Services in Denver",
  description:
    "Professional concrete services in Denver and surrounding areas. Flatwork, driveways, sidewalks, patios, and retaining walls. Licensed, insured, and 30+ years of experience. Free estimates.",
  keywords:
    "Luna Concrete, concrete Denver, concrete contractor Denver, concrete driveway Denver, concrete patio Denver, concrete repair Denver, Denver concrete services, flatwork Denver, retaining walls Denver",
  authors: [{ name: "Luna Concrete" }],
  openGraph: {
    title: "Luna Concrete | Professional Concrete Services in Denver",
    description: "Professional concrete services in Denver. 30+ years experience. Free estimates. Call (303) 880-9483",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Luna Concrete",
              description: "Professional concrete services in Denver and surrounding areas",
              url: "https://lunaconcrete.com",
              telephone: "(303) 880-9483",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Denver",
                addressRegion: "CO",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "39.7392",
                longitude: "-104.9903",
              },
              areaServed: ["Denver, CO", "Aurora, CO", "Lakewood, CO", "Westminster, CO", "Thornton, CO", "Arvada, CO"],
              serviceType: [
                "Concrete Flatwork",
                "Concrete Driveways",
                "Concrete Sidewalks",
                "Concrete Patios",
                "Retaining Walls",
                "Concrete Repairs",
              ],
              priceRange: "$$",
              foundingDate: "1994",
              yearsInOperation: "30",
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
