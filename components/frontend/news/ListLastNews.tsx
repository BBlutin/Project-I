import Link from "next/link"
import Image from "next/image"
import urlFor from "../../../lib/urlFor";

type Props = {
    posts: Post[];
}

function ListLastNews({posts}: Props) {
  return (
    <div className="mb-24 xl:mb-32">
        <div className="container pt-8">
            <div className="flex flex-wrap w-full mx-auto">
                <div className="md:px-2 mb-4 w-full h-[34rem] md:w-2/3">
                    <article className="cursor-pointer articleCard group">
                        {/* Background */}
                        <Link href='/' className="absolute inset-0 z-0">
                            <div className="cardBg">
                                <Image
                                    className="object-cover object-center"
                                    src={urlFor(posts[0]?.mainImage).url()}
                                    alt={posts[0]?.title}
                                    fill
                                />
                            </div>
                        </Link>
                        {/* Title */}
                        <div className="absolute top-0 z-10 max-w-4xl p-6 pointer-events-none xl:pr-12">
                            <h3 className="block text-sm font-medium text-neutral-50 xl:text-base">
                                {posts[0]?.subTitle}
                            </h3>
                            <h1 className="block mt-1 text-xl font-bold uppercase text-neutral-50 xl:text-2xl font-heading">
                                {posts[0]?.title}
                            </h1>
                        </div>
                        {/* CTA */}
                        <div className="absolute z-10 p-6 pb-8">
                            <Link 
                                className="px-5 py-3 text-sm font-medium rounded-lg button bg-neutral-50 text-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-300 focus:ring-neutral-500"
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
                            <div className="relative object-cover object-center w-full h-full bg-neutral-100 dark:bg-neutral-700">
                                {/* Image */}
                            </div>
                        </Link>
                        {/* Title */}
                        <div className="absolute top-0 z-10 max-w-4xl p-6 pointer-events-none xl:pr-12">
                            <h3 className="block text-sm font-semibold md:text-base xl:text-lg">
                            </h3>
                            <h1 className="block text-lg uppercase md:text-xl xl:text-2xl font-title"></h1>
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
                            <div className="relative object-cover object-center w-full h-full bg-neutral-100 dark:bg-neutral-700">
                                {/* Image */}
                            </div>
                        </Link>
                        {/* Title */}
                        <div className="absolute top-0 z-10 max-w-4xl p-6 pointer-events-none xl:pr-12">
                            <h3 className="block text-sm font-semibold md:text-base xl:text-lg"></h3>
                            <h1 className="block text-lg uppercase md:text-xl xl:text-2xl font-title"></h1>
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
                            <div className="relative object-cover object-center w-full h-full bg-neutral-100 dark:bg-neutral-700">
                                {/* Image */}
                            </div>
                        </Link>
                        {/* Title */}
                        <div className="absolute top-0 z-10 max-w-4xl p-6 pointer-events-none xl:pr-12">
                            <h3 className="block text-sm font-semibold md:text-base xl:text-lg"></h3>
                            <h1 className="block text-lg uppercase md:text-xl xl:text-2xl font-title"></h1>
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