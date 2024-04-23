import React, { useState } from "react";
import "../../style.css";

function Acordeon(props) {
    const { id, title, details } = props;
    const [isDetailsVisible, setIsDetailsVisible] = useState(false);

    const toggleDetails = () => {
        setIsDetailsVisible(!isDetailsVisible);
    };
    return (
        <div className="divByTheWayGeneral">
            <div className="divCardDescription">
                <div className="divCardDescription1">
                    <h2>{title}</h2>
                    <i
                        className={
                            "iconDescription" +
                            (isDetailsVisible ? " iconRotate" : "")
                        }
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
                <div
                    id={id + "Details"}
                    className={
                        "divCardDescriptionUnder" +
                        (isDetailsVisible
                            ? " divCardDescriptionUnderRotate"
                            : "")
                    }
                >
                    <p dangerouslySetInnerHTML={{ __html: details }}></p>
                </div>
            </div>
        </div>
    );
}

export default Acordeon;
