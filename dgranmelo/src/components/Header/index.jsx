import Button from "../Button";
import logo from "../../assets/LogoMeloWOName.png";
import completeLogo from "../../assets/LogoMelo.png"
import "./Header.css";

const Header = () => {
  return (
    <header>
      <figure className="logo">
        <img
          className="logo-web"
          src={logo}
          alt="logo do Melo em formato quadricular com cantos arredondados onde aparece no meio o D e no canto superior direito o M em caixa alta dentro de um quadrado amarelo."
        />
        <img
          className="logo-mobile"
          src={completeLogo}
          alt="logo do Melo com o texto já embaixo."
        />
        <p>
            Dgran <br/> Melo
        </p>
      </figure>
      <nav className="menu">
        <a href="/">Home</a>
        <a href="">Soluções</a>
        <a href="">Sobre</a>
      </nav>
      <Button className='button-header right-element'>Contato</Button>
    </header>
  );
};

export default Header;
