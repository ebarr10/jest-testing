const googleDatabase = [
  "cats.com",
  "souprecipies.com",
  "flowers.com",
  "animals.com",
  "catpictures.com",
  "myfavoritecats.com",
  "secondarycats.com",
];

const googleSearch = (searchInput, db) => {
  const matches = db.filter((website) => {
    return website.includes(searchInput);
  });
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

// console.log(googleSearch("cat", googleDatabase));

module.exports = googleSearch;
