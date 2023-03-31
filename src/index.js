import {fetchData} from "./scripts/data.js";

document.addEventListener("DOMContentLoaded", () => {
    window.test = fetchData()
    // window.test = function(){ console.log('hello')}
});