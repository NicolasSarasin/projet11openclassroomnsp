import "../../style.css";
import React, { useEffect, useState } from "react";
import data from "../../Assets/test.json";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Carousel() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [apartment, setApartment] = useState(null);
    const [pictureIndex, setPictureIndex] = useState(0);
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
        <i key={"next_icon"} className="iconCarrouselNext" onClick={imageNext}>
            <img
                src="./image/arrow_forward_ios-24px 1.png"
                alt="rightArrow"
                id="nextImage"
            />
        </i>
        <p className="pCarousel" id="pCarousel">
            {pictureIndex + 1}/{apartment.pictures.length}
        </p>
    </div>;
}
export default Carousel;
