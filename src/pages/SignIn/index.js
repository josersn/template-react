import React from 'react';
import { Link } from "react-router-dom"
import Logo from "../../assets/logo.svg";
// import { Container } from './styles';

export default function SignUp() {
  return (
      <>
      <img src={Logo} alt="Gobarber"/>

      <form>
        <input type="mail" placeholder="Seu Email"/>
        <input type="password" placeholder="Sua senha secreta :D"/>
        <button type="submit">Acessar</button>

        <Link  to="/register">Criar Conta Gratuita</Link>
      </form>
      </>
    );
}
