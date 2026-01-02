export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-68 relative bg-background ">
      {/* <img src="/logo.png" alt="Devik'Apps Logo" className="w-24 mb-6" /> */}

      {/* <div
  className="absolute top-[40vh] left-20 w-[165px] h-[360px]
  rounded-xl bg-[url('/assets/phone-template-1.png')] bg-center bg-cover 
  after:absolute after:bg-black after:-top-2  after:w-[150%] after:h-5 after:-left-5  after:blur-[7px]
  before:absolute before:bg-black before:-bottom-2  before:w-[150%] before:h-10 blur-[1px] before:-left-5  before:blur-[7px]
  "
  
></div> */}

      <div
        className="bg-[url('/assets/mobile-design.jpg')] bg-center bg-cover bg-white z-1 h-40 w-65 rounded-xl absolute rotate-7 top-[22vh] left-[8vw] 
                    after:absolute after:bg-black after:-top-5   after:w-[150%] after:h-5 after:left-0  after:blur-[7px]
                    overflow-hidden transition-all duration-500 brightness-105 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-105
                   "
      ></div>

      <div
        className="bg-[url('/assets/blog.jpg')] bg-center bg-cover bg-white z-1 h-32 w-47 rounded-xl absolute rotate-0 top-[50vh] left-[12vw]
                   overflow-hidden
                   transition-all duration-500
                   brightness-115
                   drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]
                   hover:scale-105
      "
      ></div>
      <div
        className="bg-[url('/assets/typo-design.jpg')] bg-center bg-cover z-1 h-22 w-37 rounded-xl absolute -rotate-10 top-[70vh] left-[24vw]
                   overflow-hidden
                   transition-all duration-500
                   brightness-115
                   drop-shadow-[0_0_17px_rgba(255,255,255,0.3)]
                   hover:scale-105
      
                  "
      ></div>
      <div className="w-20 h-50 blur-3xl top-[60vh] left-[17vw] bg-[#0025e0] absolute"></div>
      <div className="w-20 h-50 blur-3xl top-[40vh] left-[17vw] bg-[#0025e0b7] absolute"></div>
      <div className="w-5 aspect-square rounded-[7px] blur-[2px] top-[60vh] left-[27vw] bg-[#ffff] absolute"></div>

      {/* côté gauche */}
      <div
        className="bg-[url('/assets/portfolio-design.jpg')] bg-center bg-cover bg-white z-1 h-35 w-60 rounded-xl absolute -rotate-12 top-[20vh] right-[10vw] 
                    after:absolute after:bg-black after:-top-5   after:w-[150%] after:h-5 after:left-0  after:blur-[7px]
                    overflow-hidden transition-all duration-500 brightness-105 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-105
                   "
      ></div>
      <div
        className="bg-[url('/assets/mobile-design-2.jpg')] bg-center bg-cover bg-white z-1 h-30 w-50 rounded-xl absolute rotate-7 top-[45vh] right-[10vw] 
                    after:absolute after:bg-black after:-top-5   after:w-[150%] after:h-5 after:left-0  after:blur-[7px]
                    overflow-hidden transition-all duration-500 brightness-105 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-105
                   "
      ></div>

      <div
        className="bg-[url('/assets/dashboard-template.jpg')] bg-center bg-cover bg-white z-1 h-28 w-42 rounded-xl absolute rotate-0 top-[65vh] right-[20vw]
                   overflow-hidden
                   transition-all duration-500
                   brightness-115
                   drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]
                   hover:scale-105
      "
      ></div>
      <div
        className="bg-[url('/assets/mobile-design-3.jpg')] bg-center bg-cover z-1 h-18 w-32 rounded-xl absolute -rotate-10 top-[80vh] right-[32vw]
                   overflow-hidden
                   transition-all duration-500
                   brightness-50
                   drop-shadow-[0_0_17px_rgba(255,255,255,0.3)]
                   hover:scale-105
      
                  "
      ></div>
      <div className="w-20 h-50 blur-3xl top-[60vh] right-[17vw] bg-[#0025e0] absolute"></div>
      <div className="w-20 h-50 blur-3xl top-[40vh] right-[17vw] bg-[#0025e0b7] absolute"></div>
      <div className="w-5 aspect-square rounded-[7px] blur-[2px] top-[60vh] right-[27vw] bg-[#ffff] absolute"></div>

      {/* ----------------- */}




      <div className="z-10 flex flex-col items-center max-md:bg-white/70 max-md:dark:bg-black/50 max-md:backdrop-blur-xl max-md:p-8 max-md:rounded-3xl max-md:mx-4 max-md:shadow-2xl max-md:border max-md:border-white/20">
        <h1 className="text-5xl text-black dark:text-white font-bold mb-4">
          Donnez vie à vos <span className="text-[#0af395]">idées</span> digitales
        </h1>
        <p className="text-black dark:text-white max-w-2xl mb-8 font-medium">
          Devik’Apps conçoit des sites web, applications et logiciels sur mesure
          pour propulser votre entreprise dans le monde numérique.
        </p>
        <div className="flex items-center justify-center gap-10 max-md:flex-col w-full">
          <a
            href="/"
            className="bg-[#0af395] hover:bg-[rgb(62,255,178)] hover:shadow-lg shadow-sm duration-200 text-black font-semibold px-6 py-4 rounded-xl transition-all w-full md:w-auto"
          >
            Discutons de votre projet
          </a>
          <a
            href="#services"
            className="bg-white/60 dark:bg-[#36363687] backdrop-blur-md border-2 border-[#0af395] dark:border-[#ffffff44] text-black dark:text-white hover:bg-gray-50 dark:hover:bg-[rgb(53,53,53)] duration-200 font-semibold px-6 py-4 rounded-xl transition-all w-full md:w-auto"
          >
            Découvrir nos services
          </a>
        </div>
      </div>
    </section>
  );
}
