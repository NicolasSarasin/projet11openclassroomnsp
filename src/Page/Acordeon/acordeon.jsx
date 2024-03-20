import React from "react";
import { useNavigate } from "react-router-dom";

import "../../style.css";
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

function Acordeon(props1, props2) {
    const acordeon1 = props1.description;
    const acordeon2 = props2.equipments;
    const navigate = useNavigate();
    if (acordeon1 === undefined) {
        navigate("/Error");
    }
    if (acordeon2 === undefined) {
        navigate("/Error");
    }
    // If apartment is not found, the useEffect will handle the redirection, so you can just return null here

    return (
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
                <div id="locationDetails" className="divCardDescriptionUnder">
                    <p>{acordeon1}</p>
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
                <div id="EquipmentDetails" className="divCardDescriptionUnder">
                    {acordeon2.map((equipment, index) => (
                        <p key={"equipment" + index}>{equipment}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Acordeon;
