import Link from "next/link"
import Image from "next/image"

function ListLastNews() {
  return (
    <div className="mb-12 xl:mb-16">
        <div className="max-w-7xl mx-auto px-4 pt-8 xl:pt-12">
            <div className="flex flex-wrap w-full mx-auto">
                <div className="md:px-2 mb-4 w-full h-[34rem] md:w-2/3">
                    <article className="articleCard">
                        {/* Background */}
                        <Link href='/' className="absolute inset-0 z-0">
                            <div className="w-full h-full object-cover object-center relative bg-neutral-100 dark:bg-neutral-700">
                                {/* Image */}
                            </div>
                        </Link>
                        {/* Title */}
                        <div className="absolute z-10 p-6 xl:pr-12 max-w-4xl top-0 pointer-events-none">
                            <h3 className="block text-sm xl:text-base font-medium">
                                BLK vous présente
                            </h3>
                            <h1 className="block text-lg md:text-xl xl:text-2xl font-heading uppercase font-bold mt-1">
                                Notre roster opentour 2023
                            </h1>
                        </div>
                        {/* CTA */}
                        <div className="absolute z-10 p-6 pb-8">
                            <Link 
                                className="button bg-neutral-50 font-medium text-sm text-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-300 focus:ring-neutral-500 px-5 rounded-lg py-3"
                                href='/'
                            >
                                En savoir plus
                            </Link>
                        </div>
                    </article>
                </div>
                <div className="md:px-2 mb-4 w-full h-[34rem] md:w-1/3">
                    <article className="articleCard">
                        {/* Background */}
                        <Link href='/' className="absolute inset-0 z-0">
                            <div className="w-full h-full object-cover object-center relative bg-neutral-100 dark:bg-neutral-700">
                                {/* Image */}
                            </div>
                        </Link>
                        {/* Title */}
                        <div className="absolute z-10 p-6 xl:pr-12 max-w-4xl top-0 pointer-events-none">
                            <h3 className="block text-sm md:text-base xl:text-lg font-semibold">
                            </h3>
                            <h1 className="block text-lg md:text-xl xl:text-2xl font-title uppercase"></h1>
                        </div>
                        {/* CTA */}
                        <div className="absolute z-10 p-6">
                            {/* Button */}
                        </div>
                    </article>
                </div>
                <div className="md:px-2 mb-4 w-full h-[34rem] md:w-1/3">
                    <article className="articleCard">
                        {/* Background */}
                        <Link href='/' className="absolute inset-0 z-0">
                            <div className="w-full h-full object-cover object-center relative bg-neutral-100 dark:bg-neutral-700">
                                {/* Image */}
                            </div>
                        </Link>
                        {/* Title */}
                        <div className="absolute z-10 p-6 xl:pr-12 max-w-4xl top-0 pointer-events-none">
                            <h3 className="block text-sm md:text-base xl:text-lg font-semibold"></h3>
                            <h1 className="block text-lg md:text-xl xl:text-2xl font-title uppercase"></h1>
                        </div>
                        {/* CTA */}
                        <div className="absolute z-10 p-6">
                            {/* Button */}
                        </div>
                    </article>
                </div>
                <div className="md:px-2 mb-4 w-full h-[34rem] md:w-2/3">
                    <article className="articleCard">
                        {/* Background */}
                        <Link href='/' className="absolute inset-0 z-0">
                            <div className="w-full h-full object-cover object-center relative bg-neutral-100 dark:bg-neutral-700">
                                {/* Image */}
                            </div>
                        </Link>
                        {/* Title */}
                        <div className="absolute z-10 p-6 xl:pr-12 max-w-4xl top-0 pointer-events-none">
                            <h3 className="block text-sm md:text-base xl:text-lg font-semibold"></h3>
                            <h1 className="block text-lg md:text-xl xl:text-2xl font-title uppercase"></h1>
                        </div>
                        {/* CTA */}
                        <div className="absolute z-10 p-6">
                            {/* Button */}
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ListLastNews