interface LunaLogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
  showTagline?: boolean
}

export function LunaLogo({ className = "", size = "md", showTagline = false }: LunaLogoProps) {
  const sizeClasses = {
    sm: "h-8",
    md: "h-12",
    lg: "h-16",
  }

  return (
    <div className={`flex flex-col items-start ${className}`}>
      <div className={`${sizeClasses[size]} flex items-center`}>
        <svg viewBox="0 0 180 60" className="h-full w-auto" fill="currentColor">
          {/* Stylized "L" */}
          <path
            d="M10 15 Q15 10 25 15 L25 35 Q25 45 35 45 L45 45"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Stylized "C" that connects with the L */}
          <path
            d="M40 20 Q50 15 60 20 Q65 25 65 35 Q65 45 60 50 Q50 55 40 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* "una" part of Luna */}
          <text x="70" y="35" fontSize="24" fontFamily="serif" fontStyle="italic" fontWeight="400" fill="currentColor">
            una
          </text>

          {/* "Concrete" text */}
          <text
            x="10"
            y="55"
            fontSize="16"
            fontFamily="sans-serif"
            fontWeight="500"
            fill="currentColor"
            letterSpacing="1px"
          >
            Concrete
          </text>
        </svg>
      </div>
      {showTagline && <p className="text-sm text-gray-600 mt-1 font-medium">Denver's Trusted Concrete Specialists</p>}
    </div>
  )
}
