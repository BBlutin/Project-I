import { previewData } from 'next/headers'
import { groq } from 'next-sanity'
import { client } from '../../lib/sanity.client'
import NewsletterForm from '../../components/frontend/global/NewsletterForm'
import ListLastNews from '../../components/frontend/news/ListLastNews'
import PreviewBanner from '../../components/frontend/global/preview/PreviewBanner'
import PreviewSuspense from '../../components/frontend/global/preview/PreviewSuspense'
import PreviewListLastNews from '../../components/frontend/global/preview/PreviewListLastNews'

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
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
        <PreviewListLastNews query={query} />
        <NewsletterForm />

      </PreviewSuspense>
    )
  }

  const posts = await client.fetch(query)

  return (
    <>
      <ListLastNews posts={posts}/>
      <NewsletterForm />
    </>
  )
}

export default HomePage