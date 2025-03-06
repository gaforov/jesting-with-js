test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).not.toBeUndefined();
    expect(n).toEqual(null);
    expect(typeof n).toBe('object');
    expect(n).not.toBeNaN();
    expect(n).toBeFalsy();
    expect(n).toBe(null);
    expect(n).not.toBeTruthy();
});

test('zero', () => {
    const n = 0;
    expect(n).toBe(0);
    expect(n).not.toBeUndefined();
    expect(n).toEqual(0);
    expect(typeof n).toBe('number');
    expect(n).not.toBeNaN();
    expect(n).toBeFalsy();
    expect(n).not.toBeTruthy();
    expect(n).not.toBeNull();
});