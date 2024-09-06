function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1
}

// Ejemplo 1: Tirada de un dado de 6 caras
console.log(rollDice(6))

// Ejemplo 2: Tirada de un dado de 10 caras
console.log(rollDice(10))

// Ejemplo 3: Tirada de un dado de 20 caras
console.log(rollDice(20))
