import React, { useContext, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProductGrid } from '../components/SharedComponents';
import { ProductsContext } from '../context/ProductsContext';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const CategoryPage = () => {
  const { categoryId } = useParams();
  const { categories, getProductsByCategory } = useContext(ProductsContext);
  
  const category = categories.find(c => c.slug === categoryId || c.id === categoryId);
  const products = category ? getProductsByCategory(category.id) : [];

  const sectionsMap = categories.reduce((acc, cat) => {
    const groupName = (cat.sectionName || cat.name).toUpperCase();
    if (!acc[groupName]) {
      acc[groupName] = { id: cat.sectionId || cat.id, name: cat.sectionName || cat.name, order: cat.sectionOrder || 99, categories: [] };
    }
    if (cat.sectionId && cat.sectionOrder && cat.sectionOrder < acc[groupName].order) {
      acc[groupName].order = cat.sectionOrder;
      acc[groupName].id = cat.sectionId;
      acc[groupName].name = cat.sectionName;
    }
    acc[groupName].categories.push(cat);
    return acc;
  }, {});

  const sortedSections = Object.values(sectionsMap).sort((a, b) => a.order - b.order);

  const parentSection = category ? sortedSections.find(sec => sec.categories.some(c => c.id === category.id)) : null;

  const [expandedSection, setExpandedSection] = useState(
    parentSection ? parentSection.id : null
  );

  const toggleSection = (secId) => {
    setExpandedSection(prev => prev === secId ? null : secId);
  };

  if (!category) {
    return (
      <main className="container section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2 className="section-title">Categoria não encontrada</h2>
      </main>
    );
  }

  return (
    <main style={{ minHeight: '80vh', paddingTop: '120px' }}>
      <div className="container">
        <div className="category-page-layout">
          
          <aside className="category-sidebar">
            <div className="breadcrumbs">
              <Link to="/">Início</Link>
              {parentSection && (
                <>
                  <span className="separator">/</span>
                  <span className="current">{parentSection.name}</span>
                </>
              )}
            </div>
            
            <h3 className="sidebar-title">Categorias</h3>
            <ul className="sidebar-menu">
              {sortedSections.map(sec => {
                const hasSubcategories = sec.categories.length > 1 || (sec.categories.length === 1 && sec.categories[0].name !== sec.name);
                const isExpanded = expandedSection === sec.id;
                const isActive = parentSection && parentSection.id === sec.id;

                if (!hasSubcategories && sec.categories.length === 1) {
                  const cat = sec.categories[0];
                  return (
                    <li key={sec.id}>
                      <Link 
                        to={`/categoria/${cat.slug || cat.id}`} 
                        className={`sidebar-link ${category.id === cat.id ? 'active' : ''}`}
                      >
                        {sec.name}
                      </Link>
                    </li>
                  );
                }

                return (
                  <li key={sec.id}>
                    <button 
                      className={`sidebar-btn ${isActive ? 'active' : ''}`} 
                      onClick={() => toggleSection(sec.id)}
                    >
                      {sec.name}
                      {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                    {isExpanded && (
                      <ul className="sidebar-submenu">
                        {sec.categories.map(cat => (
                          <li key={cat.id}>
                            <Link 
                              to={`/categoria/${cat.slug || cat.id}`}
                              className={category.id === cat.id ? 'active' : ''}
                            >
                              {cat.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </aside>

          <div className="category-content">
            <div className="section-header" style={{ marginBottom: '4rem', textAlign: 'left', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%' }}>
                <h1 className="section-title" style={{ marginBottom: 0 }}>{category.name}</h1>
                <div className="section-title-line" style={{ flex: 1 }}></div>
              </div>
            </div>
            
            {products.length > 0 ? (
              <ProductGrid products={products} />
            ) : (
              <p style={{ color: 'var(--color-text-muted)' }}>Nenhum produto encontrado nesta categoria no momento.</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};
