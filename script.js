
function createTable() {
    // Get the user input for the number of rows and columns
    const rn = parseInt(prompt("Input number of rows:"));
    const cn = parseInt(prompt("Input number of columns:"));

    // Get the table element by its ID
    const table = document.getElementById("myTable");

    // Create the table rows and cells
    for (let i = 0; i < rn; i++) {
        const row = table.insertRow(i);
        for (let j = 0; j < cn; j++) {
            const cell = row.insertCell(j);
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}

// Attach the createTable function to the button click event
const createButton = document.getElementById("createButton");
createButton.addEventListener("click", createTable);
