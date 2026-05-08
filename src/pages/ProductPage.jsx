import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById, categories } from '../data/products';
import { WHATSAPP_LINK } from '../components/SharedComponents';
import { ArrowLeft, MessageCircle, ShieldCheck, Truck } from 'lucide-react';

export const ProductPage = () => {
  const { productId } = useParams();
  const product = getProductById(productId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  if (!product) {
    return (
      <main className="container section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2 className="section-title">Produto não encontrado</h2>
      </main>
    );
  }

  const category = categories.find(c => c.id === product.categoryId);

  return (
    <main style={{ minHeight: '80vh', paddingTop: '100px', paddingBottom: '4rem' }}>
      <div className="container">
        <Link to={`/categoria/${product.categoryId}`} className="btn btn-outline" style={{ marginBottom: '2rem', display: 'inline-flex', padding: '0.5rem 1rem' }}>
          <ArrowLeft size={16} /> Voltar para {category?.name || 'Categoria'}
        </Link>
        
        <div className="product-detail-grid">
          
          <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-medium)' }}>
            <img src={product.image} alt={product.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
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
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '1rem', width: '100%' }}>
                <MessageCircle size={20} /> Falar com Consultor
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
