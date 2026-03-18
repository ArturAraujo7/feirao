import React from 'react';
import { Gift, TrendingUp, Clock } from 'lucide-react';

const RegistrationForm = () => {
  return (
    <section id="cadastro" className="section" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div className="grid md-grid-cols-2 gap-8" style={{ alignItems: 'center' }}>
          
          {/* Text Content */}
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>
              Garanta sua participação e receba ofertas exclusivas
            </h2>
            <p className="text-secondary" style={{ fontSize: '1.125rem', marginBottom: '32px' }}>
              Cadastre-se agora para receber as melhores oportunidades antes de todo mundo e garantir condições únicas de financiamento.
            </p>
            
            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <div style={{ backgroundColor: '#FEE2E2', padding: '12px', borderRadius: '12px', height: 'fit-content' }}>
                  <Clock color="var(--primary)" size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>Acesso Antecipado</h3>
                  <p className="text-secondary">Receba as ofertas antes do evento abrir para o público em geral.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div style={{ backgroundColor: '#FEE2E2', padding: '12px', borderRadius: '12px', height: 'fit-content' }}>
                  <TrendingUp color="var(--primary)" size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>Consultoria de Crédito</h3>
                  <p className="text-secondary">Análise rápida e taxas imbatíveis com o Santander Financiamentos.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div style={{ backgroundColor: '#FEE2E2', padding: '12px', borderRadius: '12px', height: 'fit-content' }}>
                  <Gift color="var(--primary)" size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>Brindes Exclusivos</h3>
                  <p className="text-secondary">Ganhe benefícios extras ao fechar negócio durante o feirão.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Form */}
          <div style={{ 
            backgroundColor: 'white',
            padding: '32px',
            borderRadius: '16px',
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid var(--border-color)'
          }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '24px', textAlign: 'center' }}>
              Complete seu cadastro
            </h3>
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: 'var(--text-secondary)' }}>Nome Completo</label>
                <input 
                  type="text" 
                  placeholder="Seu nome"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-color)',
                    fontSize: '1rem',
                    outline: 'none'
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: 'var(--text-secondary)' }}>E-mail</label>
                <input 
                  type="email" 
                  placeholder="seu@email.com"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-color)',
                    fontSize: '1rem',
                    outline: 'none'
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: 'var(--text-secondary)' }}>WhatsApp</label>
                <input 
                  type="tel" 
                  placeholder="(00) 00000-0000"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-color)',
                    fontSize: '1rem',
                    outline: 'none'
                  }}
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '16px', padding: '16px' }}>
                Quero Receber Ofertas
              </button>
              <p style={{ textAlign: 'center', fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '8px' }}>
                Seus dados estão seguros. Não enviamos spam.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
