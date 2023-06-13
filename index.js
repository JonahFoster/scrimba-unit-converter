/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const lengthEl = document.getElementById("length-conversion")
const volumeEl = document.getElementById("volume-conversion")
const massEl = document.getElementById("mass-conversion")
const inputEl = document.getElementById("convert-input")
const convertBtn = document.getElementById("convert-button")
let input = Number("")

convertBtn.addEventListener("click", function(){
    input = inputEl.value
    lengthCalc(input)
    volumeCalc(input)
    massCalc(input)
})

function lengthCalc(input) {
    let firstCalc = (input * 3.281).toFixed(3)
    let secondCalc = (input / 3.281).toFixed(3)
    lengthEl.textContent = `${input} meters = ${firstCalc} feet | ${input} feet = ${secondCalc} meters`
}

function volumeCalc(input) {
    let firstCalc = (input * 0.264).toFixed(3)
    let secondCalc = (input / 0.264).toFixed(3)
    volumeEl.textContent = `${input} liters = ${firstCalc} gallons | ${input} gallons = ${secondCalc} liters`
}

function massCalc(input) {
    let firstCalc = (input * 2.204).toFixed(3)
    let secondCalc = (input / 2.204).toFixed(3)
    massEl.textContent = `${input} kilograms = ${firstCalc} pounds | ${input} pounds = ${secondCalc} kilograms`
}


