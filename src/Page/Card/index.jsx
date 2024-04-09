import "../../style.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header_footer/Header.jsx";
import Footer from "../../Components/Header_footer/Footer.jsx";
import data from "../../Assets/test.json";
import { useParams } from "react-router-dom";
import Rating from "../../Components/Rating/rating.jsx";
import Carousel from "../../Components/Carousel/carousel.jsx";
import Acordeon from "../../Components/Acordeon/acordeon.jsx";

function Card() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [apartment, setApartment] = useState(null);
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
            <Carousel pictures={apartment.pictures} />
            <div className="divCardHeader">
                <div>
                    <h2>{apartment.title}</h2>
                    <p className="pLocation">{apartment.location}</p>
                    <div className="tagsDivP">
                        {apartment.tags.map((tag, index) => (
                            <p className="tagDivP" key={"tag" + index}>
                                {tag}
                            </p>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="nameHostApartment">
                        <p className="nameHost">{apartment.host.name}</p>
                        <img
                            src={apartment.host.picture}
                            alt="imageCard"
                            className="pictureHost"
                        />
                    </div>
                    <Rating rating={apartment.rating} />
                </div>
            </div>
            {/*<div className="divCardHeader">
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
                <Rating rating={apartment.rating} />
            </div>*/}
            <div className="divCardDescriptionGeneral">
                <Acordeon
                    id="description"
                    title="Description"
                    details={apartment.description}
                />
                <Acordeon
                    id="equipments"
                    title="Equipments"
                    details={
                        "<p>" + apartment.equipments.join("</p><p>") + "</p>"
                    }
                />
            </div>
            <Footer />
        </div>
    );
}

export default Card;
