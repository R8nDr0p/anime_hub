import Rainimage from "../assets/Grad_pic.jpg";
import Donaldpic from "../assets/Donald_pic.png";
import Marjpic from "../assets/Marjorie_pic.jpg";
import Leepic from "../assets/Lee_pic.png";
import { BsGithub } from "react-icons/bs";

function About() {
  return (
    <div className="bg-dark">
      <div className="container">
        <div className="row p-5">
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img src={Rainimage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Rain Christian Seguban</h5>
                <p className="card-text">Less than Half-Stack Developer</p>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JAVASCRIPT</li>
                  <li>REACT</li>
                  <li>SQL</li>
                  <li>PHP?</li>
                </ul>
                <a
                  href="https://github.com/R8nDr0p"
                  className="btn btn-primary"
                >
                  <BsGithub />
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img src={Donaldpic} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Donald Saldo</h5>
                <p className="card-text">Less than Half-Stack Developer</p>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JAVASCRIPT</li>
                  <li>REACT</li>
                  <li>SQL</li>
                  <li>PHP?</li>
                </ul>
                <a
                  href="https://github.com/DonSal28"
                  className="btn btn-primary"
                >
                  <BsGithub />
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img src={Marjpic} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Marjorie Mandahinog</h5>
                <p className="card-text">Less than Half-Stack Developer</p>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JAVASCRIPT</li>
                  <li>REACT</li>
                  <li>SQL</li>
                  <li>PHP?</li>
                </ul>
                <a
                  href="https://github.com/R8nDr0p"
                  className="btn btn-primary"
                >
                  <BsGithub />
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img src={Leepic} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Lee Wendell Saludaga</h5>
                <p className="card-text">Less than Half-Stack Developer</p>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JAVASCRIPT</li>
                  <li>REACT</li>
                  <li>SQL</li>
                  <li>PHP?</li>
                </ul>
                <a
                  href="https://github.com/R8nDr0p"
                  className="btn btn-primary"
                >
                  <BsGithub />
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h1>Vision:</h1>
            <p>
              Our vision is to be the ultimate destination for anime
              enthusiasts, providing a comprehensive and immersive platform that
              celebrates the vibrant world of anime. We strive to create a
              community where fans can explore, discover, and engage with their
              favorite anime series, characters, and creators. Through our
              website, we aim to foster a deep appreciation for the artistry,
              storytelling, and cultural impact of anime, while connecting fans
              from around the globe.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h1>Mission:</h1>
            <p>
              Our mission is to curate and deliver high-quality and up-to-date
              anime information to our users, catering to both casual viewers
              and dedicated fans alike. We are committed to providing a
              user-friendly interface that enables seamless navigation, making
              it easy for visitors to find the latest news, reviews,
              recommendations, and in-depth analysis of their favorite anime
              titles. Our goal is to offer a comprehensive database of anime
              series, movies, and related content, ensuring that users have
              access to a vast repository of knowledge. We also strive to create
              a vibrant community where anime enthusiasts can interact, discuss,
              and share their passion for anime with like-minded individuals.
              Through our dedication to excellence, innovation, and user
              satisfaction, we aim to be the go-to resource for all things
              anime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
