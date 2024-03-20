import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../../Assets/test.json";

import "../../style.css";

function Acordeon() {
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
    /*return (
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
    );*/
}

export default Acordeon;
