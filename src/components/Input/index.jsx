import React from "react";
import './styles.css'; // Importando o arquivo de estilo CSS

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      className="input" // Classe CSS aplicada
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
