// Add functionality to show/hide the dropdown on button click
document.addEventListener("DOMContentLoaded", function () {
    var dropdownBtn = document.querySelector(".dropbtn");
    var dropdownContent = document.querySelector(".dropdown-content");

    dropdownBtn.addEventListener("click", function () {
        dropdownContent.classList.toggle("show");
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener("click", function (event) {
        if (!event.target.matches(".dropbtn")) {
            if (dropdownContent.classList.contains("show")) {
                dropdownContent.classList.remove("show");
            }
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed('#typed-text', {
        strings: ['App Development', "Web Development", "Data Structures"],
        typeSpeed: 100,
        loop: true
    });
});
