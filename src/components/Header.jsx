import React from "react";
import seloFeirao from "../assets/selo-feirao.png";

const Header = () => {
  return (
    <>
      <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-white border-b py-5 border-transparent">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 cursor-pointer">
              <img
                src={seloFeirao}
                alt="Selo Feirão Limpa Pátio"
                className="h-12 w-auto"
              />
            </div>
            <nav className="hidden lg:flex items-center gap-6 border-l pl-8 border-gray-200">
              <a
                href="#evento"
                className="text-sm font-medium text-gray-600 hover:text-[#EC0000] transition-colors"
              >
                O Evento
              </a>
              <a
                href="#veiculos"
                className="text-sm font-medium text-gray-600 hover:text-[#EC0000] transition-colors"
              >
                Veículos
              </a>
              <a
                href="#lojistas"
                className="text-sm font-medium text-gray-600 hover:text-[#EC0000] transition-colors"
              >
                Lojistas
              </a>
              <a
                href="#duvidas"
                className="text-sm font-medium text-gray-600 hover:text-[#EC0000] transition-colors"
              >
                Dúvidas
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#cadastro"
              className="bg-[#EC0000] hover:bg-[#CC0000] text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-red-600/20 active:scale-95"
            >
              <span className="hidden md:inline">Quero </span>Participar
            </a>
            <button className="lg:hidden text-gray-600">
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
                className="lucide lucide-menu"
                aria-hidden="true"
              >
                <path d="M4 5h16"></path>
                <path d="M4 12h16"></path>
                <path d="M4 19h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
