import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Card({ item, handleID }) {
  const navigate = useNavigate();

  const [currentID, setCurrentID] = useState("");

  const handleClick = () => {
    // setCurrentID(item.mal_id);
    handleID(item.mal_id);
    console.log(handleID);
    navigate("/info-page");
  };

  console.log(item);
  return (
    <>
      <div className="cols mt-4 text-center">
        <div
          className="card text-bg-dark"
          style={{ width: "20rem", height: "40rem" }}
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
            <p className="card-text">Aired: {item.aired.string}</p>
            <button
              onClick={handleClick}
              className="btn"
              style={{ backgroundColor: "darkslateblue", color: "white" }}
            >
              Learn more...
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
