// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
//console.log(tableData);

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#datetime");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// in comments &#39 means '
// in comments &#44 means ,
// in comments &#33 means !
// comments[i] = comments[i].replace(/&#39/g, "'");
// comments[i] = comments[i].replace(/&#44/g, ",");


//general table population on first load out
tableData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    //console.log(inputValue);
  
    var filteredData = tableData.filter(date => date.datetime === inputValue);

    // select table
    var tableBody = d3.select("tbody");

    // clear table
    tableBody.html("");

    //console.log(filteredData);
    //fill in new search
    filteredData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

  };