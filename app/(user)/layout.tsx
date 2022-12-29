import Header from '../../components/frontend/global/Header'
import '../../styles/globals.css'
import Providers from '../Providers'

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
        </Providers>
      </body>
    </html>
  )
}
