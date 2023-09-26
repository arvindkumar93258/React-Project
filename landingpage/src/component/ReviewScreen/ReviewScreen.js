import React from "react";
import "./ReviewScreen.css"


export function ReviewText() {
    return (
        <>
            <div id="reviewBox">
                <div id="reviewBox">
                    <div id="imgBox">
                        <img src={require("../../img/star1.png")} alt="NA" ></img>
                    </div>
                    <div id="div2">

                    </div>
                    <div id="textBox">
                        <h4> "It's such a gmae changer, and if you wear preception glassess, i'd say life-changing."</h4>
                        <h3>Arvind S</h3>
                    </div>

                </div>
            </div>

        </>
    )
}



export function ReviewScreen() {
    return (
        <>
            <div id="reviewSection">
                <h5>VERIFIED CUSTOMER REVIEWS</h5>
                <h1>Customer lookbook</h1>
                <div id="custReviewBox">
                    <ReviewText />
                </div>
            </div>
        </>
    )
}
