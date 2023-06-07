function InfoPage({ info, characterInfo, characterInfoLoading }) {
  console.log(info);
  console.log(characterInfo);

  const chunkSize = 3; // Number of cards per slide

  const chunks = characterInfo.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / chunkSize);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);
  return (
    <div className="bg-dark">
      <div
        className="container"
        style={{ backgroundImage: `url(./manga-bg-1.webp)` }}
      >
        <div className="row">
          <div className="col">
            <h1 className="text-bg-dark d-inline-block p-3 rounded">
              {info.title}
            </h1>
            <p className="text-bg-dark d-inline-block ms-2 p-2 rounded">
              `({info.title_japanese})`
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="text-bg-dark rounded p-3">{info.synopsis}</p>
          </div>
        </div>
        <div className="row row-cols-sm-1 row-cols-lg-2">
          <div className="col">
            <img src={info.images.jpg.large_image_url} alt="" />
          </div>
          <div className="col text-bg-dark rounded mt-3">
            {/* <h1>{info.title}</h1>
            <p>{info.title_japanese}</p> */}
            <p style={{ color: "red" }}>Aired: {info.aired.string}</p>
            <p>Season: {info.season}</p>
            <p>Type: {info.type} </p>
            <p>Popularity: {info.popularity}</p>
            <p>Episodes: {info.episodes}</p>
            <p>Rating: {info.rating}</p>
            <p>Background: {info.background}</p>
            <ul>
              <p>Genres:</p>

              {info.genres.map((genre) => {
                return <li>{genre.name}</li>;
              })}
            </ul>
            <p>
              Streaming:{" "}
              {info.streaming.map((site) => {
                return `${site.name},`;
              })}
            </p>
          </div>
        </div>
        <br />
        {characterInfoLoading ? (
          <h1>Loading...</h1>
        ) : (
          chunks && (
            <div
              id="myCarousel"
              className="carousel slide mb-5"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {chunks.map((chunk, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <div className="container">
                      <div className="row">
                        {chunk.map((person) => (
                          <div key={person.id} className="col-lg-4">
                            <div className="card">
                              <img
                                src={person.character.images.jpg.image_url}
                                className="card-img-top"
                                alt={person.character.name}
                              />
                              <div className="card-body">
                                <h5 className="card-title">
                                  {person.character.name}
                                </h5>
                                <p className="card-text">{person.role}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          )
        )}
        <div className="row">
          <div className="col-12">
            <h1 className="text-bg-dark d-inline-block px-3 rounded">
              Trailer:
            </h1>
            <div
              style={{
                position: "relative",
                paddingTop: "56.25%",
                height: 0,
                overflow: "hidden",
                maxWidth: "100%",
              }}
            >
              <iframe
                src={info.trailer.embed_url}
                width={"100%"}
                height={"100%"}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                allowFullScreen
                title="Anime Trailer"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoPage;
