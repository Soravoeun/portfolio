/* eslint-disable react/prop-types */
import "../../App.css";

function Item(props) {
  const { label } = props;
  return <li className="tag-item">{label}</li>;
}

export default Item;
