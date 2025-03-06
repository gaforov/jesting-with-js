function compileAndroidCode() {
    throw new Error ('You are using wrong JDK version');
}


test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);
    expect(() => compileAndroidCode()).toThrow('You are using wrong JDK version');
    expect(() => compileAndroidCode()).toThrow(/wrong JDK version/); // Regular expression pattern
});