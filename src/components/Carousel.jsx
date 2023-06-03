function Carousel({ items }) {
  console.log(items);

  const limitedItems = items.slice(0, 5);
  console.log(limitedItems);

  const [showModal, setshowModal] = useState(false);

  const handleModalOpen = () => {
    setshowModal(true);
  };

  const handleModalClose = () => {
    setshowModal(false);
  };

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
                      <button
                        className="btn btn-dark"
                        onClick={handleModalOpen}
                      >
                        Learn More...
                      </button>
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
      {/* Modal */}
    </>
  );
}

export default Carousel;
