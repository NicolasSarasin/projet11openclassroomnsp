import "../../style.css";
import React, { useEffect, useState } from "react";
import data from "../../Assets/test.json";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Rating() {
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
    );
}
export default Rating;
