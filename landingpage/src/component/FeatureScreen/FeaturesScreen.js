
import "./FeaturesScreen.css";
import React from 'react';
export function Disc() {
    return (
        <>
            <span className="dotDisc" />
        </>
    )
}


// import { star.png } from "../../../public/img"
export function Feature() {
    return (
        <>
            <div id="infoSectionDiv">

                <div className="infoSectionDiv1">
                    <img id="mainImg" src={require("../../img/measure1.jpeg")} alt="Sun Img" />
                    <h3 id="heading3">Measured fot you</h3>
                    <p id="paragraph1">
                        Lorem ipsum dolor sit amet, incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    </p>
                </div>
                <div className="infoSectionDiv1">
                    <img id="mainImg" src={require("../../img/pencil1.jpeg")} alt="Sun Img" />
                    <h3 id="heading3">Designed by you</h3>
                    <p id="paragraph1">
                        Lorem ipsum dolor sit amet, incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    </p>
                </div>
                <div className="infoSectionDiv1">
                    <img id="mainImg" src={require("../../img/sunglass.jpg")} alt="Sun Img" />
                    <h3 id="heading3">Made from scratch</h3>
                    <p id="paragraph1">
                        Lorem ipsum dolor sit amet, incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    </p>
                </div>
                <div className="infoSectionDiv1">
                    <img id="mainImg" src={require("../../img/star1.png")} alt="Sun Img" />
                    <h3 id="heading3">Perfect, guranteed</h3>
                    <p id="paragraph1">
                        Lorem ipsum dolor sit amet, incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    </p>
                </div>
            </div>
        </>
    )
}

export const FeatureScreen = () => {

    return (
        <>
            <div>

                <div id="smallHeading">
                    <h5>HOW IT WORKS</h5>
                </div>

                <div id="secondPageH1">
                    <h1>
                        This is the future of premium eyewear
                    </h1>
                </div>
                <div id="borderLine">

                </div>
                <div id="infoItemBox">
                    < Feature />

                </div>

            </div>


        </>
    )



}
