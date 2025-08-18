import React from 'react';
import { FilterCategory } from '../types/gallery';

interface FilterButtonsProps {
  activeCategory: FilterCategory;
  onCategoryChange: (category: FilterCategory) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ activeCategory, onCategoryChange }) => {
  const categories: FilterCategory[] = ['All', 'Nature', 'City', 'People'];
  
  const getCategoryColor = (category: FilterCategory): string => {
    switch (category) {
      case 'Nature': return 'text-green-600 bg-green-50 border-green-200';
      case 'City': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'People': return 'text-purple-600 bg-purple-50 border-purple-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getActiveCategoryColor = (category: FilterCategory): string => {
    switch (category) {
      case 'Nature': return 'bg-green-600 text-white border-green-600';
      case 'City': return 'bg-blue-600 text-white border-blue-600';
      case 'People': return 'bg-purple-600 text-white border-purple-600';
      default: return 'bg-gray-800 text-white border-gray-800';
    }
  };

  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-2 rounded-full border-2 font-medium transition-all duration-300 hover:scale-105 hover:shadow-md ${
            activeCategory === category
              ? getActiveCategoryColor(category)
              : getCategoryColor(category)
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;