import React from 'react';

function Filter({ filter, handleFilterChange }) {
  return (
    <>
      <label htmlFor="example filter">Find contacts by name</label>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </>
  );
}

export default Filter;