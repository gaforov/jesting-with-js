test('testing a test', () => {
    expect('testing').toMatch(/ing/);    // `toMatch()` expects a regex
    expect('testing').toContain('ing');  //  Works without regex
    expect('TESTING').toMatch(/ing/i);   //  Passes (matches "ING" in uppercase)
    expect('testing').not.toContain('boring'); //  Passes (does not contain "boring")
    expect('testing').toMatch(/^test/);  // Passes (starts with "test")
    expect('testing').toMatch(/ing$/);   // Passes (ends with "ing")

    // Use \b for word boundaries:
    expect('testing a test').toMatch(/\btest\b/); // ✅ Passes (matches "test" as a word)
    // expect('testing').toMatch(/\btest\b/);        // ❌ Fails (because "test" isn't a full word)


});

test('learning Jest is fun', () => {
    expect('testing').not.toMatch(/boring/);
});



/* 
The '/' is used to define a regex pattern in JavaScript.
toMatch(/pattern/) checks if a string matches the given regex.
Use /ing/ to match "ing" anywhere in the string.
For a simple substring check, use toContain("text") instead. 

the / in a regular expression acts as a delimiter, not just a "slash." 
In JavaScript, regular expressions are defined between two forward 
slashes (/regex/), which delimit (mark the beginning and end of) the pattern.
*/