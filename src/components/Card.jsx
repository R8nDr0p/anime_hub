import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function Card({ item, handleID }) {
  const navigate = useNavigate();

  const handleClick = () => {
    handleID(item.mal_id);
    navigate(`/info-page?info=${item.mal_id}`);
  };

  useEffect(() => {
    Aos.init();
  }, []);
  // console.log(item);
  return (
    <>
      <div
        className="cols mt-4 text-center"
        data-aos="fade-up-right"
        data-aos-duration="3000"
      >
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
            <button onClick={handleClick} className=" btn-custom">
              Learn more...
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
