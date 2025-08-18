import React, { useState, useEffect } from 'react';
import { GalleryModel } from '../models/GalleryModel';
import { GalleryPresenter } from '../presenters/GalleryPresenter';
import { GalleryState } from '../types/gallery';
import FilterButtons from './FilterButtons';
import ImageGrid from './ImageGrid';
import Lightbox from './Lightbox';

const Gallery: React.FC = () => {
  const [model] = useState(() => new GalleryModel());
  const [presenter] = useState(() => new GalleryPresenter(model));
  const [state, setState] = useState<GalleryState>(model.getState());

  useEffect(() => {
    const unsubscribe = model.subscribe(() => {
      setState(model.getState());
    });

    return unsubscribe;
  }, [model]);

  const currentImage = state.currentImageIndex !== null 
    ? state.filteredImages[state.currentImageIndex]
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Image Gallery
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our curated collection of stunning images from nature, cityscapes, and people.
          </p>
        </div>

        {/* Filter Buttons */}
        <FilterButtons
          activeCategory={state.activeCategory}
          onCategoryChange={(category) => presenter.filterByCategory(category)}
        />

        {/* Image Grid */}
        <ImageGrid
          images={state.filteredImages}
          onImageClick={(index) => presenter.openLightbox(index)}
        />

        {/* Results count */}
        <div className="text-center mt-8 text-gray-500">
          Showing {state.filteredImages.length} image{state.filteredImages.length !== 1 ? 's' : ''}
          {state.activeCategory !== 'All' && ` in ${state.activeCategory}`}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        isOpen={state.isLightboxOpen}
        image={currentImage}
        onClose={() => presenter.closeLightbox()}
        onNext={() => presenter.goToNextImage()}
        onPrevious={() => presenter.goToPreviousImage()}
        currentIndex={state.currentImageIndex || 0}
        totalImages={state.filteredImages.length}
      />
    </div>
  );
};

export default Gallery;