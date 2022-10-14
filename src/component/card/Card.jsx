import { useState } from "react";
import "./Card.css";
const Card = ({ name, img, options }) => {
  const [visible, setVisible] = useState(true);
  const handleVisible = () => {
    setVisible(!visible);
  };
  return (
    <div onClick={handleVisible} className="card">
      {visible ? (
        <div>
          <img src={img} alt="" />
          <h3>{name}</h3>
        </div>
      ) : (
        <div>
          {options.map((item) => {
            return (
              <ul>
                <li>{item}</li>
              </ul>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Card;
