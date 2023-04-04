import * as d3 from "d3";
import { matrix } from "./data";
import { statesArray } from "./data";


function drawDiagram(nameArray, data) {
    // canvas size
    const width = 1200;                                       
    const height = 1200;        
    //inner radius / outer radius
    const innerRadius = Math.min(width, height) * 0.5 - 180;  
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

    // var svg = d3.select("#map-container").select("svg")
    //     svg.selectAll("*").remove()

    const svg = d3.select("#diagram-container")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("font-size", 10)          // font size
        .attr("font-family", "sans-serif")    // font family
        .append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`);

    

    const group = svg.append("g")
        .selectAll("g")
        .data(chords.groups)
        .join("g");

    function onMouseOver(selected) {
        group
            .filter(d =>d.index !== selected.toElement.__data__.index)
            .style("opacity", 1);

        svg.selectAll(".chord")
            .filter(d => d.source.index !== selected.toElement.__data__.index)
            .style("opacity", 0.1);
    }

    function onMouseOut() {
        group.style("opacity", 1);
        svg.selectAll(".chord")
            .style("opacity", 1);
    }

    group.append("path")
        .attr("fill", d => color(nameArray[d.index]))
        .attr("d", arc)
        .on("mouseover", onMouseOver)
        // .on("click", onMouseOver)
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
        .text(d => `${nameArray[d.index]}`)
        // .style("fill", "white");
        .style("fill", d => color(nameArray[d.index]));

    group.append("title")
        .text(d => `${nameArray[d.index]}
    ${d3.sum(chords, c => (c.source.index === d.index) * c.source.value)} NET MOVING OUT →
    ${d3.sum(chords, c => (c.target.index === d.index) * c.source.value)} NET MOVING IN ←`);

    function onMouseOverRibbon(selected) {
        console.log(selected, "selected ribbon")
        group
            .filter(d => d.index !== selected.toElement.__data__.source.index)
            .style("opacity", 1);

        svg.selectAll(".chord")
            .filter(d => d.source.index !== selected.toElement.__data__.source.index)
            .style("opacity", 0.1);
    }

    function onMouseOutRibbon() {
        group.style("opacity", 1);
        svg.selectAll(".chord")
            .style("opacity", 1);
    }
    svg.append("g")
        .attr("fill-opacity", 0.7)
        .selectAll("path")
        .data(chords)
        .join("path")
        // .style("mix-blend-mode", "multiply")
        .attr("class", "chord")
        .attr("d", ribbon)
        .attr("fill", d => color(nameArray[d.source.index]))
        // .attr("stroke", "#000")
        // .on("click", d => onMouseOverRibbon(d))
        .on("mouseover", d => onMouseOverRibbon(d))
        .on("mouseout", d => onMouseOutRibbon(d))
        .append("title")
        .text(d => `NET MOVING OUT ${nameArray[d.source.index]} → ${nameArray[d.target.index]} ${d.source.value}`)



    // function color(index) {
    //     const colorScale = d3.scaleOrdinal()
    //         .domain(d3.range(matrix.length))
    //         .range(d3.schemeCategory10);

    //     return colorScale(index);
    // }

    function color(index) {
        const colorScale = d3.scaleOrdinal(nameArray, d3.quantize(d3.interpolateRainbow, nameArray.length))
          
        return colorScale(index);
    }

    return svg.node();
}

export { drawDiagram };
