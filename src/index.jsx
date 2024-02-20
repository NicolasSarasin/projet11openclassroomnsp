import "./style.css";
//import { Link } from "react-router-dom";
import Header from "./Page/Header_footer/Header.jsx";
import Footer from "./Page/Header_footer/Footer.jsx";
//import React, { useState } from "react";
/*import ReactDOM from "react-dom/client";
<FontAwesomeIcon icon={["fab", "github"]}/>*/
//import "@fortawesome/fontawesome-free/css/all.min.css";
function display(eltid) {
    const displayDiv = document.getElementById(eltid);
    //const Icon = document.getElementById("iconDescription");
    //const iconAlternate="";
    console.log("Button Clicked");
    //switch case with display css in jsx
    //displayDiv.style.display="none";
    switch (displayDiv.style.display) {
        case "block":
            displayDiv.style.display = "";
            displayDiv.style.transform = "translateY(0px)";
            displayDiv.style.animation = "none 1s";
            //Icon.style.transform = "rotate(0deg)";
            break;
        default:
            displayDiv.style.display = "block";
            displayDiv.style.transform = "translateY(2.5px)";
            displayDiv.style.animation = "block 1s";
        //Icon.style.transform = "rotate(180deg)";
    }
}
function Index() {
    return (
        <div className="App">
            <Header />
            <img
                src="./image/ImageMain2.png"
                alt="ByTheWay"
                className="ImageMain"
            />
            <div className="DivByTheWay1">
                <h2>Fiabilité</h2>
                <i
                    className="iconDescription"
                    id="iconDescription"
                    onClick={() => display("FiablilityDetails")}
                >
                    <img src="./image/arrow_back_ios-24px 2.png" alt="arrow" />
                </i>
            </div>
            <div id="FiablilityDetails" className="DivByTheWay2">
                <p>
                    Les annonces posté sur Kasa garantisent une fiabilité
                    totale. Les photos sont conformes aux logements, et toutes
                    les informations sont régulièrement vérifiées par nos
                    équipes.
                </p>
            </div>
            <div className="DivByTheWay1">
                <h2>Respect</h2>
                <i
                    className="iconDescription"
                    id="iconDescription"
                    onClick={() => display("RespectDetails")}
                >
                    <img src="./image/arrow_back_ios-24px 2.png" alt="arrow" />
                </i>
            </div>
            <div id="RespectDetails" className="DivByTheWay2">
                <p>
                    La bienveillance fait partie des valeurs fondatrices de
                    Kasa. Tout comportement discriminatoire ou de pertubation de
                    voisinage entraînera une exclusion de notre plateforme.
                </p>
            </div>
            <div className="DivByTheWay1">
                <h2>Service</h2>
                <i
                    className="iconDescription"
                    id="iconDescription"
                    onClick={() => display("ServiceDetails")}
                >
                    <img src="./image/arrow_back_ios-24px 2.png" alt="arrow" />
                </i>
            </div>
            <div id="ServiceDetails" className="DivByTheWay2">
                <p>
                    La bienveillance fait partie des valeurs fondatrices de
                    Kasa. Tout comportement discriminatoire ou de pertubation de
                    voisinage entraînera une exclusion de notre plateforme.
                </p>
            </div>
            <div className="DivByTheWay1">
                <h2>Sécurité</h2>
                <i
                    className="iconDescription"
                    id="iconDescription"
                    onClick={() => display("SecurityDetails")}
                >
                    <img src="./image/arrow_back_ios-24px 2.png" alt="arrow" />
                </i>
            </div>
            <div id="SecurityDetails" className="DivByTheWay2">
                <p>
                    La sécurité est la priorité de Kasa. Aussi bien que pour nos
                    hôtes que pour les voyageurs, chaque logements correspond
                    aux critères de sécurités établis par nos services. En
                    laissant une nôte aussi bien qu'à l'hôte qu'au locataire,
                    cela permet à nos équipes de vérifier les standards sont
                    bien respectés. Nos organisons également des ateliers sur la
                    sécurité domestique pour nos hôtes.
                </p>
            </div>
            <Footer />
        </div>
    );
}

export default Index;
