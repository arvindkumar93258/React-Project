import React from "react";
import "./InfoScreen.css"

export function InfoSection() {
    return (
        <>
            <div id="infoSectionDiv">
                <div className="box" >
                    <h5>FIND A LOCATION</h5>
                    <img src={require("../../img/arrow.png")} alt="Arrow IMG" ></img>
                    <a href="/">Learn More <bold> &rarr; </bold></a>
                </div>
                <div className="box" >
                    <h5>BROWSE OUR FRAME STYLE</h5>
                    <img src={require("../../img/glass.png")} alt="Arrow IMG" ></img>
                    <a href="/">Learn More <bold> &rarr; </bold></a>
                </div>
                <div className="box" >
                    <h5>EXPLORE OUR LENS OPTIONS</h5>
                    <img src={require("../../img/eye.png")} alt="Arrow IMG" ></img>
                    <a href="/">Learn More <bold> &rarr; </bold></a>
                </div>
            </div>
        </>
    )
}
