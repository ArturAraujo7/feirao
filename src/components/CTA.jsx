import React from "react";

const CTA = () => {
  return (
    <>
      <section className="py-20 bg-[#EC0000] text-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold mb-6">
              Pronto para sair de carro novo?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Não perca tempo com burocracia. Garanta sua participação agora e
              chegue no feirão com o crédito pré-aprovado.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#cadastro"
                className="bg-white text-[#EC0000] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all"
              >
                <span className="hidden md:inline">Quero </span>Participar
              </a>
              <button className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                Falar com Consultor
              </button>
            </div>
          </div>
          <div className="hidden lg:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="300"
              height="300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-smartphone opacity-20 -rotate-12"
              aria-hidden="true"
            >
              <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
              <path d="M12 18h.01"></path>
            </svg>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
