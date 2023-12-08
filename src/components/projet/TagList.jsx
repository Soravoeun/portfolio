/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import "../../App.css";
import Item from "../tag/Item.jsx";

function TagList(props) {
  const { tags } = props;
  return (
    <ul className="tags">
      {tags.map((item) => (
        <Item label={item} />
      ))}
    </ul>
  );
}

export default TagList;
