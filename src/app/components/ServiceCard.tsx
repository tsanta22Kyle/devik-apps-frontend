"use client";
import { useState } from "react";
import { BiMobile } from "react-icons/bi";
import { CiGlobe } from "react-icons/ci";
import { FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { FaBoltLightning } from "react-icons/fa6";
import { FiCheckCircle, FiCode, FiLayers, FiShoppingCart, FiTarget } from "react-icons/fi";
import { GoArrowRight } from "react-icons/go";
import { MdOutlineDashboard } from "react-icons/md";
import { RiComputerFill } from "react-icons/ri";

interface ServiceCardProps {
  title: string;
  variant?: "web" | "mobile" | "software";
}

import { 
  TbSearch, 
  TbPencilMinus, 
  TbDeviceDesktopCode, 
  TbCheckbox, 
  TbSend, 
  TbHeadphones 
} from "react-icons/tb";

function CustomSoftwareSteps() {

  const steps = [
    {
      title: "Analyse & Planification",
      desc: "Nous identifions vos besoins et définissons une vision claire du logiciel.",
      icon: <TbSearch className="text-3xl text-cyan-400" />
    },
    {
      title: "Conception UX/UI",
      desc: "Création de maquettes modernes et intuitives pour une expérience optimale.",
      icon: <TbPencilMinus className="text-3xl text-cyan-400" />
    },
    {
      title: "Développement Sur Mesure",
      desc: "Un code propre, sécurisé et évolutif adapté à votre activité.",
      icon: <TbDeviceDesktopCode className="text-3xl text-cyan-400" />
    },
    {
      title: "Tests & Validation",
      desc: "Chaque fonctionnalité est testée minutieusement pour garantir la qualité.",
      icon: <TbCheckbox className="text-3xl text-cyan-400" />
    },
    {
      title: "Déploiement & Intégration",
      desc: "Mise en production fluide et accompagnement de vos équipes.",
      icon: <TbSend className="text-3xl text-cyan-400" />
    },
    {
      title: "Support & Évolution",
      desc: "Suivi continu, mises à jour et nouvelles fonctionnalités selon vos besoins.",
      icon: <TbHeadphones className="text-3xl text-cyan-400" />
    }
  ];

  return (
       <section className="w-full py-20 ">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Notre Process <span className="text-primary">en 4 étapes</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16">
          Une méthodologie simple, focus et optimisée pour livrer des projets solides.
        </p>

        {/* Steps container */}
        <div className="relative">
          {/* Line */}
          {/* <div className="absolute top-1/2 left-0 w-full h-0.5  -z-10" /> */}

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full  border border-primary flex items-center justify-center">
                <FiTarget className="text-3xl text-primary" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Planning</h3>
              <p className="text-gray-500 mt-2 text-sm">
                Analyse de ton besoin + cadrage du projet pour aligner les objectifs.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full  border border-primary flex items-center justify-center">
                <FiLayers className="text-3xl text-primary" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Design</h3>
              <p className="text-gray-500 mt-2 text-sm">
                UI/UX moderne, fluide et adaptée à ton identité visuelle.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full  border border-primary flex items-center justify-center">
                <FiCode className="text-3xl text-primary" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Développement</h3>
              <p className="text-gray-500 mt-2 text-sm">
                Implémentation propre, scalable et optimisée pour la performance.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full  border border-primary flex items-center justify-center">
                <FiCheckCircle className="text-3xl text-primary" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Livraison</h3>
              <p className="text-gray-500 mt-2 text-sm">
                Tests, optimisation et déploiement final. Prêt à être utilisé.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




export default function ServiceCard({
  title,
  variant = "web",
}: ServiceCardProps) {
  const [isDropped, setIsDropped] = useState(false);

  switch (variant) {
    case "web":
      return (
        <div
          onClick={() => {
            setIsDropped(!isDropped);
          }}
          className={` ${isDropped ? "opacity-100": "opacity-50"} border-b  hover:opacity-100 max-md:opacity-100 gap-12 hover:translate-y-2 border-[black] dark:border-[#ffffff82] py-6  flex flex-col items-center transition`}
        >
          <div className="flex items-center w-full justify-between">
            <h3 className="text-3xl  mb-2">{title}</h3>
            <button
              className={` ${
                isDropped ? "rotate-90" : "rotate-0"
              } transition-all duration-400 ease-in-out border rounded-full cursor-pointer p-2`}
            >
              <GoArrowRight size={30} />
            </button>
          </div>
          <div
            className={`w-full flex max-lg:flex-col justify-around transition-all duration-500 ease-in-out  ${
              isDropped
                ? "h-50 max-md:h-[650px]  max-lg:h-[1000px]  py-5"
                : "h-0 opacity-0 -z-10"
            } `}
          >
            <div className="flex gap-3 border border-[#00000012] shadow-sm not-dark:hover:shadow-2xl  dark:border-[#ffffff52] p-8 relative rounded-md flex-col lg:w-[30%] ">
              <div className=" absolute -top-8 left-1/2 -translate-x-1/2 text-4xl mb-4 bg-primary flex items-center justify-center  p-3 rounded-md">
                {" "}
                <CiGlobe className="not-dark:text-white" />{" "}
              </div>
              <p className="text-2xl">site vitrine</p>
              <p className="w-">
                On crée des sites rapides, responsives et SEO-friendly adaptés à
                votre identité.
              </p>
            </div>
            <div className="flex gap-3 border border-[#00000012] shadow-sm not-dark:hover:shadow-2xl  dark:border-[#ffffff52] p-8 relative rounded-md flex-col  lg:w-[30%] ">
              <div className=" absolute -top-8 left-1/2 -translate-x-1/2 text-4xl mb-4 bg-primary flex items-center justify-center  p-3 rounded-md">
                {" "}
                <FiShoppingCart className="not-dark:text-white" />{" "}
              </div>
              <p className="text-2xl">e-commerce</p>
              <p className="w-">
                Boostez votre activité en ligne grâce à l'e-commerce.
              </p>
            </div>
            <div className="flex gap-3 border border-[#00000012] shadow-sm not-dark:hover:shadow-2xl  dark:border-[#ffffff52] p-8 relative rounded-md flex-col lg:w-[30%] ">
              <div className=" absolute -top-8 left-1/2 -translate-x-1/2 text-4xl mb-4 bg-primary flex items-center justify-center  p-3 rounded-md">
                {" "}
                <MdOutlineDashboard className="not-dark:text-white" />{" "}
              </div>
              <p className="text-2xl">Dashboard admin</p>
              <p className="w-">
                Accélérez votre productivité dans votre domaine grâce une
                gestion centralisée.
              </p>
            </div>
          </div>
        </div>
      );
    case "mobile":
      return (
        <div
          onClick={() => {
            setIsDropped(!isDropped);
          }}
          className={` border-b ${isDropped ? "opacity-100": "opacity-50"} hover:opacity-100 max-md:opacity-100 gap-5 hover:translate-y-2 border-[black] dark:border-[#ffffff82] py-6  flex flex-col items-center transition`}
        >
          <div className="flex items-center w-full justify-between">
            <h3 className="text-3xl  mb-2">{title}</h3>
            <button
              className={` ${
                isDropped ? "rotate-90" : "rotate-0"
              } transition-all duration-400 ease-in-out border rounded-full cursor-pointer p-2`}
            >
              <GoArrowRight size={30} />
            </button>
          </div>
          <div
            className={`w-full flex transition-all duration-500 ease-in-out  ${
              isDropped
                ? "h-50  py-5"
                : "h-0 opacity-0 -z-10"
            } `}
          >
            {/* Icon / Image */}
            <div
              className="w-16 h-16 flex items-center justify-center transition-all duration-300"
            >
              <FaBoltLightning size={30} />
            </div>

            {/* Text Content */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold  tracking-wide">
                {/* {title} */}
                Apps Rapides, Stables & Sécurisées
              </h3>
              <p className="text-gray-400 text-sm mt-1 max-w-[600px] leading-relaxed">
                {/* {description} */}
                Développées avec React Native , nos applications garantissent
                des performances élevées et une expérience utilisateur optimale
              </p>

              {/* CTA */}
              <button className="text-primary tracking-wide">
                {/* {cta} */}
                En savoir plus
                {/* <span className="text-lg group-hover:translate-x-1 transition-all">→</span> */}
              </button>
            </div>
          </div>
        </div>
      );
    case "software":
      return (
        <div
          onClick={() => {
            setIsDropped(!isDropped);
          }}
          className={`${isDropped ? "opacity-100": "opacity-50"} border-b  hover:opacity-100 max-md:opacity-100 gap-5 hover:translate-y-2 border-[black] dark:border-[#ffffff82] py-6  flex flex-col items-center transition`}
        >
          <div className="flex items-center w-full justify-between">
            <h3 className="text-3xl  mb-2">{title}</h3>
            <button
              className={` ${
                isDropped ? "rotate-90" : "rotate-0"
              } transition-all duration-400 ease-in-out border rounded-full cursor-pointer p-2`}
            >
              <GoArrowRight size={30} />
            </button>
          </div>
          <div
            className={`w-full flex max-lg:flex-col justify-around transition-all duration-500 ease-in-out  ${
              isDropped
                ? "h-[460px] max-md:h-[1200px]  max-lg:h-[1000px]  py-5"
                : "h-0 opacity-0 -z-10"
            } `}
          >
            <CustomSoftwareSteps></CustomSoftwareSteps>
          </div>
        </div>
      );
   
  }
}
