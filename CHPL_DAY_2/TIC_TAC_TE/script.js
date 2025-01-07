let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn = true; // true for "O", false for "X" - Tracks whose turn it is

// These are the possibilities to win the match (8 possibilities)
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

// When someone clicks on the box cell, then what happens
function clickBox(box) {
  box.innerText = turn ? "X" : "O"; // ternary operator used to set box to "O" or "X", if true then "O" or "X"
  box.disabled = true; // once the button is clicked, then stop further clicks
  turn = !turn; // two players are playing, so once one is true then next time they are false, at that time the other person is true
  checkWinner(); // calling winner function
}

// Function for a winner
function checkWinner() {
  let winnerFound = false;

  // Check for a winner
  for (let i = 0; i < winPatterns.length; i++) {
    const [a, b, c] = winPatterns[i]; // Destructure the winning pattern
    // Check if all three boxes in the pattern have the same non-empty value
    if (
      boxes[a].innerText &&
      boxes[a].innerText === boxes[b].innerText &&
      boxes[a].innerText === boxes[c].innerText
    ) {
      showWinner(boxes[a].innerText); // Show the winner message
      winnerFound = true;
      break; // Exit the loop once a winner is found
    }
  }

  // If no winner and all boxes are filled, it's a draw
  if (!winnerFound && checkDraw()) {
    showDraw();
  }
}

// Function to check draw
function checkDraw() {
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].innerText === "") {
      return false; 
    }
  }
  return true; 
}

// Function to show the winner message
function showWinner(winner) {
  msg.innerText = `Congrats! ${winner} wins. Keep it up!`;
  msgContainer.style.display = "flex"; // Display the message container

  disableAllBtn(); // Disable all boxes to end the game
  hideAllBoxes(); // Hide all boxes
}

// Function to show the draw message
function showDraw() {
  msg.innerText = "It's a draw! Try again.";
  msgContainer.style.display = "flex";
  disableAllBtn(); // Disable all boxes to end the game
  hideAllBoxes(); // Hide all boxes
}

// Function to hide all boxes
function hideAllBoxes() {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.display = "none"; // Hide the boxes
  }
}

// Function to disable all boxes
function disableAllBtn() {
  // Loop through each box and disable it
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].disabled = true;
  }
}

// Function to reset the game
function resetGame() {
  turn = true; // Reset the turn to true ("O" starts)
  msgContainer.style.display = "none"; // Hide the message container
  // Loop through each box to enable and clear the text
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].disabled = false; // Enable the box
    boxes[i].innerText = ""; // Clear the text
    boxes[i].style.display = "block"; // Make the box visible again
  }
}

// Add event listeners to each box
for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", function () {
    clickBox(this); // Call clickBox 
  });
}

// Addding event listener to resect function
resetBtn.addEventListener("click", resetGame);
