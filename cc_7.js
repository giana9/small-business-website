const input = document.getElementById("headlineInput");
const btn = document.getElementById("updateButton");
const headline = document.getElementById("ctaHeadline");

// Updates Button When CLicked
btn.addEventListener("click", function() {
    if (input.value !== "") {
        headline.textContent = input.value;
    }
});