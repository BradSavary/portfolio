import "./header.css";
import CV from "../assets/CV.pdf";

const Header = () => {
    return (
      <header id="#about">
        <div className="header__img-container">
            <img className="header__img" src="./src/assets/bradsavary.webp" alt="" />
        </div>
        <div className="header__content">
        <h2 className="header__title">
            Bienvenue sur mon Portfolio
        </h2>
        <p className="header__text">Je m’appelle Brad SAVARY, j'ai 19 ans et je suis actuellement étudiant en 2ème année de MMI. Je vous présente mon portfolio qui reflète les compétences que j’ai acquise. Dans ma formation, j’ai pu enrichir mes compétences en développement web et création graphique Je vous invite à consulter le panel de mes projets ci-dessous.</p>
        <a href={CV} target="_blank"><button className="header__button">Télécharger mon CV</button></a>
        </div>
      </header>
    );
  };

export default Header;