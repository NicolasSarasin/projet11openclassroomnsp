import React from "react";

import "../../style.css";

function display(eltid, iconId) {
    const displayDiv = document.getElementById(eltid);
    const Icon = document.getElementById(iconId);
    //switch case with display css in jsx
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

function Acordeon(props) {
    let { id, title, details } = props;

    if (id === undefined) {
        id = "acc" + Math.floor(Math.random() * 1000000);
    }
    if (title === undefined) {
        title = "";
    }
    if (details === undefined) {
        details = "";
    }

    return (
        <div className="divByTheWayGeneral">
            <div className="divCardDescription">
                <div className="divCardDescription1">
                    <h2>{title}</h2>
                    <i
                        className="iconDescription"
                        id={id + "Icon"}
                        onClick={() => display(id + "Details", id + "Icon")}
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
