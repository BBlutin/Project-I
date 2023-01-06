import '../../styles/globals.css'
import Providers from '../Providers'
import { Header, Footer } from '../../components/frontend'
import ScrollToTop from '../../components/frontend/global/ScrollToTop'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html>
      <head />
      <body className='transition-all duration-500 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50'>
        <ScrollToTop />
        <Providers>
          <main id="main">
            <Header />
            <div className='font-body'>
              {children}
            </div>
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  )
}
