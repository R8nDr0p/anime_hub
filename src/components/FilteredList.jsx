import Card from "./Card";

function FilteredList({ filterInfoData, handleID, isLoading, isError }) {
  console.log(filterInfoData);

  return (
    <div style={{ backgroundColor: "#121212" }}>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Filtered List</h2>
            {/* Display the filtered list */}
          </div>
        </div>
        <div className="row row-cols-sm-2 row-cols-lg-3">
          {isLoading ? (
            <div>
              <img
                src="https://cdn.mos.cms.futurecdn.net/aetVnhHUsWWtPxZ2E5TKMg.gif"
                alt=""
              />
            </div>
          ) : isError ? (
            <h1>{isError}</h1>
          ) : (
            filterInfoData &&
            filterInfoData.map((item) => (
              <Card key={item.mal_id} item={item} handleID={handleID} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default FilteredList;
