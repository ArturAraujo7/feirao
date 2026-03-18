import React from 'react';
import { Car, Instagram, Facebook, Twitter, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--bg-dark)', color: '#D1D5DB', paddingTop: '64px', paddingBottom: '32px' }}>
      <div className="container">
        
        <div className="grid md-grid-cols-2 lg-grid-cols-4 gap-8" style={{ marginBottom: '48px' }}>
          
          {/* Brand Col */}
          <div className="flex flex-col gap-4">
            <a href="#" className="flex items-center gap-2" style={{ fontWeight: 800, fontSize: '1.25rem', color: 'white' }}>
              <div style={{ 
                backgroundColor: 'var(--primary)', 
                color: 'white', 
                padding: '8px', 
                borderRadius: '8px' 
              }}>
                <Car size={24} />
              </div>
              Feirão Limpa Pátio
            </a>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
              A oportunidade perfeita para você conquistar seu veículo com condições exclusivas e aprovação facilitada.
            </p>
            <div className="flex gap-4" style={{ marginTop: '8px' }}>
              <a href="#" style={{ color: '#D1D5DB', transition: 'var(--transition)' }} onMouseOver={e=>e.currentTarget.style.color='white'} onMouseOut={e=>e.currentTarget.style.color='#D1D5DB'}><Instagram size={20} /></a>
              <a href="#" style={{ color: '#D1D5DB', transition: 'var(--transition)' }} onMouseOver={e=>e.currentTarget.style.color='white'} onMouseOut={e=>e.currentTarget.style.color='#D1D5DB'}><Facebook size={20} /></a>
              <a href="#" style={{ color: '#D1D5DB', transition: 'var(--transition)' }} onMouseOver={e=>e.currentTarget.style.color='white'} onMouseOut={e=>e.currentTarget.style.color='#D1D5DB'}><Twitter size={20} /></a>
            </div>
          </div>

          {/* Links Col 1 */}
          <div className="flex flex-col gap-4">
            <h4 style={{ color: 'white', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Navegação</h4>
            <a href="#evento" style={{ fontSize: '0.875rem' }}>O Evento</a>
            <a href="#veiculos" style={{ fontSize: '0.875rem' }}>Veículos</a>
            <a href="#lojistas" style={{ fontSize: '0.875rem' }}>Lojistas</a>
            <a href="#duvidas" style={{ fontSize: '0.875rem' }}>Dúvidas</a>
          </div>

          {/* Links Col 2 */}
          <div className="flex flex-col gap-4">
            <h4 style={{ color: 'white', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Legal</h4>
            <a href="#" style={{ fontSize: '0.875rem' }}>Termos de Uso</a>
            <a href="#" style={{ fontSize: '0.875rem' }}>Política de Privacidade</a>
            <a href="#" style={{ fontSize: '0.875rem' }}>Aviso Legal</a>
          </div>

          {/* Contact Col */}
          <div className="flex flex-col gap-4">
            <h4 style={{ color: 'white', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Atendimento</h4>
            <div className="flex items-center gap-3">
              <Phone color="var(--primary)" size={20} />
              <div>
                <div style={{ fontWeight: 600, color: 'white' }}>4004 9090</div>
                <div style={{ fontSize: '0.75rem' }}>Regiões Metropolitanas</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone color="var(--primary)" size={20} />
              <div>
                <div style={{ fontWeight: 600, color: 'white' }}>0800 722 9090</div>
                <div style={{ fontSize: '0.75rem' }}>Demais Localidades</div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.1)', 
          paddingTop: '32px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          textAlign: 'center',
          fontSize: '0.875rem'
        }}>
          <p>© 2026 Santander Financiamentos. Todos os direitos reservados.</p>
          <p style={{ maxWidth: '800px', fontSize: '0.75rem', opacity: 0.7 }}>
            Crédito sujeito a análise e aprovação. O Feirão Limpa Pátio é uma iniciativa em parceria com lojistas da região.
            As condições de financiamento variam conforme o perfil do cliente e o veículo escolhido.
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
