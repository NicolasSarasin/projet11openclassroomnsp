import "../../style.css";
import { useEffect, useState } from "react";
import data from "../../Assets/test.json";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
}
export default Acordeon;
