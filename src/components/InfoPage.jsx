function InfoPage({ info }) {
  console.log(info);
  return (
    <div className="bg-dark">
      <div
        className="container"
        style={{ backgroundImage: `url(./manga-bg.jpg)` }}
      >
        <div className="row">
          <div className="col">
            <h1 className="text-bg-dark d-inline-block">{info.title}</h1>
            <p className="text-bg-dark d-inline-block ms-2">
              `({info.title_japanese})`
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="text-bg-dark rounded p-3">{info.synopsis}</p>
          </div>
        </div>
        <div className="row row-cols-sm-1 row-cols-lg-3">
          <div className="col">
            <img src={info.images.jpg.image_url} alt="" />
          </div>
          <div className="col text-bg-dark rounded">
            {/* <h1>{info.title}</h1>
            <p>{info.title_japanese}</p> */}
            <p style={{ color: "red" }}>Aired: {info.aired.string}</p>
            <p>Type: {info.type} </p>
            <p>Popularity: {info.popularity}</p>
            <p>Episodes: {info.episodes}</p>
            <p>Rating: {info.rating}</p>
            <p>
              Streaming:{" "}
              {info.streaming.map((site) => {
                return `${site.name},`;
              })}
            </p>
            <ul>
              <p>Genres:</p>

              {info.genres.map((genre) => {
                return <li>{genre.name}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h1 className="text-bg-dark d-inline-block px-3 rounded">
              Trailer:
            </h1>
            <div>
              <iframe
                src={info.trailer.embed_url}
                frameborder="0"
                width={"800rem"}
                height={"500rem"}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoPage;
