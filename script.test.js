const googleSearch = require("./script");

const dbMock = ["dog.com", "cheese.com", "movie.com", "favdog.com"];

describe("googleSearch", () => {
  it("this is a test", () => {
    expect("Hello").toBe("Hello");
  });

  it("is searching google", () => {
    expect(googleSearch("testtest", dbMock)).toEqual([]);
    expect(googleSearch("dog", dbMock)).toEqual(["dog.com", "favdog.com"]);
  });

  it("work with undefined and null input", () => {
    expect(googleSearch(null, dbMock)).toEqual([]);
    expect(googleSearch(undefined, dbMock)).toEqual([]);
  });

  it("does not return more than 3 matches", () => {
    expect(googleSearch(".com", dbMock).length).toEqual(3);
  });
});
