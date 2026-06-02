import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProductsContext } from '../context/ProductsContext';
import { WhatsAppDropdownBtn, ProductCarousel } from '../components/SharedComponents';
import { ArrowLeft, MessageCircle, ShieldCheck, Truck, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, X } from 'lucide-react';

export const ProductPage = () => {
  const { productId } = useParams();
  const { categories, products, getProductById, getProductsByCategory } = useContext(ProductsContext);
  const product = getProductById(productId);
  const [activeImage, setActiveImage] = useState('');
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [swipeOffset, setSwipeOffset] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [isDescExpanded, setIsDescExpanded] = useState(false);
  const [isSpecsExpanded, setIsSpecsExpanded] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (product) {
      setActiveImage(product.image);
    }
  }, [productId, product]);

  if (!product) {
    return (
      <main className="container section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2 className="section-title">Produto não encontrado</h2>
      </main>
    );
  }

  const category = categories.find(c => c.id === product.categoryId);
  let relatedProducts = getProductsByCategory(product.categoryId).filter(p => p.id !== product.id);
  
  if (relatedProducts.length < 6) {
    const additionalProducts = products.filter(p => 
      p.id !== product.id && !relatedProducts.some(rp => rp.id === p.id)
    );
    relatedProducts = [...relatedProducts, ...additionalProducts.slice(0, 8 - relatedProducts.length)];
  }

  const hasGallery = product.images && product.images.length > 0;

  const isVideo = (src) => src?.toLowerCase().endsWith('.mp4');

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsSwiping(true);
    setSwipeOffset(0);
  };

  const onTouchMove = (e) => {
    const currentX = e.targetTouches[0].clientX;
    setTouchEnd(currentX);
    if (touchStart) {
      setSwipeOffset(currentX - touchStart);
    }
  };

  const onTouchEnd = () => {
    setIsSwiping(false);
    setSwipeOffset(0);

    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if ((isLeftSwipe || isRightSwipe) && hasGallery) {
      const currentIndex = product.images.indexOf(activeImage);
      if (currentIndex === -1) return;
      
      let newIndex;
      if (isLeftSwipe) {
        // swipe left (next image)
        newIndex = currentIndex === product.images.length - 1 ? 0 : currentIndex + 1;
      } else {
        // swipe right (previous image)
        newIndex = currentIndex === 0 ? product.images.length - 1 : currentIndex - 1;
      }
      setActiveImage(product.images[newIndex]);
    }
  };

  const handlePrevImage = (e) => {
    if(e) e.stopPropagation();
    if (!hasGallery) return;
    const currentIndex = product.images.indexOf(activeImage);
    const newIndex = currentIndex === 0 ? product.images.length - 1 : currentIndex - 1;
    setActiveImage(product.images[newIndex]);
  };

  const handleNextImage = (e) => {
    if(e) e.stopPropagation();
    if (!hasGallery) return;
    const currentIndex = product.images.indexOf(activeImage);
    const newIndex = currentIndex === product.images.length - 1 ? 0 : currentIndex - (-1); // workaround for + acting as concat
    setActiveImage(product.images[newIndex]);
  };

  return (
    <main style={{ minHeight: '80vh', paddingTop: '100px', paddingBottom: '4rem' }}>
      <div className="container">
        <Link to={`/categoria/${product.categoryId}`} className="btn btn-outline" style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.5rem 1rem' }}>
          <ArrowLeft size={16} /> Voltar para {category?.name || 'Categoria'}
        </Link>
        
        <div className="product-detail-grid">
          
          <div className="product-gallery">
            <div style={{ position: 'relative' }}>
              <div 
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                onClick={() => setIsLightboxOpen(true)}
                style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-medium)', marginBottom: '1.5rem', backgroundColor: '#f0f0f0', touchAction: 'pan-y pinch-zoom', cursor: 'zoom-in' }}
              >
                <div style={{
                  transform: `translateX(${swipeOffset}px)`,
                  transition: isSwiping ? 'none' : 'transform 0.3s ease-out',
                  width: '100%',
                  height: '100%'
                }}>
                  {isVideo(activeImage) ? (
                    <video 
                      src={activeImage} 
                      controls 
                      autoPlay 
                      muted 
                      loop
                      style={{ width: '100%', height: 'auto', display: 'block', minHeight: '400px', objectFit: 'cover' }} 
                    />
                  ) : (
                    <img src={activeImage} alt={product.title} style={{ width: '100%', height: 'auto', display: 'block', minHeight: '400px', objectFit: 'cover' }} />
                  )}
                </div>
              </div>

              {hasGallery && product.images.length > 1 && (
                <>
                  <button 
                    onClick={handlePrevImage}
                    style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', backgroundColor: 'rgba(255,255,255,0.8)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10, boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}
                  >
                    <ChevronLeft size={24} style={{ color: 'var(--color-primary)' }} />
                  </button>
                  <button 
                    onClick={handleNextImage}
                    style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', backgroundColor: 'rgba(255,255,255,0.8)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10, boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}
                  >
                    <ChevronRight size={24} style={{ color: 'var(--color-primary)' }} />
                  </button>
                </>
              )}
            </div>
            
            {hasGallery && (
              <div className="product-thumbnails">
                {product.images.map((img, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setActiveImage(img)}
                    style={{ 
                      borderRadius: 'var(--radius-sm)', 
                      overflow: 'hidden', 
                      cursor: 'pointer',
                      border: activeImage === img ? '2px solid var(--color-accent)' : '2px solid transparent',
                      transition: 'var(--transition-base)',
                      aspectRatio: '1/1',
                      position: 'relative'
                    }}
                  >
                    {isVideo(img) ? (
                      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                        <video src={img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.2)' }}>
                          <div style={{ width: '24px', height: '24px', borderRadius: '50%', border: '2px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ width: 0, height: 0, borderTop: '5px solid transparent', borderBottom: '5px solid transparent', borderLeft: '8px solid white', marginLeft: '2px' }}></div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <img src={img} alt={`${product.title} ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="product-detail-info">
            <span style={{ textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px', color: 'var(--color-accent)', fontWeight: 'bold' }}>
              {category?.name}
            </span>
            <h1 className="product-detail-title">
              {product.title}
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
              {product.price}
            </p>
            
            {(() => {
              const descText = product.longDescription || product.description || '';
              const shouldTruncateDesc = descText.length > 220;
              const displayedDesc = (!isDescExpanded && shouldTruncateDesc)
                ? `${descText.substring(0, 220)}...`
                : descText;

              return (
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: shouldTruncateDesc ? '1.5rem' : '2.5rem', whiteSpace: 'pre-line' }}>
                  {displayedDesc}
                  {shouldTruncateDesc && (
                    <button 
                      onClick={() => setIsDescExpanded(!isDescExpanded)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--color-accent)',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        marginLeft: '0.5rem',
                        textDecoration: 'underline',
                        fontSize: '1rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '2px',
                        padding: 0
                      }}
                    >
                      {isDescExpanded ? 'Ver menos' : 'Ver mais'}
                      {isDescExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                  )}
                </p>
              );
            })()}

            {(() => {
              const hasSpecs = product.especificacoes_mesa || product.especificacoes_cadeira || product.especificacoes_cozinha || product.especificacoes_gerais;
              if (!hasSpecs) return null;

              const renderSpecList = (specs) => {
                if (!specs) return null;
                return (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.8rem 1.5rem', margin: '0.5rem 0' }}>
                    {Object.entries(specs).map(([key, val]) => {
                      if (val === null || val === undefined || key === '_type' || key === '_key') return null;

                      if (key === 'atributos_extras' && Array.isArray(val)) {
                        return val.map((extra, idx) => {
                          if (!extra.chave) return null;
                          return (
                            <div key={`extra-${idx}`} style={{ display: 'flex', flexDirection: 'column', borderBottom: '1px solid rgba(0,0,0,0.06)', paddingBottom: '0.5rem' }}>
                              <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: '500' }}>{extra.chave}</span>
                              <span style={{ fontSize: '0.95rem', color: 'var(--color-text)', fontWeight: '600', marginTop: '2px' }}>{extra.valor || '-'}</span>
                            </div>
                          );
                        });
                      }

                      let label = key
                        .replace(/_/g, ' ')
                        .replace(/\b\w/g, c => c.toUpperCase());
                      
                      // Nice translations
                      if (label === 'Formato') label = 'Formato';
                      else if (label === 'Medida' || label === 'Medidas' || label === 'Medida Diâmetro' || label === 'Dimensoes') label = 'Dimensões';
                      else if (label === 'Tampo' || label === 'Material Tampo') label = 'Acabamento do Tampo';
                      else if (label === 'Base') label = 'Estrutura da Base';
                      else if (label === 'Modelo') label = 'Modelo';
                      else if (label === 'Quantidade') label = 'Quantidade';
                      else if (label === 'Estrutura') label = 'Estrutura';
                      else if (label === 'Tecido' || label === 'Revestimento' || label === 'Opcoes Tecido') label = 'Revestimento / Tecido';
                      else if (label === 'Uso Indicado') label = 'Ambiente Indicado';
                      else if (label === 'Capacidade') label = 'Capacidade';
                      else if (label === 'Material') label = 'Material';
                      else if (label === 'Cor') label = 'Cor';
                      else if (label === 'Estilo') label = 'Estilo';
                      else if (label === 'Altura') label = 'Altura';
                      else if (label === 'Largura') label = 'Largura';
                      else if (label === 'Profundidade') label = 'Profundidade';

                      let displayVal = '';
                      if (val && typeof val === 'object' && !Array.isArray(val)) {
                        displayVal = Object.entries(val)
                          .map(([k, v]) => `${k.replace(/\b\w/g, c => c.toUpperCase())}: ${v}`)
                          .join(' | ');
                      } else if (Array.isArray(val)) {
                        displayVal = val.join(', ');
                      } else {
                        displayVal = String(val);
                      }

                      return (
                        <div key={key} style={{ display: 'flex', flexDirection: 'column', borderBottom: '1px solid rgba(0,0,0,0.06)', paddingBottom: '0.5rem' }}>
                          <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: '500' }}>{label}</span>
                          <span style={{ fontSize: '0.95rem', color: 'var(--color-text)', fontWeight: '600', marginTop: '2px' }}>{displayVal}</span>
                        </div>
                      );
                    })}
                  </div>
                );
              };

              return (
                <div style={{
                  marginBottom: '2.5rem',
                  backgroundColor: '#fcfaf6',
                  border: '1px solid rgba(212, 175, 55, 0.25)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem 1.5rem',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.015)'
                }}>
                  <div 
                    onClick={() => setIsSpecsExpanded(!isSpecsExpanded)}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer',
                      userSelect: 'none'
                    }}
                  >
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 'bold', color: 'var(--color-text)', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <ShieldCheck size={20} style={{ color: 'var(--color-accent)' }} /> Especificações Técnicas
                    </h3>
                    <button
                      type="button"
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--color-accent)',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        fontSize: '0.95rem',
                        padding: 0,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '2px'
                      }}
                    >
                      {isSpecsExpanded ? 'Ocultar' : 'Ver mais'}
                      {isSpecsExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                  </div>

                  {isSpecsExpanded && (
                    <div style={{ marginTop: '1.5rem' }}>
                      {product.especificacoes_mesa && (
                        <div style={{ marginBottom: '1.5rem' }}>
                          <h4 style={{ fontSize: '0.95rem', fontWeight: 'bold', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid rgba(212, 175, 55, 0.3)', paddingBottom: '0.3rem', marginBottom: '0.8rem' }}>
                            Especificações da Mesa
                          </h4>
                          {renderSpecList(product.especificacoes_mesa)}
                        </div>
                      )}
                      {product.especificacoes_cadeira && (
                        <div style={{ marginBottom: '1.5rem' }}>
                          <h4 style={{ fontSize: '0.95rem', fontWeight: 'bold', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid rgba(212, 175, 55, 0.3)', paddingBottom: '0.3rem', marginBottom: '0.8rem' }}>
                            Especificações das Cadeiras
                          </h4>
                          {renderSpecList(product.especificacoes_cadeira)}
                        </div>
                      )}
                      {product.especificacoes_cozinha && (
                        <div style={{ marginBottom: '1.5rem' }}>
                          <h4 style={{ fontSize: '0.95rem', fontWeight: 'bold', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid rgba(212, 175, 55, 0.3)', paddingBottom: '0.3rem', marginBottom: '0.8rem' }}>
                            Especificações da Cozinha
                          </h4>
                          {renderSpecList(product.especificacoes_cozinha)}
                        </div>
                      )}
                      {product.especificacoes_gerais && (
                        <div>
                          <h4 style={{ fontSize: '0.95rem', fontWeight: 'bold', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid rgba(212, 175, 55, 0.3)', paddingBottom: '0.3rem', marginBottom: '0.8rem' }}>
                            Especificações do Produto
                          </h4>
                          {Array.isArray(product.especificacoes_gerais) ? (
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.8rem 1.5rem', margin: '0.5rem 0' }}>
                              {product.especificacoes_gerais.map((spec, idx) => {
                                if (!spec.chave) return null;
                                return (
                                  <div key={idx} style={{ display: 'flex', flexDirection: 'column', borderBottom: '1px solid rgba(0,0,0,0.06)', paddingBottom: '0.5rem' }}>
                                    <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: '500' }}>{spec.chave}</span>
                                    <span style={{ fontSize: '0.95rem', color: 'var(--color-text)', fontWeight: '600', marginTop: '2px' }}>{spec.valor || '-'}</span>
                                  </div>
                                );
                              })}
                            </div>
                          ) : (
                            renderSpecList(product.especificacoes_gerais)
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })()}
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
              <WhatsAppDropdownBtn 
                message={`Olá! Gostaria de mais informações sobre o produto: ${product.title}`}
                className="btn btn-primary" 
                style={{ padding: '1rem', width: '100%', backgroundColor: '#25D366', borderColor: '#25D366', color: '#fff', display: 'flex', justifyContent: 'center' }}
              >
                <MessageCircle size={20} /> COMPRAR AGORA
              </WhatsAppDropdownBtn>
            </div>
            
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--color-text-muted)' }}>
                <ShieldCheck size={20} style={{ color: 'var(--color-accent)' }} />
                <span style={{ fontSize: '0.9rem' }}>Garantia estendida Estúdio Móveis</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--color-text-muted)' }}>
                <Truck size={20} style={{ color: 'var(--color-accent)' }} />
                <span style={{ fontSize: '0.9rem' }}>Entrega especializada para Goiânia e Região</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div style={{ marginTop: '2rem', paddingBottom: '2rem', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
          <ProductCarousel 
            title="Produtos Relacionados" 
            products={relatedProducts} 
            categoryId={product.categoryId} 
            compact={true}
          />
        </div>
      )}

      {isLightboxOpen && (
        <div 
          style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={() => setIsLightboxOpen(false)}
        >
          <button 
            style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: 'white', cursor: 'pointer', zIndex: 10000 }}
            onClick={() => setIsLightboxOpen(false)}
          >
            <X size={32} />
          </button>

          {hasGallery && product.images.length > 1 && (
            <>
              <button 
                onClick={handlePrevImage}
                style={{ position: 'absolute', left: '20px', background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10000, transition: 'background 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              >
                <ChevronLeft size={32} />
              </button>
              <button 
                onClick={handleNextImage}
                style={{ position: 'absolute', right: '20px', background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10000, transition: 'background 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              >
                <ChevronRight size={32} />
              </button>
            </>
          )}

          <div 
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '90vw', maxHeight: '90vh' }}
          >
            {isVideo(activeImage) ? (
              <video 
                src={activeImage} 
                controls 
                autoPlay 
                style={{ maxWidth: '100%', maxHeight: '90vh', objectFit: 'contain' }} 
              />
            ) : (
              <img 
                src={activeImage} 
                alt={product.title} 
                style={{ maxWidth: '100%', maxHeight: '90vh', objectFit: 'contain', userSelect: 'none' }} 
              />
            )}
          </div>
        </div>
      )}
    </main>
  );
};
