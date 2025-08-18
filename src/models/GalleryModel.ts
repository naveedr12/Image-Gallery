import { Image, FilterCategory, GalleryState } from '../types/gallery';

export class GalleryModel {
  private state: GalleryState;
  private observers: (() => void)[] = [];

  constructor() {
    this.state = {
      images: this.getInitialImages(),
      filteredImages: [],
      activeCategory: 'All',
      currentImageIndex: null,
      isLightboxOpen: false,
    };
    
    this.state.filteredImages = this.state.images;
  }

  private getInitialImages(): Image[] {
    return [
      {
        id: '1',
        url: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Mountain Lake Reflection',
        category: 'Nature',
        alt: 'Beautiful mountain lake with reflection'
      },
      {
        id: '2',
        url: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'City Skyline at Night',
        category: 'City',
        alt: 'Urban skyline with lights'
      },
      {
        id: '3',
        url: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Happy Family Portrait',
        category: 'People',
        alt: 'Smiling family together'
      },
      {
        id: '4',
        url: 'https://images.pexels.com/photos/158607/cairn-fog-mystical-background-158607.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Misty Forest Path',
        category: 'Nature',
        alt: 'Foggy forest with stone cairn'
      },
      {
        id: '5',
        url: 'https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Modern Architecture',
        category: 'City',
        alt: 'Contemporary building architecture'
      },
      {
        id: '6',
        url: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Portrait in Golden Hour',
        category: 'People',
        alt: 'Person in warm sunset lighting'
      },
      {
        id: '7',
        url: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Ocean Waves',
        category: 'Nature',
        alt: 'Ocean waves crashing on shore'
      },
      {
        id: '8',
        url: 'https://images.pexels.com/photos/374820/pexels-photo-374820.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Urban Street Scene',
        category: 'City',
        alt: 'Busy city street with traffic'
      },
      {
        id: '9',
        url: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Friends Laughing',
        category: 'People',
        alt: 'Group of friends enjoying time together'
      }
    ];
  }

  getState(): GalleryState {
    return { ...this.state };
  }

  subscribe(callback: () => void): () => void {
    this.observers.push(callback);
    return () => {
      this.observers = this.observers.filter(obs => obs !== callback);
    };
  }

  private notify(): void {
    this.observers.forEach(callback => callback());
  }

  setActiveCategory(category: FilterCategory): void {
    this.state.activeCategory = category;
    this.state.filteredImages = category === 'All' 
      ? this.state.images
      : this.state.images.filter(image => image.category === category);
    this.notify();
  }

  openLightbox(imageIndex: number): void {
    this.state.currentImageIndex = imageIndex;
    this.state.isLightboxOpen = true;
    this.notify();
  }

  closeLightbox(): void {
    this.state.isLightboxOpen = false;
    this.state.currentImageIndex = null;
    this.notify();
  }

  goToNextImage(): void {
    if (this.state.currentImageIndex !== null) {
      const nextIndex = (this.state.currentImageIndex + 1) % this.state.filteredImages.length;
      this.state.currentImageIndex = nextIndex;
      this.notify();
    }
  }

  goToPreviousImage(): void {
    if (this.state.currentImageIndex !== null) {
      const prevIndex = this.state.currentImageIndex === 0 
        ? this.state.filteredImages.length - 1 
        : this.state.currentImageIndex - 1;
      this.state.currentImageIndex = prevIndex;
      this.notify();
    }
  }
}