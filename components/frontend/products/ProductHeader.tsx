import { TruckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProductHeader = () => {
  return (
    <div className="container px-6 mt-16 md:mt-24">
      <div className="mb-4 overflow-hidden duration-500 rounded-md transition-color dark:shadow-sm bg-neutral-200 dark:bg-neutral-800 md:mt-6">
        <div className="relative flex flex-col items-center justify-center min-w-full px-4 py-4 space-y-2 lg:flex-row lg:space-y-0 lg:px-6">
          <div className="flex flex-row items-center justify-center flex-1 space-x-4">
            <span className="flex items-center text-xs font-medium text-center md:text-sm md:text-left w-fit">
              <TruckIcon className="mr-4 w-7 h-7" />
              Livraison offerte pour tout commande supérieure à 100€
            </span>
          </div>
        </div>
      </div>
      <div className="hidden px-6 mb-4 md:flex">
        <ul className="flex justify-start w-full pl-2 overflow-x-auto md:justify-center md:overflow-x-visible md:pl-0 scrollbar-hide">
          <li className="pr-8 sm:pr-6 lg:pr-12">
            <Link
              href="/"
              className="relative text-xs font-medium w-min whitespace-nowrap text-neutral-900 dark:text-neutral-100 hover:text-primary dark:hover:text-primary"
            >
              Maillots
            </Link>
          </li>
          <li className="pr-8 sm:pr-6 lg:pr-12">
            <Link
              href="/"
              className="relative text-xs font-medium w-min whitespace-nowrap text-neutral-900 dark:text-neutral-100 hover:text-primary dark:hover:text-primary"
            >
              Vêtements
            </Link>
          </li>
          <li className="pr-8 sm:pr-6 lg:pr-12">
            <Link
              href="/"
              className="relative text-xs font-medium w-min whitespace-nowrap text-neutral-900 dark:text-neutral-100 hover:text-primary dark:hover:text-primary"
            >
              Accessoires
            </Link>
          </li>
          <li className="">
            <Link
              href="/"
              className="relative text-xs font-medium w-min whitespace-nowrap text-neutral-900 dark:text-neutral-100 hover:text-primary dark:hover:text-primary"
            >
              Collaborations
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductHeader;
