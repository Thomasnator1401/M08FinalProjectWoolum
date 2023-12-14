// This script adds some interactivity to the page

// Select the profile div element
var profile = document.getElementById("profile");

// Create a new image element
var image = document.createElement("img");

// Set the image source to a picture of Thomas Woolum
image.src = "thomas.jpg";

// Set the image alt attribute to "Thomas Woolum"
image.alt = "Thomas Woolum";

// Append the image to the profile div
profile.appendChild(image);

// Select the resort span elements
var resorts = document.getElementsByClassName("resort");

// Loop through the resort elements
for (var i = 0; i < resorts.length; i++) {
  // Add a click event listener to each resort element
  resorts[i].addEventListener("click", function() {
    // Toggle the class name of the clicked element between "resort" and "highlight"
    this.className = (this.className == "resort") ? "highlight" : "resort";
  });
}
