import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductGrid } from '../components/SharedComponents';
import { getProductsByCategory, categories } from '../data/products';

export const CategoryPage = () => {
  const { categoryId } = useParams();
  const products = getProductsByCategory(categoryId);
  const category = categories.find(c => c.id === categoryId);

  if (!category) {
    return (
      <main className="container section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2 className="section-title">Categoria não encontrada</h2>
      </main>
    );
  }

  return (
    <main style={{ minHeight: '80vh', paddingTop: '100px' }}>
      <div className="container">
        <div style={{ marginBottom: '3rem', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '1rem' }}>
          <h1 className="section-title" style={{ marginBottom: '0.5rem' }}>{category.name}</h1>
          <p className="section-subtitle" style={{ margin: 0, textAlign: 'left' }}>
            Explore nossa coleção exclusiva de {category.name.toLowerCase()}.
          </p>
        </div>
      </div>
      
      {products.length > 0 ? (
        <ProductGrid products={products} />
      ) : (
        <div className="container">
          <p style={{ textAlign: 'center', color: 'var(--color-text-muted)' }}>Nenhum produto encontrado nesta categoria no momento.</p>
        </div>
      )}
    </main>
  );
};
