import React from "react";
import PropTypes from "prop-types";

const SearchForm = ({ searchText, setSearchText, onSubmit }) => {
  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      return onSubmit();
    }
    return null;
  };

  return (
    <div className="search-form">
      <input
        type="text"
        onChange={handleInputChange}
        onKeyPress={handleEnter}
        value={searchText}
      />
      <button type="submit" id="search-button" onClick={onSubmit}>
        Search
      </button>
    </div>
  );
};

SearchForm.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
