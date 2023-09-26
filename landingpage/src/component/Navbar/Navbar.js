

import React from "react";

export function Navbar() {
    return (
        <>
            <div className="homeScreen">

                <div className="navbar">
                    <div className="navbarDiv">
                        <ul>
                            <li className="navHeading"><img src={require("../../img/sunlogo.png")} alt="Sun Img" /></li>
                            <li className="navheading" id="companyName"><a href="/">LENSES</a></li>
                        </ul>
                    </div>
                    <div className="navbarDiv" >
                        <ul>
                            <li className="seperatorElement"><a href="/">FRAMES</a></li>
                            <li className="navElement"><a href="/">LENSES</a></li>
                            <li className="navElement"><a href="/">PRICING</a></li>
                            <li className="navElement"><a href="/">RIVIEWS</a></li>
                            <li className="navElement"><a href="/">LOCATIONS</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
