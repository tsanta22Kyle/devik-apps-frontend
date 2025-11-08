export default function Contact(){
    return(
        <section id="contact" className="relative py-20 bg-[#0a0a0a] text-white flex flex-col items-center">
  <h2 className="text-4xl font-bold mb-4 text-center">Travaillons ensemble 🤝</h2>
  <p className="text-gray-400 mb-12 max-w-2xl text-center">
    Vous avez une idée, un projet ou besoin d’un site web sur mesure ?  
    Parlons-en et voyons comment Devik’Apps peut donner vie à votre vision.
  </p>

  <div className="flex flex-col md:flex-row gap-10 w-full max-w-5xl px-6">
    {/* Bloc gauche - infos contact */}
    <div className="flex-1 space-y-6">
      <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-[#00FFAE]/40 transition-all">
        <h3 className="text-xl font-semibold mb-2">📧 Email</h3>
        <p className="text-gray-300">contact@devikapps.com</p>
      </div>

      <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-[#00FFAE]/40 transition-all">
        <h3 className="text-xl font-semibold mb-2">💬 WhatsApp</h3>
        <a href="https://wa.me/261XXXXXXXXX" className="text-[#00FFAE] hover:underline">
          +261 37 63 568 92
        </a>
      </div>

      <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-[#00FFAE]/40 transition-all">
        <h3 className="text-xl font-semibold mb-2">🌍 Localisation</h3>
        <p className="text-gray-300">Antananarivo, Madagascar</p>
      </div>
    </div>

    {/* Bloc droit - formulaire */}
    <form className="flex-1 bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 space-y-6">
      <div>
        <label className="block mb-2 text-sm font-medium">Nom complet</label>
        <input type="text" placeholder="Ex: Andry Rakoto" className="w-full p-3 rounded-md bg-black/30 border border-white/10 focus:border-[#00FFAE] outline-none"/>
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium">Adresse e-mail</label>
        <input type="email" placeholder="Ex: contact@email.com" className="w-full p-3 rounded-md bg-black/30 border border-white/10 focus:border-[#00FFAE] outline-none"/>
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium">Message</label>
        <textarea placeholder="Parlez-nous de votre projet..."  className="w-full p-3 rounded-md bg-black/30 border border-white/10 focus:border-[#00FFAE] outline-none"></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-[#00FFAE] text-black py-3 rounded-lg font-semibold hover:scale-105 transition-transform"
      >
        Envoyer le message
      </button>
    </form>
  </div>
</section>

    )
}