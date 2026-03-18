import React from 'react';

const Partners = () => {
  const partners = [
    "GRUPO STAR", "RECOL MOTORS", "3D CAR", "A.B CAR", 
    "ADM", "AC", "MCAR", "MAIS", 
    "OLIVEIRA", "FRAZÃO", "ESCOBAR", "RR", 
    "INOVE", "UNIDAS"
  ];

  return (
    <section id="lojistas" className="section" style={{ backgroundColor: 'white' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Lojistas Parceiros</h2>
          <p className="text-secondary" style={{ fontSize: '1.25rem' }}>As melhores opções da cidade reunidas em um só lugar.</p>
        </div>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
          justifyContent: 'center'
        }}>
          {partners.map((partner, idx) => (
            <div key={idx} style={{
              backgroundColor: 'var(--bg-light)',
              border: '1px solid var(--border-color)',
              padding: '24px',
              borderRadius: '12px',
              width: 'calc(25% - 16px)',
              minWidth: '200px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '1.25rem',
              color: 'var(--text-secondary)',
              transition: 'var(--transition)',
              cursor: 'default'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = 'var(--primary)';
              e.currentTarget.style.color = 'var(--primary)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-color)';
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              {partner}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Partners;
