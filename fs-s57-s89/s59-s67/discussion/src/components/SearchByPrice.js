import React, { useState } from 'react';

const SearchByPrice = () => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [courses, setCourses] = useState([]);

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ minPrice, maxPrice }),
    };

    fetch('http://localhost:4000/courses/searchByPrice', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setCourses(data.courses);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="container">
      <h2>Search Courses by Price Range</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="minPrice" className="form-label">
            Min Price:
          </label>
          <input
            type="number"
            className="form-control"
            id="minPrice"
            value={minPrice}
            onChange={handleMinPriceChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="maxPrice" className="form-label">
            Max Price:
          </label>
          <input
            type="number"
            className="form-control"
            id="maxPrice"
            value={maxPrice}
            onChange={handleMaxPriceChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
      <h3>Search Results:</h3>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchByPrice;