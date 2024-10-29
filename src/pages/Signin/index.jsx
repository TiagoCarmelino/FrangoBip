import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import './styles.css'; // Importando o CSS
import { Link, useNavigate } from "react-router-dom";  
import useAuth from "../hooks/useAuth";

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
    <div className="container"> {/* Usando a classe CSS */}
      <label className="label">SISTEMA DE LOGIN</label> {/* Usando a classe CSS */}
      <div className="content"> {/* Usando a classe CSS */}
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <label className="labelError">{error}</label> {/* Usando a classe CSS */}
        <Button text="Entrar" onClick={handleLogin} /> {/* Corrigido para 'text' em vez de 'Text' */}
        <label className="labelSignup"> {/* Usando a classe CSS */}
          Não tem uma conta?
          <strong className="strong"> {/* Usando a classe CSS */}
            <Link to="/signup">&nbsp;Registre-se</Link>
          </strong>
        </label>
      </div>
    </div>
  );
};

export default Signin;
