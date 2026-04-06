import Image from 'next/image'
import Link from 'next/link'

export function LogoMark() {
  return (
    <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
      <Image
        src="/images/logo.png"
        alt="Valoris"
        width={160}
        height={50}
        priority
        style={{ height: 'auto', width: 'auto' }}
      />
    </Link>
  )
}
