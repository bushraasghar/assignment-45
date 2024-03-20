// Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.
function makesandwich(item) {
    console.log('making your sandwich with:');
    item.forEach(element => console.log("- " + element));
    console.log('Enjoy yuor sandwich !');
}
makesandwich(['Ham', 'Cheese', 'lettuce']);
makesandwich(['Turkey', 'Bacon']);
makesandwich(['Peanut butter', 'Jelly']);
export {};
