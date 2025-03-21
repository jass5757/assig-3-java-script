// Add your student ID and name here
document.getElementById('studentInfo').innerText = 'Student ID: 200601285, Name: Jasmin Kaur';

// Pizza class to represent a pizza order
class Pizza {
    constructor(size, ingredients) {
        this.size = size;
        this.ingredients = ingredients;
    }

    // Method to get the pizza description
    getDescription() {
        const ingredientList = this.ingredients.length ? this.ingredients.join(', ') : 'no additional ingredients';
        return `🍕 You ordered a ${this.size} pizza with ${ingredientList}. 🍕`;
    }
}

// Function to handle the form submission
document.getElementById('pizzaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the selected size
    const size = document.getElementById('size').value;

    // Get the selected ingredients
    const ingredientCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const ingredients = Array.from(ingredientCheckboxes).map(checkbox => checkbox.value);

    // Create a Pizza object
    const pizzaOrder = new Pizza(size, ingredients);

    // Output the pizza description to the HTML
    document.getElementById('pizzaDescription').innerHTML = `
        <p><strong>Your Pizza Order:</strong></p>
        <p>${pizzaOrder.getDescription()}</p>
        <p>Thank you for your order! 🍕🎉</p>
    `;
});
