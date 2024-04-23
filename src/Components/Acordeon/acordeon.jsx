import React, { useState } from "react";
import "../../style.css";

function Acordeon(props) {
    const { id, title, details } = props;
    const [isDetailsVisible, setIsDetailsVisible] = useState(false);

    const toggleDetails = () => {
        const displayDiv = document.getElementById(id + "Details");
        const Icon = document.getElementById(id + "Icon");

        if (isDetailsVisible) {
            displayDiv.style.display = "";
            displayDiv.style.transform = "translateY(0px)";
            displayDiv.style.animation = "none 1s";
            Icon.style.transform = "rotate(0deg)";
            Icon.style.marginTop = "10px";
        } else {
            displayDiv.style.display = "block";
            displayDiv.style.transform = "translateY(2.5px)";
            displayDiv.style.animation = "block 1s";
            Icon.style.transform = "rotate(180deg)";
            Icon.style.marginBottom = "10px";
        }

        setIsDetailsVisible(!isDetailsVisible);
    };
    return (
        <div className="divByTheWayGeneral">
            <div className="divCardDescription">
                <div className="divCardDescription1">
                    <h2>{title}</h2>
                    <i
                        className="iconDescription"
                        id={id + "Icon"}
                        onClick={() =>
                            toggleDetails(id + "Details", id + "Icon")
                        }
                    >
                        <img
                            src="./image/arrow_back_ios-24px 2.png"
                            alt="arrow"
                        />
                    </i>
                </div>
                <div id={id + "Details"} className="divCardDescriptionUnder">
                    <p dangerouslySetInnerHTML={{ __html: details }}></p>
                </div>
            </div>
        </div>
    );
}

export default Acordeon;
