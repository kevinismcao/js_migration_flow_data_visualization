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
    
    // function fade(opacity) {
    //     return function (d, i) {
    //         ribbons
    //             .filter(function (d) {
    //                 console.log(d.source.index, "source index");
    //                 console.log(d.target.index, "target index");
    //                 console.log(i, "i"); 
    //                 return d.source.index != i && d.target.index != i;
    //             })
    //             .transition()
    //             .style("opacity", opacity);
    //     };
    // }

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

    // const svg = d3.create("svg")
    //     .attr("viewBox", [-width / 2, -height / 2, width, height])
    //     .attr("font-size", 10)
    //     .attr("font-family", "sans-serif")
    //     .style("width", "100%")
    //     .style("height", "auto");

    const svg = d3.select("#map-container")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("font-size", 10)          // font size
        .attr("font-family", "sans-serif")    // font family
        // 
        .append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`);

    const group = svg.append("g")
        .selectAll("g")
        .data(chords.groups)
        .join("g");

    function onMouseOver(selected) {
        // console.log(selected.toElement.__data__.index, "select index")
        group
            .filter(d => 
                d.index !== selected.toElement.__data__.index
                // console.log(d.index, "index");
            )
                // console.log (d.index,"index");
                // console.log(selected.index, "select index")
            .style("opacity", 0.3);
        
        svg.selectAll(".chord")
            .filter(d => d.source.index !== selected.toElement.__data__.index)
                // console.log(d.source.index, "source index");
                // console.log(selected.index, "2nd select index")

            .style("opacity", 0.3);
    }

    function onMouseOut() {
        group.style("opacity", 1);
        svg.selectAll(".chord")
            .style("opacity", 1);
    }

    group.append("path")
        .attr("fill", d => color(d.index))
        .attr("d", arc)
        .on("mouseover", onMouseOver)
        .on("mouseout", onMouseOut);

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
    
    
    function onMouseOverRibbon(selected) {
        console.log(selected, "selected ribbon")
        group
            .filter(d => d.index !== selected.toElement.__data__.source.index)
            .style("opacity", 0.3);

        svg.selectAll(".chord")
            .filter(d => d.source.index !== selected.toElement.__data__.source.index)
            .style("opacity", 0.3);
    }

    function onMouseOutRibbon() {
        group.style("opacity", 1);
        svg.selectAll(".chord")
            .style("opacity", 1);
    }

    svg.append("g")
        .attr("fill-opacity", 0.67)
        .selectAll("path")
        .data(chords)
        .join("path")
        .style("mix-blend-mode", "multiply")
        .attr("class", "chord")
        .attr("d", ribbon)
        .attr("fill", d => color(d.source.index))
        // .attr("stroke", "#000")
        .on("mouseover", d => onMouseOverRibbon(d))
        .on("mouseout", d => onMouseOutRibbon(d))
        .append("title")
        .text(d => `${d.source.index} → ${d.target.index} ${d.source.value}`);

    // function fade(opacity) {
    //     return (event, d) => {
    //         svg.selectAll(".ribbon")
    //             .filter(target => {
    //                 console.log(d, target);
    //                 return target.source.index !== d.index && target.target.index !== d.index;
    //             })
    //             .transition()
    //             .style("opacity", opacity);
    //     }
    // }
   

    function color(index) {
        const colorScale = d3.scaleOrdinal()
            .domain(d3.range(matrix.length))
            .range(d3.schemeCategory10);

        return colorScale(index);
    }

    return svg.node();
}

export { drawDiagramtest };
