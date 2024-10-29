import React from "react";
import './styles.css'; // Importe o arquivo CSS

const Button = ({ text, onClick, type = "button" }) => {
  return (
    <button className="button" type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
