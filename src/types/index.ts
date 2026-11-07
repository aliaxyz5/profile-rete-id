export interface Product {
  id: string;
  name: string;
  category: 'sangkar' | 'pakan' | 'vitamin' | 'aksesoris' | 'art_alam';
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  badge?: string;
  image: string;
  shortDesc: string;
  description: string;
  features: string[];
  inStock: boolean;
  externalUrl?: string;
  externalLabel?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  quote: string;
  rating: number;
  birdType?: string;
}

export interface CompanyInfo {
  name: string;
  shortName: string;
  creditBy: string;
  since: string;
  address: string;
  district: string;
  regency: string;
  province: string;
  postalCode: string;
  phone: string;
  phoneDisplay: string;
  hours: string;
  status: string;
  tiktokUrl?: string;
  shopeeUrl?: string;
}
