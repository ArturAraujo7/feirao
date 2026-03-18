import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    // Set target date for the event (e.g., end of March or simply +5 days for demo)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 5);
    
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{ 
      position: 'relative',
      minHeight: '85vh',
      display: 'flex',
      alignItems: 'center',
      /* Replace with an actual background image or a dark gradient */
      background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url("https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=1920") center/cover no-repeat',
      color: 'white',
      paddingTop: '80px'
    }}>
      <div className="container">
        <div style={{ maxWidth: '800px' }}>
          
          <div style={{ 
            display: 'inline-block',
            backgroundColor: 'var(--primary)',
            padding: '4px 12px',
            borderRadius: '9999px',
            fontSize: '0.875rem',
            fontWeight: 700,
            marginBottom: '24px',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            FEIRÃO LIMPA PÁTIO
          </div>

          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: '24px'
          }}>
            É pra vender tudo.
          </h1>
          
          <p style={{ 
            fontSize: '1.25rem',
            color: '#D1D5DB', // gray-300
            marginBottom: '40px',
            lineHeight: 1.6
          }}>
            Participe do maior feirão da região. Oportunidade única para conquistar seu veículo com as melhores condições do mercado.
          </p>

          <div className="flex flex-col gap-4" style={{ marginBottom: '48px' }}>
            <div className="flex items-center gap-2">
              <CheckCircle2 color="var(--primary)" size={24} />
              <span style={{ fontWeight: 600, fontSize: '1.125rem' }}>+ DE 300 VEÍCULOS EM EXPOSIÇÃO</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 color="var(--primary)" size={24} />
              <span style={{ fontWeight: 600, fontSize: '1.125rem' }}>AS MELHORES TAXAS DE FINANCIAMENTO</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 color="var(--primary)" size={24} />
              <span style={{ fontWeight: 600, fontSize: '1.125rem' }}>APROVAÇÃO FACILITADA</span>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="flex gap-4" style={{ marginBottom: '48px' }}>
            {[
              { label: 'Dias', value: timeLeft.days },
              { label: 'Horas', value: timeLeft.hours },
              { label: 'Minutos', value: timeLeft.minutes },
              { label: 'Segundos', value: timeLeft.seconds }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center" style={{ 
                backgroundColor: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                padding: '16px 20px',
                minWidth: '80px',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <span style={{ fontSize: '2rem', fontWeight: 800 }}>
                  {item.value.toString().padStart(2, '0')}
                </span>
                <span style={{ fontSize: '0.875rem', color: '#D1D5DB', textTransform: 'uppercase' }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4" style={{ flexWrap: 'wrap' }}>
            <a href="#cadastro" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '1.125rem' }}>
              Quero Participar <ArrowRight size={20} />
            </a>
            <a href="#veiculos" className="btn btn-outline" style={{ padding: '16px 32px', fontSize: '1.125rem', color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
              Ver Ofertas
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
