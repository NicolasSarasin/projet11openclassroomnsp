import "./style.css";
//import { Link } from "react-router-dom";
import Header from "./Page/Header_footer/Header.jsx";
import Footer from "./Page/Header_footer/Footer.jsx";
import Acordeon from "./Page/Acordeon/acordeon.jsx";

function About() {
    return (
        <div className="App">
            <Header />
            <img
                src="./image/ImageMain2.png"
                alt="ByTheWay"
                className="ImageMain"
            />
            <Acordeon
                id="fiability"
                title="Fiabilité"
                details="Les annonces posté sur Kasa garantisent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
            />
            <Acordeon
                id="respect"
                title="Respect"
                details="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation de voisinage entraînera une exclusion de notre plateforme."
            />
            <Acordeon
                id="service"
                title="Service"
                details="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation de voisinage entraînera une exclusion de notre plateforme."
            />
            <Acordeon
                id="security"
                title="Sécurité"
                details=" La sécurité est la priorité de Kasa. Aussi bien que pour nos
                    hôtes que pour les voyageurs, chaque logements correspond
                    aux critères de sécurités établis par nos services. En
                    laissant une nôte aussi bien qu'à l'hôte qu'au locataire,
                    cela permet à nos équipes de vérifier les standards sont
                    bien respectés. Nos organisons également des ateliers sur la
                    sécurité domestique pour nos hôtes."
            />
            <Footer />
        </div>
    );
}

export default About;
