import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
export const dynamic = "force-static";

export default function Home() {
  return (
    <main className="  min-h-screen">
      <HeroSection />
      <ServicesSection />
      <section id="templates" className="py-20  ">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Choisissez votre style</h2>
          <p className="dark:text-gray-400 mb-12">
            Inspirez-vous de modèles gratuits que nous personnalisons selon
            votre identité.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Portfolio créatif",
                img: "/assets/creative_portfolio.jpg",
                url: "https://templatedemo1.com",
              },
              {
                name: "Site vitrine professionnel",
                img: "/assets/pro_website.jpg",
                url: "https://templatedemo2.com",
              },
              {
                name: "Landing startup",
                img: "/assets/startup_website.jpg",
                url: "https://templatedemo3.com",
              },
              {
                name: "Agence moderne",
                img: "/assets/agency.jpg",
                url: "https://templatedemo4.com",
              },
              {
                name: "Blog personnel",
                img: "/assets/blog.jpg",
                url: "https://templatedemo5.com",
              },
              {
                name: "E-commerce minimal",
                img: "/assets/shop.jpg",
                url: "https://templatedemo6.com",
              },
            ].map((tpl, i) => (
              <div
                key={i}
                className="relative group rounded-2xl overflow-hidden border border-white/10 hover:border-[#00FFAE]/40 transition-all"
              >
                <img
                  src={tpl.img}
                  alt={tpl.name}
                  className="w-full h-60 object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all flex flex-col items-center justify-center">
                  <h3 className="text-lg font-semibold mb-2">{tpl.name}</h3>
                  <a
                    href={"#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#00FFAE] text-black px-4 py-2 rounded-lg font-medium hover:scale-105 transition-transform"
                  >
                    Voir le template
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact></Contact>
    </main>
  );
}
