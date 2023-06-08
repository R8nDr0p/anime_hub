import { Link } from "react-router-dom";
import { AiOutlineFacebook } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <div className="" style={{ backgroundImage: "url(./manga-bg.jpg)" }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col p-0">
            <Link to={"/"}>
              <img src="./image.png" alt="" width={"290rem"} />
            </Link>
          </div>
          <div className="col p-0">
            <h3>Follow us</h3>
            <ul>
              <li>
                <a href="#" className="fs-5">
                  <AiOutlineFacebook />
                  Facebook
                </a>
              </li>
              <li>
                <a href="#">
                  <BsInstagram />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
