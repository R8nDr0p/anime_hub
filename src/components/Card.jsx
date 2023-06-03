import { Link } from "react-router-dom";

function Card({ item }) {
  console.log(item);
  return (
    <>
      <div className="cols mt-4 text-center">
        <div
          className="card text-bg-dark"
          style={{ width: "20rem", height: "36rem" }}
        >
          <img
            style={{ height: "25rem" }}
            src={item.images.jpg.large_image_url}
            className="card-img-top img-fluid"
            alt={item.title}
          />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text text-truncate">{item.synopsis}</p>
            <a href="#" className="btn btn-primary">
              Learn more...
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
