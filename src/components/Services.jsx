import React from 'react';
import { CreditCard, Handshake, HelpCircle, Store } from 'lucide-react';

const Services = () => {
  const servicesList = [
    {
      icon: <CreditCard size={32} color="var(--primary)" />,
      title: "Financiamento 100% Digital",
      desc: "Aprovação de crédito na hora, sem burocracia, direto pelo Santander Financiamentos."
    },
    {
      icon: <Handshake size={32} color="var(--primary)" />,
      title: "Renegociação",
      desc: "Condições especiais e taxas reduzidas exclusivas para os dias do feirão."
    },
    {
      icon: <HelpCircle size={32} color="var(--primary)" />,
      title: "Dúvidas Frequentes",
      desc: "Nossa equipe estará de prontidão para ajudar com qualquer questão sobre seu veículo."
    },
    {
      icon: <Store size={32} color="var(--primary)" />,
      title: "14 Lojistas Parceiros",
      desc: "As melhores lojas da região reunidas em um só lugar para te oferecer variedade."
    }
  ];

  return (
    <section id="servicos" className="section" style={{ backgroundColor: 'var(--bg-light)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontSize: '2.5rem', display: 'inline-block', position: 'relative' }}>
            Serviços para você no Feirão
            <div style={{ 
              position: 'absolute', 
              bottom: '-12px', 
              left: '50%', 
              transform: 'translateX(-50%)', 
              width: '80px', 
              height: '4px', 
              backgroundColor: 'var(--primary)',
              borderRadius: '2px'
            }}></div>
          </h2>
        </div>

        <div className="grid md-grid-cols-2 lg-grid-cols-4 gap-6">
          {servicesList.map((srv, idx) => (
            <div key={idx} style={{
              backgroundColor: 'white',
              padding: '40px 24px',
              borderRadius: '16px',
              boxShadow: 'var(--shadow-sm)',
              transition: 'var(--transition)',
              border: '1px solid var(--border-color)',
              textAlign: 'center',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
            }}
            >
              <div style={{ 
                width: '64px', 
                height: '64px', 
                margin: '0 auto 24px auto',
                backgroundColor: '#FEE2E2',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {srv.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '16px' }}>{srv.title}</h3>
              <p className="text-secondary" style={{ lineHeight: 1.6 }}>{srv.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
