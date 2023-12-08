/* eslint-disable react/jsx-key */
import "../App.css";
import Card from "./projet/Card.jsx";
import airbnb from "../assets/airbnb.jpg";
import portfolio from "../assets/portfolio.jpg";
import pomodoro from "../assets/pomodoro.jpg";
import markdown from "../assets/markdown.jpg";
import countries from "../assets/countries.jpg";
import appCalculatrice from "../assets/appCalculatrice.jpg";
import calculate from "../assets/calculatrice.jpg";
import space from "../assets/space.jpg";
import randomQuote from "../assets/randomQuote.jpg";

function Grid() {
  const grid = [
    {
      img: airbnb,
      imgAlt: "image alt text",
      title: "AIRBNB-CLONE_2023",
      tags: ["TYPESCRIPT", "REACT", "MONGODB"],
    },
    {
      img: portfolio,
      imgAlt: "image alt text",
      title: "PORTFOLIO",
      tags: ["TYPESCRIPT", "VUE"],
    },
    {
      img: pomodoro,
      imgAlt: "image alt text",
      title: "APPLICATION DE CALCULATRICE",
      tags: ["TAILWIND", "TYPESCRIPT", "REACT"],
    },
    {
      img: markdown,
      imgAlt: "image alt text",
      title: "EDITEUR MARKDOWN",
      tags: ["SCSS", "TYPESCRIPT", "VUE"],
    },
    {
      img: countries,
      imgAlt: "image alt text",
      title: "APPLICATION DE CALCULATRICE",
      tags: ["SCSS", "TYPESCRIPT", "VUE"],
    },
    {
      img: appCalculatrice,
      imgAlt: "image alt text",
      title: "REST COUNTRIES API",
      tags: ["SCSS", "TYPESCRIPT", "VUE"],
    },

    {
      img: calculate,
      imgAlt: "image alt text",
      title: "DRUM MACHINE",
      tags: ["STYLED COMPONENTS", "TYPESCRIPT", "REACT"],
    },
    {
      img: space,
      imgAlt: "image alt text",
      title: "SITE DE TOURISME DANS L'ESPACE",
      tags: ["HTML", "CSS", "TYPESCRIPT"],
    },
    {
      img: randomQuote,
      imgAlt: "image alt text",
      title: "RANDOM QUOTE APP",
      tags: ["CSS", "REACT", "API"],
    },
  ];

  return (
    <div className="grid">
      {grid.map((item) => (
        <Card {...item} />
      ))}
    </div>
  );
}

export default Grid;
