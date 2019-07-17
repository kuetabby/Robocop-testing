import React from "react";

const SearchBox = ({ searchChange, values }) => {
  return (
    <div className="pa2">
      <input
        type="text"
        placeholder="Search Robot"
        className="pa3 ba b--green bg-lightest-blue"
        onChange={searchChange}
        value={values}
        data-testid="search"
      />
    </div>
  );
};

export default SearchBox;
