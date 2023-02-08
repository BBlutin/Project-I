import "../../styles/globals.css";
import "../../styles/snipcart.css";
import "../../styles/cart.scss";
import Providers from "../Providers";
import { Header, Footer } from "../../components/frontend";
import ScrollToTop from "../../components/frontend/global/ScrollToTop";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr-FR">
      <head />
      <body className="bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50">
        <ScrollToTop />
        <Providers>
          <main id="main">
            <Header />
            <div className="font-body">{children}</div>
            <Footer />
          </main>
          <div className="cart-overlay"></div>
        </Providers>
        <script src="http://localhost:3000/lib/snipcart.js" async />
        <div
          id="snipcart"
          data-api-key={process.env.NEXT_PUBLIC_SNIPCART_API_KEY}
          data-config-modal-style="side"
          data-config-currency="eur"
          hidden
        ></div>
      </body>
    </html>
  );
}
