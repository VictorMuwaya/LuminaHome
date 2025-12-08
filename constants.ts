import { Product, Category } from './types';

export const BUSINESS_NAME = "Lumina Home";
export const BUSINESS_PHONE = "+1 (555) 123-4567";
export const BUSINESS_WHATSAPP = "15551234567"; // No format for link
export const BUSINESS_ADDRESS = "123 Artisan Avenue, Design District, CA 90210";
export const BUSINESS_COORDINATES = { lat: 34.0522, lng: -118.2437 };

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Eames Style Lounge Chair',
    price: 850,
    category: Category.FURNITURE,
    description: 'A classic mid-century modern design featuring premium leather and molded plywood.',
    imageUrl: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    name: 'Minimalist Oak Desk',
    price: 450,
    category: Category.FURNITURE,
    description: 'Clean lines and solid oak construction make this desk perfect for any modern workspace.',
    imageUrl: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    name: 'Ceramic Pendant Light',
    price: 120,
    category: Category.LIGHTING,
    description: 'Hand-crafted ceramic shade with a warm, diffuse glow.',
    imageUrl: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    name: 'Velvet Accent Pillow',
    price: 45,
    category: Category.DECOR,
    description: 'Luxuriously soft velvet pillow in deep emerald green.',
    imageUrl: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '5',
    name: 'Abstract Canvas Print',
    price: 180,
    category: Category.DECOR,
    description: 'Large format abstract art print, framed in natural wood.',
    imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '6',
    name: 'Matte Black Kettle',
    price: 85,
    category: Category.KITCHEN,
    description: 'Precision pour-over kettle with a sleek matte black finish.',
    imageUrl: 'https://images.unsplash.com/photo-1564600947761-12f559798033?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '7',
    name: 'Scandinavian Sofa',
    price: 1200,
    category: Category.FURNITURE,
    description: 'Three-seater sofa upholstered in durable grey fabric with wooden legs.',
    imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '8',
    name: 'Brass Table Lamp',
    price: 210,
    category: Category.LIGHTING,
    description: 'Vintage-inspired brass table lamp with an adjustable arm.',
    imageUrl: 'https://images.unsplash.com/photo-1507473888900-52e1adad5420?auto=format&fit=crop&w=800&q=80'
  }
];