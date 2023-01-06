import Image from 'next/image'
import Link from 'next/link'
import { socialLogos } from '../../../constants'
import { Discord, Youtube, Twitter, TikTok } from '../icons'

const Footer = () => {
  return (
    <footer className='pt-10 pb-20 border-t md:pt-12 border-neutral-100 dark:border-neutral-800'>
        <div className='container px-6'>
            <div className='flex flex-wrap'>
                <div className='w-full mb-3 md:w-7/12 lg:w-1/2 md:mb-0'>
                    <Link
                        href='/'
                        className='inline-block mb-5 transition duration-300 ease-in-out text-neutral-900 focus:text-primary dark:text-white focus:ouline-none'
                    >
                        <Image src="/images/logo.svg" width={40} height={40} alt='Logo'/>
                    </Link>
                    <div className='flex flex-wrap md:-mx-5'>
                        <div className='w-full mb-3 md:w-1/3 md:px-5 md:mb-0'>
                            <span className='hidden mb-1 text-base font-bold md:text-sm md:block'>
                                A propos
                            </span>
                            <ul className='hidden text-sm md:block'>
                                <li>
                                    <Link
                                        href='/'
                                        className='block py-1 text-neutral-700 dark:text-neutral-300 hover:text-primary focus:text-primary dark:hover:text-primary dark:focus:text-primary focus:outline-none'
                                    >
                                        Notre histoire
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/'
                                        className='block py-1 text-neutral-700 dark:text-neutral-300 hover:text-primary focus:text-primary dark:hover:text-primary dark:focus:text-primary focus:outline-none'
                                    >
                                        Nos partenaires
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/'
                                        className='block py-1 text-neutral-700 dark:text-neutral-300 hover:text-primary focus:text-primary dark:hover:text-primary dark:focus:text-primary focus:outline-none'
                                    >
                                        Nous contacter
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/'
                                        className='block py-1 text-neutral-700 dark:text-neutral-300 hover:text-primary focus:text-primary dark:hover:text-primary dark:focus:text-primary focus:outline-none'
                                    >
                                        Fonds d'écrans
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='w-full mb-3 md:w-1/3 md:px-5 md:mb-0'>
                            <span className='hidden mb-1 text-base font-bold md:text-sm md:block'>
                                Boutique
                            </span>
                            <ul className='hidden text-sm md:block'>
                                <li>
                                    <Link
                                        href='/'
                                        className='block py-1 text-neutral-700 dark:text-neutral-300 hover:text-primary focus:text-primary dark:hover:text-primary dark:focus:text-primary focus:outline-none'
                                    >
                                        Service client
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/'
                                        className='block py-1 text-neutral-700 dark:text-neutral-300 hover:text-primary focus:text-primary dark:hover:text-primary dark:focus:text-primary focus:outline-none'
                                    >
                                        Expéditions
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/'
                                        className='block py-1 text-neutral-700 dark:text-neutral-300 hover:text-primary focus:text-primary dark:hover:text-primary dark:focus:text-primary focus:outline-none'
                                    >
                                        Retours
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='w-full mb-3 md:w-1/3 md:px-5 md:mb-0'>
                            <span className='hidden mb-1 text-base font-bold md:text-sm md:block'>
                                Termes et conditions
                            </span>
                            <ul className='hidden text-sm md:block'>
                                <li>
                                    <Link
                                        href='/'
                                        className='block py-1 text-neutral-700 dark:text-neutral-300 hover:text-primary focus:text-primary dark:hover:text-primary dark:focus:text-primary focus:outline-none'
                                    >
                                        Mentions légales
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/'
                                        className='block py-1 text-neutral-700 dark:text-neutral-300 hover:text-primary focus:text-primary dark:hover:text-primary dark:focus:text-primary focus:outline-none'
                                    >
                                        Politique de confidentialité
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/'
                                        className='block py-1 text-neutral-700 dark:text-neutral-300 hover:text-primary focus:text-primary dark:hover:text-primary dark:focus:text-primary focus:outline-none'
                                    >
                                        Conditions générales de vente
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='self-end w-full md:w-5/12 lg:w-1/2'>
                    <nav className='pr-1 mb-3 ml-auto'>
                        <ul className='flex justify-between flex-nowrap sm:gap-1 md:gap-2 md:justify-end'>
                            {socialLogos.map((social, index) => (
                                <li className='block' key={index}>
                                    <Link
                                        href={social.link}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className="flex items-center justify-center w-10 h-10 transition duration-300 ease-in-out border rounded-lg bg-neutral-50 text-neutral-900 xl:w-12 xl:h-12 border-neutral-200 dark:text-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 hover:border-neutral-300 focus:border-neutral-300 dark:hover:border-neutral-600 dark:focus:border-neutral-600"
                                    >
                                        {social.name == 'Twitter' && <Twitter />}
                                        {social.name == 'Discord' && <Discord />}
                                        {social.name == 'Youtube' && <Youtube />}
                                        {social.name == 'TikTok' && <TikTok />}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className='text-center md:text-right'>
                        <small className='text-xs text-neutral-700 dark:text-neutral-400'>
                            © 2022 - {new Date().toLocaleDateString("fr-FR", {year: 'numeric'})}, BLK, Tous droits réservés
                        </small>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer