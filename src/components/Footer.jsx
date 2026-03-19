import React from "react";
import seloFeirao from "../assets/selo-feirao.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-white pt-20 pb-10 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-8">
                <img
                  src={seloFeirao}
                  alt="Selo Feirão Limpa Pátio"
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-sm text-gray-500 leading-relaxed mb-8">
                A Santander Financiamentos é líder no mercado de veículos e
                oferece as melhores soluções para você conquistar seu sonho.
              </p>
              <div className="flex gap-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#EC0000] transition-colors"
                >
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
                    className="lucide lucide-instagram"
                    aria-hidden="true"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#EC0000] transition-colors"
                >
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
                    className="lucide lucide-facebook"
                    aria-hidden="true"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#EC0000] transition-colors"
                >
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
                    className="lucide lucide-youtube"
                    aria-hidden="true"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                    <path d="m10 15 5-3-5-3z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h5 className="font-bold text-[#1A1A1A] mb-8">Produtos</h5>
              <ul className="space-y-4 text-sm text-gray-500">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#EC0000] transition-colors"
                  >
                    Financiamento de Carros
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#EC0000] transition-colors"
                  >
                    Financiamento de Motos
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-[#1A1A1A] mb-8">Atendimento</h5>
              <ul className="space-y-4 text-sm text-gray-500">
                <li className="font-bold text-[#1A1A1A]">4004 9090</li>
                <li>Capitais e Regiões Metropolitanas</li>
                <li className="font-bold text-[#1A1A1A] pt-2">0800 722 9090</li>
                <li>Demais Localidades</li>
              </ul>
            </div>
          </div>
          <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">
            <p>
              © 2026 Santander Financiamentos. Todos os direitos reservados.
            </p>
            <div className="flex gap-10">
              <a href="#" className="hover:text-[#EC0000] transition-colors">
                Privacidade
              </a>
              <a href="#" className="hover:text-[#EC0000] transition-colors">
                Segurança
              </a>
              <a href="#" className="hover:text-[#EC0000] transition-colors">
                LGPD
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
