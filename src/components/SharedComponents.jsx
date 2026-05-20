import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageCircle, Phone, MapPin, Sofa, Armchair, Briefcase, BedDouble, ArrowRight, Menu, X, Search } from 'lucide-react';
import { categories, products } from '../data/products';

export const WHATSAPP_PHONE_POLYANA = "556292421294";
export const WHATSAPP_PHONE_VERONICA = "5562982176675";
export const getWhatsAppLink = (message, phone = WHATSAPP_PHONE_POLYANA) => `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
export const WHATSAPP_LINK = getWhatsAppLink("Olá, gostaria de falar com um consultor do Estúdio Móveis.", WHATSAPP_PHONE_POLYANA);
export const INSTAGRAM_LINK = "https://www.instagram.com/estudiomoveisdecor";

export const InstagramIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  // Filter products when query changes
  const results = query.trim() === '' 
    ? [] 
    : products.filter(p => p.title && p.title.toLowerCase().includes(query.toLowerCase())).slice(0, 5);

  return (
    <div className="search-container">
      <div className="search-wrapper">
        <input 
          type="text" 
          className="search-input" 
          placeholder="Pesquisar..." 
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => {
            if (query.trim() !== '') setIsOpen(true);
          }}
          onBlur={() => {
            setTimeout(() => setIsOpen(false), 200);
          }}
        />
        <button className="search-btn" aria-label="Pesquisar">
          <Search size={18} />
        </button>
      </div>
      
      {isOpen && query.trim() !== '' && (
        <div className="search-dropdown">
          {results.length > 0 ? (
            results.map(prod => (
              <Link 
                key={prod.id} 
                to={`/produto/${prod.id}`}
                className="search-result-item"
                onClick={() => {
                  setIsOpen(false);
                  setQuery('');
                }}
              >
                <img src={prod.image || (prod.images && prod.images[0])} alt={prod.title} className="search-result-thumb" />
                <span className="search-result-title">{prod.title}</span>
              </Link>
            ))
          ) : (
            <div className="search-no-results">Nenhum produto encontrado</div>
          )}
        </div>
      )}
    </div>
  );
};

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    if (isHomePage) {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check initial scroll
    } else {
      setScrolled(true);
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo" onClick={() => setIsMenuOpen(false)}>Estúdio Móveis</Link>
        
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

        <div className="header-actions">
          <SearchBar />
          <button className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
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
            <h4>Estúdio Móveis</h4>
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

export const WhatsAppDropdownBtn = ({ message, children, className = "", direction = "down", style = {} }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const isFloating = className.includes('floating-whatsapp');

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  if (isFloating) {
    return (
      <div 
        ref={containerRef}
        className={`wa-dropdown-container ${className}`} 
        onClick={(e) => { e.preventDefault(); setIsOpen(!isOpen); }} 
        style={{ cursor: 'pointer', ...style }}
      >
        {children}
        {isOpen && (
          <div className={`wa-dropdown-menu wa-dropdown-${direction}`} onClick={(e) => e.stopPropagation()}>
            <div className="wa-dropdown-header">Falar com:</div>
            <a href={getWhatsAppLink(message, WHATSAPP_PHONE_POLYANA)} target="_blank" rel="noopener noreferrer" className="wa-dropdown-item">
              <MessageCircle size={18} /> Vendedora Polyana
            </a>
            <a href={getWhatsAppLink(message, WHATSAPP_PHONE_VERONICA)} target="_blank" rel="noopener noreferrer" className="wa-dropdown-item">
              <MessageCircle size={18} /> Vendedora Veronica
            </a>
          </div>
        )}
      </div>
    );
  }

  return (
    <div ref={containerRef} className="wa-dropdown-container" style={{ display: 'inline-block', width: style.width || 'auto', alignSelf: style.alignSelf || 'auto' }}>
      <button 
        type="button"
        className={className} 
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsOpen(!isOpen); }} 
        style={{ cursor: 'pointer', ...style, margin: 0 }}
      >
        {children}
      </button>
      {isOpen && (
        <div className={`wa-dropdown-menu wa-dropdown-${direction}`} onClick={(e) => e.stopPropagation()}>
          <div className="wa-dropdown-header">Falar com:</div>
          <a href={getWhatsAppLink(message, WHATSAPP_PHONE_POLYANA)} target="_blank" rel="noopener noreferrer" className="wa-dropdown-item">
            <MessageCircle size={18} /> Vendedora Polyana
          </a>
          <a href={getWhatsAppLink(message, WHATSAPP_PHONE_VERONICA)} target="_blank" rel="noopener noreferrer" className="wa-dropdown-item">
            <MessageCircle size={18} /> Vendedora Veronica
          </a>
        </div>
      )}
    </div>
  );
};

export const FloatingWhatsApp = () => {
  return (
    <WhatsAppDropdownBtn 
      message="Olá, gostaria de falar com um consultor do Estúdio Móveis." 
      className="floating-whatsapp"
      direction="up"
    >
      <MessageCircle size={32} />
    </WhatsAppDropdownBtn>
  );
};

export const ProductCard = ({ id, title, description, image, price }) => {
  return (
    <div className="product-card">
      <Link to={`/produto/${id}`} className="product-image-container" style={{ display: 'block' }}>
        <img src={image} alt={title} className="product-image" />
      </Link>
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-desc" style={{ marginBottom: '1rem' }}>{description}</p>
        <p style={{ 
          fontSize: '1.2rem', 
          fontWeight: '600', 
          color: 'var(--color-primary)', 
          marginBottom: '1.5rem',
          fontFamily: 'var(--font-sans)'
        }}>
          {price || 'Sob Consulta'}
        </p>
        <Link to={`/produto/${id}`} className="btn btn-primary" style={{ width: '100%', padding: '0.8rem' }}>
          Ver Detalhes
        </Link>
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
