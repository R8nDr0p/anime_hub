function FilteredList({ filterInfo }) {
  console.log(filterInfo);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Filtered List</h2>
            {/* Display the filtered list */}
            {filterInfo &&
              filterInfo.map((item) => (
                <div key={item.id}>
                  <h3>{item.title}</h3>
                  {/* Render other information about the item */}
                  <p>{item.description}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FilteredList;
