/* eslint-disable react/prop-types */
import "../../App.css";
import TagList from "./TagList";

function Card(props) {
  const { img, imgAlt, title, tags } = props;
  return (
    <div className="card">
      <img src={img} alt={imgAlt} />
      <div className="legend">
        <h3>{title}</h3>
        <TagList tags={tags} />
      </div>
    </div>
  );
}

export default Card;
