function Carousel({ items }) {
  console.log(items);

  const limitedItems = items.slice(0, 3);
  console.log(limitedItems);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col p-0">
            <div id="carouselExampleCaptions" className="carousel slide">
              <div className="carousel-indicators">
                {limitedItems.map((item, index) => {
                  return (
                    <button
                      key={index}
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to={index}
                      className={index === 0 ? "active" : ""}
                      aria-current={index === 0 ? "true" : "false"}
                      aria-label={`Slide ${index + 1}`}
                    ></button>
                  );
                })}
              </div>
              <div className="carousel-inner">
                {limitedItems.map((item, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <img
                      src={item.trailer.images.maximum_image_url}
                      className="d-block w-100"
                      alt={item.title}
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5 className="text-white bg-dark rounded">
                        {item.title}
                      </h5>
                      <p className="text-white bg-dark text-truncate">
                        {item.synopsis}
                      </p>
                      {/*Button trigger modal*/}
                      <button
                        type="button"
                        className="btn btn-dark"
                        data-bs-toggle="modal"
                        data-bs-target={`#exampleModal${index + 1}`}
                      >
                        View Info
                      </button>

                      {/*Modal*/}
                      <div
                        className="modal fade"
                        id={`exampleModal${index + 1}`}
                        tabIndex="-1"
                        aria-labelledby={`#exampleModalLabel${index + 1}`}
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-dialog-scrollable modal-lg">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h1
                                className="modal-title fs-5 text-black"
                                id={`exampleModalLabel${index + 1}`}
                              >
                                {item.title}
                              </h1>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            {/* MODAL BODY */}
                            <div className="modal-body">
                              <div>
                                <iframe
                                  height={"250em"}
                                  className="w-100"
                                  src={`https://www.youtube.com/embed/${item.trailer.youtube_id}`}
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                ></iframe>
                              </div>
                              <p className="text-black">{item.synopsis}</p>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
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
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
