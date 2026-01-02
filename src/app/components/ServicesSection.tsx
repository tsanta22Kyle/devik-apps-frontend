import { FiCode, FiSmartphone, FiMonitor, FiLayout, FiTrendingUp, FiServer } from "react-icons/fi";

const services = [
    {
        category: "Développement",
        items: [
            {
                title: "Sites Web Sur Mesure",
                description: "Des sites vitrines et e-commerce ultra-rapides, conçus pour convertir et séduire.",
                icon: <FiCode className="w-6 h-6" />,
            },
            {
                title: "Applications Web",
                description: "Des plateformes SaaS et outils métiers robustes pour digitaliser vos processus.",
                icon: <FiMonitor className="w-6 h-6" />,
            },
        ],
    },
    {
        category: "Mobile",
        items: [
            {
                title: "Applications iOS & Android",
                description: "Des expériences mobiles fluides et natives pour accompagner vos utilisateurs partout.",
                icon: <FiSmartphone className="w-6 h-6" />,
            },
        ],
    },
    {
        category: "Design & Stratégie",
        items: [
            {
                title: "UI/UX Design",
                description: "Des interfaces modernes et intuitives centrées sur l’expérience utilisateur.",
                icon: <FiLayout className="w-6 h-6" />,
            },
            {
                title: "Logiciels Métiers",
                description: "Solutions logicielles complètes pour optimiser la gestion de votre entreprise.",
                icon: <FiServer className="w-6 h-6" />,
            },
            {
                title: "SEO & Performance",
                description: "Optimisation technique pour propulser votre site en haut des résultats de recherche.",
                icon: <FiTrendingUp className="w-6 h-6" />,
            },
        ],
    },
];

export default function ServicesSection() {
    return (
        <section id="services" className="py-24 px-6 md:px-20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-[#0af395]/5 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-[#0025e0]/5 blur-[120px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Nos <span className="text-[#0af395]">Expertises</span>
                    </h2>
                    <p className="text-lg opacity-70 max-w-2xl">
                        Nous transformons vos défis en opportunités digitales grâce à une approche sur mesure et des technologies de pointe.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((category, catIndex) => (
                        category.items.map((service, index) => (
                            <div
                                key={`${catIndex}-${index}`}
                                className="group relative bg-white dark:bg-[#111] border border-black/5 dark:border-white/5 rounded-2xl p-8 overflow-hidden hover:border-[#0af395]/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                            >
                                {/* Light effect top-right */}
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#0af395] blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

                                {/* Icon */}
                                <div className="w-12 h-12 bg-[#0af395]/10 rounded-xl flex items-center justify-center text-[#0af395] mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold mb-3 group-hover:text-[#0af395] transition-colors">{service.title}</h3>
                                <p className="text-sm opacity-70 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        ))
                    ))}
                </div>
            </div>
        </section>
    );
}
