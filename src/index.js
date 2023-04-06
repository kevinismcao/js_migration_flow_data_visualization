import {fetchData} from "./scripts/data.js";
import { fetchStateData } from "./scripts/data.js";
import {drawDiagram} from "./scripts/diagram.js"; 
import {getAllName} from "./scripts/names";
import { handleSelection } from "./scripts/utils.js";
import { statesArray } from "./scripts/states.js";
import { modeSwitch } from "./scripts/darklightmode.js";



// fetchData("2020", "*", "*", statesArray).then(matrix => drawDiagram(statesArray, matrix))
fetchStateData().then(matrix => drawDiagram(2020, statesArray, matrix));

document.getElementById("submit-button").addEventListener("click",function(event){
    event.preventDefault();
    document.getElementById("loading-container").style.display = "block"
    const svgContainer = document.getElementById('diagram-container');
    
    const firstSvg = svgContainer.querySelector('svg');
    if (firstSvg) {
        svgContainer.removeChild(firstSvg);
    }
    
    handleSelection();
    // if (firstSvg) {
    //     loadingDiv.style.display = "none";
    // }
})



document.getElementById("dark-light-switch").addEventListener("click", function(event){
    event.preventDefault();
    let currentMode = document.getElementById("dark-light-switch").value;
    modeSwitch(currentMode);
    if (currentMode === "dark"){
    document.getElementById("dark-light-switch").value = "light";
    }else{
        document.getElementById("dark-light-switch").value = "dark";
    }
})