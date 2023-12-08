/* eslint-disable react/no-unescaped-entities */
import MyButton from "./Button";
import Contact from "./Contact";
import rings from "../assets/pattern-rings.svg";
import "../App.css";

function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <Contact />

        <img src={rings} className="rings-header effect" alt="pattern-rings" />

        <section className="presentation">
          <div className="text">
            <h1>Enchantée de vous rencontrer</h1>
            <h1>
              Je suis <u>Soravoeun TY</u>
            </h1>

            <p>
              Basée à Paris je suis une developpeuse Fullstack passionnée par
              les applications web & l'accessibilité
            </p>
            <MyButton />
          </div>
        </section>
      </header>
    </div>
  );
}

export default Header;
