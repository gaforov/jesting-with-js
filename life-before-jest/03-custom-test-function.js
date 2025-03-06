// ✅ Custom test function that runs a test callback and logs the result
function test(title, callback) {
    try {
        callback(); // Executes the test function
        console.log(`✅ ${title}`); // Logs success if no error occurs
    } catch (error) {
        console.error(`❌ ${title}`); // Logs failure if an error is thrown
        console.error(error);
    }
}

// ✅ Test cases for multiply and divide functions
const multiplyTest = () => {
    const result = multiply(4, 5);
    const expected = 20;

    expect(result).toBe(expected); // ❌ Initially fails if multiply() is incorrect
};

const divideTest = () => {
    const result = divide(10, 5);
    const expected = 2;

    expect(result).toBe(expected); // ❌ Initially fails if divide() is incorrect
};

// ✅ Running the tests
test('multiply', multiplyTest);
test('divide', divideTest);

// ✅ Simple arithmetic functions being tested
function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// ✅ Custom `expect` function, similar to Jest's `expect()`, but implemented manually
function expect(actual) {
    return {
        toBe(expected) { 
            // Throws an error if the values do not match
            if (actual !== expected) {
                throw new Error(`${actual} is not equal to ${expected}`);
            }
        }
    };
}
