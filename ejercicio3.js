//3.1
const pointsList = [32, 54, 21, 64, 75, 43]
const pointsListCopy = [...pointsList]
console.log(pointsListCopy)

//3.2
const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' }
const toyCopy = { ...toy }
console.log(toyCopy)

//3.3
const pointList = [32, 54, 21, 64, 75, 43]
const pointList2 = [54, 87, 99, 65, 32]
const combinedPointsList = [...pointList, ...pointList2]
console.log(combinedPointsList)

//3.4
const toy1 = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' }
const toy1Update = { lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk'] }
const mergedToy1 = { ...toy1, ...toy1Update }
console.log(mergedToy1)

//3.5
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']
const colorsCopy = [...colors.slice(0, 2), ...colors.slice(3)]
console.log(colorsCopy) // ['rojo', 'azul', 'verde', 'naranja']
