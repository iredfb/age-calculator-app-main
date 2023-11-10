const dayInput = document.querySelector("#day")
const monthInput = document.querySelector("#month")
const yearInput = document.querySelector("#year")

const button = document.querySelector("#submit")

const dayOut = document.querySelector("#dayOut")
const monthOut = document.querySelector("#monthOut")
const yearOut = document.querySelector("#yearOut")

/***
 * Selectors
 * - getElementById : gets the element with a particular id
 * - getElementByClassName : with a particular class
 * - QuerySelector
 * - QuerySelectorAll
 */

const now = new Date();
button.addEventListener("click", function(){
    let ageYears = now.getFullYear() - yearInput.value;
    let ageMonths = now.getMonth() - monthInput.value;
    let ageDays = now.getDate() - dayInput.value;

    if (ageDays < 0) {
        ageMonths--; // Borrow from months
        const tempDate = new Date(now);
        tempDate.setMonth(now.getMonth() - 1);
        ageDays = Math.floor((now - tempDate) / (1000 * 60 * 60 * 24));
    }
    
    if (ageMonths < 0) {
        ageYears--; // Borrow from years
        ageMonths = ageMonths + 12; // Adjust months
    }
    
    yearOut.textContent = ageYears
    monthOut.textContent = ageMonths
    dayOut.textContent = ageDays
    
    yearInput.value = ""
    monthInput.value = ""
    dayInput.value = ""
})