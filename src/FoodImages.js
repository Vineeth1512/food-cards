import React from "react";
import "./App.css"
function FoodImages(probs) {
    return (
        <div class="images">
            <div id={probs.foodId}>
                <img src={probs.foodImg} class="fooditem" /></div>
            <p class="labels">{probs.foodName}</p>
        </div>
    )
}
export default FoodImages;