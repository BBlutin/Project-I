"use client";

import Image from "next/image";
import Link from "next/link";
import { CartButton, DarkModeButton, SearchButton } from "../../frontend";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

function Header() {
  let [isOpen, setIsOpen] = useState(false);

  function handleModal() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  return (
    <>
      <header
        className={`top-0 left-0 fixed w-full z-40 md:mb-2 backdrop-blur-sm backdrop-filter md:backdrop-filter-none bg-neutral-50/90 dark:bg-neutral-900/90`}
      >
        <div className="container relative flex-wrap items-center hidden px-4 md:flex md:px-6 md:pt-2 md:pb-0">
          <Link className="mr-6" href="/">
            <Image
              src={"/images/logo.svg"}
              width={50}
              height={50}
              alt="Logo BLK"
            />
          </Link>
          <nav className="mr-auto">
            <ul className="flex flex-wrap items-center gap-6 text-sm uppercase font-heading">
              <li className="pb-2 list-none md:relative whitespace-nowrap md:mt-4 md:pb-4">
                <Link className="navLink" href="/">
                  Esport
                </Link>
              </li>
              <li className="pb-2 list-none md:relative whitespace-nowrap md:mt-4 md:pb-4">
                <Link className="navLink" href="/">
                  News
                </Link>
              </li>
              <li className="pb-2 list-none md:relative whitespace-nowrap md:mt-4 md:pb-4">
                <Link className="navLink" href="/">
                  Boutique
                </Link>
              </li>
              <li className="pb-2 list-none md:relative whitespace-nowrap md:mt-4 md:pb-4">
                <Link className="navLink" href="/">
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

        <div className="block w-full md:hidden max-w-screen">
          <div className="flex items-center justify-between w-full px-4 h-14">
            <div className="flex items-center gap-4">
              <div>
                {isOpen ? (
                  <XMarkIcon className="w-8 h-8" onClick={handleModal} />
                ) : (
                  <Bars3Icon className="w-8 h-8" onClick={handleModal} />
                )}
              </div>
              <SearchButton />
            </div>
            <Link className="" href="/">
              <Image
                src={"/images/logo.svg"}
                width={35}
                height={35}
                alt="Logo BLK"
              />
            </Link>
            <div className="flex items-center gap-4">
              <CartButton />
              <DarkModeButton />
            </div>
          </div>
        </div>
      </header>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-30" onClose={handleModal}>
          <div className="fixed inset-0 overflow-y-hidden">
            <div className="flex items-center justify-center min-h-full text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="ease-in duration-200"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="w-full h-screen max-w-md px-6 pt-24 overflow-hidden text-left align-middle transition-all transform bg-neutral-50 dark:bg-neutral-900">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6"
                  >
                    Hehehe
                  </Dialog.Title>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default Header;
