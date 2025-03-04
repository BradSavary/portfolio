import github from "../assets/github.svg"; 
import linkedin from "../assets/linkedin.svg";
import CV from "../assets/CV.svg";

import "./contact.css";

const Contact = () => {
    return (
        <footer id="contact">
        <div class="footer__contacts">
            <div class="footer__contact">
                <h3 class="footer__contact__title">Mail</h3>
                <a src="mailto:brad.savary10@gmail.com" class="footer__contact__desc">brad.savary10@gmail.com</a>
            </div>
            <div class="footer__contact">
                <h3 class="footer__contact__title">Téléphone</h3>
                <p class="footer__contact__desc">06 98 27 45 45</p>
            </div>
        </div>
        <div class="footer__medias">
                <img class="footer__media" draggable="false" src={CV} id="CV" alt="CV"/>
            <a href="https://www.linkedin.com/in/brad-savary-07322b294/" target="_blank">
                <img class="footer__media" draggable="false" src={linkedin} alt="LinkedIn"/>
            </a>
            <a href="https://github.com/bradsavary" target="_blank">
                <img class="footer__media" draggable="false" src={github} alt="GitHub"/>
            </a>
        </div>
    </footer>
    );
  };

export default Contact;