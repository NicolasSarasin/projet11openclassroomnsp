import "../../style.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header_footer/Header.jsx";
import Footer from "../Header_footer/Footer.jsx";
import data from "../../Assets/test.json";
import { useParams } from "react-router-dom";
/*import { Carousel } from "react-responsive-carousel";
<Carousel></Carousel>*/
/*import React from "react";
import ReactDOM from "react-dom/client";*/
//import "@fortawesome/fontawesome-free/css/all.min.css";
function display(eltid) {
    const displayDiv = document.getElementById(eltid); //fonction alors que c'est différent d'une fonction
    console.log("Button Clicked");
    switch (displayDiv.style.display) {
        case "block":
            displayDiv.style.display = "";
            displayDiv.style.transform = "translateY(0px)";
            displayDiv.style.animation = "none 1s";
            break;
        default:
            displayDiv.style.display = "block";
            displayDiv.style.transform = "translateY(2.5px)";
            displayDiv.style.animation = "block 1s";
    }
}
function changeImagenext(eltImage) {
    const nextImage = eltImage;
    //const Image = "";
    if (nextImage) {
        //si l'image est à n/n alors l'image est à 1/n
        //return(<p>n/n image</p>)
        /*Image = (Image + 1) % longueur du tableau d'image;
        Card();*/
    }
    console.log("The next image");
}
function changeImageprevious(eltImage) {
    const previousImage = eltImage;
    //const Image = "";
    if (previousImage) {
        //si l'image est à 1/n alors l'image est à n/n
        //return(<p>1/n image</p>)
        /*Image =
            (Image + longueur du tableau d'image - 1) %
            longueur du tableau d'image;
        Card();*/
    }
    console.log("The previous image");
}
function Card() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [apartment, setApartment] = useState(null);
    let [count, setCount] = useState(0);
    useEffect(() => {
        const foundApartment = data.find((item) => item.id === id);
        if (foundApartment === undefined) {
            navigate("/Error");
        } else {
            setApartment(foundApartment);
        }
    }, [id, navigate]);
    if (!apartment) {
        // If apartment is not found, the useEffect will handle the redirection, so you can just return null here
        return null;
    }
    let pictureIndex = 0;
    return (
        <div className="App">
            <Header />
            {/*apartment.pictures=1?(<img src={apartment.picture} alt="imageCard" />):(<img src={apartment.pictures} alt="imageCard" />)*/}
            <div
                className="CarouselImageCard"
                style={{
                    backgroundImage: `url(${apartment.pictures[pictureIndex]})`,
                }}
            >
                <i
                    key={count}
                    className="iconCarrouselPrevious"
                    onClick={() =>
                        changeImageprevious(
                            apartment.pictures[pictureIndex.setCount(--count)]
                        )
                    }
                >
                    <img
                        src="./image/arrow_back_ios-24px 1.png"
                        alt="leftArrow"
                        id="previousImage"
                    />
                </i>
                <i
                    key={count}
                    className="iconCarrouselNext"
                    onClick={() =>
                        changeImagenext(
                            apartment.pictures[pictureIndex.setCount(++count)]
                        )
                    }
                >
                    <img
                        src="./image/arrow_forward_ios-24px 1.png"
                        alt="rightArrow"
                        id="nextImage"
                    />
                </i>
                <p className="pCarousel">
                    1/5(Je mettrais le nombre d'image sur le total après).
                </p>
            </div>
            <div className="divCardHeader">
                <div>
                    <h2>{apartment.title}</h2>
                    <p className="pLocation">{apartment.location}</p>
                </div>
                <div className="nameHostApartment">
                    <p className="nameHost">{apartment.host.name}</p>
                    <img
                        src={apartment.host.picture}
                        alt="imageCard"
                        className="pictureHost"
                    />
                </div>
            </div>
            <div className="tagsDiv">
                <div className="tagsDivP">
                    {apartment.tags.map((tag, index) => (
                        <p className="tagDivP" key={index}>
                            {tag}
                        </p>
                    ))}
                </div>
                <div className=".tagsDivI">
                    {apartment.rating >= 1 ? (
                        <img
                            src="./image/star-active 1.png"
                            alt="Rating"
                            className="Rating"
                        />
                    ) : (
                        <img
                            src="./image/star-inactive 1.png"
                            alt="UnRating"
                            className="UnRating"
                        />
                    )}
                    {apartment.rating >= 2 ? (
                        <img
                            src="./image/star-active 1.png"
                            alt="Rating"
                            className="Rating"
                        />
                    ) : (
                        <img
                            src="./image/star-inactive 1.png"
                            alt="UnRating"
                            className="UnRating"
                        />
                    )}
                    {apartment.rating >= 3 ? (
                        <img
                            src="./image/star-active 1.png"
                            alt="Rating"
                            className="Rating"
                        />
                    ) : (
                        <img
                            src="./image/star-inactive 1.png"
                            alt="UnRating"
                            className="UnRating"
                        />
                    )}
                    {apartment.rating >= 4 ? (
                        <img
                            src="./image/star-active 1.png"
                            alt="Rating"
                            className="Rating"
                        />
                    ) : (
                        <img
                            src="./image/star-inactive 1.png"
                            alt="UnRating"
                            className="UnRating"
                        />
                    )}
                    {apartment.rating >= 5 ? (
                        <img
                            src="./image/star-active 1.png"
                            alt="Rating"
                            className="Rating"
                        />
                    ) : (
                        <img
                            src="./image/star-inactive 1.png"
                            alt="UnRating"
                            className="UnRating"
                        />
                    )}
                </div>
            </div>
            <div className="divCardDescriptionGeneral">
                <div className="divCardDescription">
                    <div className="divCardDescription1">
                        <h2>Description</h2>
                        <i
                            className="iconDescription"
                            onClick={() => display("locationDetails")}
                        >
                            <img
                                src="./image/arrow_back_ios-24px 2.png"
                                alt="arrow"
                            />
                        </i>
                    </div>
                    <div
                        id="locationDetails"
                        className="divCardDescriptionUnder"
                    >
                        <p>{apartment.description}</p>
                    </div>
                </div>
                <div className="divCardDescription">
                    <div className="divCardDescription1">
                        <h2>Équipements</h2>
                        <i
                            className="iconDescription"
                            onClick={() => display("EquipmentDetails")}
                        >
                            <img
                                src="./image/arrow_back_ios-24px 2.png"
                                alt="arrow"
                            />
                        </i>
                    </div>
                    <div
                        id="EquipmentDetails"
                        className="divCardDescriptionUnder"
                    >
                        {apartment.equipments.map((equipment, index) => (
                            <p key={index}>{equipment}</p>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Card;
