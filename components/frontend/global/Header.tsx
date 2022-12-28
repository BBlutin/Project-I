import Image from "next/image"
import Link from "next/link"
import CartButton from "./CartButton"
import DarModeButton from "./DarkModeButton"
import SearchButton from "./SearchButton"

function Header() {
  return (
    <header>
        <div className="fixed top-0 left-0 w-full max-w-screen md:relative z-40 md:mb-2 bg-opacity-80 md:bg-opacity-100 dark:bg-opacity-80 md:dark:bg-opacity-100 backdrop-blur-sm backdrop-filter md:backdrop-filter-none">
            <div className="relative hidden md:flex flex-wrap items-center px-4 md:px-6 py-2 md:pt-2 md:pb-0">
                <Link className="mr-6" href='/'>
                    <Image src={'/images/logo-blk.png'} width={40} height={40} alt="Logo BLK"/>
                </Link>
                <nav className="mr-auto">
                    <ul className="flex flex-wrap gap-3 items-center text-base">
                        <li className="md:relative whitespace-nowrap md:mt-4 pb-2 md:pb-4 list-none">
                            <Link className="navLink" href='/'>
                                Esport
                            </Link>
                        </li>
                        <li className="md:relative whitespace-nowrap md:mt-4 pb-2 md:pb-4 list-none">
                            <Link className="navLink" href='/'>
                                News
                            </Link>
                        </li>
                        <li className="md:relative whitespace-nowrap md:mt-4 pb-2 md:pb-4 list-none">
                            <Link className="navLink" href='/'>
                                Boutique
                            </Link>
                        </li>
                        <li className="md:relative whitespace-nowrap md:mt-4 pb-2 md:pb-4 list-none">
                            <Link className="navLink" href='/'>
                                A propos
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="mx-auto flex flex-1 h-12 justify-center px-2"></div>
                <div className="ml-auto flex flex-wrap items-center w-auto gap-6">
                    <SearchButton />
                    <CartButton />
                    <DarModeButton />
                </div>
            </div>
        </div>
        <div></div>
    </header>
  )
}

export default Header