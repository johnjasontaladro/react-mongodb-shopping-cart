function SearchArea() {
  const handleCloseSearch = () => {
    const searchArea = document.querySelector(".search-area");
    searchArea.classList.remove("search-active");
  };
  return (
    <div className="search-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <span className="close-btn" onClick={handleCloseSearch}>
              <i className="fas fa-window-close"></i>
            </span>
            <div className="search-bar">
              <div className="search-bar-tablecell">
                <h3>Search For:</h3>
                <input type="text" placeholder="Keywords" />
                <button type="submit">
                  Search <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchArea;
