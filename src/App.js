//import logo from "./logo.svg";
import "./App.css";
import "./style.css";
import { Link } from "react-router-dom";
import Header from "./Components/Header_footer/Header.jsx";
import Footer from "./Components/Header_footer/Footer.jsx";
import data from "./Assets/test.json";
//the only function
function App() {
    return (
        <div className="App">
            <Header />
            <p className="pmain">Chez vous, partout et ailleurs</p>
            <div className="mainDIV">
                {data.map((apartment) => (
                    <Link
                        to={`/${apartment.id}`}
                        key={"apartment" + apartment.id}
                        className="LinkCard"
                    >
                        <div
                            className="cartMainDiv"
                            style={{
                                backgroundImage: `url(${apartment.cover})`,
                            }}
                        >
                            <p>{apartment.title}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default App;
