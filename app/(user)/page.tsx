import React from 'react'
import NewsletterForm from '../../components/frontend/global/NewsletterForm'
import ListLastNews from '../../components/frontend/news/ListLastNews'

function HomePage() {
  return (
    <>
      <ListLastNews />
      <NewsletterForm />
    </>
  )
}

export default HomePage