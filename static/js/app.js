//import the data from data.js
const tableData = data;

//reference the HTML table using d3
var tbody = d3.select("tbody");

//var filters = {}; 
var filters = {
    datetime,
    city,
    state,
    country,
    shape
};

//create a function that creates the table with values
function buildTable(tableData){
    //Clear out any existing data
    tbody.html("");
    //Loop through each object in the data
    //and append a row and cells for each value in the row
    tableData.forEach((dataRow)=>{
        //append a row to the table body
        let row = tbody.append("tr");
        //loop through each field in the dataRow and add
        //each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
};

//create a function using D3 to filter data
function updateFilters() {
    // Grab the value from each filter
    datetime = d3.select("#datetime").property("value");
    city = d3.select("#city").property("value");
    state = d3.select("#state").property("value");
    country = d3.select("#country").property("value");
    shape = d3.select("#shape").property("value");
    
    //Call function to apply all filters and rebuild the table
    filterTable();
}

function filterTable() {
    //set the filteredData to the tableData
    let filteredData = tableData;
    // Loop through all of the filters and keep any data that
    //matches the filter values
    if (datetime) {filteredData = filteredData.filter(row => row.datetime === datetime)};
    if (city) {filteredData = filteredData.filter(row => row.city === city)};
    if (state) {filteredData = filteredData.filter(row => row.state === state)};
    if (country) {filteredData = filteredData.filter(row => row.country === country)};
    if (shape) {filteredData = filteredData.filter(row => row.shape === shape)};    
 
    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    // call the table
    buildTable(filteredData);    
}
  // Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", updateFilters);
  // Build the table when the page loads
buildTable(tableData);





