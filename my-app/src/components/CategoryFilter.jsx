import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className=" flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 bg-pink-900 text-white px-6 py-4 rounded-2xl shadow-md ">
      <h3 className="text-sky-400 font-semibold text-lg">Filter by Genre</h3>
      <div className=" flex flex-wrap justify-center gap-3 space-x-2">
        <button 
          className={selectedCategory === '' ? 'active' : ''} 
          onClick={() => setSelectedCategory('')}
        >
          All
        </button>
        {categories.map(category => (
          <button 
            key={category} 
            className={  selectedCategory === category ? 'active' : ''}
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