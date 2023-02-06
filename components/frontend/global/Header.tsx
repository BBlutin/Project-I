'use client'

import Image from "next/image"
import Link from "next/link"
import { CartButton, DarkModeButton, SearchButton } from '../../frontend'

function Header() {
 
    return (
        <header className={`top-0 left-0 fixed w-full z-40 md:mb-2 pb-2 backdrop-blur-sm backdrop-filter md:backdrop-filter-none bg-neutral-50/90 dark:bg-neutral-900/90`}>
            <div className="container relative flex-wrap items-center hidden px-4 md:flex md:px-6 md:pt-2 md:pb-0">
                <Link className="mr-6" href='/'>
                    <Image src={'/images/logo.svg'} width={50} height={50} alt="Logo BLK"/>
                </Link>
                <nav className="mr-auto">
                    <ul className="flex flex-wrap items-center gap-6 text-sm uppercase font-heading">
                        <li className="pb-2 list-none md:relative whitespace-nowrap md:mt-4 md:pb-4">
                            <Link className="navLink" href='/'>
                                Esport
                            </Link>
                        </li>
                        <li className="pb-2 list-none md:relative whitespace-nowrap md:mt-4 md:pb-4">
                            <Link className="navLink" href='/'>
                                News
                            </Link>
                        </li>
                        <li className="pb-2 list-none md:relative whitespace-nowrap md:mt-4 md:pb-4">
                            <Link className="navLink" href='/'>
                                Boutique
                            </Link>
                        </li>
                        <li className="pb-2 list-none md:relative whitespace-nowrap md:mt-4 md:pb-4">
                            <Link className="navLink" href='/'>
                                A propos
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex justify-center flex-1 h-12 px-2 mx-auto"></div>
                <div className="flex flex-wrap items-center w-auto gap-6 ml-auto">
                    <SearchButton />
                    <CartButton />
                    <DarkModeButton />
                </div>
            </div>
        </header>
    )
}

export default Header