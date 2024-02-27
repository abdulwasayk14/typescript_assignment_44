// Function to print a summary of the sandwich being ordered
function make_sandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("You ordered an empty sandwich.");
    } else {
        console.log("You ordered a sandwich with the following items:");
        items.forEach(item => {
            console.log("- " + item);
        });
    }
    console.log(); // Add an empty line for spacing
}

// Call the function three times with different number of arguments
make_sandwich('Turkey', 'Lettuce', 'Tomato', 'Mayonnaise');
make_sandwich('Ham', 'Cheese');
make_sandwich();