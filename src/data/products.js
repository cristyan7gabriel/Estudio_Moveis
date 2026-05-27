export const categories = [];

export const products = [];

export const getFeaturedProducts = () => products.filter(p => p.featured);
export const getProductsByCategory = (categoryId) => products.filter(p => p.categoryId === categoryId);
export const getProductById = (id) => products.find(p => p.id === id);
