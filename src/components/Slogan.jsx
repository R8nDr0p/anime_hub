function Slogan() {
  const choices = ["Popular", "Upcoming", "Airing", "Favorite"];

  return (
    <>
      <div
        className="container-fluid"
        style={{ backgroundImage: "url(./rumbling.webp)" }}
      >
        <div className="row">
          <div className="col p-0">
            <h1
              className="text-center mb-0"
              style={{
                fontFamily: "Comic Neue, cursive",
              }}
            >
              "Where Anime Dreams Come to Life: <br /> Your Ultimate Destination
              for All Things Anime!"
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div
              class="btn-group"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              {choices.map((choice, index) => {
                <React.fragment></React.fragment>;
              })}
              <input
                type="radio"
                class="btn-check"
                name="btnradio"
                id="btnradio1"
                autocomplete="off"
              />
              <label class="btn btn-outline-dark" for="btnradio1">
                Popular
              </label>

              <input
                type="radio"
                class="btn-check"
                name="btnradio"
                id="btnradio2"
                autocomplete="off"
                defaultChecked
              />
              <label class="btn btn-outline-dark" for="btnradio2">
                Upcoming
              </label>

              <input
                type="radio"
                class="btn-check"
                name="btnradio"
                id="btnradio3"
                autocomplete="off"
              />
              <label class="btn btn-outline-dark" for="btnradio3">
                Airing
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slogan;
