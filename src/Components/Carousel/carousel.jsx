import "../../style.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Carousel(props) {
    const pictures = props.pictures;
    const navigate = useNavigate();
    if (pictures === undefined) {
        navigate("/Error");
    }

    const [pictureIndex, setPictureIndex] = useState(0);

    const imageNext = () => {
        setPictureIndex((pictureIndex + 1) % pictures.length);
    };

    const imagePrevious = () => {
        setPictureIndex((pictureIndex + pictures.length - 1) % pictures.length);
    };

    return (
        <div
            className="CarouselImageCard"
            style={{
                backgroundImage: `url(${pictures[pictureIndex]})`,
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
                {pictureIndex + 1}/{pictures.length}
            </p>
        </div>
    );
}
export default Carousel;
