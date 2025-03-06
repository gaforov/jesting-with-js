// Numbers
test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBe(4);
    expect(value).toEqual(4);
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(1);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(10);
    expect(value).toBeCloseTo(4.001, 0.001);
    expect(value).not.toBe(5);
    expect(value).toBeDefined();
    expect(value).not.toBeUndefined();
    expect(value).not.toBeNull();
    expect(value).toBeTruthy();
    expect(value).not.toBeFalsy();
    // expect(value).toContain(4); // ❌ fail, because value is a number (e.g., 4), toContain() checks whether an array or string contains a value.
});

test('floating-point numbers for precision', () => {
    const value = 0.1 + 0.2;
    expect(value).toBeCloseTo(0.3, 0.001); // 0.001 is the precision level
    expect(0.1+0.2).toBeCloseTo(0.3); // 💡 This is useful because 0.1 + 0.2 actually equals 0.30000000000000004 due to floating-point precision errors.
    // expect(value).toBe(0.3); // ❌ because 0.1 + 0.2 actually equals 0.3000000000000000, toBe() checks for exact match. 
});