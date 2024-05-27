import Image from 'next/image'
import Link from 'next/link'
import style from './main-header.module.scss'

import logoImg from '@/public/green-salad.png'

export default function MainHeader() {
  return (
    <header
      className="fixed w-full top-0 m-auto z-[100] 
      transform-gpu duration-300"
    >
      <div className="transform-gpu h-full w-full z-50 relative bg-base/80 backdrop-blur-xl">
        <nav className="max-w-container h-full flex justify-between items-center min-h-navHeight">
          <Link href="/" className={style.logo}>
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
