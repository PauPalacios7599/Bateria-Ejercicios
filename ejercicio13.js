function findArrayIndex(array, text) {
  return array.indexOf(text)
}

function removeItem(array, text) {
  const index = findArrayIndex(array, text)
  if (index !== -1) {
    array.splice(index, 1)
  }
  return array
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

console.log(removeItem(mainCharacters, 'Luke'))

console.log(removeItem(mainCharacters, 'Rey'))

console.log(removeItem(mainCharacters, 'Darth Vader'))

console.log(removeItem(mainCharacters, 'Obi-Wan'))
