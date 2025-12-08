export enum Category {
  FURNITURE = 'Furniture',
  LIGHTING = 'Lighting',
  DECOR = 'Decor',
  KITCHEN = 'Kitchen'
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  description: string;
  imageUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
