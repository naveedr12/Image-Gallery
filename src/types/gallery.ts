export interface Image {
  id: string;
  url: string;
  caption: string;
  category: 'Nature' | 'City' | 'People';
  alt: string;
}

export type FilterCategory = 'All' | 'Nature' | 'City' | 'People';

export interface GalleryState {
  images: Image[];
  filteredImages: Image[];
  activeCategory: FilterCategory;
  currentImageIndex: number | null;
  isLightboxOpen: boolean;
}