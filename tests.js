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