import {test, expect} from './testing-framework.js';
import {multiply, divide} from './math.js';

const multiplyTest = () => {
    const result = multiply(4, 5);
    const expected = 20;

    expect(result).toBe(expected);
}

const divideTest = () => {
    const result = divide(10, 5);
    const expected = 2;
}


test('multiply', multiplyTest);
test('divide', divideTest);

// 💡 File name renamed from 'test.js' to 'test-functions.js' 
// because when running "npm test" it will pick all files ending with "...test.js".

// 💡 Not using Jest yet. Execute the file or with Code Runner.
