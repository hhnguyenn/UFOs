//import the data from data.js
const tableData = data;

//reference the HTML table using d3
var tbody = d3.select("tbody");

//create a function that creates the table with values
function buildTable(data){
    //Clear out any existing data
    tbody.html("");
    //Loop through each object in the data
    //and append a row and cells for each value in the row
    data.forEach((dataRow)=>{
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
//create a D3 function to filter data
function handleClick () {
//listens to a button click
d3.select("#filter-btn").on("click", handleClick);
//grab datetime value from the filter
let date = d3.select("datetime").property("value");
let filteredData=tableData;
//check to see if a date was entered and filtered the
//data using that date
if (date) {
    //apply `filter` to the table data to only keep the
    //rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
};
//rebuild the table using the filtered data
//@NOTE: If no date was entered, then filteredData will
//just be the original tableData.
//call the table
buildtable(filteredData);
}
//Attach an event to listen for the form button
d3.selectAll("filter-btn").on("click", handClick);
//Build the table when the page loads
buildTable(tableData);

