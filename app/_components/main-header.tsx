'use client'
import Image from 'next/image'
import Link from 'next/link'
import style from './main-header.module.scss'

import logoImg from '@/public/green-salad.png'
import { useEffect, useState } from 'react'

export default function MainHeader() {
  const [showHeader, setShowHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // scrolling down
        setShowHeader(false)
      } else {
        // scrolling up
        setShowHeader(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return (
    <header
      className={`fixed w-full transition-transform duration-300 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="transform-gpu z-50 relative backdrop-blur-xl">
        <nav className="max-w-container flex justify-between items-center min-h-navHeight">
          <Link href="/" className={`${style.logo} ml-3 mr-3`}>
            <Image src={logoImg} width={28} alt="My home menu Home" priority />
          </Link>

          <div className={style.menu}>
            <ul className="flex min-h-navHeight items-center">
              <li className="">
                <Link className={style.link} href="/menu">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/community">Communty</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}
