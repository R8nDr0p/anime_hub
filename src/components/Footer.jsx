import { Link } from "react-router-dom";
import { AiOutlineFacebook } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    // <div className="" style={{ backgroundImage: "url(./manga-bg.jpg)" }}>
    //   <div className="container-fluid">
    //     <div className="row">
    //       <div className="col p-0">
    //         <Link to={"/"}>
    //           <img src="./image.png" alt="" width={"460rem"} />
    //         </Link>
    //       </div>
    //       <div className="col">
    //         <h1>Project 2 </h1>
    //         <h4>
    //           Our vision is to be the ultimate destination for anime
    //           enthusiasts, providing a comprehensive and immersive platform that
    //           celebrates the vibrant world of anime. We strive to create a
    //           community where fans can explore, discover, and engage with their
    //           favorite anime series, characters, and creators. Through our
    //           website, we aim to foster a deep appreciation for the artistry,
    //           storytelling, and cultural impact of anime, while connecting fans
    //           from around the globe.
    //         </h4>
    //       </div>
    //       <div
    //         className="col p-0 rounded p-3 text-center
    //         bg-white
    //       "
    //       >
    //         <h3>Follow us</h3>
    //         <a href="#" className="fs-5">
    //           <img src="./icons8-facebook.gif" alt="" />
    //         </a>
    //         <a href="#">
    //           <img src="./icons8-instagram.gif" alt="" />
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <footer class="bg-dark text-light">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4">
            <h4>About Us</h4>
            <p>
              We are a passionate team of anime enthusiasts dedicated to
              providing you with the best anime experience. Our website is a
              labor of love where we strive to bring you the latest news,
              reviews, and updates from the world of anime.
            </p>
            <p>
              With a deep appreciation for the artistry and storytelling in
              anime, we aim to create a community where fans can come together
              to discuss their favorite shows, discover new series, and connect
              with fellow anime lovers.
            </p>
          </div>
          <div class="col-md-4">
            <h4>Contact Us</h4>
            <p>Email: info@example.com</p>
            <p>Phone: +1 123-456-7890</p>
          </div>
          <div class="col-md-4">
            <h4>Follow Us</h4>
            <div class="social-media">
              <a href="#">
                <img src="./facebook-50.png" alt="" />
              </a>
              <a href="#">
                <img src="./instagram-50.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <p>&copy; 2023 Anime-Hub. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
