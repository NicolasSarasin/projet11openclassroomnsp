import "../../style.css";
import React from "react";
import { useNavigate } from "react-router-dom";
function Rating(props) {
    const rating = props.rating;
    const navigate = useNavigate();
    if (rating === undefined) {
        navigate("/Error");
    }
    return (
        <div className=".tagsDivI">
            {rating >= 1 ? (
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
            {rating >= 2 ? (
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
            {rating >= 3 ? (
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
            {rating >= 4 ? (
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
            {rating >= 5 ? (
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
    );
}
export default Rating;
