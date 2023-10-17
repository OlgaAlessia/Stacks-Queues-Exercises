const BackForward = require("./back_forward");

bf = new BackForward();

describe("clickPage", function() {
  it("The user goes to Google, Yahoo and Ebay", function() {
    expect(bf.clickPage('Google')).toBe(undefined);
    expect(bf.backStack.size).toBe(1);
    expect(bf.forwardStack.size).toBe(0);
    expect(bf.currentPage).toBe('Google');
    expect(bf.clickPage('Yahoo')).toBe(undefined);
    expect(bf.currentPage).toBe('Yahoo');
    expect(bf.clickPage('EBay')).toBe(undefined);
    expect(bf.currentPage).toBe('EBay');
    expect(bf.backStack.size).toBe(3);
  });
});

describe("goBack", function() {
  it("The user goes back to Yahoo", function() {
    bf.goBack();
    expect(bf.forwardStack.size).toBe(1);
    expect(bf.backStack.size).toBe(2);
    expect(bf.currentPage).toBe('Yahoo');
  });
});

describe("goForward", function() {
  it("The user goes forward again to EBay", function() {
    bf.goForward();
    expect(bf.backStack.size).toBe(3);
    expect(bf.forwardStack.size).toBe(0);
    expect(bf.currentPage).toBe('EBay');
  });
});

describe("clickPage", function() {
  it("The user goes to Apple", function() {
    expect(bf.clickPage('Apple')).toBe(undefined);
    expect(bf.backStack.size).toBe(4);
    expect(bf.forwardStack.size).toBe(0);
    expect(bf.currentPage).toBe('Apple');
  });
});
