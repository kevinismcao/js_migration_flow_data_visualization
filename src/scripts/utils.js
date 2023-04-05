import { getAllName } from "./names";
import { fetchData } from "./data";
import { drawDiagram } from "./diagram";

export function handleSelection(){
    const selectedName = document.getElementById("pick-states").value; 
    const stateNum = selectedName.split(", ")[0];  
    const matrixName = getAllName(selectedName.split(", ")[1]);
    const countyNum = "*";
    const year = document.querySelector('input[name="select-year"]:checked').value;
    
    fetchData(year, countyNum, stateNum, matrixName).then(matrix => drawDiagram(year, matrixName, matrix))
    
   
}


// const matrixName = getAllName("California")

// const stateNum = "06"
// const countyNum = "*"
// const year = 2020
// fetchData(year, countyNum, stateNum, matrixName).then(matrix => drawDiagram(matrixName, matrix))