/* eslint-disable react/jsx-key */
import "../App.css";
import Item from "./skill-list/Item.jsx";

function SkillList() {
  const items = [
    "HTML",
    "CSS",
    "Sass",
    "Styles-Components",
    "Bulma Css",
    "JavaScript",
    "TypeScript",
    "Angular",
    "React",
  ];

  return (
    <ul className="skill-list">
      {items.map((label) => (
        <Item label={label} />
      ))}
    </ul>
  );
}

export default SkillList;
