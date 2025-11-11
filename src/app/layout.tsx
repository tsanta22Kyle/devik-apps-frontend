import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import "./globals.css";
import {Exo_2} from "next/font/google"

const exo2 = Exo_2({
  variable : "--font-exo-2"
})


export const metadata = {
  title: "Devik’Apps - Agence Digitale à Madagascar",
  description: "Développement de sites web, applications et logiciels sur mesure.",
  icons: "/assets/1.png"
  
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={` ${exo2.className} bg-black text-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
