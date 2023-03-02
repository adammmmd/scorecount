let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let home = 0;
let guest = 0;

function plusOneHome() {
    home += 1
    homeScore.textContent = home
}

function plusTwoHome() {
    home += 2
    homeScore.textContent = home
}

function plusThreeHome() {
    home += 3
    homeScore.textContent = home
}

function plusOneGuest() {
    guest += 1 
    guestScore.textContent = guest
}

function plusTwoGuest() {
    guest += 2
    guestScore.textContent = guest
}

function plusThreeGuest() {
    guest += 3
    guestScore.textContent = guest
}