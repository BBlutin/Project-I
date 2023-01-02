import '../../styles/globals.css'
import Providers from '../Providers'
import { Header, Footer } from '../../components/frontend'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className='transition-all duration-500 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50'>
        <Providers>
          <Header />
          <main className='overflow-hidden font-body'>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
