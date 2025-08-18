import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Image } from '../types/gallery';

interface LightboxProps {
  isOpen: boolean;
  image: Image | null;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  currentIndex: number;
  totalImages: number;
}

const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  image,
  onClose,
  onNext,
  onPrevious,
  currentIndex,
  totalImages,
}) => {
  if (!isOpen || !image) return null;

  return (
    <div
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-5xl max-h-full" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
        >
          <X size={32} />
        </button>

        {/* Navigation buttons */}
        <button
          onClick={onPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2 hover:bg-black/70"
        >
          <ChevronLeft size={32} />
        </button>
        
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2 hover:bg-black/70"
        >
          <ChevronRight size={32} />
        </button>

        {/* Image */}
        <div className="relative">
          <img
            src={image.url}
            alt={image.alt}
            className="max-w-full max-h-[80vh] object-contain rounded-lg"
          />
          
          {/* Image info */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6 rounded-b-lg">
            <h3 className="text-xl font-semibold mb-2">{image.caption}</h3>
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm text-sm">
                {image.category}
              </span>
              <span className="text-sm opacity-75">
                {currentIndex + 1} / {totalImages}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;