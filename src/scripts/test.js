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

function drawDiagram(data) {
    const width = 500;
    const height = 500;
    const statesArray = ["Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "District of Columbia",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming",
        "American Samoa",
        "Guam",
        "Northern Mariana Islands",
        "Puerto Rico",
        "U.S.Minor Outlying Islands",
        "U.S.Virgin Islands"]
    const outerRadius = Math.min(width, height) * 0.5 - 40;
    const innerRadius = outerRadius - 30;

    const chord = d3.chord()
        .padAngle(0.05)
        .sortSubgroups(d3.descending);

    const arc = d3.arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius);

    const ribbon = d3.ribbon()
        .radius(innerRadius);

    const matrix = data;
    const chords = chord(matrix);

    const svg = d3.select("#map-container")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`);

    const group = svg.append("g")
        .selectAll("g")
        .data(chords.groups)
        .enter().append("g");

    group.append("path")
        .attr("fill", d => color(d.index))
        .attr("d", arc);

    group.append("text")
        .each(d => (d.angle = (d.startAngle + d.endAngle) / 2))
        .attr("dy", ".35em")
        .attr("transform", d => `
      rotate(${(d.angle * 180 / Math.PI - 90)})
      translate(${outerRadius + 10})
      ${d.angle > Math.PI ? "rotate(180)" : ""}
    `)
        .attr("text-anchor", d => d.angle > Math.PI ? "end" : null)
        .text(d => `${statesArray[d.index]}`);

    svg.append("g")
        .attr("fill-opacity", 0.67)
        .selectAll("path")
        .data(chords)
        .enter().append("path")
        .attr("d", ribbon)
        .attr("fill", d => color(d.target.index))
        .attr("stroke", "#000")
        .on("mouseover", fade(0.1))
        .on("mouseout", fade(1));

    function fade(opacity) {
        return d => {
            svg.selectAll("path")
                .filter(target => target.source.index !== d.source.index || target.target.index !== d.target.index)
                .transition()
                .style("opacity", opacity);
        };
    }

    function color(index) {
        const colorScale = d3.scaleOrdinal()
            .domain(d3.range(matrix.length))
            .range(d3.schemeCategory10);

        return colorScale(index);
    }
}

export { drawDiagram };
