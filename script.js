// This function validates the input of the form and sends a POST request to the server
function addCourse() {
    // Get the form element by its id
    var form = document.getElementById("form");
    // Get the input values from the form
    var name = form.elements["name"].value;
    var description = form.elements["description"].value;
    var subject = form.elements["subject"].value;
    var credits = form.elements["credits"].value;
    // Check if the input values are valid
    if (name && description && subject && credits) {
      // Create a new XMLHttpRequest object
      var xhr = new XMLHttpRequest();
      // Set the request method and the URL
      xhr.open("POST", "/add_course");
      // Set the request header to indicate the content type
      xhr.setRequestHeader("Content-Type", "application/json");
      // Create a JSON object with the input values
      var data = JSON.stringify({
        name: name,
        description: description,
        subject: subject,
        credits: credits,
      });
      // Send the request with the data
      xhr.send(data);
      // Handle the response
      xhr.onload = function () {
        // Check if the status code is 200 (OK)
        if (xhr.status == 200) {
          // Parse the response as JSON
          var response = JSON.parse(xhr.responseText);
          // Display a success message
          alert(response.message);
        } else {
          // Display an error message
          alert("Something went wrong!");
          
        }
      };
    } else {
      // Display a warning message
      alert("Please fill in all the fields!");
    }
  }
  
