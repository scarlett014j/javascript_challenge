// from data.js
var tableData = data;

// YOUR CODE HERE!
 
//generating and deleting the table
function generateTable(table, data) {
   while(table.rows[0]) table.deleteRow(0);
    console.log(table.rows)
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }

let table = document.querySelector("table");
generateTable(table, tableData);


//checking for the button click
var button = d3.select("#filter-btn");
var date = d3.select("#datetime");
var input = "1/11/2011" 
button.on("click", function() {
   // Select the current count
    //console.log(input)
    tableData = data.filter(row => row.datetime === input);
    generateTable(table, tableData);
    console.log(tableData);
    })
  
    
date.on("change", updateValue);
//looks for the input and saves it    
function updateValue () {
    
    input = d3.event.target.value;
    console.log(input);
}

  