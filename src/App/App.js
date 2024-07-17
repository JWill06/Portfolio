import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import NavBar from "../NavBar/NavBar";
import Contact from "../Contact/Contact";
import Work from "../Work/Work";
import './App.css'

const App = () => {
    return (
            <div className="appContainer">
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/work" element={<Work/>} />
                    <Route path="/contact" element={<Contact />}/>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
    );
};

function NotFound() {
    return <h2>404: Page Not Found</h2>;
}

export default App;
