import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageCircle, Phone, MapPin, Sofa, Armchair, Briefcase, BedDouble, ArrowRight, Menu, X, Search } from 'lucide-react';
import { ProductsContext } from '../context/ProductsContext';

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
  const { products } = useContext(ProductsContext);
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

const NavDropdown = ({ categories, setIsMenuOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

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

  return (
    <div ref={containerRef} className="nav-dropdown-container">
      <button 
        className="nav-link nav-dropdown-btn" 
        onClick={(e) => { e.preventDefault(); setIsOpen(!isOpen); }}
      >
        Mais Seções ▼
      </button>
      {isOpen && (
        <div className="nav-dropdown-menu">
          {categories.map(cat => (
            <Link 
              key={cat.id} 
              to={`/categoria/${cat.id}`} 
              className={`nav-dropdown-item ${cat.isHighlight ? 'nav-link-highlight' : ''}`}
              onClick={() => { setIsMenuOpen(false); setIsOpen(false); }}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export const Header = () => {
  const { categories } = useContext(ProductsContext);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center' }} onClick={() => setIsMenuOpen(false)}>
          <img src="/images/Logomarca/eu_preciso_dessa_logo,_mas_202605291133.png" alt="Estúdio Móveis" style={{ height: '110px', objectFit: 'contain' }} />
        </Link>
        
        <nav className={`nav-links ${isMenuOpen ? 'nav-active' : ''}`}>
          {categories.filter(cat => ["cozinha", "cadeiras", "sala de jantar"].includes(cat.name.toLowerCase())).map(cat => (
            <Link 
              key={cat.id} 
              to={`/categoria/${cat.id}`} 
              className={`nav-link ${cat.isHighlight ? 'nav-link-highlight' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {cat.name}
            </Link>
          ))}

          {categories.filter(cat => !["cozinha", "cadeiras", "sala de jantar"].includes(cat.name.toLowerCase())).length > 0 && (
            <>
              <div className="desktop-only-dropdown" style={{ display: isMobile ? 'none' : 'block' }}>
                <NavDropdown 
                  categories={categories.filter(cat => !["cozinha", "cadeiras", "sala de jantar"].includes(cat.name.toLowerCase()))} 
                  setIsMenuOpen={setIsMenuOpen} 
                />
              </div>
              
              {isMobile && categories.filter(cat => !["cozinha", "cadeiras", "sala de jantar"].includes(cat.name.toLowerCase())).map(cat => (
                <Link 
                  key={cat.id} 
                  to={`/categoria/${cat.id}`} 
                  className={`nav-link mobile-only-link ${cat.isHighlight ? 'nav-link-highlight' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {cat.name}
                </Link>
              ))}
            </>
          )}
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
  const { categories } = useContext(ProductsContext);
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <img src="/images/Logomarca/eu_preciso_dessa_logo,_mas_202605291133.png" alt="Estúdio Móveis" style={{ height: '160px', objectFit: 'contain', marginBottom: '1rem', borderRadius: '4px' }} />
            <p style={{ marginTop: '0', color: 'rgba(255,255,255,0.6)' }}>
              Design sofisticado, conforto inigualável. Transformando casas em lares com peças exclusivas.
            </p>
          </div>
          <div className="footer-col">
            <h4 style={{ color: 'var(--color-accent)' }}>Categorias</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
              {categories.map(cat => (
                <Link key={cat.id} to={`/categoria/${cat.id}`} style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="footer-col">
            <h4 style={{ color: 'var(--color-accent)' }}>Contato</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '1rem' }}>
              <p style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: 0, whiteSpace: 'nowrap' }}>
                <MessageCircle size={18} color="var(--color-accent)" /> WhatsApp: (62) 9242-1294
              </p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: 0, whiteSpace: 'nowrap' }}>
                <Phone size={18} color="var(--color-accent)" /> Telefone: (62) 9242-1294
              </p>
              <div style={{ marginTop: '0.5rem' }}>
                <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>
                  <InstagramIcon size={18} color="var(--color-accent)" /> @estudiomoveisdecor
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            Desenvolvido e Administrado por <a href="https://cgwebs.site" target="_blank" rel="noopener noreferrer" style={{ color: '#4da6ff', fontWeight: 'bold', textDecoration: 'none' }}>CG Web</a>
          </p>
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
          fontFamily: 'var(--font-sans)',
          marginTop: 'auto'
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
      {title && (
        <div className="section-header">
          <div className="section-title-line"></div>
          <h2 className="section-title">{title}</h2>
          <div className="section-title-line"></div>
        </div>
      )}
      {subtitle && <p className="section-subtitle text-center" style={{ marginTop: '-1.5rem', marginBottom: '3rem' }}>{subtitle}</p>}
      <div className="product-grid">
        {products.map((prod) => (
          <ProductCard key={prod.id} {...prod} />
        ))}
      </div>
    </section>
  );
};
