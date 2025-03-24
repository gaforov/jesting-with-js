const shoppingList = [
    { id: 1, name: 'Apples', price: 1.50 },
    { id: 2, name: 'Oranges', price: 0.75 },
    { id: 3, name: 'Bananas', price: 0.50 },
    { id: 4, name: 'Milk', price: 2.00 },
    { id: 5, name: 'Cheese', price: 3.50 }
];

test('the shopping list has cheese on it', () => {
    // expect(shoppingList).toContain('Cheese'); // ❌ because toContain() checks for a direct match within the array, but shoppingList contains objects, not just strings. toContain() works for primitive values inside an array, but not for nested properties inside objects.
    expect(shoppingList).toContainEqual({ id: 5, name: 'Cheese', price: 3.50 });
    expect(shoppingList.some(item => item.name === 'Cheese')).toBe(true);
});



const fruits = ["Apples", "Oranges", "Bananas"];

test('fruits has oranges', () => {
    expect(fruits).toContain("Oranges"); // Passes (direct match)   
});
