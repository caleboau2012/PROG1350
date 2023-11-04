const sum = require('./sum'); // Harness.

// Functional test:  Happy Path.
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

// Functional test:  Happy Path.
test('adds 10 + 20 to equal 30', () => {
    expect(sum(10., 20.)).toBe(30.);
});

// Exception test: Expected failure.
test('adds 1 + 3 should not be 5', () => {
    expect(sum(1, 3)).not.toBe(5);
})

// Exception test: Expected errors.
test('adds objects to each other', () => {
    let a = {
        no: 1,
    }
    let b = {
        no: 2,
    }
    let ans = {
        no: 3,
    }
    expect(sum(a, b)).not.toBe(ans)
})

// Boundary Testing.
// We are checking the boundary of what our function can compute.
test('adds Max number to Max number should fail', () => {
    expect(
        sum(Number.MAX_SAFE_INTEGER, Number.MAX_VALUE)
    ).toBeLessThan(Infinity)
})

// Stress testing would involve calling this function like
//  ~1 million times
// but I'll skip that to save my laptop the trouble :-)

