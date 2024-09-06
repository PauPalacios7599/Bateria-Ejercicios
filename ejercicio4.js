//4.1
const users = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
]

const names = users.map((user) => user.name)
console.log(names)

//4.2
const users1 = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
]

const updatedNames = users.map((user1) =>
  user1.name.startsWith('A') ? 'Anacleto' : user1.name
)
console.log(updatedNames)

//4.3
const cities = [
  { isVisited: true, name: 'Tokyo' },
  { isVisited: false, name: 'Madagascar' },
  { isVisited: true, name: 'Amsterdam' },
  { isVisited: false, name: 'Seul' }
]

const updatedCities = cities.map((city) =>
  city.isVisited ? `${city.name} (Visitado)` : city.name
)
console.log(updatedCities)
