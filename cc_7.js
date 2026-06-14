const input = document.getElementById("headlineInput"); // selects input
const btn = document.getElementById("updateButton"); // grabs clicked button
const headline = document.getElementById("ctaHeadline"); // grabs headline that will change

// Updates Button When CLicked
btn.addEventListener("click", function() {
    if (input.value !== "") {
        headline.textContent = input.value;
    }
}); // listens for click, checks input box isn't empty, replaces headline with new text