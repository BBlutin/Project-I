import { previewData } from 'next/headers'
import { groq } from 'next-sanity'
import { client } from '../../lib/sanity.client'
import NewsletterForm from '../../components/frontend/global/NewsletterForm'
import ListLastNews from '../../components/frontend/news/ListLastNews'
import PreviewBanner from '../../components/frontend/global/preview/PreviewBanner'
import PreviewSuspense from '../../components/frontend/global/preview/PreviewSuspense'
import PreviewListLastNews from '../../components/frontend/global/preview/PreviewListLastNews'
import ListCarouselProducts from '../../components/frontend/products/ListCarouselProducts'

const postQuery = groq`
  *[_type=='post'] {
    ...
  } | order(_createdAt desc)
`

const productQuery = groq`
  *[_type=='product'] {
    ...,
    variants[]->,
    categories[]->,
    sizes[]
  } | order(_createdAt desc)
`

const query = groq`
  {
    'post': *[_type=='post'] | order(_createdAt desc) {...},
    'product': *[_type=='product'] | order(_createdAt desc) {
      ...,
      variants[]->,
      categories[]->,
      sizes[]
    }
  }
`

async function HomePage() {

  if (previewData()) {
    return (
      <PreviewSuspense fallback={(
        <div role="status">
            <p className='text-lg text-center animate-pulse text-amber-600'>
              Chargement des données de prévisualisation
            </p>
        </div>
      )}>
        <PreviewBanner />
        <PreviewListLastNews query={postQuery} />
        <NewsletterForm />

      </PreviewSuspense>
    )
  }

  const result = await client.fetch(query)

  return (
    <div className='pt-24'>
      <ListLastNews posts={result.post}/>
      <ListCarouselProducts products={result.product} />
      <NewsletterForm />
    </div>
  )
}

export default HomePage