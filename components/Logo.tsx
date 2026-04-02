export function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" rx="8" fill="#1b2d4f"/>
      <path d="M18 8 L28 26 L8 26 Z" fill="none" stroke="#93c5fd" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M18 8 L18 26" stroke="white" strokeWidth="0.8" opacity="0.35"/>
      <path d="M12 20 L24 20" stroke="white" strokeWidth="0.8" opacity="0.25"/>
      <path d="M15 15 L21 15" stroke="white" strokeWidth="0.6" opacity="0.15"/>
    </svg>
  )
}

export function LogoMarkFooter({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" rx="8" fill="rgba(255,255,255,0.07)"/>
      <path d="M18 8 L28 26 L8 26 Z" fill="none" stroke="#93c5fd" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M18 8 L18 26" stroke="white" strokeWidth="0.8" opacity="0.3"/>
    </svg>
  )
}
