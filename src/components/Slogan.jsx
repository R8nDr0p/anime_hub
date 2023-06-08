import React, { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Slogan({ handleFilterChange }) {
  const choices = ["popular", "upcoming", "airing", "favorite"];
  const stateValues = {
    popular: "bypopularity",
    upcoming: "upcoming",
    airing: "airing",
    favorite: "favorite",
  };
  const [selectedChoice, setSelectedChoice] = useState("upcoming");
  const [selectedStateValue, setSelectedStateValue] = useState(
    stateValues[selectedChoice]
  );
  const handleChoiceChange = (event) => {
    const choice = event.target.value;
    setSelectedChoice(choice);
    setSelectedStateValue(stateValues[choice]);
    handleFilterChange(stateValues[choice]);
    console.log(stateValues[choice]);
  };

  return (
    <>
      <div
        className="container-fluid"
        style={{ backgroundImage: "url(./rumbling.webp)" }}
      >
        <div className="row" data-aos="zoom-out-down">
          <div className="col p-0">
            <h1
              className="text-center mb-0 fw-bold mb-5"
              style={{
                fontFamily: "Comic Neue, cursive",
                fontSize: "5rem",
              }}
            >
              "Where Anime Dreams Come to Life: <br /> Your Ultimate Destination
              for All Things Anime!"
            </h1>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col d-flex justify-content-center">
            <div
              class="btn-group"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              {choices.map((choice, index) => {
                return (
                  <React.Fragment>
                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id={`btnradio${index + 1}`}
                      value={choice}
                      checked={selectedChoice === choice}
                      onChange={handleChoiceChange}
                      autocomplete="off"
                    />
                    <label
                      className="btn btn-dark mb-2"
                      htmlFor={`btnradio${index + 1}`}
                    >
                      {choice.charAt(0).toUpperCase() + choice.slice(1)}
                    </label>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slogan;
