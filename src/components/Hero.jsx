import React from "react";
import imagemHero from "../assets/imagem.png";
import Countdown from "./Countdown";

const Hero = () => {
  return (
    <>
      <section
        id="evento"
        className="relative pt-12 pb-20 bg-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div style={{ opacity: 1, transform: "none" }}>
            <h1 className="text-4xl md:text-7xl font-bold text-[#1A1A1A] leading-tight mb-6 uppercase tracking-tighter">
              Feirão <br />
              <span className="text-[#EC0000]">Limpa Pátio</span> <br />
              <span className="text-2xl md:text-4xl block mt-2 text-gray-500 normal-case font-medium tracking-normal">
                É pra vender tudo.
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
              Participe do maior feirão da região. Oportunidade única para
              conquistar seu veículo com as melhores condições do mercado.
            </p>
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3 text-gray-700 font-bold">
                <div className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center text-[#EC0000]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <span>+ DE 400 VEÍCULOS EM EXPOSIÇÃO</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 font-bold">
                <div className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center text-[#EC0000]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <span>AS MELHORES TAXAS DE FINANCIAMENTO</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 font-bold">
                <div className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center text-[#EC0000]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <span>APROVAÇÃO FACILITADA</span>
              </div>
            </div>
            <Countdown />
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#cadastro"
                className="bg-[#EC0000] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#CC0000] transition-all flex items-center justify-center gap-2 group"
              >
                <span className="hidden md:inline">Quero </span>Participar
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400 font-medium">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check text-green-500"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                Sem burocracia
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check text-green-500"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                Aprovação facilitada
              </div>
            </div>
          </div>
          <div
            className="relative"
            style={{ opacity: 1, transform: "translateY(-12.0767px)" }}
          >
            <img
              alt="Feirão de Carros Santander: Venda de Veículos no Pátio"
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              referrerPolicy="no-referrer"
              loading="eager"
              decoding="async"
              src={imagemHero}
            />
            <div className="absolute bottom-4 left-4 sm:-bottom-6 sm:-left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-[240px]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center text-[#EC0000]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-badge-percent"
                    aria-hidden="true"
                  >
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                    <path d="m15 9-6 6"></path>
                    <path d="M9 9h.01"></path>
                    <path d="M15 15h.01"></path>
                  </svg>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Taxas de Feirão
                </span>
              </div>
              <p className="text-sm font-medium text-gray-600">
                Aproveite as melhores condições do ano para financiar.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
