var weapons = ["Rock", "Paper", "Scissors"]

function cpuWeaponName() {
    var cpuNumber = Math.floor(Math.random() * weapons.length)
    var cpuWeapon = ""
    if (cpuNumber == 0) {
        cpuWeapon = "Rock"
    }
    else if (cpuNumber == 1) {
        cpuWeapon = "Paper"
    }
    else if (cpuNumber == 2) {
        cpuWeapon = "Scissors"
    }
    return cpuWeapon
}

var playerWins = "You Win!"
var cpuWins = "You Lose!"

function play(playerChoice) {
    
    var cpuChoice = cpuWeaponName()
    console.log(playerChoice,cpuChoice)
    if (playerChoice == cpuChoice) {
        printResults(playerChoice, cpuChoice, "TIE")
    }
    else if (playerChoice == "Rock") {
        if (cpuChoice == "Paper") {
            printResults(playerChoice, cpuChoice, cpuWins)
        }
        else {
            printResults(playerChoice, cpuChoice, playerWins)
        }
    }
    else if (playerChoice == "Paper") {
        if (cpuChoice == "Scissors") {
            printResults(playerChoice, cpuChoice, cpuWins)
        }
        else {
            printResults(playerChoice, cpuChoice, playerWins)
        }
    }
    else if (playerChoice == "Scissors") {
        if (cpuChoice == "Rock") {
            printResults(playerChoice, cpuChoice, cpuWins)
        }
        else {
            printResults(playerChoice, cpuChoice, playerWins)
        }
    }
    
}

function printResults(playerChoice, cpuChoice, winner) {
    document.getElementById("winner").innerText = `You chose ${playerChoice}, the CPU chose ${cpuChoice}. The result is ${winner}`
}

