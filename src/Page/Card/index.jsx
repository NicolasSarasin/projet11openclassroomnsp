import "../../style.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header_footer/Header.jsx";
import Footer from "../Header_footer/Footer.jsx";
import data from "../../Assets/test.json";
import { useParams } from "react-router-dom";
import Rating from "../Rating/rating.jsx";
//import  Carousel from "../Carousel/carousel.jsx";
/*<Carousel></Carousel>*/
/*import React from "react";
import ReactDOM from "react-dom/client";*/
//import "@fortawesome/fontawesome-free/css/all.min.css";
function display(eltid, iconId) {
    const displayDiv = document.getElementById(eltid);
    const Icon = document.getElementById(iconId);
    //const iconAlternate="";
    console.log("Button Clicked");
    //switch case with display css in jsx
    //displayDiv.style.display="none";
    switch (displayDiv.style.display) {
        case "block":
            displayDiv.style.display = "";
            displayDiv.style.transform = "translateY(0px)";
            displayDiv.style.animation = "none 1s";
            Icon.style.transform = "rotate(0deg)";
            Icon.style.marginTop = "17.5px";
            break;
        default:
            displayDiv.style.display = "block";
            displayDiv.style.transform = "translateY(2.5px)";
            displayDiv.style.animation = "block 1s";
            Icon.style.transform = "rotate(180deg)";
            Icon.style.marginBottom = "17.5px";
    }
}

function Card() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [apartment, setApartment] = useState(null);
    const [pictureIndex, setPictureIndex] = useState(0);

    const imageNext = () => {
        //let pCarousel = document.getElementById("pCarousel");
        setPictureIndex((pictureIndex + 1) % apartment.pictures.length);
    };

    const imagePrevious = () => {
        //let pCarousel = document.getElementById("pCarousel");
        setPictureIndex(
            (pictureIndex + apartment.pictures.length - 1) %
                apartment.pictures.length
        );
    };
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
                    key={"pervious_icon"}
                    className="iconCarrouselPrevious"
                    onClick={imagePrevious}
                >
                    <img
                        src="./image/arrow_back_ios-24px 1.png"
                        alt="leftArrow"
                        id="previousImage"
                    />
                </i>
                <i
                    key={"next_icon"}
                    className="iconCarrouselNext"
                    onClick={imageNext}
                >
                    <img
                        src="./image/arrow_forward_ios-24px 1.png"
                        alt="rightArrow"
                        id="nextImage"
                    />
                </i>
                <p className="pCarousel" id="pCarousel">
                    {pictureIndex + 1}/{apartment.pictures.length}
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
                        <p className="tagDivP" key={"tag" + index}>
                            {tag}
                        </p>
                    ))}
                </div>
                <Rating />
            </div>
            <div className="divCardDescriptionGeneral">
                <div className="divCardDescription">
                    <div className="divCardDescription1">
                        <h2>Description</h2>
                        <i
                            className="iconDescription"
                            id="LocationIcon"
                            onClick={() =>
                                display("locationDetails", "LocationIcon")
                            }
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
                            id="EquipmentIcon"
                            onClick={() =>
                                display("EquipmentDetails", "EquipmentIcon")
                            }
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
                            <p key={"equipment" + index}>{equipment}</p>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Card;
