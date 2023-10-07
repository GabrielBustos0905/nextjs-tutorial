import Navbar from "@/components/Navbar";
import {Roboto} from "next/font/google";
import "./global.css"

export const metadata = {
  title: 'My Next App',
  description: 'Esta es la pagina principal de la Tienda',
  keywords: 'tienda, online, ecommerce'
};

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  styles: ["italic", "normal"],
  subsets: ["latin"]
});

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
