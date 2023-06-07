import Card from "./Card";

function PopularList({ item, handleID }) {
  console.log(handleID);
  return (
    <>
      <div style={{ backgroundColor: "#121212" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <h1 style={{ color: "whitesmoke" }}>Popular</h1>
            </div>
          </div>
          <div className="row row-cols-sm-2 row-cols-lg-5">
            {item.map((item) => {
              return <Card key={item.mal_id} item={item} handleID={handleID} />; // Pass handleID here
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default PopularList;
