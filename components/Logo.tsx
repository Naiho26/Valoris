import Image from 'next/image'
import Link from 'next/link'

export function LogoMark() {
  return (
    <Image
      src="/images/valoris_logo.png"
      alt="Valoris Projektentwicklung"
      width={220}
      height={60}
      priority
      style={{ width: 'auto', height: '40px' }}
    />
  )
}

export function LogoMarkFooter() {
  return (
    <Image
      src="/images/valoris_logo_white.png"
      alt="Valoris Projektentwicklung"
      width={220}
      height={60}
      style={{ width: 'auto', height: '36px' }}
    />
  )
}
