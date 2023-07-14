import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
    <li className="item" key={item.id}>
      <input
        onChange={() => handleCheck(item.id)}
        type="checkbox"
        checked={item.checked}
      />
      <label onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>
      <FaTrashAlt
        onClick={() => handleDelete(item.id)}
        role="button"
        tabIndex="0"
      />
    </li>
  );
};

export default LineItem;
