//This is because the lights index from the top is zero

let currentLight = 0;

//This tracks whethet the auto mode is on or off
let isAuto = false;

let timeoutId = null;
const lights = ['red', 'yellow', 'green'];//This is beacuse the lights are in this order in the html file and we can use this to easily access them
const durations = [3000, 1000, 3000];// Red, Yellow, Green durations in milliseconds


function updateLights() {
    document.querySelectorAll('.light').forEach(light => light.classList.remove('active'));
    document.querySelector(`.${lights[currentLight]}`).classList.add('active');
}

//Functions by clicking on the "Next" button to change the light manually
function changeLight() {
    currentLight = (currentLight + 1) % 3;
    updateLights();
}

//Happens when the "Next" button is clicked to change the light manually
function autochange() {
    changeLight();
    timeoutId = setTimeout(autochange, durations[currentLight]);
}

//It comes in when the button is clicked to start the auto mode
function toggleAuto() {
    isAuto = !isAuto;
    if (isAuto) {
        autochange();//Starts the auto change
    } else {
        clearTimeout(timeoutId);
        timeoutId = null;
    }
}

//Initialize with red light
updateLights();