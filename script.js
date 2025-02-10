// script.js

// Store references to the search button and input field
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('taskInput');

// Event listener for the search button
searchButton.addEventListener('click', function() {
    const inputTerm = taskInput.value;  // Store the input value in 'inputTerm'
    console.log("Search term:", inputTerm);  // Log the search term (for demonstration)

        // 4. use the value property of the searchInput to get the search term
    console.log(inputTerm);
  
        // 5. select the searches div using document.getElementById
        var taskTitle = document.getElementById("taskInput");
    console.log(taskTitle);
      
        // 6. create a new li element using document.createElement
        var newParagraph = document.createElement("li");
    console.log(newParagraph);
      
        // 7. set the innerHTML of the new paragraph to the search term
        newParagraph.innerHTML = inputTerm;
    console.log(newParagraph);
      
        // 8. append the new paragraph to the searches div
        taskList.appendChild(newParagraph);
        
    
});







