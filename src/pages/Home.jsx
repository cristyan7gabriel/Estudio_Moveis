import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ProductGrid, WhatsAppDropdownBtn, InstagramIcon } from '../components/SharedComponents';
import { ProductsContext } from '../context/ProductsContext';

import { ArrowRight, Sofa, Armchair, Briefcase, BedDouble, Truck, CreditCard, Star, ShieldCheck } from 'lucide-react';

const Hero = () => {
  const { categories, getProductsByCategory } = useContext(ProductsContext);
  const navigate = useNavigate();

  const featuredProducts = [];
  categories.forEach(cat => {
    const prods = getProductsByCategory(cat.id);
    if (prods && prods.length > 0) {
      featuredProducts.push({
        ...prods[0],
        categoryName: cat.name
      });
    }
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let interval;
    if (autoplay && featuredProducts.length > 0) {
      interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % featuredProducts.length);
      }, 10000);
    }
    return () => clearInterval(interval);
  }, [autoplay, featuredProducts.length]);

  if (featuredProducts.length === 0) {
    return <section className="hero-new" style={{paddingTop: '120px', height: '100vh'}}><div className="container">Carregando Destaques...</div></section>;
  }

  const activeProduct = featuredProducts[activeIndex];
  
  const getDimensionText = (product) => {
    const specs = product.especificacoes_gerais || product.especificacoes_mesa || product.especificacoes_cadeira || "";
    if (specs && typeof specs === 'string') {
        const lines = specs.split('\n').filter(l => l.trim() !== '');
        if(lines.length > 0) return lines[0].substring(0, 40) + (lines[0].length > 40 ? '...' : '');
    }
    return `Clique para mais informações`;
  };

  const formatPrice = (price) => {
    const numericPrice = parseFloat(price);
    if (isNaN(numericPrice) || numericPrice <= 0) {
      return 'Sob consulta';
    }
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(numericPrice);
  };

  const getDynamicBadge = (index) => {
    const badges = ["Design Autoral", "Série Limitada", "Alta Durabilidade", "Acabamento Premium", "Material Nobre", "Peça Assinada", "Conforto Exclusivo"];
    return badges[index % badges.length];
  };

  return (
    <section className="hero-new">
      <div className="hero-grid container">
        {/* Lado Esquerdo: Textos */}
        <div className="hero-text-side">
          <div className="hero-brand-line">
            <span className="hero-brand-line-bar"></span> ESTUDIO MOVEIS
          </div>
          
          <h1 className="hero-title-new">
            A sua<br/>
            <span style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400 }}>loja online</span><br/>
            <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontStyle: 'normal' }}>de Móveis.</span>
          </h1>
          
          <p className="hero-subtitle-new">
            Mobiliário autoral de luxo que une o minimalismo<br/>
            contemporâneo à alta marcenaria brasileira. Peças<br/>
            exclusivas prontas para transformar o seu espaço.
          </p>

          <div className="hero-features">
            <div className="hero-feature-item">
              <div className="hero-feature-icon">
                <Truck size={20} strokeWidth={1.5} />
              </div>
              <div className="hero-feature-text">
                <h4>ENTREGA ESPECIALIZADA</h4>
                <p>Entregamos para Goiânia e Região.</p>
              </div>
            </div>
            
            <div className="hero-feature-item">
              <div className="hero-feature-icon">
                <Star size={20} strokeWidth={1.5} />
              </div>
              <div className="hero-feature-text">
                <h4>CURADORIA EXCLUSIVA</h4>
                <p>Produção sob demanda e edições limitadas assinadas por designers.</p>
              </div>
            </div>
            
            <div className="hero-feature-item">
              <div className="hero-feature-icon">
                <ShieldCheck size={20} strokeWidth={1.5} />
              </div>
              <div className="hero-feature-text">
                <h4>GARANTIA ESTENDIDA</h4>
                <p>Todas as linhas estruturais contam com 5 anos de garantia de fábrica.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lado Direito: Carrossel */}
        <div className="hero-carousel-side">
          
          <div className="hero-carousel-wrapper">
            {/* Miniaturas */}
            <div className="hero-carousel-thumbs">
              {featuredProducts.map((prod, index) => (
                <button 
                  key={prod.id} 
                  className={`hero-thumb-btn ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => {
                    setActiveIndex(index);
                    setAutoplay(false);
                  }}
                >
                  <img src={prod.image} alt={prod.title} />
                  <span>{prod.categoryName.split(' ')[0]}</span>
                </button>
              ))}
            </div>

            {/* Imagem Principal */}
            <div className="hero-carousel-main" onClick={() => navigate(`/produto/${activeProduct.id}`)}>
              {/* Cards Flutuantes */}
              <div className="floating-card top-left">
                <span className="fc-tag">DESTAQUE DA CATEGORIA</span>
                <span className="fc-title">{activeProduct.title}</span>
                <span className="fc-desc">{getDimensionText(activeProduct)}</span>
                <span className="fc-sub">{activeProduct.categoryName}</span>
              </div>

              <div className="floating-card top-right">
                <span className="fc-badge">{getDynamicBadge(activeIndex)}</span>
              </div>
              
              <div className="floating-card bottom-right">
                <span className="fc-title-small">{activeProduct.title}</span>
                <span className="fc-price">
                  {formatPrice(activeProduct.price)}
                </span>
              </div>

              <div 
                className="floating-card" 
                style={{ bottom: '-1rem', left: '1rem', padding: '0.8rem 1rem' }}
                onClick={(e) => e.stopPropagation()}
              >
                <span className="fc-desc" style={{ maxWidth: '160px', display: 'block', fontSize: '0.7rem', lineHeight: '1.4' }}>
                  {activeProduct.description ? 
                    (activeProduct.description.length > 70 ? activeProduct.description.substring(0, 70) + '...' : activeProduct.description) 
                    : 'Design sofisticado e acabamento impecável.'}
                </span>
              </div>

              <img 
                key={activeProduct.id} 
                src={activeProduct.image} 
                alt={activeProduct.title} 
                className="hero-main-img animate-fade-in" 
              />
            </div>
          </div>

          {/* Progresso Numérico Lateral */}
          <div className="hero-carousel-progress">
            <span className="progress-num active">{String(activeIndex + 1).padStart(2, '0')}</span>
            <div className="progress-bar-vertical">
              <div 
                className="progress-fill-vertical" 
                style={{ 
                  '--progress': `${((activeIndex + 1) / featuredProducts.length) * 100}%`,
                }}
              ></div>
            </div>
            <span className="progress-num inactive">{String(featuredProducts.length).padStart(2, '0')}</span>
          </div>

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
            <WhatsAppDropdownBtn 
              message="Olá, gostaria de falar com um consultor sobre ambientes planejados."
              className="btn btn-primary" 
              style={{ alignSelf: 'flex-start', color: '#fff' }}
            >
              Falar com Consultor
            </WhatsAppDropdownBtn>
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
  const { categories, getProductsByCategory } = useContext(ProductsContext);

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
