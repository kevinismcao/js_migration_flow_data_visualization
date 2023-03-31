import {fetchData} from "./scripts/data.js";
import {drawDiagram} from "./scripts/test.js"; 


document.addEventListener("DOMContentLoaded", () => {
    window.test = fetchData()
    // window.test = function(){ console.log('hello')}
    const data = [
        [11975, 5871, 8916, 2868],
        [1951, 10048, 2060, 6171],
        [8010, 16145, 8090, 8045],
        [1013, 990, 940, 6907]
    ];
    // const canvas = document.getElementById("map-canvas");
    // console.log(canvas, "canvas");
    drawDiagram();

});

