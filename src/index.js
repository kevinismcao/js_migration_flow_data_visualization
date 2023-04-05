import {fetchData} from "./scripts/data.js";
import { fetchStateData } from "./scripts/data.js";
import {drawDiagram} from "./scripts/diagram.js"; 
import {getAllName} from "./scripts/names";
import { handleSelection } from "./scripts/utils.js";
import { statesArray } from "./scripts/states.js";




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



// const matrixName = getAllName("California")

// const stateNum = "06"
// const countyNum = "*"
// const year = 2020
// fetchData(year, countyNum, stateNum, matrixName).then(matrix => drawDiagram(matrixName, matrix))
