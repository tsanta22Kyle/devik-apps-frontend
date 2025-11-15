import { ThemeProvider } from "next-themes";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import "./globals.css";
import {Exo_2} from "next/font/google"
import ToggleButton from "./components/ToggleThemeButton";

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
    <html lang="fr" suppressHydrationWarning >
      <body className={` ${exo2.className}  `}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Navbar />
        {children}
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
