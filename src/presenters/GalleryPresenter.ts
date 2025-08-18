import { GalleryModel } from '../models/GalleryModel';
import { FilterCategory } from '../types/gallery';

export class GalleryPresenter {
  constructor(private model: GalleryModel) {
    this.setupKeyboardListeners();
  }

  private setupKeyboardListeners(): void {
    document.addEventListener('keydown', (event) => {
      if (this.model.getState().isLightboxOpen) {
        switch (event.key) {
          case 'Escape':
            this.closeLightbox();
            break;
          case 'ArrowLeft':
            event.preventDefault();
            this.goToPreviousImage();
            break;
          case 'ArrowRight':
            event.preventDefault();
            this.goToNextImage();
            break;
        }
      }
    });
  }

  filterByCategory(category: FilterCategory): void {
    this.model.setActiveCategory(category);
  }

  openLightbox(imageIndex: number): void {
    this.model.openLightbox(imageIndex);
  }

  closeLightbox(): void {
    this.model.closeLightbox();
  }

  goToNextImage(): void {
    this.model.goToNextImage();
  }

  goToPreviousImage(): void {
    this.model.goToPreviousImage();
  }
}