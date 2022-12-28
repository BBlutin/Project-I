

function NewsletterForm() {
  return (
    <div className="mb-12 xl:mb-16 max-w-7xl mx-auto px-6">
        <div className="flex justify-between align-center bg-neutral-50 shadow rounded-lg flex-col md:flex-row dark:bg-neutral-800">
            <div className="flex flex-col justify-center py-10 pl-10">
                <div className="w-full flex items-center z-10 bg-opacity-0 md:rounded-lg bg-grey-100 ">
                    <h1 className="text-3xl font-heading uppercase text-neutral-800 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400">
                        Rejoins le club
                    </h1>
                </div>
                <div className="mt-4 pr-10 lg:w-[32rem]">
                    <p className="block">
                        Inscris toi pour ne jamais manquer les sorties de produits, les actualités et les offres exclusives.
                    </p>
                </div>
            </div>
            <div className="gap-4 flex items-center flex-col justify-center md:flex-row lg:justify-end px-10 py-10 md:py-14 xs:-mt-12 md:-mt-0">
                <div className="w-full md:w-56 lg:w-64 xl:w-96">
                    <input
                        type="text"
                        className="h-12 border p-4 w-full border-neutral-200 text-neutral-900 dark:text-neutral-100 rounded-md bg-neutral-400 dark:bg-neutral-600 bg-opacity-40 appearance-none leading-tight focus:outline-none focus:ring focus:ring-neutral-300 focus:ring-opacity-30 md:text-sm text-sm"
                        placeholder="Ton adresse mail"
                    />
                </div>
                <div className="flex-none xs:w-full md:w-auto">
                    <button
                        className="button h-12 py-0 xs:w-full text-neutral-50 bg-neutral-900 hover:bg-neutral-600 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-200 focus:ring-neutral-300 dark:focus:ring-neutral-500 px-5 rounded-lg text-sm font-medium"
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