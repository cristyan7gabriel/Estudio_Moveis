import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, MapPin, Sofa, Armchair, Briefcase, BedDouble, ArrowRight, Menu, X } from 'lucide-react';
import { categories } from '../data/products';

export const WHATSAPP_LINK = "https://wa.me/556292421294?text=Olá,%20gostaria%20de%20falar%20com%20um%20consultor%20do%20Estúdio%20Móveis.";
export const INSTAGRAM_LINK = "https://www.instagram.com/estudiomoveisdecor";

const InstagramIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header" style={{ boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.05)' : 'none' }}>
      <div className="container header-container">
        <Link to="/" className="logo" onClick={() => setIsMenuOpen(false)}>Estúdio Móveis.</Link>
        
        <nav className={`nav-links ${isMenuOpen ? 'nav-active' : ''}`}>
          {categories.map(cat => (
            <Link 
              key={cat.id} 
              to={`/categoria/${cat.id}`} 
              className={`nav-link ${cat.isHighlight ? 'nav-link-highlight' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {cat.name}
            </Link>
          ))}
        </nav>

        <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>Estúdio Móveis.</h4>
            <p style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.6)' }}>
              Design sofisticado, conforto inigualável. Transformando casas em lares com peças exclusivas.
            </p>
          </div>
          <div className="footer-col">
            <h4>Categorias</h4>
            {categories.map(cat => (
              <Link key={cat.id} to={`/categoria/${cat.id}`}>{cat.name}</Link>
            ))}
          </div>
          <div className="footer-col">
            <h4>Contato</h4>
            <p><MessageCircle size={18} /> WhatsApp: (62) 9242-1294</p>
            <p><Phone size={18} /> Telefone: (62) 9242-1294</p>
            <p><MapPin size={18} /> Av. Principal, Goiânia - GO</p>
            <div style={{ marginTop: '1rem' }}>
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer">
                <InstagramIcon size={18} /> @estudiomoveisdecor
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Estúdio Móveis. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export const FloatingWhatsApp = () => {
  return (
    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="floating-whatsapp" aria-label="WhatsApp">
      <MessageCircle size={32} />
    </a>
  );
};

export const ProductCard = ({ id, title, description, image }) => {
  return (
    <div className="product-card">
      <Link to={`/produto/${id}`} className="product-image-container" style={{ display: 'block' }}>
        <img src={image} alt={title} className="product-image" />
      </Link>
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-desc">{description}</p>
        <Link to={`/produto/${id}`} className="btn btn-outline" style={{ marginRight: '0.5rem' }}>
          Detalhes
        </Link>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Consultar
        </a>
      </div>
    </div>
  );
};

export const ProductGrid = ({ title, subtitle, products }) => {
  return (
    <section className="container section">
      <div className="section-header">
        <div className="section-title-line"></div>
        <h2 className="section-title">{title}</h2>
        <div className="section-title-line"></div>
      </div>
      {subtitle && <p className="section-subtitle text-center" style={{ marginTop: '-1.5rem', marginBottom: '3rem' }}>{subtitle}</p>}
      <div className="product-grid">
        {products.map((prod) => (
          <ProductCard key={prod.id} {...prod} />
        ))}
      </div>
    </section>
  );
};
