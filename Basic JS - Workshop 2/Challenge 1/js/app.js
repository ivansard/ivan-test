const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];

function createTableHeader(data){
    const tableHeader = document.createElement("tr");

    for(let index = 0; index < Object.keys(data).length; index++){
         // Creating table heading for each property
         let tableHeading = document.createElement("th");
         tableHeading.textContent = Object.keys(data)[index];
         //Appending heading to header
         tableHeader.appendChild(tableHeading);
    }
    return tableHeader;
}

function createTableDataRow(data){
    const tableRow = document.createElement("tr");

    for(let index = 0; index < Object.keys(data).length; index++){

        // Creating table cell for each property value
        let tableCell = document.createElement("td");
        tableCell.textContent = data[Object.keys(data)[index]];

        // Appending cell to table row
        tableRow.appendChild(tableCell);
    }

    return tableRow;
}

// EXECUTION BEGINS HERE

const mountainDiv = document.querySelector("#mountains");
// Creating and appending table element to mountain div
const table = document.createElement("table");
table.style.textAlign = "right";

mountainDiv.appendChild(table);

const tableHeader = createTableHeader(MOUNTAINS[0]);
table.appendChild(tableHeader);

for(let mountain of MOUNTAINS){
    const tableRow = createTableDataRow(mountain);
    table.appendChild(tableRow);
}

