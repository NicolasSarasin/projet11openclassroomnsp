//import logo from "./logo.svg";
import "./App.css";
import "./style.css";
import { Link } from "react-router-dom";
import Header from "./Page/Header_footer/Header.jsx";
import Footer from "./Page/Header_footer/Footer.jsx";
import data from "./Assets/test.json";
//the only function
function App() {
    //let appartments = [];
    /*getAppartments().then((data) => {
        appartments = data;
        console.log("data", data);
        {data.map((apartment) => (
                    <div key={apartment.id}>{apartment.name}</div>
                ))}
    });*/

    return (
        <div className="App">
            <Header />
            <p className="pmain">Chez vous, partout et ailleurs</p>
            <div className="mainDIV">
                {data.map((apartment) => (
                    <Link to={`/${apartment.id}`} key={apartment.id}>
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
