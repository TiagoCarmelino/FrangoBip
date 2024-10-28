// AppRoutes.jsx
import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import useAuth from './pages/hooks/useAuth';
import Home from './pages/home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Contato from './pages/contact';
import Institucional from './pages/institucional';
import Carrinho from './pages/produtos/card';
import Produtos from './pages/produtos';
import Receita from './pages/receitas_tela';
import TrabalheConosco from './pages/trabalheConosco';

// Componente para Rotas Privadas
const Private = ({ Item }) => {
  const { signed } = useAuth();
  return signed > 0 ? <Item /> : <Navigate to="/signin" />; // Redireciona para Signin se não estiver autenticado
};

function AppRoutes() {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          {/* Rotas Públicas */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          
          {/* Rota padrão redirecionando para a Home */}
          <Route path="/" element={<Navigate to="/home" />} />

          {/* Rotas Privadas */}
          <Route path="/home" element={<Private Item={Home} />} />
          <Route path="/contact" element={<Private Item={Contato} />} />
          <Route path="/receitas_tela" element={<Private Item={Receita} />} />
          <Route path="/institucional" element={<Private Item={Institucional} />} />
          <Route path="/trabalheConosco" element={<Private Item={TrabalheConosco} />} />
          <Route path="/produtos" element={<Private Item={Produtos} />} />
          <Route path="/card" element={<Private Item={Carrinho} />} />
          
          {/* Rota para redirecionamento de páginas inexistentes */}
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default AppRoutes;
