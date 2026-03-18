import React from 'react';
import { Car } from 'lucide-react';

const Header = () => {
  return (
    <header style={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      backgroundColor: 'var(--bg-main)',
      borderBottom: '1px solid var(--border-color)',
      zIndex: 50
    }}>
      <div className="container flex items-center justify-between" style={{ height: '80px' }}>
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2" style={{ fontWeight: 800, fontSize: '1.25rem' }}>
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

        {/* Desktop Nav */}
        <nav className="flex items-center gap-6 hidden md-flex">
          <a href="#evento" className="text-secondary" style={{ fontWeight: 500 }}>O Evento</a>
          <a href="#veiculos" className="text-secondary" style={{ fontWeight: 500 }}>Veículos</a>
          <a href="#lojistas" className="text-secondary" style={{ fontWeight: 500 }}>Lojistas</a>
          <a href="#duvidas" className="text-secondary" style={{ fontWeight: 500 }}>Dúvidas</a>
        </nav>

        {/* CTA */}
        <a href="#cadastro" className="btn btn-primary">
          Quero Participar
        </a>
      </div>
    </header>
  );
};

export default Header;
