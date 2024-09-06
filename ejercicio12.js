function findArrayIndex(array, text) {
  return array.indexOf(text)
}
const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]

console.log(findArrayIndex(mainCharacters, 'Luke'))
console.log(findArrayIndex(mainCharacters, 'Rey'))
console.log(findArrayIndex(mainCharacters, 'Anakin'))
console.log(findArrayIndex(mainCharacters, 'Obi-Wan'))
console.log(findArrayIndex(mainCharacters, 'Darth Vader'))
