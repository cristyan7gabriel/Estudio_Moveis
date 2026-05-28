import React, { createContext, useState, useEffect } from 'react';
import { client } from '../sanity';
import { products as localProducts, categories as localCategories } from '../data/products';
import { LoadingScreen } from '../components/LoadingScreen';

export const ProductsContext = createContext({
  products: [],
  categories: [],
  getProductsByCategory: () => [],
  getProductById: () => null,
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(localProducts);
  const [categories, setCategories] = useState(localCategories);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSanityData = async () => {
      try {
        const queryCategories = `*[_type == "category"]{
          "id": _id,
          "name": name
        }`;
        
        const queryProducts = `*[_type == "product"]{
          "id": id.current,
          title,
          description,
          longDescription,
          price,
          "categoryId": categoryId->_id,
          "image": image.asset->url,
          "images": images[].asset->url,
          especificacoes_mesa,
          especificacoes_cadeira,
          especificacoes_cozinha,
          especificacoes_gerais
        }`;

        const [sanityCategories, sanityProducts] = await Promise.all([
          client.fetch(queryCategories),
          client.fetch(queryProducts)
        ]);

        const combinedCategories = [...localCategories];
        sanityCategories.forEach(sc => {
          if (!combinedCategories.find(c => c.id === sc.id)) {
            combinedCategories.push(sc);
          }
        });

        const combinedProducts = [...localProducts];
        sanityProducts.forEach(sp => {
          if (!combinedProducts.find(p => p.id === sp.id)) {
            combinedProducts.push(sp);
          }
        });

        setCategories(combinedCategories);
        setProducts(combinedProducts);
      } catch (error) {
        console.error("Erro ao buscar dados do Sanity:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSanityData();
  }, []);

  const getProductsByCategory = (categoryId) => products.filter(p => p.categoryId === categoryId);
  const getProductById = (id) => products.find(p => p.id === id);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <ProductsContext.Provider value={{ products, categories, getProductsByCategory, getProductById }}>
      {children}
    </ProductsContext.Provider>
  );
};
