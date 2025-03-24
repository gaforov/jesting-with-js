/* 
Jest Lifecycle Hooks (Setup & Teardown)

Hook	        Description
beforeEach()	Runs before each test in a test file.
afterEach()	    Runs after each test in a test file.
beforeAll()	    Runs once before all tests in a test file.
afterAll()	    Runs once after all tests in a test file.
 */

describe('Example Test Suite', () => {

  beforeAll(() => {
    console.log('🛠 Running before all tests (Once before all tests in this suite)');
  });

  afterAll(() => {
    console.log('✅ Running after all tests (Once after all tests in this suite)');
  });

  beforeEach(() => {
    console.log('🔄 Setting up before each test');
  });

  afterEach(() => {
    console.log('🧹 Cleaning up after each test');
  });

  test('Test 1', () => {
    console.log('📝 Running Test 1');
    expect(1 + 1).toBe(2);
  });

  test('Test 2', () => {
    console.log('📝 Running Test 2');
    expect(true).toBeTruthy();
  });

});

