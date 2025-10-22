import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className=" flex flex-wrap  justify-center ... text-indigo-500 text-sm font-medium  ">
      <h3>Filter by Genre</h3>
      <div className=" ">
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