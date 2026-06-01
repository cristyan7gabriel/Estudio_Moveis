import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageCircle, Phone, MapPin, Sofa, Armchair, Briefcase, BedDouble, ArrowRight, Menu, X, Search, ChevronLeft, ChevronRight } from 'lucide-react';
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

const SectionDropdown = ({ section, setIsMenuOpen, isMobile, activeDropdown, setActiveDropdown, pinnedDropdown, setPinnedDropdown }) => {
  const containerRef = useRef(null);
  const timeoutRef = useRef(null);

  const isOpen = activeDropdown === section.id;
  const isPinned = pinnedDropdown === section.id;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        if (isOpen) setActiveDropdown(null);
        if (isPinned) setPinnedDropdown(null);
      }
    };
    if (isOpen || isPinned) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isOpen, isPinned, setActiveDropdown, setPinnedDropdown]);

  const handleMouseEnter = () => {
    if (isMobile) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (pinnedDropdown && pinnedDropdown !== section.id) {
      setPinnedDropdown(section.id);
    }
    setActiveDropdown(section.id);
  };

  const handleMouseLeave = () => {
    if (isMobile || isPinned) return;
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(prev => (prev === section.id ? null : prev));
    }, 250);
  };

  const handleToggleClick = (e) => {
    e.preventDefault();
    if (isPinned) {
      setPinnedDropdown(null);
      setActiveDropdown(null);
    } else {
      setPinnedDropdown(section.id);
      setActiveDropdown(section.id);
    }
  };

  const hasSubcategories = section.categories.length > 0 && !(section.categories.length === 1 && section.categories[0].name === section.name);

  // If there are no subcategories or just one with the same name, render as a simple link
  if (!hasSubcategories) {
    const cat = section.categories[0];
    return (
      <Link 
        to={`/categoria/${cat?.slug || cat?.id}`} 
        className="nav-link"
        onClick={() => setIsMenuOpen(false)}
      >
        {section.name}
      </Link>
    );
  }

  return (
    <div 
      ref={containerRef} 
      className="nav-dropdown-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button 
        className="nav-link nav-dropdown-btn" 
        onClick={handleToggleClick}
      >
        {section.name}
      </button>
      {isOpen && (
        <div className={`nav-dropdown-menu ${isMobile ? 'nav-dropdown-mobile' : ''}`}>
          {section.categories.map(cat => (
            <Link 
              key={cat.id} 
              to={`/categoria/${cat.slug || cat.id}`} 
              className={`nav-dropdown-item ${cat.isHighlight ? 'nav-link-highlight' : ''}`}
              onClick={() => { 
                setIsMenuOpen(false); 
                setActiveDropdown(null); 
                setPinnedDropdown(null); 
              }}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const MaisSecoesSubMenu = ({ section, isMobile, closeMainMenu }) => {
  const [isSubOpen, setIsSubOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (isMobile) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsSubOpen(true);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    timeoutRef.current = setTimeout(() => setIsSubOpen(false), 250);
  };

  return (
    <div 
      style={{ position: 'relative' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="nav-dropdown-item"
        style={{ fontWeight: '800', color: 'var(--color-primary)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', padding: '0.8rem 1.5rem', borderBottom: '1px solid rgba(0,0,0,0.05)' }}
        onClick={(e) => {
          if (isMobile) {
            e.preventDefault();
            setIsSubOpen(!isSubOpen);
          }
        }}
      >
        {section.name}
        <span style={{ fontSize: '0.6rem', color: 'var(--color-accent)' }}>▶</span>
      </div>
      
      {isSubOpen && (
        <div className={`nav-dropdown-flyout ${!isMobile ? 'nav-dropdown-flyout-left' : ''} ${isMobile ? 'nav-dropdown-flyout-mobile' : ''}`}>
          {section.categories.map(cat => (
            <Link 
              key={cat.id} 
              to={`/categoria/${cat.slug || cat.id}`} 
              className="nav-dropdown-item"
              onClick={() => {
                setIsSubOpen(false);
                closeMainMenu();
              }}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const MaisSecoesDropdown = ({ sections, setIsMenuOpen, isMobile, activeDropdown, setActiveDropdown, pinnedDropdown, setPinnedDropdown }) => {
  const containerRef = useRef(null);
  const timeoutRef = useRef(null);

  const isOpen = activeDropdown === 'mais-secoes';
  const isPinned = pinnedDropdown === 'mais-secoes';

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        if (isOpen) setActiveDropdown(null);
        if (isPinned) setPinnedDropdown(null);
      }
    };
    if (isOpen || isPinned) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isOpen, isPinned, setActiveDropdown, setPinnedDropdown]);

  const handleMouseEnter = () => {
    if (isMobile) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (pinnedDropdown && pinnedDropdown !== 'mais-secoes') {
      setPinnedDropdown('mais-secoes');
    }
    setActiveDropdown('mais-secoes');
  };

  const handleMouseLeave = () => {
    if (isMobile || isPinned) return;
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(prev => (prev === 'mais-secoes' ? null : prev));
    }, 250);
  };

  const handleToggleClick = (e) => {
    e.preventDefault();
    if (isPinned) {
      setPinnedDropdown(null);
      setActiveDropdown(null);
    } else {
      setPinnedDropdown('mais-secoes');
      setActiveDropdown('mais-secoes');
    }
  };

  return (
    <div 
      ref={containerRef} 
      className="nav-dropdown-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button 
        className="nav-link nav-dropdown-btn" 
        onClick={handleToggleClick}
      >
        MAIS SEÇÕES
      </button>
      {isOpen && (
        <div className={`nav-dropdown-menu ${!isMobile ? 'nav-dropdown-menu-right' : ''} ${isMobile ? 'nav-dropdown-mobile' : ''}`} style={{ minWidth: '250px', padding: '0.5rem 0' }}>
          {sections.map(section => {
            const hasSubcategories = section.categories.length > 0 && !(section.categories.length === 1 && section.categories[0].name === section.name);
            
            if (!hasSubcategories) {
              const cat = section.categories[0];
              if (!cat) return null;
              return (
                <Link 
                  key={section.id} 
                  to={`/categoria/${cat.slug || cat.id}`} 
                  className="nav-dropdown-item"
                  style={{ fontWeight: '700', color: 'var(--color-primary)', borderBottom: '1px solid rgba(0,0,0,0.05)', padding: '0.8rem 1.5rem' }}
                  onClick={() => { 
                    setIsMenuOpen(false); 
                    setActiveDropdown(null); 
                    setPinnedDropdown(null); 
                  }}
                >
                  {section.name}
                </Link>
              );
            }

            return (
              <MaisSecoesSubMenu 
                key={section.id} 
                section={section} 
                isMobile={isMobile} 
                closeMainMenu={() => {
                  setIsMenuOpen(false);
                  setActiveDropdown(null);
                  setPinnedDropdown(null);
                }} 
              />
            );
          })}
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
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [pinnedDropdown, setPinnedDropdown] = useState(null);

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

  // Group categories by section name to merge legacy categories with new sections
  const sectionsMap = categories.reduce((acc, cat) => {
    const groupName = (cat.sectionName || cat.name).toUpperCase();

    if (!acc[groupName]) {
      acc[groupName] = {
        id: cat.sectionId || cat.id,
        name: cat.sectionName || cat.name,
        order: cat.sectionOrder || 99,
        categories: []
      };
    }
    
    // Se a categoria atual faz parte de uma seção real (tem sectionId e sectionOrder),
    // garantimos que as propriedades da seção real prevaleçam sobre a categoria legada
    if (cat.sectionId && cat.sectionOrder && cat.sectionOrder < acc[groupName].order) {
      acc[groupName].order = cat.sectionOrder;
      acc[groupName].id = cat.sectionId;
      acc[groupName].name = cat.sectionName;
    }
    
    acc[groupName].categories.push(cat);
    return acc;
  }, {});

  const sortedSections = Object.values(sectionsMap).sort((a, b) => a.order - b.order);

  const MAIN_SECTIONS = ["SALA DE ESTAR", "SALA DE JANTAR", "COZINHA"];
  
  const mainSections = sortedSections.filter(sec => MAIN_SECTIONS.includes(sec.name.toUpperCase()));
  const otherSections = sortedSections.filter(sec => !MAIN_SECTIONS.includes(sec.name.toUpperCase()));

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <Link 
          to="/" 
          className="logo" 
          style={{ display: 'flex', alignItems: 'center' }} 
          onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <img src="/images/Logomarca/eu_preciso_dessa_logo,_mas_202605291133.png" alt="Estúdio Móveis" className="header-logo-img" />
        </Link>
        
        <nav className={`nav-links ${isMenuOpen ? 'nav-active' : ''}`}>
          {mainSections.map(section => (
            <SectionDropdown 
              key={section.id} 
              section={section} 
              setIsMenuOpen={setIsMenuOpen} 
              isMobile={isMobile}
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
              pinnedDropdown={pinnedDropdown}
              setPinnedDropdown={setPinnedDropdown}
            />
          ))}
          
          {otherSections.length > 0 && (
            isMobile ? (
              otherSections.map(section => (
                <SectionDropdown 
                  key={section.id} 
                  section={section} 
                  setIsMenuOpen={setIsMenuOpen} 
                  isMobile={isMobile}
                  activeDropdown={activeDropdown}
                  setActiveDropdown={setActiveDropdown}
                  pinnedDropdown={pinnedDropdown}
                  setPinnedDropdown={setPinnedDropdown}
                />
              ))
            ) : (
              <MaisSecoesDropdown 
                sections={otherSections} 
                setIsMenuOpen={setIsMenuOpen} 
                isMobile={isMobile} 
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
                pinnedDropdown={pinnedDropdown}
                setPinnedDropdown={setPinnedDropdown}
              />
            )
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
            <div className="footer-categories-grid">
              {categories.map(cat => (
                <Link 
                  key={cat.id} 
                  to={`/categoria/${cat.id}`} 
                  className="footer-category-link"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
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

export const ProductCard = ({ id, title, description, image, price, hideDescription = false }) => {
  return (
    <div className="product-card">
      <Link to={`/produto/${id}`} className="product-image-container" style={{ display: 'block' }}>
        <img src={image} alt={title} className="product-image" />
      </Link>
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        {!hideDescription && (
          <p className="product-desc" style={{ marginBottom: '1rem' }}>{description}</p>
        )}
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
          <ProductCard key={prod.id} {...prod} hideDescription={true} />
        ))}
      </div>
    </section>
  );
};

export const ProductCarousel = ({ title, subtitle, products, categoryId }) => {
  const carouselRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [products]);

  const displayProducts = products.slice(0, 6);
  const hasMore = products.length > 6;

  const scroll = (direction) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.querySelector('.product-card')?.offsetWidth || 300;
      const gap = 32; // 2rem
      const scrollAmount = direction === 'left' ? -(cardWidth + gap) : (cardWidth + gap);
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const onMouseDown = (e) => {
    setIsDown(true);
    setIsDragging(false);
    if (carouselRef.current) {
      carouselRef.current.classList.add('active-drag');
      setStartX(e.pageX - carouselRef.current.offsetLeft);
      setScrollLeftState(carouselRef.current.scrollLeft);
    }
  };

  const onMouseLeave = () => {
    setIsDown(false);
    setIsDragging(false);
    if (carouselRef.current) carouselRef.current.classList.remove('active-drag');
  };

  const onMouseUp = () => {
    setIsDown(false);
    if (carouselRef.current) carouselRef.current.classList.remove('active-drag');
  };

  const onMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    setIsDragging(true);
    if (carouselRef.current) {
      const x = e.pageX - carouselRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      carouselRef.current.scrollLeft = scrollLeftState - walk;
    }
  };

  // Prevent link click if we were dragging
  const handleCaptureClick = (e) => {
    if (isDragging) {
      e.stopPropagation();
      e.preventDefault();
    }
  };

  return (
    <section className="container section">
      {title && (
        <div className="section-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', width: '100%', alignItems: 'center', gap: '1rem' }}>
            <div className="section-title-line" style={{ flex: 1 }}></div>
            <h2 className="section-title" style={{ marginBottom: 0 }}>{title}</h2>
            <div className="section-title-line" style={{ flex: 1 }}></div>
          </div>
        </div>
      )}
      {subtitle && <p className="section-subtitle text-center" style={{ marginTop: '-1.5rem', marginBottom: '3rem' }}>{subtitle}</p>}
      
      <div className="carousel-wrapper" style={{ position: 'relative' }}>
        {canScrollLeft && (
          <button 
            className="carousel-nav-btn prev-btn" 
            onClick={() => scroll('left')}
          >
            <ChevronLeft size={24} />
          </button>
        )}
        
        <div 
          className="product-carousel" 
          ref={carouselRef}
          onScroll={checkScroll}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          onClickCapture={handleCaptureClick}
        >
          {displayProducts.map((prod) => (
            <ProductCard key={prod.id} {...prod} />
          ))}
          {hasMore && (
            <Link to={`/categoria/${categoryId}`} className="view-all-card">
              <ArrowRight size={48} style={{ marginBottom: '1rem', color: 'var(--color-accent)' }} />
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)' }}>Ver todos</h3>
              <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Explore todos os produtos desta categoria</p>
            </Link>
          )}
        </div>

        {canScrollRight && (
          <button 
            className="carousel-nav-btn next-btn" 
            onClick={() => scroll('right')}
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>
    </section>
  );
};
