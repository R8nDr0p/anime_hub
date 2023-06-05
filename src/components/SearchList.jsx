import Card from "./Card";

function SearchList({ data, searchLoading }) {
  console.log(data);
  if (!data) {
    return null;
  }

  if (data.length === 0) {
    return <h2>No results found.</h2>;
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Results:</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {searchLoading ? (
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              data.length > 0 &&
              data.map((item) => {
                return <Card key={item.mal_id} item={item} />;
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchList;
