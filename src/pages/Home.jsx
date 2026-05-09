import React from 'react';
import { Link } from 'react-router-dom';
import { ProductGrid, WHATSAPP_LINK, InstagramIcon } from '../components/SharedComponents';
import { categories, getProductsByCategory } from '../data/products';

import { ArrowRight, Sofa, Armchair, Briefcase, BedDouble, Truck, CreditCard } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: 'url("/images/Background.jpeg")', position: 'relative' }}>
      <div className="hero-content" style={{ maxWidth: '1000px', width: '100%', padding: '0 2rem' }}>
        <h1 className="hero-title" style={{ 
          color: '#F4F1EB', 
          fontWeight: '400', 
          lineHeight: '1.2', 
          marginBottom: '1.5rem',
          textShadow: '0 4px 30px rgba(0,0,0,0.7), 0 0 10px rgba(0,0,0,0.5)'
        }}>
          Design que Inspira<br/>Conforto & Estilo
        </h1>
        <p className="hero-subtitle" style={{ 
          color: '#E8E5DF', 
          fontWeight: '300', 
          fontSize: '1.1rem', 
          maxWidth: '700px', 
          margin: '0 auto 2.5rem',
          textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 0 5px rgba(0,0,0,0.5)'
        }}>
          Criamos ambientes atemporais que refletem sua personalidade<br/>e elevam o morar contemporâneo.
        </p>
        <a href="#destaques" className="btn" style={{ 
          backgroundColor: '#2D3E33', 
          color: '#F4F1EB', 
          borderRadius: '8px',
          padding: '1rem 2rem',
          fontSize: '0.85rem',
          letterSpacing: '0.1em',
          border: '1px solid rgba(244, 241, 235, 0.2)',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.75rem',
          textTransform: 'uppercase'
        }}>
          <InstagramIcon size={18} /> Explorar Coleção <ArrowRight size={18} />
        </a>
      </div>

      <div style={{ 
        position: 'absolute', 
        bottom: '2rem', 
        left: '0', 
        width: '100%', 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '3rem',
        color: '#F4F1EB',
        zIndex: 2
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textShadow: '0 2px 10px rgba(0,0,0,0.4)' }}>
          <Truck size={24} style={{ opacity: 0.8 }} />
          <span style={{ fontSize: '0.9rem', lineHeight: '1.2', fontWeight: '300' }}>Entrega em<br/>Goiânia e Região</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textShadow: '0 2px 10px rgba(0,0,0,0.4)' }}>
          <CreditCard size={24} style={{ opacity: 0.8 }} />
          <span style={{ fontSize: '0.9rem', lineHeight: '1.2', fontWeight: '300' }}>Parcelamento<br/>sem Juros</span>
        </div>
      </div>
    </section>
  );
};

const AmbientesPlanejados = () => {
  return (
    <section className="planned-environments section">
      <div className="container">
        <div className="section-header">
          <div className="section-title-line"></div>
          <h2 className="section-title">Ambientes Planejados</h2>
          <div className="section-title-line"></div>
        </div>
        <div className="planned-grid">
          <div className="planned-content">
            <p className="section-subtitle" style={{ margin: '0 0 2rem 0', textAlign: 'left', maxWidth: 'none' }}>
              Mais do que móveis, entregamos soluções completas. Nossa equipe de arquitetos projeta seu ambiente dos sonhos, unindo estética contemporânea e funcionalidade perfeita para o seu dia a dia.
            </p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
              Falar com Consultor
            </a>
          </div>
          <div className="planned-image-wrapper">
            <img src="/images/room_planned_1778203778795.png" alt="Ambiente Planejado" className="planned-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Home = () => {
  return (
    <main>
      <Hero />
      <div id="destaques" style={{ paddingTop: '2rem' }}>
        {categories.map(cat => {
          const catProducts = getProductsByCategory(cat.id);
          if (catProducts.length === 0) return null;
          return (
            <div key={cat.id} style={{ marginBottom: '1rem' }}>
              <ProductGrid 
                title={cat.name} 
                products={catProducts} 
              />
            </div>
          );
        })}
      </div>
      <AmbientesPlanejados />
    </main>
  );
};
