import * as d3 from "d3";
import { matrix } from "./datatest";
import { statesArray } from "./datatest";
// function drawDiagram(){
// var matrix = [
//     [0, 2, 1, 3],
//     [2, 0, 3, 1],
//     [1, 3, 0, 2],
//     [3, 1, 2, 0]
// ];
// var width = 500;
// var height = 500;
// var svg = d3.select("#map-container")
//     .append("svg")
//     .attr("width", width)
//     .attr("height", height)
//     .append("g")
//     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// var outerRadius = Math.min(width, height) * 0.5 - 40;
// var innerRadius = outerRadius - 30;

// var chord = d3.chord()
//     .padAngle(0.05)
//     .sortSubgroups(d3.descending)
//     .sortChords(d3.ascending);

// var arc = d3.arc()
//     .innerRadius(innerRadius)
//     .outerRadius(outerRadius);

// var ribbon = d3.ribbon()
//     .radius(innerRadius);

// var color = d3.scaleOrdinal()
//     .domain(d3.range(4))
//     .range(["#000000", "#FFDD89", "#957244", "#F26223"]);

// var chords = chord(matrix);

// var group = svg.append("g")
//     .selectAll("g")
//     .data(chords.groups)
//     .join("g");

// group.append("path")
//     .attr("fill", d => color(d.index))
//     .attr("stroke", d => color(d.index))
//     .attr("d", arc);

// group.append("text")
//     .each(d => {
//         d.angle = (d.startAngle + d.endAngle) / 2;
//     })
//     .attr("dy", ".35em")
//     .attr("transform", d => `
//     rotate(${(d.angle * 180 / Math.PI - 90)})
//     translate(${outerRadius + 5})
//     ${d.angle > Math.PI ? "rotate(180)" : ""}
//   `)
//     .attr("text-anchor", d => d.angle > Math.PI ? "end" : null)
//     .text(d => "Item " + d.index);

// svg.append("g")
//     .attr("fill-opacity", 0.67)
//     .selectAll("path")
//     .data(chords)
//     .join("path")
//     .attr("d", ribbon)
//     .attr("fill", d => color(d.target.index))
//     .attr("stroke", d => d3.rgb(color(d.target.index)).darker())
//     .append("title")
//     .text(d => `Relationship between Item ${d.source.index} and Item ${d.target.index}: ${d.source.value}`);
// }

// function drawDiagram(nameArray, data) {
//     const width = 1000;
//     const height = 1000;
   
//     const outerRadius = Math.min(width, height) * 0.5 - 40;
//     const innerRadius = outerRadius - 30;

//     const chord = d3.chord()
//         .padAngle(0.05)
//         .sortSubgroups(d3.descending);

//     const arc = d3.arc()
//         .innerRadius(innerRadius)
//         .outerRadius(outerRadius);

//     const ribbon = d3.ribbon()
//         .radius(innerRadius);

//     const matrix = data;
//     const chords = chord(matrix);

//     const svg = d3.select("#map-container")
//         .append("svg")
//         .attr("width", width)
//         .attr("height", height)
//         .append("g")
//         .attr("transform", `translate(${width / 2},${height / 2})`);

//     const group = svg.append("g")
//         .selectAll("g")
//         .data(chords.groups)
//         .enter().append("g");

//     group.append("path")
//         .attr("fill", d => color(d.index))
//         .attr("d", arc);

//     group.append("text")
//         .each(d => (d.angle = (d.startAngle + d.endAngle) / 2))
//         .attr("dy", ".35em")
//         .attr("transform", d => `
//       rotate(${(d.angle * 180 / Math.PI - 90)})
//       translate(${outerRadius + 10})
//       ${d.angle > Math.PI ? "rotate(180)" : ""}
//     `)
//         .attr("text-anchor", d => d.angle > Math.PI ? "end" : null)
//         .text(d => `${statesArray[d.index]}`);

//     svg.append("g")
//         .attr("fill-opacity", 0.67)
//         .selectAll("path")
//         .data(chords)
//         .enter().append("path")
//         .attr("d", ribbon)
//         .attr("fill", d => color(d.target.index))
//         .attr("stroke", "#000")
//         .on("mouseover", fade(0.1))
//         .on("mouseout", fade(1));

//     function fade(opacity) {
//         return d => {
//             svg.selectAll("path")
//                 .filter(target => target.source.index !== d.source.index || target.target.index !== d.target.index)
//                 .transition()
//                 .style("opacity", opacity);
//         };
//     }

//     function color(index) {
//         const colorScale = d3.scaleOrdinal()
//             .domain(d3.range(matrix.length))
//             .range(d3.schemeCategory10);

//         return colorScale(index);
//     }
// }

// export { drawDiagram };

function drawDiagramtest(data) {
    // canvas size
    const width = 1000;                                       
    const height = 1000;        
    //inner radius / outer radius
    const innerRadius = Math.min(width, height) * 0.5 - 90;  
    const outerRadius = innerRadius + 20;                      
    

    const chord = d3.chordDirected()
        .padAngle(10/innerRadius)
        .sortSubgroups(d3.descending)
        .sortChords(d3.descending);

    const arc = d3.arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius);

    const ribbon = d3.ribbonArrow()
        .radius(innerRadius-10)
        .padAngle(0.5 / outerRadius);

    const matrix = data;
    const chords = chord(matrix);

    const svg = d3.select("#map-container")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        
        .append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`);

    const group = svg.append("g")
        .attr("font-size", 10)          // font size
        .attr("font-family", "sans-serif")    // font family
        .selectAll("g")
        .data(chords.groups)
        .join("g");

    group.append("path")
        .attr("fill", d => color(d.index))
        .attr("d", arc);

    group.append("text")
        .each(d => (d.angle = (d.startAngle + d.endAngle) / 2))
        .attr("dy", ".35em")
        .attr("transform", d => `
            rotate(${(d.angle * 180 / Math.PI - 90)})
            translate(${outerRadius + 5})
            ${d.angle > Math.PI ? "rotate(180)" : ""}
        `)
        .attr("text-anchor", d => d.angle > Math.PI ? "end" : null)
        .text(d => `${d.index}`);

    group.append("title")
        .text(d => `${d.index}
    ${d3.sum(chords, c => (c.source.index === d.index) * c.source.value)} outgoing →
    ${d3.sum(chords, c => (c.target.index === d.index) * c.source.value)} incoming ←`);
    
    svg.append("g")
        .attr("fill-opacity", 0.70)
        .selectAll("path")
        .data(chords)
        .join("path")
        .style("mix-blend-mode", "multiply")
        .attr("d", ribbon)
        .attr("fill", d => color(d.source.index))
        // .attr("stroke", "#000")
        .append("title")
        .text(d => `${d.source.index} → ${d.target.index} ${d.source.value}`)
        // .on("mouseover", fade(0.1))
        // .on("mouseout", fade(1));


    // function fade(opacity) {
    //     return d => {
    //         svg.selectAll("path")
    //             .filter(target => target.source.index !== d.source.index || target.target.index !== d.target.index)
    //             .transition()
    //             .style("opacity", opacity);
    //     };
    // }

    function color(index) {
        const colorScale = d3.scaleOrdinal()
            .domain(d3.range(matrix.length))
            .range(d3.schemeCategory10);

        return colorScale(index);
    }
}

export { drawDiagramtest };