import "../../style.css";
import { Link } from "react-router-dom";
import Header from "../Header_footer/Header.jsx";
import Footer from "../Header_footer/Footer.jsx";
/*import React from "react";
import ReactDOM from "react-dom/client";*/

function Error() {
    return (
        <div className="App">
            <Header />
            <h1 className="error404">404</h1>
            <p className="Perror404">
                Oups! La page que vous voulez n'existe pas.
            </p>
            <Link to="/" className="Perror4042">
                <p>Retourner à la page d'accueil.</p>
            </Link>
            <Footer />
        </div>
    );
}

export default Error;
