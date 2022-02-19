const smallCups = document.querySelectorAll('.cup-small')
// Liters is number above remained
const liters = document.getElementById('liters')
// percentage full
const percentage = document.getElementById('percentage')
// percentage remaining to be consumed
const remained = document.getElementById('remained')
// For loop to update big cup
updateBigCup()

smallCups.forEach((cup, idx) => {
    // console.log(idx)
    // event listener for each cup, highlights cup when clicked
    cup.addEventListener('click', () => highlightCups(idx))
})
// Add color change to show when cup is full, but create toggle effect for double-clicks to remove color if accidentally clicked
function highlightCups(idx) {
    if (idx===7 && smallCups[idx].classList.contains("full")) idx--;
    else if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }
// Index 2 includes all cups that have been clicked, to make sure each one is full, even if you click several ahead
    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}
// BIG CUP: To show update for each cup that is full, to reflect remaining amount and percentage consumed, as each small cup is clicked
function updateBigCup() {
    // GET # OF FULL CUPS, TO SELCT ALL
    const fullCups = document.querySelectorAll('.cup-small.full').length
    // Get TOTAL CUPS, should always be 8
    const totalCups = smallCups.length
    // Set style based on % consumed, to be hidden at 0, or else SHOW as visible if cup is full
    if(fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
    // HEIGHT determined by full cups/totalcups, * height of BigCup in template literal 
        percentage.style.height = `${fullCups / totalCups * 330}px`
        // Height of text determined by 
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}