//@Description: Given an array of strings strs, group the anagrams together. You can return the answer in any order.
//@Complexity:None
var groupAnagrams = function (strs) {
  let map = new Map();
  strs.forEach((word) => {
    let sorted = word.split("").sort().join("");
    if (!map.has(sorted)) {
      map.set(sorted, []);
    }
    map.get(sorted).push(word);
  });
  return Array.from(map.values());
};

console.log(
  `Grouped Anagrams: ${groupAnagrams([
    "eat",
    "tea",
    "tan",
    "ate",
    "nat",
    "bat",
  ])}`
);
