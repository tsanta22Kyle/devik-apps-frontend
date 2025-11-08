import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-68 relative bg-linear-to-t from-black to-black">
      {/* <img src="/logo.png" alt="Devik'Apps Logo" className="w-24 mb-6" /> */}

      <div className="absolute top-0 left-0 bg-[linear-gradient(#000000,#000000 , url('/assets/hero_bg.jpg'))] bg-center bg-cover w-full h-full"></div>

      <h1 className="text-5xl font-bold mb-4 z-1">
        Donnez vie à vos <span className="text-[#0af395]">idées</span> digitales
      </h1>
      <p className="text-[#ffffff82] max-w-2xl mb-8 z-1">
        Devik’Apps conçoit des sites web, applications et logiciels sur mesure
        pour propulser votre entreprise dans le monde numérique.
      </p>
      <div className="flex items-center justify-center gap-10">

      <a
        href="/contact"
        className="bg-[#0af395] z-1 hover:bg-[rgb(62,255,178)] hover:shadow-sm  shadow-[rgb(62,255,178)] duration-200 text-black font-semibold px-6 py-4 rounded-xl transition-all"
      >
        Discutons de votre projet
      </a>
      <a
        href="/contact"
        className="bg-[#36363687] border border-[#ffffff44] text-white z-1 hover:bg-[rgb(53,53,53)] hover:shadow-sm   duration-200  font-semibold px-6 py-4 rounded-xl transition-all"
        >
        Découvrir nos services
      </a>
        </div>
    </section>
  );
}
