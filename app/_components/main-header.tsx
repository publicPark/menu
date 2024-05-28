import Image from 'next/image'
import Link from 'next/link'
import style from './main-header.module.scss'

import logoImg from '@/public/green-salad.png'
import HeaderWrapper from './header-wrapper'
import NavLink from './nav-link'

export default function MainHeader() {
  return (
    <HeaderWrapper>
      <nav className="max-w-container flex justify-between items-center min-h-navHeight">
        <Link href="/" className={`${style.logo} ml-3 mr-3`}>
          <Image src={logoImg} width={28} alt="My home menu Home" priority />
        </Link>

        <div className={style.menu}>
          <ul className="flex min-h-navHeight items-center">
            <li className="">
              <NavLink href="/menu">Menu</NavLink>
            </li>
            <li>
              <NavLink href="/guest">Guest</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </HeaderWrapper>
  )
}
