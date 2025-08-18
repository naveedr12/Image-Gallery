import React from 'react';
import { Image } from '../types/gallery';

interface ImageGridProps {
  images: Image[];
  onImageClick: (index: number) => void;
}

const ImageGrid: React.FC<ImageGridProps> = ({ images, onImageClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image, index) => (
        <div
          key={image.id}
          className="group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          onClick={() => onImageClick(index)}
        >
          <div className="relative overflow-hidden">
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-lg font-semibold mb-1">{image.caption}</h3>
              <span className="text-sm px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm">
                {image.category}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;