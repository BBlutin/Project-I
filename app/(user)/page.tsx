import { groq } from 'next-sanity'
import { client } from '../../lib/sanity.client'
import { NewsletterForm, ListLastNews, ListCarouselProducts } from '../../components/frontend'

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