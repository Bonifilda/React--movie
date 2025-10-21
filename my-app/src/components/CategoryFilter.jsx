import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="category-filter ">
      <h3>Filter by Genre</h3>
      <div className="category-buttons text-gray-800">
        <button 
          className={selectedCategory === '' ? 'active' : ''} 
          onClick={() => setSelectedCategory('')}
        >
          All
        </button>
        {categories.map(category => (
          <button 
            key={category} 
            className={selectedCategory === category ? 'active' : ''}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;