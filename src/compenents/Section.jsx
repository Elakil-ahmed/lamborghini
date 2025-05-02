import React from "react";
import {BrowserRouter as Router, Routes , Route} from "react-router-dom";
import Welcome from "../pages/Welcome";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";

const Section = ()=>{
    return(
        <div className="section">
            {/* <Router> */}
                <Routes>
                    <Route path="/" element={<Welcome/>}  />
                    <Route path ="/about" element={<About/>}  />
                    <Route path= "/services" element={<Services/>}  />
                    <Route path="/contact" element={<Contact/>}  />
                </Routes>

            {/* </Router> */}
        </div>
    )
}
export default Section;