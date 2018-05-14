// seed data for FIFA 2018
const db = require('../models');

const fifa2018data = [
  {
    region: "Africa",
    country: "Egypt",
    appearances: 2,
    titles: 0,
    rank: 31,
    group: "A",
    player: []
  },
  {
    region: "Africa",
    country: "Morocco",
    appearances: 4,
    titles: 0,
    rank: 40,
    group: "B",
    player: []
  },{
    region: "Africa",
    country: "Nigeria",
    appearances: 5,
    titles: 0,
    rank: 50,
    group: "D",
    player: []
  },{
    region: "Africa",
    country: "Senegal",
    appearances: 1,
    titles: 0,
    rank: 23,
    group: "H",
    player: []
  },{
    region: "Africa",
    country: "Tunisia",
    appearances: 4,
    titles: 0,
    rank: 27,
    group: "G",
    player: []
  },{
    region: "Asia",
    country: "Australia",
    appearances: 4,
    titles: 0,
    rank: 39,
    group: "C",
    player: []
  },{
    region: "Asia",
    country: "IR Iran",
    appearances: 4,
    titles: 0,
    rank: 32,
    group: "B",
    player: []
  },{
    region: "Asia",
    country: "Japan",
    appearances: 5,
    titles: 0,
    rank: 55,
    group: "H",
    player: []
  },{
    region: "Asia",
    country: "Korea Republic",
    appearances: 9,
    titles: 0,
    rank: 59,
    group: "F",
    player: []
  },{
    region: "Asia",
    country: "Saudi Arabia",
    appearances: 4,
    titles: 0,
    rank: 63,
    group: "A",
    player: []
  },{
    region: "Europe",
    country: "Belgium",
    appearances: 12,
    titles: 0,
    rank: 5,
    group: "G",
    player: []
  },{
    region: "Europe",
    country: "Croatia",
    appearances: 4,
    titles: 0,
    rank: 17,
    group: "D",
    player: []
  },{
    region: "Europe",
    country: "Denmark",
    appearances: 4,
    titles: 0,
    rank: 12,
    group: "C",
    player: []
  },{
    region: "Europe",
    country: "England",
    appearances: 14,
    titles: 1,
    rank: 15,
    group: "G",
    player: []
  },{
    region: "Europe",
    country: "France",
    appearances: 14,
    titles: 1,
    rank: 9,
    group: "C",
    player: []
  },{
    region: "Europe",
    country: "Germany",
    appearances: 18,
    titles: 4,
    rank: 1,
    group: "F",
    player: []
  },{
    region: "Europe",
    country: "Iceland",
    appearances: 0,
    titles: 0,
    rank: 22,
    group: "D",
    player: []
  },{
    region: "Europe",
    country: "Poland",
    appearances: 7,
    titles: 0,
    rank: 7,
    group: "H",
    player: []
  },{
    region: "Europe",
    country: "Portugal",
    appearances: 6,
    titles: 0,
    rank: 3,
    group: "B",
    player: []
  },{
    region: "Europe",
    country: "Russia",
    appearances: 10,
    titles: 0,
    rank: 65,
    group: "A",
    player: []
  },{
    region: "Europe",
    country: "Serbia",
    appearances: 11,
    titles: 0,
    rank: 37,
    group: "E",
    player: []
  },{
    region: "Europe",
    country: "Spain",
    appearances: 14,
    titles: 1,
    rank: 6,
    group: "B",
    player: []
  },{
    region: "Europe",
    country: "Sweden",
    appearances: 11,
    titles: 0,
    rank: 18,
    group: "F",
    player: []
  },{
    region: "Europe",
    country: "Switzerland",
    appearances: 10,
    titles: 0,
    rank: 8,
    group: "E",
    player: []
  },{
    region: "Central America",
    country: "Costa Rica",
    appearances: 4,
    titles: 0,
    rank: 26,
    group: "E",
    player: []
  },{
    region: "Central America",
    country: "Mexico",
    appearances: 15,
    titles: 0,
    rank: 16,
    group: "F",
    player: []
  },{
    region: "Central America",
    country: "Panama",
    appearances: 0,
    titles: 0,
    rank: 56,
    group: "G",
    player: []
  },{
    region: "South America",
    country: "Argentina",
    appearances: 16,
    titles: 2,
    rank: 4,
    group: "D",
    player: []
  },{
    region: "South America",
    country: "Brazil",
    appearances: 20,
    titles: 5,
    rank: 2,
    group: "E",
    player: []
  },{
    region: "South America",
    country: "Colombia",
    appearances: 5,
    titles: 0,
    rank: 13,
    group: "H",
    player: []
  },{
    region: "South America",
    country: "Peru",
    appearances: 4,
    titles: 0,
    rank: 11,
    group: "C",
    player: []
  },{
    region: "South America",
    country: "Uruguay",
    appearances: 12,
    titles: 2,
    rank: 21,
    group: "A",
    player: []
  }
]

db.Fifa2018.remove({}, (err, data) => {
  db.Fifa2018.create(fifa2018data, (err, data) => {
    if (err) {
      return console.log('ERROR ' + err);
    }
    console.log("all teams: " + data);
    console.log("created " + data.length + " teams");
    process.exit();
  })
})
