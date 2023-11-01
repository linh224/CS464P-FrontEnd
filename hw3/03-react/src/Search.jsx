import React from "react";
import { useState, useEffect } from "react";
import "./Search.css";

// Define a functional component named Search
function Search() {
  useEffect(() => {
    const url = `https://thronesapi.com/api/v2/Characters/`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSearchData(data);
      })
      .catch((err) => console.log(err));
  }, []);
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);

  // Define a function to handle the search input
  const handleSearch = (value) => {
    const response = searchData.filter((currentElement) =>
      currentElement.firstName.toLowerCase().includes(value)
    );
    setData(response);
  };
  // Render the component
  return (
    <div className="search-top">
      <h1>Thrones Characters</h1>
      <div class="search">
        <label for="search-character" class="search-label">
          Search Thrones Characters
        </label>
        <input
          id="search-character"
          type="text"
          placeholder="Enter first name to search..."
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <div className="search-result">
        {data.map((currentCharacter, idex) => (
          <div className="card" key={idex}>
            <div className="div-avatar">
              <img
                className="avatar"
                src={currentCharacter.imageUrl}
                alt="character avatar"
              />
            </div>
            <div>
              <p>Character ID: {currentCharacter.id} </p>
              <p>Full Name: {currentCharacter.fullName}</p>
              <p>Family: {currentCharacter.family}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Search;
