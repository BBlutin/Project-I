

function NewsletterForm() {
  return (
    <div className="container px-6 mb-12 xl:mb-16">
        <div className="flex flex-col justify-between rounded-lg shadow align-center bg-neutral-50 md:flex-row dark:bg-neutral-800">
            <div className="flex flex-col justify-center py-10 pl-10">
                <div className="z-10 flex items-center w-full bg-opacity-0 md:rounded-lg bg-grey-100 ">
                    <h1 className="text-3xl text-transparent uppercase font-heading bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400">
                        Rejoins le club
                    </h1>
                </div>
                <div className="mt-4 pr-10 lg:w-[32rem]">
                    <p className="block">
                        Inscris toi pour ne jamais manquer les sorties de produits, les actualités et les offres exclusives.
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 px-10 py-10 md:flex-row lg:justify-end md:py-14 xs:-mt-12 md:-mt-0">
                <div className="w-full md:w-56 lg:w-64 xl:w-96">
                    <input
                        type="text"
                        className="w-full h-12 p-4 text-sm leading-tight border rounded-md appearance-none border-neutral-200 text-neutral-900 dark:text-neutral-100 bg-neutral-400 dark:bg-neutral-600 bg-opacity-40 focus:outline-none focus:ring focus:ring-neutral-300 focus:ring-opacity-30 md:text-sm"
                        placeholder="Ton adresse mail"
                    />
                </div>
                <div className="flex-none xs:w-full md:w-auto">
                    <button
                        className="h-12 px-5 py-0 text-sm font-medium rounded-lg button xs:w-full text-neutral-50 bg-neutral-900 hover:bg-neutral-600 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-200 focus:ring-neutral-300 dark:focus:ring-neutral-500"
                    >
                        S'inscrire
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsletterForm