// Code your solution here

// Function to find all drivers that match the passed-in name
function findMatching(drivers, name) {
  return drivers.filter(
    (driver) => driver.toLowerCase() === name.toLowerCase()
  );
}

// Function to find drivers that begin with the given letters (fuzzy match)
function fuzzyMatch(drivers, letters) {
  return drivers.filter((driver) =>
    driver.toLowerCase().startsWith(letters.toLowerCase())
  );
}

// Function to match driver names with an array of driver objects by exact name match
function matchName(drivers, name) {
  return drivers.filter((driver) => driver.name === name);
}

// Export functions if this file is being used in a Node.js environment
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    findMatching,
    fuzzyMatch,
    matchName,
  };
}
