import React from 'react';
import { ArrowRight, Sofa, Armchair, Briefcase, BedDouble } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProductGrid, WHATSAPP_LINK } from '../components/SharedComponents';
import { categories, getProductsByCategory } from '../data/products';

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: 'url("/images/hero_living_room_1778203696062.png")' }}>
      <div className="hero-content">
        <h1 className="hero-title">Design que Inspira Conforto & Estilo</h1>
        <p className="hero-subtitle">Criamos ambientes atemporais que refletem sua personalidade e elevam o morar contemporâneo.</p>
        <a href="#destaques" className="btn btn-primary">
          Explorar Coleção <ArrowRight size={20} />
        </a>
      </div>
    </section>
  );
};

const AmbientesPlanejados = () => {
  return (
    <section className="planned-environments section">
      <div className="container">
        <div className="planned-grid">
          <div className="planned-content">
            <h2 className="section-title">Ambientes Planejados</h2>
            <p className="section-subtitle" style={{ margin: '0 0 2rem 0', textAlign: 'left' }}>
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
            <div key={cat.id} style={{ marginBottom: '4rem' }}>
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
