'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { useCallback } from 'react'
import urlFor from '../../../lib/urlFor'

type Props = {
  products: Product[];
}

function ListCarouselProducts({products}: Props) {

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className='container mb-24 xl:mb-32'>
      <div className='w-full'>
        <div className='flex flex-wrap items-center mx-2 mb-6'>
          <h2 className='block text-base font-medium md:text-xl font-heading'>
            Derniers produits
          </h2>
          <div className='block ml-auto'>
            <Link href={`/shop`}>
              <span className='text-sm font-medium cursor-pointer text-neutral-700 dark:text-neutral-300 hover:text-primary dark:hover:text-primary'>
                Voir tout
              </span>
            </Link>
          </div>
        </div>
        <div className='relative'>
          <div className="slider__viewport" ref={emblaRef}>
            <div className="flex -mx-1">
              {products.map((product, index) => { 
                
                let inStock = false

                product.sizes.map((size) => {
                    if(size.quantity > 0) {
                      inStock = true
                    }
                })

                return (
                  <div className="relative flex-none" key={index}>
                    <div className='block w-40 h-full px-2 rounded-lg group md:w-80 md:px-3'>
                      <div className='block w-full md:whitespace-nowrap'>
                        <div className='relative h-80'>
                          <Link href={`/products/${product.slug.current}`}>
                            <div className='w-full h-full transition-all duration-[400ms] ease-out rounded-md bg-neutral-200 dark:bg-neutral-700 group-hover:bg-neutral-700 dark:group-hover:bg-neutral-300'>
                              <Image
                                className="object-cover object-center"
                                src={urlFor(product.image[0]).url()}
                                alt={product.name}
                                fill
                              />
                            </div>
                          </Link>
                          {/* Quick add */}
                          {!inStock && <span className='absolute p-2 text-xs uppercase top-3 right-3 rounded-xl bg-primary/90'>Rupture</span>}
                        </div>
                        <Link href={`/products/${product.slug.current}`}>
                          <span className='block mt-2 text-sm font-medium'>
                            {product.name}
                          </span>
                          <span className='block mt-1 text-xs text-neutral-600 dark:text-neutral-400'>
                            {product.type}
                          </span>
                          { product.discount ? (
                            <span className='block mt-1 mb-4 text-xs text-grey-900 dark:text-white'>
                              <span className='text-green-700 dark:text-green-400'>{product.discount} €</span>
                              <span className='ml-1 line-through text-neutral-500'>{product.price} €</span>
                            </span>
                          ) : (
                            <span className='block mt-1 mb-4 text-xs text-neutral-900 dark:text-neutral-50'>
                              {product.price} €
                            </span>
                          )}
                        </Link>
                      </div>
                    </div>
                  </div>
              )})}
            </div>
          </div>
          <div className='absolute bottom-0 right-0 items-center justify-start hidden w-1/2 pl-1 mb-6 md:top-0 md:h-full md:w-auto md:mb-0 md:flex'>
            <button
              className='flex items-center justify-center w-16 h-16 -mt-10 -mr-6 rounded-full shadow-lg bg-neutral-50 focus:outline-none'
              onClick={scrollNext}
            >
              <ChevronRightIcon className='w-8 h-8 ml-1 text-neutral-900' />
            </button>
          </div>
          <div className='absolute bottom-0 left-0 items-center justify-end hidden w-1/2 pr-1 mb-6 md:top-0 md:h-full md:flex md:w-auto md:mb-0'>
            <button
              className='flex items-center justify-center w-16 h-16 -mt-10 -ml-6 rounded-full shadow-lg bg-neutral-50 focus:outline-none'
              onClick={scrollPrev}
            >
              <ChevronLeftIcon className='w-8 h-8 mr-1 text-neutral-900' />
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ListCarouselProducts