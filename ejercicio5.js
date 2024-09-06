//5.1
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90]
const agesGreaterThan18 = ages.filter((age) => age > 18)
console.log(agesGreaterThan18)

//5.2
const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90]
const evenAges1 = ages.filter((age1) => age1 % 2 === 0)
console.log(evenAges1)

//5.3
const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]

const leagueStreamers = streamers.filter(
  (streamer) => streamer.gameMorePlayed === 'League of Legends'
)
console.log(leagueStreamers)

//5.4
const streamers1 = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]

const streamers1WithU = streamers.filter((streamer1) =>
  streamer1.name.includes('u')
)
console.log(streamers1WithU)

//5.5
const streamers2 = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]

const legendsStreamers2 = streamers2
  .filter((streamer2) => streamer2.gameMorePlayed.includes('Legends'))
  .map((streamer2) => {
    return {
      ...streamer2,
      gameMorePlayed:
        streamer2.age > 35
          ? streamer2.gameMorePlayed.toUpperCase()
          : streamer2.gameMorePlayed
    }
  })

console.log(legendsStreamers2)
