// Sale Page
let saleItems = [];
function addToSaleList() {
    const itemName = document.getElementById('sale-item').value;
    const quantity = parseFloat(document.getElementById('sale-quantity').value);
    const price = parseFloat(document.getElementById('sale-price').value);
    const totalElement = document.getElementById('sale-total');

    if (itemName && quantity && price) {
        saleItems.push({ itemName, quantity, price });
        updateList('sale-list', saleItems);
        updateTotal('sale-total', saleItems);
        totalElement.innerText = `${calculateTotal(saleItems)} PKR`;
    }
}

// Purchase Page
let purchaseItems = [];
function addToPurchaseList() {
    const itemName = document.getElementById('purchase-item').value;
    const quantity = parseFloat(document.getElementById('purchase-quantity').value);
    const price = parseFloat(document.getElementById('purchase-price').value);
    const totalElement = document.getElementById('purchase-total');

    if (itemName && quantity && price) {
        purchaseItems.push({ itemName, quantity, price });
        updateList('purchase-list', purchaseItems);
        updateTotal('purchase-total', purchaseItems);
        totalElement.innerText = `${calculateTotal(purchaseItems)} PKR`;
    }
}

// Inventory Page
let inventoryItems = [];
function addToInventoryList() {
    const itemName = document.getElementById('inventory-item').value;
    const quantity = parseFloat(document.getElementById('inventory-quantity').value);

    if (itemName && quantity) {
        inventoryItems.push({ itemName, quantity });
        updateList('inventory-list', inventoryItems);
    }
}

// Generic function to update the list
// function updateList(listId, items) {
//     const list = document.getElementById(listId);
//     list.innerHTML = '';
//     items.forEach((item) => {
//         const li = document.createElement('li');
//         li.textContent = `${item.itemName} - ${item.quantity} - ${item.price || 'N/A'} PKR`;
//         list.appendChild(li);
//     });
// }

// Generic function to update the list with a table
function updateList(listId, items) {
    const list = document.getElementById(listId);
    list.innerHTML = '';

    if (items.length === 0) {
        return;
    }

    const table = document.createElement('table');
    table.classList.add('item-table');
    list.appendChild(table);

    // Create the table header
    const thead = table.createTHead();
    const headerRow = thead.insertRow();
    const headers = ['Item', 'Quantity', 'Price'];

    for (const headerText of headers) {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    }

    // Create the table body
    const tbody = table.createTBody();
    items.forEach((item) => {
        const row = tbody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);

        cell1.textContent = item.itemName;
        cell2.textContent = item.quantity;
        cell3.textContent = item.price || 'N/A';
    });
}


// Generic function to calculate the total
function calculateTotal(items) {
    return items.reduce((total, item) => total + (item.price || 0) * item.quantity, 0);
}

// Generic function to update the total
function updateTotal(totalElementId, items) {
    const totalElement = document.getElementById(totalElementId);
    totalElement.innerText = `${calculateTotal(items)} PKR`;
}

// Generic function to download list as PDF (simplified)
function downloadPDF(listId) {
    const list = document.getElementById(listId);
    // You would typically use a library like jsPDF to create a PDF here.
    // For simplicity, we won't implement this part in the example.
}
