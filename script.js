// Get the input element with the id 'inputBox'
let input = document.getElementById('inputBox');

// Get all button elements
let buttons = document.querySelectorAll('button');

// Initialize an empty string to store the input value
let string = "";

// Convert the buttons NodeList to an array
let arr = Array.from(buttons);

// Loop through each button element
arr.forEach(button => {
    // Add a click event listener to each button
    button.addEventListener('click', (e) => {
        // Check if the clicked button's text content is '='
        if (e.target.innerHTML == '=') {
            // Evaluate the expression in the string and assign the result to string
            string = eval(string);
            // Set the input value to the evaluated result
            input.value = string;
        }
        // Check if the clicked button's text content is 'AC' (All Clear)
        else if (e.target.innerHTML == 'AC') {
            // Clear the string
            string = "";
            // Set the input value to an empty string
            input.value = string;
        }
        // Check if the clicked button's text content is 'DEL' (Delete)
        else if (e.target.innerHTML == "DEL") {
            // Remove the last character from the string
            string = string.substring(0, string.length - 1);
            // Update the input value
            input.value = string;
        }
        // If none of the above conditions are met, concatenate the clicked button's text content to the string
        else {
            string += e.target.innerHTML;
            // Update the input value
            input.value = string;
        }
    });
});
