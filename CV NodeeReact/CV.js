import React from 'react';
import './Navbar.css';
import profileImage from 'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkzNy1hZXctMTY1LWtsaGN3ZWNtLmpwZw.jpg';

const Perfil = () => {
  return (
    <div className="perfil">
      <img src={profileImage} alt="perfil" className="profile-image" />
      <h1>Hugo Vasconcelos</h1>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
    </nav>
  );
};

const Home = () => {
  return (
    <section id="home">
      <h1>Home</h1>
      <p>Currículo Hugo Vasconcelos</p>
    </section>
  );
};

const Sobre = () => {
  return (
    <section id="sobre">
      <h1>Sobre mim</h1>
      <p>Sou estudante do 3° período do curso de 
        Análise e Desenvolvimento de Sistemas pela Faculdade Senac PE.</p>
    </section>
  );
};

const Contato = () => {
  return (
    <section id="contact">
      <h1>Contato</h1>
      <p>E-mail: hugovv@gmail.com</p>
      <p>LinkedIn: Hugo Vasconcelos</p>
    </section>
  );
};

export default {
  Navbar,
  Home,
  Sobre, 
  Contato,
  Perfil,
}
