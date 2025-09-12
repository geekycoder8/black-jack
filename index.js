let player = {
	name: "Tom",
	chips: 150
}

let cards = []
let sum = 0
let isAlive = false
let hasBlackJack = false
let message = ""

let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard() {
	let randomNumber = Math.floor(Math.random() * 13) + 1
	if (randomNumber > 10) {
		return 10
	}
	else if (randomNumber === 1) {
		return 11
	}
	else {
		return randomNumber
	}

}



function startGame() {
	isAlive = true
	let firstCard = getRandomCard()
	let secondCard = getRandomCard()
	cards = [firstCard, secondCard]
	sum = firstCard + secondCard
	renderGame()
}


function renderGame() {
	cardsEl.textContent = "Cards: "
	for (let i = 0; i < cards.length; i++) {
		cardsEl.textContent += cards[i] + " "

	}

	sumEl.textContent = "Sum: " + sum

	if (sum <= 20) {
		message = "Do you want to draw a new card?"
	}
	else if (sum === 21) {
		message = "Wohoo! You've got a Blackjack!"
		hasBlackJack = true
		confetti({
			particleCount: 100,
			spread: 120,
			origin: { x: 0.5, y: 0.5 },
			startVelocity: 40,
			gravity: 0.9,
		});
	}
	else {
		message = "You're out of the game!"
		isAlive = false
	}
	messageEl.textContent = message

}


function newCard() {
	if (isAlive === true && hasBlackJack === false) {
		let card = getRandomCard()
		cards.push(card)
		sum += card
		renderGame()
	} else {
		messageEl.textContent = "Cannot draw a new card, you're out of the game!"
	}

}