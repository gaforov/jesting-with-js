function expect(actual) {
    return {
        toBe(expected) { 
            // This is a simple assertion method, similar to Jest's `expect().toBe()`, 
            // but implemented manually for learning purposes.
            if (actual !== expected) {
                throw new Error(`${actual} is not equal to ${expected}`);
            }
        }
    }
}

// 🛠 First, write the minimum viable test method:
expect(add(4, 3)).toBe(7);      // ❌ Initially fails, passes only after enhancing `add()`
expect(add(4, 3, 4)).toBe(11);  // ❌ Initially fails, passes only after enhancing `add()`

// 🛠 Initially, a simple `add` function that only supports two numbers:
// function add(a, b) {
//     return a + b;
// }

// ✅ Enhanced `add` function to support adding multiple numbers using rest parameters:
function add(...numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}
