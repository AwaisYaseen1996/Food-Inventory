// Get references to the buttons
const saleButton = document.getElementById("sale-button");
const purchaseButton = document.getElementById("purchase-button");
const inventoryButton = document.getElementById("inventory-button");

// Add event listeners to the buttons
saleButton.addEventListener("click", () => {
    // Redirect to the Sale page
    window.location.href = "./pages/sale.html";
});

purchaseButton.addEventListener("click", () => {
    // Redirect to the Purchase page
    window.location.href = "./pages/purchase.html";
});

inventoryButton.addEventListener("click", () => {
    // Redirect to the Inventory page
    window.location.href = "./pages/inventory.html";
});


