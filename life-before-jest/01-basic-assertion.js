function multiply(a, b) {
    return a * b; // ✅ Correct implementation (change to 'a + b' to see an error in the console)
}

// 🛠 First, manually test the function (commented out for reference)
// let result = multiply(4, 5);
// let expected = 20;

// if (result !== expected) {
//     throw new Error(`${result} is not equal to ${expected}`);
// }

// ✅ Now, using the `expect()` function for assertion:
expect(multiply(4, 5)).toBe(20); // ❌ Initially fails if `multiply()` is incorrect

function expect(actual) {
    return {
        toBe(expected) { 
            // 🛠 Custom assertion method, similar to Jest's `expect().toBe()`, 
            // but manually implemented for learning purposes.
            if (actual !== expected) {
                throw new Error(`${actual} is not equal to ${expected}`);
            }
        }
    };
}

// ✅ Verifying that `expect` is a function
console.log(typeof expect); // Output: "function"
