import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById, categories } from '../data/products';
import { WHATSAPP_LINK, getWhatsAppLink } from '../components/SharedComponents';
import { ArrowLeft, MessageCircle, ShieldCheck, Truck } from 'lucide-react';

export const ProductPage = () => {
  const { productId } = useParams();
  const product = getProductById(productId);
  const [activeImage, setActiveImage] = useState('');

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
  const hasGallery = product.images && product.images.length > 0;

  return (
    <main style={{ minHeight: '80vh', paddingTop: '100px', paddingBottom: '4rem' }}>
      <div className="container">
        <Link to={`/categoria/${product.categoryId}`} className="btn btn-outline" style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.5rem 1rem' }}>
          <ArrowLeft size={16} /> Voltar para {category?.name || 'Categoria'}
        </Link>
        
        <div className="product-detail-grid">
          
          <div className="product-gallery">
            <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-medium)', marginBottom: '1.5rem', backgroundColor: '#f0f0f0' }}>
              <img src={activeImage} alt={product.title} style={{ width: '100%', height: 'auto', display: 'block', minHeight: '400px', objectFit: 'cover' }} />
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
                      aspectRatio: '1/1'
                    }}
                  >
                    <img src={img} alt={`${product.title} ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '3rem' }}>
              {product.longDescription || product.description}
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
              <a 
                href={getWhatsAppLink(`Olá! Gostaria de mais informações sobre o produto: ${product.title}`)} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary" 
                style={{ padding: '1rem', width: '100%', backgroundColor: '#25D366', borderColor: '#25D366' }}
              >
                <MessageCircle size={20} /> Comprar Agora
              </a>
            </div>
            
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--color-text-muted)' }}>
                <ShieldCheck size={20} style={{ color: 'var(--color-accent)' }} />
                <span style={{ fontSize: '0.9rem' }}>Garantia estendida Estúdio Móveis</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--color-text-muted)' }}>
                <Truck size={20} style={{ color: 'var(--color-accent)' }} />
                <span style={{ fontSize: '0.9rem' }}>Entrega especializada para todo o Brasil</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
};
