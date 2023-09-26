import "./StyleSections.css"
import React from "react";

export function StyleSection() {

    return (
        <>
            <div id="styleSection">

                <img className="imgItem" id="imgItem1" src={require("../../img/arv.jpg")} alt="Sun Img" />
                <img className="imgItem" id="imgItem2" src={require("../../img/p3.jpg")} alt="Sun Img" />
                <img className="imgItem" id="imgItem3" src={require("../../img/p.jpg")} alt="Sun Img" />
                <img className="imgItem" id="imgItem4" src={require("../../img/a.jpg")} alt="Sun Img" />
                <img className="imgItem" id="imgItem5" src={require("../../img/p.jpg")} alt="Sun Img" />
                <div className="imgItem" id="textSection">
                    <h4>DESIGNED BY YOU</h4>
                    <h1>Individual style</h1>
                    <p id="paragraph10">
                        Lorem ipsum dolor sit amet, incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        Lorem ipsum dolor sit amet, incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    </p>
                </div>



            </div>

        </>
    )
}
