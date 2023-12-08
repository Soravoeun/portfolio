/* eslint-disable react/no-unescaped-entities */
import ringLeft from "../assets/patternRings.svg";
import separateur from "../assets/Section.svg";
import ValidateForm from "./formulaire";
import Contact from "./Contact";
import "../App.css";


function Footer() {
  return (
    <>
      <section className="footer">
        <div className="contact-footer">
          <h2>Contact</h2>
          <p>
            J'aimerais connaitre votre projet et savoir comment je pourrais vous
            aider. Remplissez le formulaire et je vous repondrai dès que
            possible, dans les plus brefs délais
          </p>
        </div>
        <div className="validation">
          <ValidateForm />
          <button>ENVOYER</button>
        </div>
        </section>
        <section>
          <img src={ringLeft} className="effect" alt="pattern-rings" />
        </section>
        <img src={separateur} className="separateur-footer" alt="section" />
        <Contact />
      
    </>
  );
}

export default Footer;
