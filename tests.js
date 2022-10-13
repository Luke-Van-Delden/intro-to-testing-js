// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
describe('sayHello', function() {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should be a string', function () {
        expect(typeof sayHello()).toBe('string');
    });
    it("should return 'Hello, Jane!'", function () {
        expect(sayHello("Jane")).toBe('Hello, Jane!');
    });
    it("should return 'Hello, Alex!'", function () {
        expect(sayHello("Alex")).toBe('Hello, Alex!');
    });
    it("should return 'Hello, Pat!'", function () {
        expect(sayHello("Pat")).toBe('Hello, Pat!');
    });
    it("should return 'Hello, World!'", function () {
        expect(sayHello(true)).toBe('Hello, World!');
    });
    it("should return 'Hello, World!'", function () {
        expect(sayHello(false)).toBe('Hello, World!');
    });
    it("should return 'Hello!'", function () {
        expect(sayHello("")).toBe('Hello!');
    });

})

describe('isFive', function() {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return Boolean when called', function () {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return true when 5 entered', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return true when "5" entered', function () {
        expect(isFive("5")).toBe(true);
    });
    it('should return false when 6 entered', function () {
        expect(isFive(6)).toBe(false);
    });
    it('should return false when -5 entered', function () {
        expect(isFive(-5)).toBe(false);
    });

})

describe('isEven', function() {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should return Boolean when called', function () {
         expect(typeof isEven()).toBe('boolean');
     });
    it('should return true when 2 entered', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when -4 entered', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when 3 entered', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when "banana" entered', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when "8" entered', function () {
        expect(isEven("8")).toBe(true);
    });
    it('should return false when Infinity entered', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return true when true entered', function () {
        expect(isEven(true)).toBe(false);
    });
    it('should return false when called without an argument', function () {
        expect(isEven()).toBe(false);
    });
})

describe('isVowel', function() {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should return a as a boolean', function () {
        expect(typeof isVowel()).toBe('boolean');
    });
    it('should be return true when "a" entered', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('should be return true when "A" entered', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('should be return false when "y" entered', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('should be return false when 4 entered', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should be return false when true entered', function () {
        expect(isVowel(true)).toBe(false);
    });
    it('should be return false when false entered', function () {
        expect(isVowel(false)).toBe(false);
    });
    it('should be return false when "banana" entered', function () {
        expect(isVowel("banana")).toBe(false);
    });
    it('should be return false when isVowel() entered', function () {
        expect(isVowel()).toBe(false);
    });
    it('should be return true when "e" entered', function () {
        expect(isVowel("e")).toBe(true);
    });
    it('should be return true when "E" entered', function () {
        expect(isVowel("E")).toBe(true);
    });
    it('should be return true when "i" entered', function () {
        expect(isVowel("i")).toBe(true);
    });
    it('should be return true when "I" entered', function () {
        expect(isVowel("I")).toBe(true);
    });
    it('should be return true when "o" entered', function () {
        expect(isVowel("o")).toBe(true);
    });
    it('should be return true when "O" entered', function () {
        expect(isVowel("O")).toBe(true);
    });
    it('should be return true when "u" entered', function () {
        expect(isVowel("u")).toBe(true);
    });
    it('should be return true when "U" entered', function () {
        expect(isVowel("U")).toBe(true);
    });
    it('should be return false when "e4" entered', function () {
        expect(isVowel("e4")).toBe(false);
    });
})

describe('add', function() {
    it('should be a defined function', function () {
        expect(typeof add).toBe('function');
    });
    it('inputs is a number or a string containing a number', function () {
        expect(typeof add()).toBe('number');
    });
    it('when input add(2,3) returns 5', function () {
        expect(add(2, 3)).toBe(5);
    });
    it('when input add(-3,-9) returns -12', function () {
        expect(add(-3, -9)).toBe(-12);
    });
    it('when input add("5", 6) returns 11', function () {
        expect(add("5", 6)).toBe(11);
    });
    it('when input add("-4", 10) returns 6', function () {
        expect(add("-4", 10)).toBe(6);
    });
})