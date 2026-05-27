import fs from 'fs';
import { categories, products } from './src/data/products.js';

fs.writeFileSync(
  'C:/Job/testes/Sanity/Sanity_Estudio_Moveis/sanityestudiomoveis/data.json',
  JSON.stringify({ categories, products }, null, 2)
);
console.log('Data dumped to data.json');
