import github from "../assets/github.svg";
import head from "../assets/head.svg";   
import square from "../assets/square.svg";
import  linkedIn from "../assets/linkedIn.svg";
import "../App.css";

function Contact() {
  return (
    <div className="contact">
      <h2>Soravoeun TY</h2>
      <div className="Reseau-sociaux">
        <a href="https://github.com/Soravoeun">
          <img src={github} className="Reseau-sociaux" alt="github" />
        </a>
        <a href="https://linkedin.com/in/soravoeun-ty-5a7581282">
          <img src={linkedIn} className="Reseau-sociaux" alt="head" />
        </a>
        <a href="#">
          <img src={head} className="Reseau-sociaux" alt="linkedIn" />
        </a>

        <a href="#">
          <img src={square} className="Reseau-sociaux" alt="square" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
