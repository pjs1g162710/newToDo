// script.js

// Store references to the search button and input field
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('taskInput');

const dataBasetitle = [];
const  dataBasedet = [];

// Event listener for the search button
searchButton.addEventListener('click', function() {
    const inputTerm = taskInput.value;  // Store the input value in 'inputTerm'
    console.log("Search term:", inputTerm);  // Log the search term (for demonstration)

        // 4. use the value property of the searchInput to get the search term
    console.log(inputTerm);


    const infoTerm = taskInfo.value;  // Store the input value in 'inputTerm'
    console.log("Search term:", infoTerm);  // Log the search term (for demonstration)

        // 4. use the value property of the searchInput to get the search term
    console.log(inputTerm);
    console.log(infoTerm);


//Can I at this point create the list directly with columns 1 & 2 being titled:
//inputTERM and infoTERM??

    if (!inputTerm) {
        alert("Please enter a task");
        return;
      }  

 // Try to create an array with this:

 if(!dataBasetitle) {
 dataBasetitle = new Array(inputTerm);
 dataBasedet = new Array(infoTerm);
} 
 else {
 dataBasetitle.push(inputTerm);
 dataBasedet.push(infoTerm);
}

 console.log(dataBasetitle) ;

var dataBasetitle;
var dataBasedet; 

 console.log(taskTitle);
 console.log(dataBasedet) ;

 
   // This collects the right output point from the index doc
   var taskTitle = document.getElementById("taskInput");
   console.log(taskTitle);

       
        // 6. create a new li element using document.createElement
        var newBullet = document.createElement("li");
    console.log(newBullet);
      
        // Generate the string
        newBullet.innerHTML = String((dataBasetitle) + ":  " +(dataBasedet));
        console.log(newBullet);
      
        // 8. append the new paragraph to the searches div
        const listEl = document.getElementById('taskList');
        console.log(listEl);
        listEl.appendChild(newBullet);

        console.log(taskList);

        taskList.innerHTML = taskList; 

      })


      
//Here I cheat and use the event listener on the submit button to manually select the
//task to edit/delete

// Store references to the search button and input field
const deleteButton = document.getElementById('deleteButton');
const deleteInput = document.getElementById('EditTaskInput');

// Event listener for the delete button
deleteButton.addEventListener('click', function() {
    const deleteTerm = EditTaskInput.value;  // Store the input value in 'inputTerm'
    console.log(deleteTerm);  // Log the search term (for demonstration)

    if (!deleteTerm) {
        alert("Please enter list item number. The number must be present on the list");
        return;
      } 

 const index = deleteTerm-1;
 console.log(index);

//at this point, attempt to delete it
//select correct point:
 dataBasetitle.splice(index,1);
 dataBasedet.splice(index,1);

console.log(dataBasetitle);

var dataBasetitle;
var dataBasedet; 

 console.log(taskTitle);
 console.log(dataBasedet) ;

//TRYING SOMETHING NEW HERE

const listContainer = document.querySelector("ol");



    displayListItems.innerHTML = tasklist
    //displayListItems.innerText = listItems; //or this one
    //displayListItems.textContent = listItems; //or this one
    






})


