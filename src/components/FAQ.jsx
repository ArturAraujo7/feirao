import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: "O Evento",
      q: "O que é o Feirão Limpa Pátio Santander?",
      a: "O Feirão Limpa Pátio é o maior evento de vendas de veículos da região, oferecendo mais de 400 opções de veículos com condições exclusivas do Santander Financiamentos.",
    },
    {
      category: "Quando",
      q: "Quais são as datas e horários de funcionamento?",
      a: "O evento acontecerá nos dias 27, 28 e 29 de Março, no estacionamento do Via Verde Shopping, das 08h às 21h.",
    },
    {
      category: "Financiamento",
      q: "Como funciona o financiamento durante o feirão?",
      a: "Temos opções de financiamento com aprovação rápida na hora, taxas reduzidas exclusivas do evento e possibilidade de financiar em até 60 vezes.",
    },
    {
      category: "Financiamento",
      q: "É possível financiar 100% do valor do veículo?",
      a: "Sim, através da análise de crédito, o Santander Financiamentos pode aprovar até 100% do valor do veículo sem necessidade de entrada.",
    },
    {
      category: "Entrada",
      q: "Quais documentos preciso levar para visitar o feirão?",
      a: "Para visitar o evento não é necessário nenhum documento específico, a entrada é gratuita.",
    },
    {
      category: "Documentação",
      q: "Quais documentos são necessários para formalizar o financiamento?",
      a: "Para análise de crédito leve seu RG e CPF (ou CNH). Em alguns casos, comprovante de residência e renda mais recentes podem ajudar na aprovação.",
    },
    {
      category: "Lojistas Parceiros",
      q: "Quem são os lojistas que estarão presentes?",
      a: "Contaremos com 14 lojistas: 3D CAR, A.B CAR VEICULOS, AC VEICULOS, ADM VEICULOS, ESCOBAR VEICULOS, FRAZÃO VEICULOS, GRUPO STAR, INOVE VEICULOS, MAIS VEICULOS, MCAR VEICULOS, OLIVEIRA VEICULOS, RECOL MOTORS, RR VEICULOS, UNIDAS VEICULOS",
    },
  ];

  return (
    <section id="duvidas" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-gray-500">
            Tudo o que você precisa saber para fazer o melhor negócio.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors focus:outline-none"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#EC0000] mb-2 block">
                      {faq.category}
                    </span>
                    <h3 className="text-lg font-bold text-[#1A1A1A]">
                      {faq.q}
                    </h3>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-[#EC0000] text-white" : "bg-gray-100 text-gray-500"}`}
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
                      className={`lucide lucide-chevron-down transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </div>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-8 pb-6">
                      <p className="text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
