function createTable() {
    // Prompt user for number of rows and columns
    const rows = parseInt(prompt("Input number of rows"));
    const columns = parseInt(prompt("Input number of columns"));

    // Get the table element by its ID
    const table = document.getElementById("myTable");

    // Clear any existing rows in the table
    table.innerHTML = '';

    // Loop to create rows and columns
    for (let i = 0; i < rows; i++) {
        const row = table.insertRow(); // Create a new row
        for (let j = 0; j < columns; j++) {
            const cell = row.insertCell(); // Create a new cell in the row
            cell.textContent = `Row-${i} Column-${j}`; // Set cell content
        }
    }
}
