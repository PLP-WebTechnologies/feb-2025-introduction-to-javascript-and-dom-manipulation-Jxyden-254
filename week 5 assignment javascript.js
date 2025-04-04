// Get elements
const changeTextButton = document.getElementById('change-text-button');
const changeStyleButton = document.getElementById('change-style-button');
const addRemoveButton = document.getElementById('add-remove-button');
const elementToModify = document.getElementById('element-to-modify');
const dynamicText = document.getElementById('dynamic-text');

// Function to change text content dynamically
function changeText() {
    elementToModify.textContent = 'This is the modified text.';
}

// Function to modify CSS styles via JavaScript
function changeStyle() {
    elementToModify.style.backgroundColor = 'lightblue';
    elementToModify.style.color = 'blue';
}

// Function to add or remove an element when a button is clicked
function addRemoveElement() {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is the new paragraph.';
    document.body.appendChild(newElement);
}

// Add event listeners to buttons
changeTextButton.addEventListener('click', changeText);
changeStyleButton.addEventListener('click', changeStyle);
addRemoveButton.addEventListener('click', addRemoveElement);

// Dynamically add text to the page
dynamicText.textContent = 'This text was added dynamically.';
