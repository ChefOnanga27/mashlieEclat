import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Set de Cuisson en Céramique',
    description: 'Set de cuisine en céramique haut de gamme avec revêtement antiadhésif, idéal pour une cuisine saine.',
    price: 20000,
    image: 'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1',
    category: 'cuisine'
  },
  {
    id: '2',
    name: 'Linge de Lit en Coton Bio',
    description: 'Ensemble de literie en coton bio 100% avec housse de couette et taies d’oreiller.',
    price: 15000,
    image: './public/image1.jpg',
    category: 'chambre'
  },
  {
    id: '3',
    name: 'Miroir Rond Minimaliste',
    description: 'Miroir mural rond élégant avec cadre en laiton, parfait pour toutes les pièces.',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013',
    category: 'decoration'
  },
  // Nouveaux articles
  {
    id: '4',
    name: 'Parfum Floral Élégant',
    description: 'Un parfum floral longue tenue avec des notes de rose, jasmin et musc.',
    price: 15000,
    image: './public/parfum2.jpg',
    category: 'parfum'
  },
  {
    id: '5',
    name: 'Robe de Soirée en Soie',
    description: 'Robe de soirée en soie élégante, parfaite pour des occasions spéciales.',
    price: 12000,
    image: './public/robe2.jpg',
    category: 'robes'
  },
  {
    id: '6',
    name: 'Draps en Coton Égyptien',
    description: 'Draps en coton égyptien doux et luxueux pour un confort ultime.',
    price: 30000,
    image: './public/drap3.jpg',
    category: 'decoration'
  },
  {
    id: '7',
    name: 'Parfum à la Vanille',
    description: 'parfum à la vanille apaisante, idéale pour des soirées relaxantes.',
    price: 25000,
    image: './public/parfum3.jpg',
    category: 'chambre'
  },
  {
    id: '8',
    name: 'Robe d’Été Décontractée',
    description: 'Robe légère et respirante, parfaite pour les journées chaudes.',
    price: 12000,
    image: './public/robe3.jpg',
    category: 'robes'
  },
{
  id: '9',
    name: 'Revetements canapé',
    description: 'Revetement salle à manger pour 6 pplaces',
    price: 81000,
    image: './public/revetement.jpg',
    category: 'decoration'
  },

];