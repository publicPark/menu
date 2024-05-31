'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

export default function NavLink({
  href,
  children,
}: {
  href: string
  children: ReactNode
}) {
  const pathname = usePathname()
  return (
    <>
      <Link
        href={href}
        className={pathname.startsWith(href) ? 'font-bold' : undefined}
      >
        {children}
      </Link>
    </>
  )
}
