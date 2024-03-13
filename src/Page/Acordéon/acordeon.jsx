import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../../Assets/test.json";

import "../../style.css";

const Acordeon = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [apartment, setApartment] = useState(null);
    const [pictureIndex, setPictureIndex] = useState(0);

    useEffect(() => {
        const foundApartment = data.find((item) => item.id === id);
        if (!foundApartment) {
            navigate("/Error");
        } else {
            setApartment(foundApartment);
        }
    }, [id, navigate]);

    const imageNext = () => {
        setPictureIndex((pictureIndex + 1) % apartment.pictures.length);
    };

    const imagePrevious = () => {
        setPictureIndex(
            (pictureIndex + apartment.pictures.length - 1) %
                apartment.pictures.length
        );
    };

    // If apartment is not found, the useEffect will handle the redirection, so you can just return null here
    if (!apartment) {
        return null;
    }
    return (
        <div className="iconCarousel">
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
        </div>
    );
};

export default Acordeon;
