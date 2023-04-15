function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

    document.querySelector('[data-start]').addEventListener('click', onStart);
    document.querySelector('[data-stop]').addEventListener('click', onStop);

let IntervalChange;

function onStart() {
    document.getElementById("BtnStart").disabled = true;
    document.getElementById("BtnStop").disabled = false;

    IntervalChange = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
}

function onStop() {
    document.getElementById("BtnStart").disabled = false;
    document.getElementById("BtnStop").disabled = true;

    clearInterval(IntervalChange);
}