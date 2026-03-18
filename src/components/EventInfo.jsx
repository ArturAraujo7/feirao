import React from 'react';
import { MapPin, Calendar, Map, CheckCircle2 } from 'lucide-react';

const EventInfo = () => {
  return (
    <section id="evento" className="section" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        <div className="grid md-grid-cols-2 gap-8" style={{ alignItems: 'center' }}>
          
          {/* Info Details */}
          <div>
            <div style={{ 
              display: 'inline-block',
              color: 'var(--primary)',
              fontWeight: 700,
              marginBottom: '16px',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              DATA E LOCAL
            </div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '32px' }}>
              Venha fazer o melhor negócio da sua vida
            </h2>
            
            <div className="flex flex-col gap-8" style={{ marginBottom: '40px' }}>
              <div className="flex items-start gap-4">
                <div style={{ backgroundColor: '#FEE2E2', padding: '16px', borderRadius: '50%' }}>
                  <Calendar color="var(--primary)" size={32} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>27, 28 e 29 de Março</h3>
                  <p className="text-secondary">Sexta e Sábado das 09h às 22h<br/>Domingo das 10h às 20h</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div style={{ backgroundColor: '#FEE2E2', padding: '16px', borderRadius: '50%' }}>
                  <MapPin color="var(--primary)" size={32} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>Via Verde Shopping</h3>
                  <p className="text-secondary">Estacionamento principal<br/>Rio Branco - AC</p>
                </div>
              </div>
            </div>

            <a href="#" className="btn btn-primary">
              <Map size={20} /> Como Chegar
            </a>
          </div>

          {/* Feature Card */}
          <div style={{ position: 'relative' }}>
            {/* Background decorative blob */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '100%',
              height: '100%',
              backgroundColor: '#FEE2E2',
              borderRadius: '24px',
              zIndex: 0
            }}></div>
            
            <div style={{
              position: 'relative',
              backgroundColor: 'var(--bg-dark)',
              color: 'white',
              padding: '48px',
              borderRadius: '24px',
              zIndex: 1,
              boxShadow: 'var(--shadow-lg)'
            }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '8px' }}>Por que participar?</h3>
              <p style={{ color: '#D1D5DB', marginBottom: '32px' }}>Estrutura completa para você sair de carro novo.</p>
              
              <div className="flex flex-col gap-4">
                {[
                  'Mais de 280 veículos',
                  'Vistoria Cautelar garantida',
                  'Garantia de Loja',
                  'Primeira parcela para até 60 dias',
                  'Aprovação na hora'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 color="var(--primary)" size={24} />
                    <span style={{ fontSize: '1.125rem', fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EventInfo;
