import "../App.css";
import separateur from "../assets/Section.svg";
import SkillList from "./Skill-list.jsx";
import MyButton from "./Button";
import Grid from "./Grid.jsx";
import Patternrings from "../assets/patternRingRight.svg";

function Main() {
  return (
    <main>
      <img src={separateur} className="separateur" alt="section" />
      <SkillList />
      <img src={Patternrings} className="pattern effect" alt="pattern-rings"/>
      <section className="projet">
        <h1>Projets</h1>
        <MyButton />
      </section>
      <Grid />
    </main>
  );
}

export default Main;
