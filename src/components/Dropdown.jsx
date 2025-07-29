import { useState } from "react";
import "../styles/dropDown.scss";

const Dropdown = ({ data, name, id, onItemChange }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (index) => {
    setSelectedIndex(index);
    onItemChange;
    setIsOpen(!isOpen);
  };

  return (
    <div className={isOpen ? "dropdown-container open" : "dropdown-container"}>
      <input type="text" readOnly className="dropdown" value={data[selectedIndex]} onClick={toggleDropdown} name={name} id={id} />
      {isOpen && (
        <ul className="dropdown-items">
          {data.map((item, index) => (
            <li key={index} className="dropdown-item" onClick={() => handleSelect(index)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
