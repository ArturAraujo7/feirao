import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Preciso dar entrada para financiar um veículo?",
      a: "Temos opções de financiamento com e sem entrada, sujeitas a análise de crédito pelo Santander Financiamentos. Nossos consultores estarão no local para encontrar a melhor condição para o seu perfil."
    },
    {
      q: "Quais documentos preciso levar?",
      a: "Para adiantar a análise de crédito, leve seu RG, CPF (ou CNH), comprovante de residência atualizado e comprovante de renda (holerite ou extrato bancário dos últimos 3 meses)."
    },
    {
      q: "Os carros têm garantia?",
      a: "Sim, todos os veículos vendidos no feirão possuem garantia oferecida pelas lojas participantes, conforme as normas do Código de Defesa do Consumidor (motor e caixa de marcha)."
    },
    {
      q: "Posso dar o meu carro atual como entrada?",
      a: "Com certeza! Os lojistas presentes farão a avaliação do seu veículo na hora, podendo ser utilizado como parte do pagamento na compra de um novo."
    },
    {
      q: "O Feirão cobra alguma taxa de entrada?",
      a: "Não, a entrada no Feirão Limpa Pátio é totalmente gratuita."
    }
  ];

  return (
    <section id="duvidas" className="section" style={{ backgroundColor: 'var(--bg-light)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '2.5rem' }}>Dúvidas Frequentes</h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  border: `1px solid ${isOpen ? 'var(--primary)' : 'var(--border-color)'}`,
                  overflow: 'hidden',
                  transition: 'var(--transition)'
                }}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    color: isOpen ? 'var(--primary)' : 'var(--text-primary)'
                  }}
                >
                  <span style={{ fontSize: '1.125rem', fontWeight: 600 }}>{faq.q}</span>
                  {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </button>
                
                {isOpen && (
                  <div style={{ 
                    padding: '0 24px 24px 24px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default FAQ;
