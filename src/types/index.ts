export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'cuisine' | 'chambre' | 'robe'|'decoration'|'parfum';
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}