export function modeSwitch(currentMode){
    console.log (currentMode,"currentMode")
    const body = document.body
    let switchColor = '#191F24';
    if (currentMode === "light"){
        switchColor = 'antiquewhite';
        document.getElementsByTagName("body")[0].style.backgroundColor = '#191F24';
        document.getElementById("submit-button").style.backgroundColor = '#151A1E';
        document.getElementById("pick-states").style.backgroundColor = '#151A1E';
        body.style.backgroundImage = "url('image/background20.jpg')";
        document.getElementById("git-pic").src = "image/GitHub_dark.png";
        document.getElementById("linkedin-pic").src = "image/linkedin-dark.png";
    }else{
        document.getElementsByTagName("body")[0].style.backgroundColor = 'white';
        document.getElementById("submit-button").style.backgroundColor = 'white';
        document.getElementById("pick-states").style.backgroundColor = 'white';
        body.style.backgroundImage = "url('image/background20_light.jpg')";
        document.getElementById("git-pic").src = "image/GitHub-light.png";
        document.getElementById("linkedin-pic").src = "image/linkedin-light.png";
    }
    
    document.getElementsByTagName("body")[0].style.color = switchColor;

    document.getElementById("instruction").style.border = `2px solid ${switchColor}`;
    document.getElementById("submit-button").style.color = switchColor;
    document.getElementById("submit-button").style.border = `2px solid ${switchColor}`;
    document.getElementById("pick-states").style.color = switchColor;
    document.getElementById("pick-states").style.border = `2px solid ${switchColor}`;
    document.getElementById("loading").style.border = `5px solid ${switchColor}`;
    document.getElementById("data-source").style.color = switchColor;
    
}