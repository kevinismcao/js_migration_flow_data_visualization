import { getAllName } from "./names";
import { fetchData } from "./data";
import { drawDiagram } from "./diagram";

export function handleSelection(){
    const diagramName = document.getElementById("diagram-title")
    const selectedName = document.getElementById("pick-states").value; 
    const stateNum = selectedName.split(", ")[0];  
    const stateName = selectedName.split(", ")[1]
    const matrixName = getAllName(selectedName.split(", ")[1]);
    const countyNum = "*";
    const year = document.querySelector('input[name="select-year"]:checked').value;
    diagramName.style.display = "none"
    if (stateName === "*"){
        diagramName.innerHTML = `${year} US State to State migration`;
    }else{
        diagramName.innerHTML = `${year} ${stateName} migration`;
    };
    fetchData(year, countyNum, stateNum, matrixName).then(matrix => drawDiagram(year, matrixName, matrix))
    
   
}


// const matrixName = getAllName("California")

// const stateNum = "06"
// const countyNum = "*"
// const year = 2020
// fetchData(year, countyNum, stateNum, matrixName).then(matrix => drawDiagram(matrixName, matrix))