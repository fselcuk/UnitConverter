/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertBtn = document.getElementById("btn")
let inputEl = document.getElementById("input-el")
let lengthEl = document.getElementById("meter")
let volumeEl = document.getElementById("liter")
let massEl = document.getElementById("kilo")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    lengthEl.textContent = `${baseValue} meters = ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet =  ${(baseValue / meterToFeet).toFixed(3)} feet`
    
    volumeEl.textContent = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} gallons | ${baseValue} gallons =  ${(baseValue / literToGallon).toFixed(3)} liters`
    
    massEl.textContent = `${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(3)} pounds | ${baseValue} pounds =  ${(baseValue / kiloToPound).toFixed(3)} kilos`
     
})