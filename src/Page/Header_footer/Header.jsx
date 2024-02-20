import "C:/Users/nicol/Documents/Projet/openclassroom/p11/p11/src/style.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="App">
            <header className="headerKasa">
                <img
                    src="./image/LOGO.png"
                    alt="ImageKasa1"
                    className="ImageKasa1"
                />
                <div>
                    <Link to="/">Accueil</Link>
                    <Link to="/ByTheWay">À propos</Link>
                </div>
            </header>
        </div>
    );
}

export default Header;
