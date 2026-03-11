// New Operations to Make Sets Useful!
const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);
// commen elements
const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('Intersection:', commonFoods);
console.log([...commonFoods]);
// combine elements
const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log('Union:', italianMexicanFusion);
// combine elements
console.log([...new Set([...italianFoods, ...mexicanFoods])]);
// elements present in one set but not in another set
const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log('Difference italian', uniqueItalianFoods);
// elements present in one set but not in another set
const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log('Difference mexican', uniqueMexicanFoods);
// remove commen elements present in both sets
const uniqueItalianAndMexicanFoods =
  italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueItalianAndMexicanFoods);

console.log(italianFoods.isSubsetOf(mexicanFoods));
console.log(italianFoods.isSupersetOf(mexicanFoods));
console.log(italianFoods.isDisjointFrom(mexicanFoods));
