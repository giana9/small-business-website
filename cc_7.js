const input = document.getElementById("headlineInput"); // (text user types) allows us to read what the user types into textbox
const btn = document.getElementById("updateButton"); // (button user clicks) identifies button, watches for clicks
const headline = document.getElementById("ctaHeadline"); // (text that will change) this is the text I want to change when user clicks button

// listens for button click and updates headline
btn.addEventListener("click", function() {
    if (input.value !== "") {
        headline.textContent = input.value;
    }
});