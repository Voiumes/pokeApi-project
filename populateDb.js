const mongoose = require('mongoose');
const Pokemon = require('./PokeSchema.js');

let data = [
    {
        name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon/1/",
        count: 0
    },
    {
        name: "ivysaur",
        url: "https://pokeapi.co/api/v2/pokemon/2/",
        count: 0
    },
    {
        name: "venusaur",
        url: "https://pokeapi.co/api/v2/pokemon/3/",
        count: 0
    },
    {
        name: "charmander",
        url: "https://pokeapi.co/api/v2/pokemon/4/",
        count: 0
    },
    {
        name: "charmeleon",
        url: "https://pokeapi.co/api/v2/pokemon/5/",
        count: 0
    },
    {
        name: "charizard",
        url: "https://pokeapi.co/api/v2/pokemon/6/",
        count: 0
    },
    {
        name: "squirtle",
        url: "https://pokeapi.co/api/v2/pokemon/7/",
        count: 0
    },
    {
        name: "wartortle",
        url: "https://pokeapi.co/api/v2/pokemon/8/",
        count: 0
    },
    {
        name: "blastoise",
        url: "https://pokeapi.co/api/v2/pokemon/9/",
        count: 0
    },
    {
        name: "caterpie",
        url: "https://pokeapi.co/api/v2/pokemon/10/",
        count: 0
    },
    {
        name: "metapod",
        url: "https://pokeapi.co/api/v2/pokemon/11/",
        count: 0
    },
    {
        name: "butterfree",
        url: "https://pokeapi.co/api/v2/pokemon/12/",
        count: 0
    },
    {
        name: "weedle",
        url: "https://pokeapi.co/api/v2/pokemon/13/",
        count: 0
    },
    {
        name: "kakuna",
        url: "https://pokeapi.co/api/v2/pokemon/14/",
        count: 0
    },
    {
        name: "beedrill",
        url: "https://pokeapi.co/api/v2/pokemon/15/",
        count: 0
    },
    {
        name: "pidgey",
        url: "https://pokeapi.co/api/v2/pokemon/16/",
        count: 0
    },
    {
        name: "pidgeotto",
        url: "https://pokeapi.co/api/v2/pokemon/17/",
        count: 0
    },
    {
        name: "pidgeot",
        url: "https://pokeapi.co/api/v2/pokemon/18/",
        count: 0
    },
    {
        name: "rattata",
        url: "https://pokeapi.co/api/v2/pokemon/19/",
        count: 0
    },
    {
        name: "raticate",
        url: "https://pokeapi.co/api/v2/pokemon/20/",
        count: 0
    },
    {
        name: "spearow",
        url: "https://pokeapi.co/api/v2/pokemon/21/",
        count: 0
    },
    {
        name: "fearow",
        url: "https://pokeapi.co/api/v2/pokemon/22/",
        count: 0
    },
    {
        name: "ekans",
        url: "https://pokeapi.co/api/v2/pokemon/23/",
        count: 0
    },
    {
        name: "arbok",
        url: "https://pokeapi.co/api/v2/pokemon/24/",
        count: 0
    },
    {
        name: "pikachu",
        url: "https://pokeapi.co/api/v2/pokemon/25/",
        count: 0
    },
    {
        name: "raichu",
        url: "https://pokeapi.co/api/v2/pokemon/26/",
        count: 0
    },
    {
        name: "sandshrew",
        url: "https://pokeapi.co/api/v2/pokemon/27/",
        count: 0
    },
    {
        name: "sandslash",
        url: "https://pokeapi.co/api/v2/pokemon/28/",
        count: 0
    },
    {
        name: "nidoran-f",
        url: "https://pokeapi.co/api/v2/pokemon/29/",
        count: 0
    },
    {
        name: "nidorina",
        url: "https://pokeapi.co/api/v2/pokemon/30/",
        count: 0
    },
    {
        name: "nidoqueen",
        url: "https://pokeapi.co/api/v2/pokemon/31/",
        count: 0
    },
    {
        name: "nidoran-m",
        url: "https://pokeapi.co/api/v2/pokemon/32/",
        count: 0
    },
    {
        name: "nidorino",
        url: "https://pokeapi.co/api/v2/pokemon/33/",
        count: 0
    },
    {
        name: "nidoking",
        url: "https://pokeapi.co/api/v2/pokemon/34/",
        count: 0
    },
    {
        name: "clefairy",
        url: "https://pokeapi.co/api/v2/pokemon/35/",
        count: 0
    },
    {
        name: "clefable",
        url: "https://pokeapi.co/api/v2/pokemon/36/",
        count: 0
    },
    {
        name: "vulpix",
        url: "https://pokeapi.co/api/v2/pokemon/37/",
        count: 0
    },
    {
        name: "ninetales",
        url: "https://pokeapi.co/api/v2/pokemon/38/",
        count: 0
    },
    {
        name: "jigglypuff",
        url: "https://pokeapi.co/api/v2/pokemon/39/",
        count: 0
    },
    {
        name: "wigglytuff",
        url: "https://pokeapi.co/api/v2/pokemon/40/",
        count: 0
    },
    {
        name: "zubat",
        url: "https://pokeapi.co/api/v2/pokemon/41/",
        count: 0
    },
    {
        name: "golbat",
        url: "https://pokeapi.co/api/v2/pokemon/42/",
        count: 0
    },
    {
        name: "oddish",
        url: "https://pokeapi.co/api/v2/pokemon/43/",
        count: 0
    },
    {
        name: "gloom",
        url: "https://pokeapi.co/api/v2/pokemon/44/",
        count: 0
    },
    {
        name: "vileplume",
        url: "https://pokeapi.co/api/v2/pokemon/45/",
        count: 0
    },
    {
        name: "paras",
        url: "https://pokeapi.co/api/v2/pokemon/46/",
        count: 0
    },
    {
        name: "parasect",
        url: "https://pokeapi.co/api/v2/pokemon/47/",
        count: 0
    },
    {
        name: "venonat",
        url: "https://pokeapi.co/api/v2/pokemon/48/",
        count: 0
    },
    {
        name: "venomoth",
        url: "https://pokeapi.co/api/v2/pokemon/49/",
        count: 0
    },
    {
        name: "diglett",
        url: "https://pokeapi.co/api/v2/pokemon/50/",
        count: 0
    },
    {
        name: "dugtrio",
        url: "https://pokeapi.co/api/v2/pokemon/51/",
        count: 0
    },
    {
        name: "meowth",
        url: "https://pokeapi.co/api/v2/pokemon/52/",
        count: 0
    },
    {
        name: "persian",
        url: "https://pokeapi.co/api/v2/pokemon/53/",
        count: 0
    },
    {
        name: "psyduck",
        url: "https://pokeapi.co/api/v2/pokemon/54/",
        count: 0
    },
    {
        name: "golduck",
        url: "https://pokeapi.co/api/v2/pokemon/55/",
        count: 0
    },
    {
        name: "mankey",
        url: "https://pokeapi.co/api/v2/pokemon/56/",
        count: 0
    },
    {
        name: "primeape",
        url: "https://pokeapi.co/api/v2/pokemon/57/",
        count: 0
    },
    {
        name: "growlithe",
        url: "https://pokeapi.co/api/v2/pokemon/58/",
        count: 0
    },
    {
        name: "arcanine",
        url: "https://pokeapi.co/api/v2/pokemon/59/",
        count: 0
    },
    {
        name: "poliwag",
        url: "https://pokeapi.co/api/v2/pokemon/60/",
        count: 0
    },
    {
        name: "poliwhirl",
        url: "https://pokeapi.co/api/v2/pokemon/61/",
        count: 0
    },
    {
        name: "poliwrath",
        url: "https://pokeapi.co/api/v2/pokemon/62/",
        count: 0
    },
    {
        name: "abra",
        url: "https://pokeapi.co/api/v2/pokemon/63/",
        count: 0
    },
    {
        name: "kadabra",
        url: "https://pokeapi.co/api/v2/pokemon/64/",
        count: 0
    },
    {
        name: "alakazam",
        url: "https://pokeapi.co/api/v2/pokemon/65/",
        count: 0
    },
    {
        name: "machop",
        url: "https://pokeapi.co/api/v2/pokemon/66/",
        count: 0
    },
    {
        name: "machoke",
        url: "https://pokeapi.co/api/v2/pokemon/67/",
        count: 0
    },
    {
        name: "machamp",
        url: "https://pokeapi.co/api/v2/pokemon/68/",
        count: 0
    },
    {
        name: "bellsprout",
        url: "https://pokeapi.co/api/v2/pokemon/69/",
        count: 0
    },
    {
        name: "weepinbell",
        url: "https://pokeapi.co/api/v2/pokemon/70/",
        count: 0
    },
    {
        name: "victreebel",
        url: "https://pokeapi.co/api/v2/pokemon/71/",
        count: 0
    },
    {
        name: "tentacool",
        url: "https://pokeapi.co/api/v2/pokemon/72/",
        count: 0
    },
    {
        name: "tentacruel",
        url: "https://pokeapi.co/api/v2/pokemon/73/",
        count: 0
    },
    {
        name: "geodude",
        url: "https://pokeapi.co/api/v2/pokemon/74/",
        count: 0
    },
    {
        name: "graveler",
        url: "https://pokeapi.co/api/v2/pokemon/75/",
        count: 0
    },
    {
        name: "golem",
        url: "https://pokeapi.co/api/v2/pokemon/76/",
        count: 0
    },
    {
        name: "ponyta",
        url: "https://pokeapi.co/api/v2/pokemon/77/",
        count: 0
    },
    {
        name: "rapidash",
        url: "https://pokeapi.co/api/v2/pokemon/78/",
        count: 0
    },
    {
        name: "slowpoke",
        url: "https://pokeapi.co/api/v2/pokemon/79/",
        count: 0
    },
    {
        name: "slowbro",
        url: "https://pokeapi.co/api/v2/pokemon/80/",
        count: 0
    },
    {
        name: "magnemite",
        url: "https://pokeapi.co/api/v2/pokemon/81/",
        count: 0
    },
    {
        name: "magneton",
        url: "https://pokeapi.co/api/v2/pokemon/82/",
        count: 0
    },
    {
        name: "farfetchd",
        url: "https://pokeapi.co/api/v2/pokemon/83/",
        count: 0
    },
    {
        name: "doduo",
        url: "https://pokeapi.co/api/v2/pokemon/84/",
        count: 0
    },
    {
        name: "dodrio",
        url: "https://pokeapi.co/api/v2/pokemon/85/",
        count: 0
    },
    {
        name: "seel",
        url: "https://pokeapi.co/api/v2/pokemon/86/",
        count: 0
    },
    {
        name: "dewgong",
        url: "https://pokeapi.co/api/v2/pokemon/87/",
        count: 0
    },
    {
        name: "grimer",
        url: "https://pokeapi.co/api/v2/pokemon/88/",
        count: 0
    },
    {
        name: "muk",
        url: "https://pokeapi.co/api/v2/pokemon/89/",
        count: 0
    },
    {
        name: "shellder",
        url: "https://pokeapi.co/api/v2/pokemon/90/",
        count: 0
    },
    {
        name: "cloyster",
        url: "https://pokeapi.co/api/v2/pokemon/91/",
        count: 0
    },
    {
        name: "gastly",
        url: "https://pokeapi.co/api/v2/pokemon/92/",
        count: 0
    },
    {
        name: "haunter",
        url: "https://pokeapi.co/api/v2/pokemon/93/",
        count: 0
    },
    {
        name: "gengar",
        url: "https://pokeapi.co/api/v2/pokemon/94/",
        count: 0
    },
    {
        name: "onix",
        url: "https://pokeapi.co/api/v2/pokemon/95/",
        count: 0
    },
    {
        name: "drowzee",
        url: "https://pokeapi.co/api/v2/pokemon/96/",
        count: 0
    },
    {
        name: "hypno",
        url: "https://pokeapi.co/api/v2/pokemon/97/",
        count: 0
    },
    {
        name: "krabby",
        url: "https://pokeapi.co/api/v2/pokemon/98/",
        count: 0
    },
    {
        name: "kingler",
        url: "https://pokeapi.co/api/v2/pokemon/99/",
        count: 0
    },
    {
        name: "voltorb",
        url: "https://pokeapi.co/api/v2/pokemon/100/",
        count: 0
    },
    {
        name: "electrode",
        url: "https://pokeapi.co/api/v2/pokemon/101/",
        count: 0
    },
    {
        name: "exeggcute",
        url: "https://pokeapi.co/api/v2/pokemon/102/",
        count: 0
    },
    {
        name: "exeggutor",
        url: "https://pokeapi.co/api/v2/pokemon/103/",
        count: 0
    },
    {
        name: "cubone",
        url: "https://pokeapi.co/api/v2/pokemon/104/",
        count: 0
    },
    {
        name: "marowak",
        url: "https://pokeapi.co/api/v2/pokemon/105/",
        count: 0
    },
    {
        name: "hitmonlee",
        url: "https://pokeapi.co/api/v2/pokemon/106/",
        count: 0
    },
    {
        name: "hitmonchan",
        url: "https://pokeapi.co/api/v2/pokemon/107/",
        count: 0
    },
    {
        name: "lickitung",
        url: "https://pokeapi.co/api/v2/pokemon/108/",
        count: 0
    },
    {
        name: "koffing",
        url: "https://pokeapi.co/api/v2/pokemon/109/",
        count: 0
    },
    {
        name: "weezing",
        url: "https://pokeapi.co/api/v2/pokemon/110/",
        count: 0
    },
    {
        name: "rhyhorn",
        url: "https://pokeapi.co/api/v2/pokemon/111/",
        count: 0
    },
    {
        name: "rhydon",
        url: "https://pokeapi.co/api/v2/pokemon/112/",
        count: 0
    },
    {
        name: "chansey",
        url: "https://pokeapi.co/api/v2/pokemon/113/",
        count: 0
    },
    {
        name: "tangela",
        url: "https://pokeapi.co/api/v2/pokemon/114/",
        count: 0
    },
    {
        name: "kangaskhan",
        url: "https://pokeapi.co/api/v2/pokemon/115/",
        count: 0
    },
    {
        name: "horsea",
        url: "https://pokeapi.co/api/v2/pokemon/116/",
        count: 0
    },
    {
        name: "seadra",
        url: "https://pokeapi.co/api/v2/pokemon/117/",
        count: 0
    },
    {
        name: "goldeen",
        url: "https://pokeapi.co/api/v2/pokemon/118/",
        count: 0
    },
    {
        name: "seaking",
        url: "https://pokeapi.co/api/v2/pokemon/119/",
        count: 0
    },
    {
        name: "staryu",
        url: "https://pokeapi.co/api/v2/pokemon/120/",
        count: 0
    },
    {
        name: "starmie",
        url: "https://pokeapi.co/api/v2/pokemon/121/",
        count: 0
    },
    {
        name: "mr-mime",
        url: "https://pokeapi.co/api/v2/pokemon/122/",
        count: 0
    },
    {
        name: "scyther",
        url: "https://pokeapi.co/api/v2/pokemon/123/",
        count: 0
    },
    {
        name: "jynx",
        url: "https://pokeapi.co/api/v2/pokemon/124/",
        count: 0
    },
    {
        name: "electabuzz",
        url: "https://pokeapi.co/api/v2/pokemon/125/",
        count: 0
    },
    {
        name: "magmar",
        url: "https://pokeapi.co/api/v2/pokemon/126/",
        count: 0
    },
    {
        name: "pinsir",
        url: "https://pokeapi.co/api/v2/pokemon/127/",
        count: 0
    },
    {
        name: "tauros",
        url: "https://pokeapi.co/api/v2/pokemon/128/",
        count: 0
    },
    {
        name: "magikarp",
        url: "https://pokeapi.co/api/v2/pokemon/129/",
        count: 0
    },
    {
        name: "gyarados",
        url: "https://pokeapi.co/api/v2/pokemon/130/",
        count: 0
    },
    {
        name: "lapras",
        url: "https://pokeapi.co/api/v2/pokemon/131/",
        count: 0
    },
    {
        name: "ditto",
        url: "https://pokeapi.co/api/v2/pokemon/132/",
        count: 0
    },
    {
        name: "eevee",
        url: "https://pokeapi.co/api/v2/pokemon/133/",
        count: 0
    },
    {
        name: "vaporeon",
        url: "https://pokeapi.co/api/v2/pokemon/134/",
        count: 0
    },
    {
        name: "jolteon",
        url: "https://pokeapi.co/api/v2/pokemon/135/",
        count: 0
    },
    {
        name: "flareon",
        url: "https://pokeapi.co/api/v2/pokemon/136/",
        count: 0
    },
    {
        name: "porygon",
        url: "https://pokeapi.co/api/v2/pokemon/137/",
        count: 0
    },
    {
        name: "omanyte",
        url: "https://pokeapi.co/api/v2/pokemon/138/",
        count: 0
    },
    {
        name: "omastar",
        url: "https://pokeapi.co/api/v2/pokemon/139/",
        count: 0
    },
    {
        name: "kabuto",
        url: "https://pokeapi.co/api/v2/pokemon/140/",
        count: 0
    },
    {
        name: "kabutops",
        url: "https://pokeapi.co/api/v2/pokemon/141/",
        count: 0
    },
    {
        name: "aerodactyl",
        url: "https://pokeapi.co/api/v2/pokemon/142/",
        count: 0
    },
    {
        name: "snorlax",
        url: "https://pokeapi.co/api/v2/pokemon/143/",
        count: 0
    },
    {
        name: "articuno",
        url: "https://pokeapi.co/api/v2/pokemon/144/",
        count: 0
    },
    {
        name: "zapdos",
        url: "https://pokeapi.co/api/v2/pokemon/145/",
        count: 0
    },
    {
        name: "moltres",
        url: "https://pokeapi.co/api/v2/pokemon/146/",
        count: 0
    },
    {
        name: "dratini",
        url: "https://pokeapi.co/api/v2/pokemon/147/",
        count: 0
    },
    {
        name: "dragonair",
        url: "https://pokeapi.co/api/v2/pokemon/148/",
        count: 0
    },
    {
        name: "dragonite",
        url: "https://pokeapi.co/api/v2/pokemon/149/",
        count: 0
    },
    {
        name: "mewtwo",
        url: "https://pokeapi.co/api/v2/pokemon/150/",
        count: 0
    },
    {
        name: "mew",
        url: "https://pokeapi.co/api/v2/pokemon/151/",
        count: 0
    },
    {
        name: "chikorita",
        url: "https://pokeapi.co/api/v2/pokemon/152/",
        count: 0
    },
    {
        name: "bayleef",
        url: "https://pokeapi.co/api/v2/pokemon/153/",
        count: 0
    },
    {
        name: "meganium",
        url: "https://pokeapi.co/api/v2/pokemon/154/",
        count: 0
    },
    {
        name: "cyndaquil",
        url: "https://pokeapi.co/api/v2/pokemon/155/",
        count: 0
    },
    {
        name: "quilava",
        url: "https://pokeapi.co/api/v2/pokemon/156/",
        count: 0
    },
    {
        name: "typhlosion",
        url: "https://pokeapi.co/api/v2/pokemon/157/",
        count: 0
    },
    {
        name: "totodile",
        url: "https://pokeapi.co/api/v2/pokemon/158/",
        count: 0
    },
    {
        name: "croconaw",
        url: "https://pokeapi.co/api/v2/pokemon/159/",
        count: 0
    },
    {
        name: "feraligatr",
        url: "https://pokeapi.co/api/v2/pokemon/160/",
        count: 0
    },
    {
        name: "sentret",
        url: "https://pokeapi.co/api/v2/pokemon/161/",
        count: 0
    },
    {
        name: "furret",
        url: "https://pokeapi.co/api/v2/pokemon/162/",
        count: 0
    },
    {
        name: "hoothoot",
        url: "https://pokeapi.co/api/v2/pokemon/163/",
        count: 0
    },
    {
        name: "noctowl",
        url: "https://pokeapi.co/api/v2/pokemon/164/",
        count: 0
    },
    {
        name: "ledyba",
        url: "https://pokeapi.co/api/v2/pokemon/165/",
        count: 0
    },
    {
        name: "ledian",
        url: "https://pokeapi.co/api/v2/pokemon/166/",
        count: 0
    },
    {
        name: "spinarak",
        url: "https://pokeapi.co/api/v2/pokemon/167/",
        count: 0
    },
    {
        name: "ariados",
        url: "https://pokeapi.co/api/v2/pokemon/168/",
        count: 0
    },
    {
        name: "crobat",
        url: "https://pokeapi.co/api/v2/pokemon/169/",
        count: 0
    },
    {
        name: "chinchou",
        url: "https://pokeapi.co/api/v2/pokemon/170/",
        count: 0
    },
    {
        name: "lanturn",
        url: "https://pokeapi.co/api/v2/pokemon/171/",
        count: 0
    },
    {
        name: "pichu",
        url: "https://pokeapi.co/api/v2/pokemon/172/",
        count: 0
    },
    {
        name: "cleffa",
        url: "https://pokeapi.co/api/v2/pokemon/173/",
        count: 0
    },
    {
        name: "igglybuff",
        url: "https://pokeapi.co/api/v2/pokemon/174/",
        count: 0
    },
    {
        name: "togepi",
        url: "https://pokeapi.co/api/v2/pokemon/175/",
        count: 0
    },
    {
        name: "togetic",
        url: "https://pokeapi.co/api/v2/pokemon/176/",
        count: 0
    },
    {
        name: "natu",
        url: "https://pokeapi.co/api/v2/pokemon/177/",
        count: 0
    },
    {
        name: "xatu",
        url: "https://pokeapi.co/api/v2/pokemon/178/",
        count: 0
    },
    {
        name: "mareep",
        url: "https://pokeapi.co/api/v2/pokemon/179/",
        count: 0
    },
    {
        name: "flaaffy",
        url: "https://pokeapi.co/api/v2/pokemon/180/",
        count: 0
    },
    {
        name: "ampharos",
        url: "https://pokeapi.co/api/v2/pokemon/181/",
        count: 0
    },
    {
        name: "bellossom",
        url: "https://pokeapi.co/api/v2/pokemon/182/",
        count: 0
    },
    {
        name: "marill",
        url: "https://pokeapi.co/api/v2/pokemon/183/",
        count: 0
    },
    {
        name: "azumarill",
        url: "https://pokeapi.co/api/v2/pokemon/184/",
        count: 0
    },
    {
        name: "sudowoodo",
        url: "https://pokeapi.co/api/v2/pokemon/185/",
        count: 0
    },
    {
        name: "politoed",
        url: "https://pokeapi.co/api/v2/pokemon/186/",
        count: 0
    },
    {
        name: "hoppip",
        url: "https://pokeapi.co/api/v2/pokemon/187/",
        count: 0
    },
    {
        name: "skiploom",
        url: "https://pokeapi.co/api/v2/pokemon/188/",
        count: 0
    },
    {
        name: "jumpluff",
        url: "https://pokeapi.co/api/v2/pokemon/189/",
        count: 0
    },
    {
        name: "aipom",
        url: "https://pokeapi.co/api/v2/pokemon/190/",
        count: 0
    },
    {
        name: "sunkern",
        url: "https://pokeapi.co/api/v2/pokemon/191/",
        count: 0
    },
    {
        name: "sunflora",
        url: "https://pokeapi.co/api/v2/pokemon/192/",
        count: 0
    },
    {
        name: "yanma",
        url: "https://pokeapi.co/api/v2/pokemon/193/",
        count: 0
    },
    {
        name: "wooper",
        url: "https://pokeapi.co/api/v2/pokemon/194/",
        count: 0
    },
    {
        name: "quagsire",
        url: "https://pokeapi.co/api/v2/pokemon/195/",
        count: 0
    },
    {
        name: "espeon",
        url: "https://pokeapi.co/api/v2/pokemon/196/",
        count: 0
    },
    {
        name: "umbreon",
        url: "https://pokeapi.co/api/v2/pokemon/197/",
        count: 0
    },
    {
        name: "murkrow",
        url: "https://pokeapi.co/api/v2/pokemon/198/",
        count: 0
    },
    {
        name: "slowking",
        url: "https://pokeapi.co/api/v2/pokemon/199/",
        count: 0
    },
    {
        name: "misdreavus",
        url: "https://pokeapi.co/api/v2/pokemon/200/",
        count: 0
    },
    {
        name: "unown",
        url: "https://pokeapi.co/api/v2/pokemon/201/",
        count: 0
    },
    {
        name: "wobbuffet",
        url: "https://pokeapi.co/api/v2/pokemon/202/",
        count: 0
    },
    {
        name: "girafarig",
        url: "https://pokeapi.co/api/v2/pokemon/203/",
        count: 0
    },
    {
        name: "pineco",
        url: "https://pokeapi.co/api/v2/pokemon/204/",
        count: 0
    },
    {
        name: "forretress",
        url: "https://pokeapi.co/api/v2/pokemon/205/",
        count: 0
    },
    {
        name: "dunsparce",
        url: "https://pokeapi.co/api/v2/pokemon/206/",
        count: 0
    },
    {
        name: "gligar",
        url: "https://pokeapi.co/api/v2/pokemon/207/",
        count: 0
    },
    {
        name: "steelix",
        url: "https://pokeapi.co/api/v2/pokemon/208/",
        count: 0
    },
    {
        name: "snubbull",
        url: "https://pokeapi.co/api/v2/pokemon/209/",
        count: 0
    },
    {
        name: "granbull",
        url: "https://pokeapi.co/api/v2/pokemon/210/",
        count: 0
    },
    {
        name: "qwilfish",
        url: "https://pokeapi.co/api/v2/pokemon/211/",
        count: 0
    },
    {
        name: "scizor",
        url: "https://pokeapi.co/api/v2/pokemon/212/",
        count: 0
    },
    {
        name: "shuckle",
        url: "https://pokeapi.co/api/v2/pokemon/213/",
        count: 0
    },
    {
        name: "heracross",
        url: "https://pokeapi.co/api/v2/pokemon/214/",
        count: 0
    },
    {
        name: "sneasel",
        url: "https://pokeapi.co/api/v2/pokemon/215/",
        count: 0
    },
    {
        name: "teddiursa",
        url: "https://pokeapi.co/api/v2/pokemon/216/",
        count: 0
    },
    {
        name: "ursaring",
        url: "https://pokeapi.co/api/v2/pokemon/217/",
        count: 0
    },
    {
        name: "slugma",
        url: "https://pokeapi.co/api/v2/pokemon/218/",
        count: 0
    },
    {
        name: "magcargo",
        url: "https://pokeapi.co/api/v2/pokemon/219/",
        count: 0
    },
    {
        name: "swinub",
        url: "https://pokeapi.co/api/v2/pokemon/220/",
        count: 0
    },
    {
        name: "piloswine",
        url: "https://pokeapi.co/api/v2/pokemon/221/",
        count: 0
    },
    {
        name: "corsola",
        url: "https://pokeapi.co/api/v2/pokemon/222/",
        count: 0
    },
    {
        name: "remoraid",
        url: "https://pokeapi.co/api/v2/pokemon/223/",
        count: 0
    },
    {
        name: "octillery",
        url: "https://pokeapi.co/api/v2/pokemon/224/",
        count: 0
    },
    {
        name: "delibird",
        url: "https://pokeapi.co/api/v2/pokemon/225/",
        count: 0
    },
    {
        name: "mantine",
        url: "https://pokeapi.co/api/v2/pokemon/226/",
        count: 0
    },
    {
        name: "skarmory",
        url: "https://pokeapi.co/api/v2/pokemon/227/",
        count: 0
    },
    {
        name: "houndour",
        url: "https://pokeapi.co/api/v2/pokemon/228/",
        count: 0
    },
    {
        name: "houndoom",
        url: "https://pokeapi.co/api/v2/pokemon/229/",
        count: 0
    },
    {
        name: "kingdra",
        url: "https://pokeapi.co/api/v2/pokemon/230/",
        count: 0
    },
    {
        name: "phanpy",
        url: "https://pokeapi.co/api/v2/pokemon/231/",
        count: 0
    },
    {
        name: "donphan",
        url: "https://pokeapi.co/api/v2/pokemon/232/",
        count: 0
    },
    {
        name: "porygon2",
        url: "https://pokeapi.co/api/v2/pokemon/233/",
        count: 0
    },
    {
        name: "stantler",
        url: "https://pokeapi.co/api/v2/pokemon/234/",
        count: 0
    },
    {
        name: "smeargle",
        url: "https://pokeapi.co/api/v2/pokemon/235/",
        count: 0
    },
    {
        name: "tyrogue",
        url: "https://pokeapi.co/api/v2/pokemon/236/",
        count: 0
    },
    {
        name: "hitmontop",
        url: "https://pokeapi.co/api/v2/pokemon/237/",
        count: 0
    },
    {
        name: "smoochum",
        url: "https://pokeapi.co/api/v2/pokemon/238/",
        count: 0
    },
    {
        name: "elekid",
        url: "https://pokeapi.co/api/v2/pokemon/239/",
        count: 0
    },
    {
        name: "magby",
        url: "https://pokeapi.co/api/v2/pokemon/240/",
        count: 0
    },
    {
        name: "miltank",
        url: "https://pokeapi.co/api/v2/pokemon/241/",
        count: 0
    },
    {
        name: "blissey",
        url: "https://pokeapi.co/api/v2/pokemon/242/",
        count: 0
    },
    {
        name: "raikou",
        url: "https://pokeapi.co/api/v2/pokemon/243/",
        count: 0
    },
    {
        name: "entei",
        url: "https://pokeapi.co/api/v2/pokemon/244/",
        count: 0
    },
    {
        name: "suicune",
        url: "https://pokeapi.co/api/v2/pokemon/245/",
        count: 0
    },
    {
        name: "larvitar",
        url: "https://pokeapi.co/api/v2/pokemon/246/",
        count: 0
    },
    {
        name: "pupitar",
        url: "https://pokeapi.co/api/v2/pokemon/247/",
        count: 0
    },
    {
        name: "tyranitar",
        url: "https://pokeapi.co/api/v2/pokemon/248/",
        count: 0
    },
    {
        name: "lugia",
        url: "https://pokeapi.co/api/v2/pokemon/249/",
        count: 0
    },
    {
        name: "ho-oh",
        url: "https://pokeapi.co/api/v2/pokemon/250/",
        count: 0
    },
    {
        name: "celebi",
        url: "https://pokeapi.co/api/v2/pokemon/251/",
        count: 0
    },
    {
        name: "treecko",
        url: "https://pokeapi.co/api/v2/pokemon/252/",
        count: 0
    },
    {
        name: "grovyle",
        url: "https://pokeapi.co/api/v2/pokemon/253/",
        count: 0
    },
    {
        name: "sceptile",
        url: "https://pokeapi.co/api/v2/pokemon/254/",
        count: 0
    },
    {
        name: "torchic",
        url: "https://pokeapi.co/api/v2/pokemon/255/",
        count: 0
    },
    {
        name: "combusken",
        url: "https://pokeapi.co/api/v2/pokemon/256/",
        count: 0
    },
    {
        name: "blaziken",
        url: "https://pokeapi.co/api/v2/pokemon/257/",
        count: 0
    },
    {
        name: "mudkip",
        url: "https://pokeapi.co/api/v2/pokemon/258/",
        count: 0
    },
    {
        name: "marshtomp",
        url: "https://pokeapi.co/api/v2/pokemon/259/",
        count: 0
    },
    {
        name: "swampert",
        url: "https://pokeapi.co/api/v2/pokemon/260/",
        count: 0
    },
    {
        name: "poochyena",
        url: "https://pokeapi.co/api/v2/pokemon/261/",
        count: 0
    },
    {
        name: "mightyena",
        url: "https://pokeapi.co/api/v2/pokemon/262/",
        count: 0
    },
    {
        name: "zigzagoon",
        url: "https://pokeapi.co/api/v2/pokemon/263/",
        count: 0
    },
    {
        name: "linoone",
        url: "https://pokeapi.co/api/v2/pokemon/264/",
        count: 0
    },
    {
        name: "wurmple",
        url: "https://pokeapi.co/api/v2/pokemon/265/",
        count: 0
    },
    {
        name: "silcoon",
        url: "https://pokeapi.co/api/v2/pokemon/266/",
        count: 0
    },
    {
        name: "beautifly",
        url: "https://pokeapi.co/api/v2/pokemon/267/",
        count: 0
    },
    {
        name: "cascoon",
        url: "https://pokeapi.co/api/v2/pokemon/268/",
        count: 0
    },
    {
        name: "dustox",
        url: "https://pokeapi.co/api/v2/pokemon/269/",
        count: 0
    },
    {
        name: "lotad",
        url: "https://pokeapi.co/api/v2/pokemon/270/",
        count: 0
    },
    {
        name: "lombre",
        url: "https://pokeapi.co/api/v2/pokemon/271/",
        count: 0
    },
    {
        name: "ludicolo",
        url: "https://pokeapi.co/api/v2/pokemon/272/",
        count: 0
    },
    {
        name: "seedot",
        url: "https://pokeapi.co/api/v2/pokemon/273/",
        count: 0
    },
    {
        name: "nuzleaf",
        url: "https://pokeapi.co/api/v2/pokemon/274/",
        count: 0
    },
    {
        name: "shiftry",
        url: "https://pokeapi.co/api/v2/pokemon/275/",
        count: 0
    },
    {
        name: "taillow",
        url: "https://pokeapi.co/api/v2/pokemon/276/",
        count: 0
    },
    {
        name: "swellow",
        url: "https://pokeapi.co/api/v2/pokemon/277/",
        count: 0
    },
    {
        name: "wingull",
        url: "https://pokeapi.co/api/v2/pokemon/278/",
        count: 0
    },
    {
        name: "pelipper",
        url: "https://pokeapi.co/api/v2/pokemon/279/",
        count: 0
    },
    {
        name: "ralts",
        url: "https://pokeapi.co/api/v2/pokemon/280/",
        count: 0
    },
    {
        name: "kirlia",
        url: "https://pokeapi.co/api/v2/pokemon/281/",
        count: 0
    },
    {
        name: "gardevoir",
        url: "https://pokeapi.co/api/v2/pokemon/282/",
        count: 0
    },
    {
        name: "surskit",
        url: "https://pokeapi.co/api/v2/pokemon/283/",
        count: 0
    },
    {
        name: "masquerain",
        url: "https://pokeapi.co/api/v2/pokemon/284/",
        count: 0
    },
    {
        name: "shroomish",
        url: "https://pokeapi.co/api/v2/pokemon/285/",
        count: 0
    },
    {
        name: "breloom",
        url: "https://pokeapi.co/api/v2/pokemon/286/",
        count: 0
    },
    {
        name: "slakoth",
        url: "https://pokeapi.co/api/v2/pokemon/287/",
        count: 0
    },
    {
        name: "vigoroth",
        url: "https://pokeapi.co/api/v2/pokemon/288/",
        count: 0
    },
    {
        name: "slaking",
        url: "https://pokeapi.co/api/v2/pokemon/289/",
        count: 0
    },
    {
        name: "nincada",
        url: "https://pokeapi.co/api/v2/pokemon/290/",
        count: 0
    },
    {
        name: "ninjask",
        url: "https://pokeapi.co/api/v2/pokemon/291/",
        count: 0
    },
    {
        name: "shedinja",
        url: "https://pokeapi.co/api/v2/pokemon/292/",
        count: 0
    },
    {
        name: "whismur",
        url: "https://pokeapi.co/api/v2/pokemon/293/",
        count: 0
    },
    {
        name: "loudred",
        url: "https://pokeapi.co/api/v2/pokemon/294/",
        count: 0
    },
    {
        name: "exploud",
        url: "https://pokeapi.co/api/v2/pokemon/295/",
        count: 0
    },
    {
        name: "makuhita",
        url: "https://pokeapi.co/api/v2/pokemon/296/",
        count: 0
    },
    {
        name: "hariyama",
        url: "https://pokeapi.co/api/v2/pokemon/297/",
        count: 0
    },
    {
        name: "azurill",
        url: "https://pokeapi.co/api/v2/pokemon/298/",
        count: 0
    },
    {
        name: "nosepass",
        url: "https://pokeapi.co/api/v2/pokemon/299/",
        count: 0
    },
    {
        name: "skitty",
        url: "https://pokeapi.co/api/v2/pokemon/300/",
        count: 0
    },
    {
        name: "delcatty",
        url: "https://pokeapi.co/api/v2/pokemon/301/",
        count: 0
    },
    {
        name: "sableye",
        url: "https://pokeapi.co/api/v2/pokemon/302/",
        count: 0
    },
    {
        name: "mawile",
        url: "https://pokeapi.co/api/v2/pokemon/303/",
        count: 0
    },
    {
        name: "aron",
        url: "https://pokeapi.co/api/v2/pokemon/304/",
        count: 0
    },
    {
        name: "lairon",
        url: "https://pokeapi.co/api/v2/pokemon/305/",
        count: 0
    },
    {
        name: "aggron",
        url: "https://pokeapi.co/api/v2/pokemon/306/",
        count: 0
    },
    {
        name: "meditite",
        url: "https://pokeapi.co/api/v2/pokemon/307/",
        count: 0
    },
    {
        name: "medicham",
        url: "https://pokeapi.co/api/v2/pokemon/308/",
        count: 0
    },
    {
        name: "electrike",
        url: "https://pokeapi.co/api/v2/pokemon/309/",
        count: 0
    },
    {
        name: "manectric",
        url: "https://pokeapi.co/api/v2/pokemon/310/",
        count: 0
    },
    {
        name: "plusle",
        url: "https://pokeapi.co/api/v2/pokemon/311/",
        count: 0
    },
    {
        name: "minun",
        url: "https://pokeapi.co/api/v2/pokemon/312/",
        count: 0
    },
    {
        name: "volbeat",
        url: "https://pokeapi.co/api/v2/pokemon/313/",
        count: 0
    },
    {
        name: "illumise",
        url: "https://pokeapi.co/api/v2/pokemon/314/",
        count: 0
    },
    {
        name: "roselia",
        url: "https://pokeapi.co/api/v2/pokemon/315/",
        count: 0
    },
    {
        name: "gulpin",
        url: "https://pokeapi.co/api/v2/pokemon/316/",
        count: 0
    },
    {
        name: "swalot",
        url: "https://pokeapi.co/api/v2/pokemon/317/",
        count: 0
    },
    {
        name: "carvanha",
        url: "https://pokeapi.co/api/v2/pokemon/318/",
        count: 0
    },
    {
        name: "sharpedo",
        url: "https://pokeapi.co/api/v2/pokemon/319/",
        count: 0
    },
    {
        name: "wailmer",
        url: "https://pokeapi.co/api/v2/pokemon/320/",
        count: 0
    },
    {
        name: "wailord",
        url: "https://pokeapi.co/api/v2/pokemon/321/",
        count: 0
    },
    {
        name: "numel",
        url: "https://pokeapi.co/api/v2/pokemon/322/",
        count: 0
    },
    {
        name: "camerupt",
        url: "https://pokeapi.co/api/v2/pokemon/323/",
        count: 0
    },
    {
        name: "torkoal",
        url: "https://pokeapi.co/api/v2/pokemon/324/",
        count: 0
    },
    {
        name: "spoink",
        url: "https://pokeapi.co/api/v2/pokemon/325/",
        count: 0
    },
    {
        name: "grumpig",
        url: "https://pokeapi.co/api/v2/pokemon/326/",
        count: 0
    },
    {
        name: "spinda",
        url: "https://pokeapi.co/api/v2/pokemon/327/",
        count: 0
    },
    {
        name: "trapinch",
        url: "https://pokeapi.co/api/v2/pokemon/328/",
        count: 0
    },
    {
        name: "vibrava",
        url: "https://pokeapi.co/api/v2/pokemon/329/",
        count: 0
    },
    {
        name: "flygon",
        url: "https://pokeapi.co/api/v2/pokemon/330/",
        count: 0
    },
    {
        name: "cacnea",
        url: "https://pokeapi.co/api/v2/pokemon/331/",
        count: 0
    },
    {
        name: "cacturne",
        url: "https://pokeapi.co/api/v2/pokemon/332/",
        count: 0
    },
    {
        name: "swablu",
        url: "https://pokeapi.co/api/v2/pokemon/333/",
        count: 0
    },
    {
        name: "altaria",
        url: "https://pokeapi.co/api/v2/pokemon/334/",
        count: 0
    },
    {
        name: "zangoose",
        url: "https://pokeapi.co/api/v2/pokemon/335/",
        count: 0
    },
    {
        name: "seviper",
        url: "https://pokeapi.co/api/v2/pokemon/336/",
        count: 0
    },
    {
        name: "lunatone",
        url: "https://pokeapi.co/api/v2/pokemon/337/",
        count: 0
    },
    {
        name: "solrock",
        url: "https://pokeapi.co/api/v2/pokemon/338/",
        count: 0
    },
    {
        name: "barboach",
        url: "https://pokeapi.co/api/v2/pokemon/339/",
        count: 0
    },
    {
        name: "whiscash",
        url: "https://pokeapi.co/api/v2/pokemon/340/",
        count: 0
    },
    {
        name: "corphish",
        url: "https://pokeapi.co/api/v2/pokemon/341/",
        count: 0
    },
    {
        name: "crawdaunt",
        url: "https://pokeapi.co/api/v2/pokemon/342/",
        count: 0
    },
    {
        name: "baltoy",
        url: "https://pokeapi.co/api/v2/pokemon/343/",
        count: 0
    },
    {
        name: "claydol",
        url: "https://pokeapi.co/api/v2/pokemon/344/",
        count: 0
    },
    {
        name: "lileep",
        url: "https://pokeapi.co/api/v2/pokemon/345/",
        count: 0
    },
    {
        name: "cradily",
        url: "https://pokeapi.co/api/v2/pokemon/346/",
        count: 0
    },
    {
        name: "anorith",
        url: "https://pokeapi.co/api/v2/pokemon/347/",
        count: 0
    },
    {
        name: "armaldo",
        url: "https://pokeapi.co/api/v2/pokemon/348/",
        count: 0
    },
    {
        name: "feebas",
        url: "https://pokeapi.co/api/v2/pokemon/349/",
        count: 0
    },
    {
        name: "milotic",
        url: "https://pokeapi.co/api/v2/pokemon/350/",
        count: 0
    },
    {
        name: "castform",
        url: "https://pokeapi.co/api/v2/pokemon/351/",
        count: 0
    },
    {
        name: "kecleon",
        url: "https://pokeapi.co/api/v2/pokemon/352/",
        count: 0
    },
    {
        name: "shuppet",
        url: "https://pokeapi.co/api/v2/pokemon/353/",
        count: 0
    },
    {
        name: "banette",
        url: "https://pokeapi.co/api/v2/pokemon/354/",
        count: 0
    },
    {
        name: "duskull",
        url: "https://pokeapi.co/api/v2/pokemon/355/",
        count: 0
    },
    {
        name: "dusclops",
        url: "https://pokeapi.co/api/v2/pokemon/356/",
        count: 0
    },
    {
        name: "tropius",
        url: "https://pokeapi.co/api/v2/pokemon/357/",
        count: 0
    },
    {
        name: "chimecho",
        url: "https://pokeapi.co/api/v2/pokemon/358/",
        count: 0
    },
    {
        name: "absol",
        url: "https://pokeapi.co/api/v2/pokemon/359/",
        count: 0
    },
    {
        name: "wynaut",
        url: "https://pokeapi.co/api/v2/pokemon/360/",
        count: 0
    },
    {
        name: "snorunt",
        url: "https://pokeapi.co/api/v2/pokemon/361/",
        count: 0
    },
    {
        name: "glalie",
        url: "https://pokeapi.co/api/v2/pokemon/362/",
        count: 0
    },
    {
        name: "spheal",
        url: "https://pokeapi.co/api/v2/pokemon/363/",
        count: 0
    },
    {
        name: "sealeo",
        url: "https://pokeapi.co/api/v2/pokemon/364/",
        count: 0
    },
    {
        name: "walrein",
        url: "https://pokeapi.co/api/v2/pokemon/365/",
        count: 0
    },
    {
        name: "clamperl",
        url: "https://pokeapi.co/api/v2/pokemon/366/",
        count: 0
    },
    {
        name: "huntail",
        url: "https://pokeapi.co/api/v2/pokemon/367/",
        count: 0
    },
    {
        name: "gorebyss",
        url: "https://pokeapi.co/api/v2/pokemon/368/",
        count: 0
    },
    {
        name: "relicanth",
        url: "https://pokeapi.co/api/v2/pokemon/369/",
        count: 0
    },
    {
        name: "luvdisc",
        url: "https://pokeapi.co/api/v2/pokemon/370/",
        count: 0
    },
    {
        name: "bagon",
        url: "https://pokeapi.co/api/v2/pokemon/371/",
        count: 0
    },
    {
        name: "shelgon",
        url: "https://pokeapi.co/api/v2/pokemon/372/",
        count: 0
    },
    {
        name: "salamence",
        url: "https://pokeapi.co/api/v2/pokemon/373/",
        count: 0
    },
    {
        name: "beldum",
        url: "https://pokeapi.co/api/v2/pokemon/374/",
        count: 0
    },
    {
        name: "metang",
        url: "https://pokeapi.co/api/v2/pokemon/375/",
        count: 0
    },
    {
        name: "metagross",
        url: "https://pokeapi.co/api/v2/pokemon/376/",
        count: 0
    },
    {
        name: "regirock",
        url: "https://pokeapi.co/api/v2/pokemon/377/",
        count: 0
    },
    {
        name: "regice",
        url: "https://pokeapi.co/api/v2/pokemon/378/",
        count: 0
    },
    {
        name: "registeel",
        url: "https://pokeapi.co/api/v2/pokemon/379/",
        count: 0
    },
    {
        name: "latias",
        url: "https://pokeapi.co/api/v2/pokemon/380/",
        count: 0
    },
    {
        name: "latios",
        url: "https://pokeapi.co/api/v2/pokemon/381/",
        count: 0
    },
    {
        name: "kyogre",
        url: "https://pokeapi.co/api/v2/pokemon/382/",
        count: 0
    },
    {
        name: "groudon",
        url: "https://pokeapi.co/api/v2/pokemon/383/",
        count: 0
    },
    {
        name: "rayquaza",
        url: "https://pokeapi.co/api/v2/pokemon/384/",
        count: 0
    },
    {
        name: "jirachi",
        url: "https://pokeapi.co/api/v2/pokemon/385/",
        count: 0
    },
    {
        name: "deoxys-normal",
        url: "https://pokeapi.co/api/v2/pokemon/386/",
        count: 0
    },
    {
        name: "turtwig",
        url: "https://pokeapi.co/api/v2/pokemon/387/",
        count: 0
    },
    {
        name: "grotle",
        url: "https://pokeapi.co/api/v2/pokemon/388/",
        count: 0
    },
    {
        name: "torterra",
        url: "https://pokeapi.co/api/v2/pokemon/389/",
        count: 0
    },
    {
        name: "chimchar",
        url: "https://pokeapi.co/api/v2/pokemon/390/",
        count: 0
    },
    {
        name: "monferno",
        url: "https://pokeapi.co/api/v2/pokemon/391/",
        count: 0
    },
    {
        name: "infernape",
        url: "https://pokeapi.co/api/v2/pokemon/392/",
        count: 0
    },
    {
        name: "piplup",
        url: "https://pokeapi.co/api/v2/pokemon/393/",
        count: 0
    },
    {
        name: "prinplup",
        url: "https://pokeapi.co/api/v2/pokemon/394/",
        count: 0
    },
    {
        name: "empoleon",
        url: "https://pokeapi.co/api/v2/pokemon/395/",
        count: 0
    },
    {
        name: "starly",
        url: "https://pokeapi.co/api/v2/pokemon/396/",
        count: 0
    },
    {
        name: "staravia",
        url: "https://pokeapi.co/api/v2/pokemon/397/",
        count: 0
    },
    {
        name: "staraptor",
        url: "https://pokeapi.co/api/v2/pokemon/398/",
        count: 0
    },
    {
        name: "bidoof",
        url: "https://pokeapi.co/api/v2/pokemon/399/",
        count: 0
    },
    {
        name: "bibarel",
        url: "https://pokeapi.co/api/v2/pokemon/400/",
        count: 0
    },
    {
        name: "kricketot",
        url: "https://pokeapi.co/api/v2/pokemon/401/",
        count: 0
    },
    {
        name: "kricketune",
        url: "https://pokeapi.co/api/v2/pokemon/402/",
        count: 0
    },
    {
        name: "shinx",
        url: "https://pokeapi.co/api/v2/pokemon/403/",
        count: 0
    },
    {
        name: "luxio",
        url: "https://pokeapi.co/api/v2/pokemon/404/",
        count: 0
    },
    {
        name: "luxray",
        url: "https://pokeapi.co/api/v2/pokemon/405/",
        count: 0
    },
    {
        name: "budew",
        url: "https://pokeapi.co/api/v2/pokemon/406/",
        count: 0
    },
    {
        name: "roserade",
        url: "https://pokeapi.co/api/v2/pokemon/407/",
        count: 0
    },
    {
        name: "cranidos",
        url: "https://pokeapi.co/api/v2/pokemon/408/",
        count: 0
    },
    {
        name: "rampardos",
        url: "https://pokeapi.co/api/v2/pokemon/409/",
        count: 0
    },
    {
        name: "shieldon",
        url: "https://pokeapi.co/api/v2/pokemon/410/",
        count: 0
    },
    {
        name: "bastiodon",
        url: "https://pokeapi.co/api/v2/pokemon/411/",
        count: 0
    },
    {
        name: "burmy",
        url: "https://pokeapi.co/api/v2/pokemon/412/",
        count: 0
    },
    {
        name: "wormadam-plant",
        url: "https://pokeapi.co/api/v2/pokemon/413/",
        count: 0
    },
    {
        name: "mothim",
        url: "https://pokeapi.co/api/v2/pokemon/414/",
        count: 0
    },
    {
        name: "combee",
        url: "https://pokeapi.co/api/v2/pokemon/415/",
        count: 0
    },
    {
        name: "vespiquen",
        url: "https://pokeapi.co/api/v2/pokemon/416/",
        count: 0
    },
    {
        name: "pachirisu",
        url: "https://pokeapi.co/api/v2/pokemon/417/",
        count: 0
    },
    {
        name: "buizel",
        url: "https://pokeapi.co/api/v2/pokemon/418/",
        count: 0
    },
    {
        name: "floatzel",
        url: "https://pokeapi.co/api/v2/pokemon/419/",
        count: 0
    },
    {
        name: "cherubi",
        url: "https://pokeapi.co/api/v2/pokemon/420/",
        count: 0
    },
    {
        name: "cherrim",
        url: "https://pokeapi.co/api/v2/pokemon/421/",
        count: 0
    },
    {
        name: "shellos",
        url: "https://pokeapi.co/api/v2/pokemon/422/",
        count: 0
    },
    {
        name: "gastrodon",
        url: "https://pokeapi.co/api/v2/pokemon/423/",
        count: 0
    },
    {
        name: "ambipom",
        url: "https://pokeapi.co/api/v2/pokemon/424/",
        count: 0
    },
    {
        name: "drifloon",
        url: "https://pokeapi.co/api/v2/pokemon/425/",
        count: 0
    },
    {
        name: "drifblim",
        url: "https://pokeapi.co/api/v2/pokemon/426/",
        count: 0
    },
    {
        name: "buneary",
        url: "https://pokeapi.co/api/v2/pokemon/427/",
        count: 0
    },
    {
        name: "lopunny",
        url: "https://pokeapi.co/api/v2/pokemon/428/",
        count: 0
    },
    {
        name: "mismagius",
        url: "https://pokeapi.co/api/v2/pokemon/429/",
        count: 0
    },
    {
        name: "honchkrow",
        url: "https://pokeapi.co/api/v2/pokemon/430/",
        count: 0
    },
    {
        name: "glameow",
        url: "https://pokeapi.co/api/v2/pokemon/431/",
        count: 0
    },
    {
        name: "purugly",
        url: "https://pokeapi.co/api/v2/pokemon/432/",
        count: 0
    },
    {
        name: "chingling",
        url: "https://pokeapi.co/api/v2/pokemon/433/",
        count: 0
    },
    {
        name: "stunky",
        url: "https://pokeapi.co/api/v2/pokemon/434/",
        count: 0
    },
    {
        name: "skuntank",
        url: "https://pokeapi.co/api/v2/pokemon/435/",
        count: 0
    },
    {
        name: "bronzor",
        url: "https://pokeapi.co/api/v2/pokemon/436/",
        count: 0
    },
    {
        name: "bronzong",
        url: "https://pokeapi.co/api/v2/pokemon/437/",
        count: 0
    },
    {
        name: "bonsly",
        url: "https://pokeapi.co/api/v2/pokemon/438/",
        count: 0
    },
    {
        name: "mime-jr",
        url: "https://pokeapi.co/api/v2/pokemon/439/",
        count: 0
    },
    {
        name: "happiny",
        url: "https://pokeapi.co/api/v2/pokemon/440/",
        count: 0
    },
    {
        name: "chatot",
        url: "https://pokeapi.co/api/v2/pokemon/441/",
        count: 0
    },
    {
        name: "spiritomb",
        url: "https://pokeapi.co/api/v2/pokemon/442/",
        count: 0
    },
    {
        name: "gible",
        url: "https://pokeapi.co/api/v2/pokemon/443/",
        count: 0
    },
    {
        name: "gabite",
        url: "https://pokeapi.co/api/v2/pokemon/444/",
        count: 0
    },
    {
        name: "garchomp",
        url: "https://pokeapi.co/api/v2/pokemon/445/",
        count: 0
    },
    {
        name: "munchlax",
        url: "https://pokeapi.co/api/v2/pokemon/446/",
        count: 0
    },
    {
        name: "riolu",
        url: "https://pokeapi.co/api/v2/pokemon/447/",
        count: 0
    },
    {
        name: "lucario",
        url: "https://pokeapi.co/api/v2/pokemon/448/",
        count: 0
    },
    {
        name: "hippopotas",
        url: "https://pokeapi.co/api/v2/pokemon/449/",
        count: 0
    },
    {
        name: "hippowdon",
        url: "https://pokeapi.co/api/v2/pokemon/450/",
        count: 0
    },
    {
        name: "skorupi",
        url: "https://pokeapi.co/api/v2/pokemon/451/",
        count: 0
    },
    {
        name: "drapion",
        url: "https://pokeapi.co/api/v2/pokemon/452/",
        count: 0
    },
    {
        name: "croagunk",
        url: "https://pokeapi.co/api/v2/pokemon/453/",
        count: 0
    },
    {
        name: "toxicroak",
        url: "https://pokeapi.co/api/v2/pokemon/454/",
        count: 0
    },
    {
        name: "carnivine",
        url: "https://pokeapi.co/api/v2/pokemon/455/",
        count: 0
    },
    {
        name: "finneon",
        url: "https://pokeapi.co/api/v2/pokemon/456/",
        count: 0
    },
    {
        name: "lumineon",
        url: "https://pokeapi.co/api/v2/pokemon/457/",
        count: 0
    },
    {
        name: "mantyke",
        url: "https://pokeapi.co/api/v2/pokemon/458/",
        count: 0
    },
    {
        name: "snover",
        url: "https://pokeapi.co/api/v2/pokemon/459/",
        count: 0
    },
    {
        name: "abomasnow",
        url: "https://pokeapi.co/api/v2/pokemon/460/",
        count: 0
    },
    {
        name: "weavile",
        url: "https://pokeapi.co/api/v2/pokemon/461/",
        count: 0
    },
    {
        name: "magnezone",
        url: "https://pokeapi.co/api/v2/pokemon/462/",
        count: 0
    },
    {
        name: "lickilicky",
        url: "https://pokeapi.co/api/v2/pokemon/463/",
        count: 0
    },
    {
        name: "rhyperior",
        url: "https://pokeapi.co/api/v2/pokemon/464/",
        count: 0
    },
    {
        name: "tangrowth",
        url: "https://pokeapi.co/api/v2/pokemon/465/",
        count: 0
    },
    {
        name: "electivire",
        url: "https://pokeapi.co/api/v2/pokemon/466/",
        count: 0
    },
    {
        name: "magmortar",
        url: "https://pokeapi.co/api/v2/pokemon/467/",
        count: 0
    },
    {
        name: "togekiss",
        url: "https://pokeapi.co/api/v2/pokemon/468/",
        count: 0
    },
    {
        name: "yanmega",
        url: "https://pokeapi.co/api/v2/pokemon/469/",
        count: 0
    },
    {
        name: "leafeon",
        url: "https://pokeapi.co/api/v2/pokemon/470/",
        count: 0
    },
    {
        name: "glaceon",
        url: "https://pokeapi.co/api/v2/pokemon/471/",
        count: 0
    },
    {
        name: "gliscor",
        url: "https://pokeapi.co/api/v2/pokemon/472/",
        count: 0
    },
    {
        name: "mamoswine",
        url: "https://pokeapi.co/api/v2/pokemon/473/",
        count: 0
    },
    {
        name: "porygon-z",
        url: "https://pokeapi.co/api/v2/pokemon/474/",
        count: 0
    },
    {
        name: "gallade",
        url: "https://pokeapi.co/api/v2/pokemon/475/",
        count: 0
    },
    {
        name: "probopass",
        url: "https://pokeapi.co/api/v2/pokemon/476/",
        count: 0
    },
    {
        name: "dusknoir",
        url: "https://pokeapi.co/api/v2/pokemon/477/",
        count: 0
    },
    {
        name: "froslass",
        url: "https://pokeapi.co/api/v2/pokemon/478/",
        count: 0
    },
    {
        name: "rotom",
        url: "https://pokeapi.co/api/v2/pokemon/479/",
        count: 0
    },
    {
        name: "uxie",
        url: "https://pokeapi.co/api/v2/pokemon/480/",
        count: 0
    },
    {
        name: "mesprit",
        url: "https://pokeapi.co/api/v2/pokemon/481/",
        count: 0
    },
    {
        name: "azelf",
        url: "https://pokeapi.co/api/v2/pokemon/482/",
        count: 0
    },
    {
        name: "dialga",
        url: "https://pokeapi.co/api/v2/pokemon/483/",
        count: 0
    },
    {
        name: "palkia",
        url: "https://pokeapi.co/api/v2/pokemon/484/",
        count: 0
    },
    {
        name: "heatran",
        url: "https://pokeapi.co/api/v2/pokemon/485/",
        count: 0
    },
    {
        name: "regigigas",
        url: "https://pokeapi.co/api/v2/pokemon/486/",
        count: 0
    },
    {
        name: "giratina-altered",
        url: "https://pokeapi.co/api/v2/pokemon/487/",
        count: 0
    },
    {
        name: "cresselia",
        url: "https://pokeapi.co/api/v2/pokemon/488/",
        count: 0
    },
    {
        name: "phione",
        url: "https://pokeapi.co/api/v2/pokemon/489/",
        count: 0
    },
    {
        name: "manaphy",
        url: "https://pokeapi.co/api/v2/pokemon/490/",
        count: 0
    },
    {
        name: "darkrai",
        url: "https://pokeapi.co/api/v2/pokemon/491/",
        count: 0
    },
    {
        name: "shaymin-land",
        url: "https://pokeapi.co/api/v2/pokemon/492/",
        count: 0
    },
    {
        name: "arceus",
        url: "https://pokeapi.co/api/v2/pokemon/493/",
        count: 0
    },
    {
        name: "victini",
        url: "https://pokeapi.co/api/v2/pokemon/494/",
        count: 0
    },
    {
        name: "snivy",
        url: "https://pokeapi.co/api/v2/pokemon/495/",
        count: 0
    },
    {
        name: "servine",
        url: "https://pokeapi.co/api/v2/pokemon/496/",
        count: 0
    },
    {
        name: "serperior",
        url: "https://pokeapi.co/api/v2/pokemon/497/",
        count: 0
    },
    {
        name: "tepig",
        url: "https://pokeapi.co/api/v2/pokemon/498/",
        count: 0
    },
    {
        name: "pignite",
        url: "https://pokeapi.co/api/v2/pokemon/499/",
        count: 0
    },
    {
        name: "emboar",
        url: "https://pokeapi.co/api/v2/pokemon/500/",
        count: 0
    },
    {
        name: "oshawott",
        url: "https://pokeapi.co/api/v2/pokemon/501/",
        count: 0
    },
    {
        name: "dewott",
        url: "https://pokeapi.co/api/v2/pokemon/502/",
        count: 0
    },
    {
        name: "samurott",
        url: "https://pokeapi.co/api/v2/pokemon/503/",
        count: 0
    },
    {
        name: "patrat",
        url: "https://pokeapi.co/api/v2/pokemon/504/",
        count: 0
    },
    {
        name: "watchog",
        url: "https://pokeapi.co/api/v2/pokemon/505/",
        count: 0
    },
    {
        name: "lillipup",
        url: "https://pokeapi.co/api/v2/pokemon/506/",
        count: 0
    },
    {
        name: "herdier",
        url: "https://pokeapi.co/api/v2/pokemon/507/",
        count: 0
    },
    {
        name: "stoutland",
        url: "https://pokeapi.co/api/v2/pokemon/508/",
        count: 0
    },
    {
        name: "purrloin",
        url: "https://pokeapi.co/api/v2/pokemon/509/",
        count: 0
    },
    {
        name: "liepard",
        url: "https://pokeapi.co/api/v2/pokemon/510/",
        count: 0
    },
    {
        name: "pansage",
        url: "https://pokeapi.co/api/v2/pokemon/511/",
        count: 0
    },
    {
        name: "simisage",
        url: "https://pokeapi.co/api/v2/pokemon/512/",
        count: 0
    },
    {
        name: "pansear",
        url: "https://pokeapi.co/api/v2/pokemon/513/",
        count: 0
    },
    {
        name: "simisear",
        url: "https://pokeapi.co/api/v2/pokemon/514/",
        count: 0
    },
    {
        name: "panpour",
        url: "https://pokeapi.co/api/v2/pokemon/515/",
        count: 0
    },
    {
        name: "simipour",
        url: "https://pokeapi.co/api/v2/pokemon/516/",
        count: 0
    },
    {
        name: "munna",
        url: "https://pokeapi.co/api/v2/pokemon/517/",
        count: 0
    },
    {
        name: "musharna",
        url: "https://pokeapi.co/api/v2/pokemon/518/",
        count: 0
    },
    {
        name: "pidove",
        url: "https://pokeapi.co/api/v2/pokemon/519/",
        count: 0
    },
    {
        name: "tranquill",
        url: "https://pokeapi.co/api/v2/pokemon/520/",
        count: 0
    },
    {
        name: "unfezant",
        url: "https://pokeapi.co/api/v2/pokemon/521/",
        count: 0
    },
    {
        name: "blitzle",
        url: "https://pokeapi.co/api/v2/pokemon/522/",
        count: 0
    },
    {
        name: "zebstrika",
        url: "https://pokeapi.co/api/v2/pokemon/523/",
        count: 0
    },
    {
        name: "roggenrola",
        url: "https://pokeapi.co/api/v2/pokemon/524/",
        count: 0
    },
    {
        name: "boldore",
        url: "https://pokeapi.co/api/v2/pokemon/525/",
        count: 0
    },
    {
        name: "gigalith",
        url: "https://pokeapi.co/api/v2/pokemon/526/",
        count: 0
    },
    {
        name: "woobat",
        url: "https://pokeapi.co/api/v2/pokemon/527/",
        count: 0
    },
    {
        name: "swoobat",
        url: "https://pokeapi.co/api/v2/pokemon/528/",
        count: 0
    },
    {
        name: "drilbur",
        url: "https://pokeapi.co/api/v2/pokemon/529/",
        count: 0
    },
    {
        name: "excadrill",
        url: "https://pokeapi.co/api/v2/pokemon/530/",
        count: 0
    },
    {
        name: "audino",
        url: "https://pokeapi.co/api/v2/pokemon/531/",
        count: 0
    },
    {
        name: "timburr",
        url: "https://pokeapi.co/api/v2/pokemon/532/",
        count: 0
    },
    {
        name: "gurdurr",
        url: "https://pokeapi.co/api/v2/pokemon/533/",
        count: 0
    },
    {
        name: "conkeldurr",
        url: "https://pokeapi.co/api/v2/pokemon/534/",
        count: 0
    },
    {
        name: "tympole",
        url: "https://pokeapi.co/api/v2/pokemon/535/",
        count: 0
    },
    {
        name: "palpitoad",
        url: "https://pokeapi.co/api/v2/pokemon/536/",
        count: 0
    },
    {
        name: "seismitoad",
        url: "https://pokeapi.co/api/v2/pokemon/537/",
        count: 0
    },
    {
        name: "throh",
        url: "https://pokeapi.co/api/v2/pokemon/538/",
        count: 0
    },
    {
        name: "sawk",
        url: "https://pokeapi.co/api/v2/pokemon/539/",
        count: 0
    },
    {
        name: "sewaddle",
        url: "https://pokeapi.co/api/v2/pokemon/540/",
        count: 0
    },
    {
        name: "swadloon",
        url: "https://pokeapi.co/api/v2/pokemon/541/",
        count: 0
    },
    {
        name: "leavanny",
        url: "https://pokeapi.co/api/v2/pokemon/542/",
        count: 0
    },
    {
        name: "venipede",
        url: "https://pokeapi.co/api/v2/pokemon/543/",
        count: 0
    },
    {
        name: "whirlipede",
        url: "https://pokeapi.co/api/v2/pokemon/544/",
        count: 0
    },
    {
        name: "scolipede",
        url: "https://pokeapi.co/api/v2/pokemon/545/",
        count: 0
    },
    {
        name: "cottonee",
        url: "https://pokeapi.co/api/v2/pokemon/546/",
        count: 0
    },
    {
        name: "whimsicott",
        url: "https://pokeapi.co/api/v2/pokemon/547/",
        count: 0
    },
    {
        name: "petilil",
        url: "https://pokeapi.co/api/v2/pokemon/548/",
        count: 0
    },
    {
        name: "lilligant",
        url: "https://pokeapi.co/api/v2/pokemon/549/",
        count: 0
    },
    {
        name: "basculin-red-striped",
        url: "https://pokeapi.co/api/v2/pokemon/550/",
        count: 0
    },
    {
        name: "sandile",
        url: "https://pokeapi.co/api/v2/pokemon/551/",
        count: 0
    },
    {
        name: "krokorok",
        url: "https://pokeapi.co/api/v2/pokemon/552/",
        count: 0
    },
    {
        name: "krookodile",
        url: "https://pokeapi.co/api/v2/pokemon/553/",
        count: 0
    },
    {
        name: "darumaka",
        url: "https://pokeapi.co/api/v2/pokemon/554/",
        count: 0
    },
    {
        name: "darmanitan-standard",
        url: "https://pokeapi.co/api/v2/pokemon/555/",
        count: 0
    },
    {
        name: "maractus",
        url: "https://pokeapi.co/api/v2/pokemon/556/",
        count: 0
    },
    {
        name: "dwebble",
        url: "https://pokeapi.co/api/v2/pokemon/557/",
        count: 0
    },
    {
        name: "crustle",
        url: "https://pokeapi.co/api/v2/pokemon/558/",
        count: 0
    },
    {
        name: "scraggy",
        url: "https://pokeapi.co/api/v2/pokemon/559/",
        count: 0
    },
    {
        name: "scrafty",
        url: "https://pokeapi.co/api/v2/pokemon/560/",
        count: 0
    },
    {
        name: "sigilyph",
        url: "https://pokeapi.co/api/v2/pokemon/561/",
        count: 0
    },
    {
        name: "yamask",
        url: "https://pokeapi.co/api/v2/pokemon/562/",
        count: 0
    },
    {
        name: "cofagrigus",
        url: "https://pokeapi.co/api/v2/pokemon/563/",
        count: 0
    },
    {
        name: "tirtouga",
        url: "https://pokeapi.co/api/v2/pokemon/564/",
        count: 0
    },
    {
        name: "carracosta",
        url: "https://pokeapi.co/api/v2/pokemon/565/",
        count: 0
    },
    {
        name: "archen",
        url: "https://pokeapi.co/api/v2/pokemon/566/",
        count: 0
    },
    {
        name: "archeops",
        url: "https://pokeapi.co/api/v2/pokemon/567/",
        count: 0
    },
    {
        name: "trubbish",
        url: "https://pokeapi.co/api/v2/pokemon/568/",
        count: 0
    },
    {
        name: "garbodor",
        url: "https://pokeapi.co/api/v2/pokemon/569/",
        count: 0
    },
    {
        name: "zorua",
        url: "https://pokeapi.co/api/v2/pokemon/570/",
        count: 0
    },
    {
        name: "zoroark",
        url: "https://pokeapi.co/api/v2/pokemon/571/",
        count: 0
    },
    {
        name: "minccino",
        url: "https://pokeapi.co/api/v2/pokemon/572/",
        count: 0
    },
    {
        name: "cinccino",
        url: "https://pokeapi.co/api/v2/pokemon/573/",
        count: 0
    },
    {
        name: "gothita",
        url: "https://pokeapi.co/api/v2/pokemon/574/",
        count: 0
    },
    {
        name: "gothorita",
        url: "https://pokeapi.co/api/v2/pokemon/575/",
        count: 0
    },
    {
        name: "gothitelle",
        url: "https://pokeapi.co/api/v2/pokemon/576/",
        count: 0
    },
    {
        name: "solosis",
        url: "https://pokeapi.co/api/v2/pokemon/577/",
        count: 0
    },
    {
        name: "duosion",
        url: "https://pokeapi.co/api/v2/pokemon/578/",
        count: 0
    },
    {
        name: "reuniclus",
        url: "https://pokeapi.co/api/v2/pokemon/579/",
        count: 0
    },
    {
        name: "ducklett",
        url: "https://pokeapi.co/api/v2/pokemon/580/",
        count: 0
    },
    {
        name: "swanna",
        url: "https://pokeapi.co/api/v2/pokemon/581/",
        count: 0
    },
    {
        name: "vanillite",
        url: "https://pokeapi.co/api/v2/pokemon/582/",
        count: 0
    },
    {
        name: "vanillish",
        url: "https://pokeapi.co/api/v2/pokemon/583/",
        count: 0
    },
    {
        name: "vanilluxe",
        url: "https://pokeapi.co/api/v2/pokemon/584/",
        count: 0
    },
    {
        name: "deerling",
        url: "https://pokeapi.co/api/v2/pokemon/585/",
        count: 0
    },
    {
        name: "sawsbuck",
        url: "https://pokeapi.co/api/v2/pokemon/586/",
        count: 0
    },
    {
        name: "emolga",
        url: "https://pokeapi.co/api/v2/pokemon/587/",
        count: 0
    },
    {
        name: "karrablast",
        url: "https://pokeapi.co/api/v2/pokemon/588/",
        count: 0
    },
    {
        name: "escavalier",
        url: "https://pokeapi.co/api/v2/pokemon/589/",
        count: 0
    },
    {
        name: "foongus",
        url: "https://pokeapi.co/api/v2/pokemon/590/",
        count: 0
    },
    {
        name: "amoonguss",
        url: "https://pokeapi.co/api/v2/pokemon/591/",
        count: 0
    },
    {
        name: "frillish",
        url: "https://pokeapi.co/api/v2/pokemon/592/",
        count: 0
    },
    {
        name: "jellicent",
        url: "https://pokeapi.co/api/v2/pokemon/593/",
        count: 0
    },
    {
        name: "alomomola",
        url: "https://pokeapi.co/api/v2/pokemon/594/",
        count: 0
    },
    {
        name: "joltik",
        url: "https://pokeapi.co/api/v2/pokemon/595/",
        count: 0
    },
    {
        name: "galvantula",
        url: "https://pokeapi.co/api/v2/pokemon/596/",
        count: 0
    },
    {
        name: "ferroseed",
        url: "https://pokeapi.co/api/v2/pokemon/597/",
        count: 0
    },
    {
        name: "ferrothorn",
        url: "https://pokeapi.co/api/v2/pokemon/598/",
        count: 0
    },
    {
        name: "klink",
        url: "https://pokeapi.co/api/v2/pokemon/599/",
        count: 0
    },
    {
        name: "klang",
        url: "https://pokeapi.co/api/v2/pokemon/600/",
        count: 0
    },
    {
        name: "klinklang",
        url: "https://pokeapi.co/api/v2/pokemon/601/",
        count: 0
    },
    {
        name: "tynamo",
        url: "https://pokeapi.co/api/v2/pokemon/602/",
        count: 0
    },
    {
        name: "eelektrik",
        url: "https://pokeapi.co/api/v2/pokemon/603/",
        count: 0
    },
    {
        name: "eelektross",
        url: "https://pokeapi.co/api/v2/pokemon/604/",
        count: 0
    },
    {
        name: "elgyem",
        url: "https://pokeapi.co/api/v2/pokemon/605/",
        count: 0
    },
    {
        name: "beheeyem",
        url: "https://pokeapi.co/api/v2/pokemon/606/",
        count: 0
    },
    {
        name: "litwick",
        url: "https://pokeapi.co/api/v2/pokemon/607/",
        count: 0
    },
    {
        name: "lampent",
        url: "https://pokeapi.co/api/v2/pokemon/608/",
        count: 0
    },
    {
        name: "chandelure",
        url: "https://pokeapi.co/api/v2/pokemon/609/",
        count: 0
    },
    {
        name: "axew",
        url: "https://pokeapi.co/api/v2/pokemon/610/",
        count: 0
    },
    {
        name: "fraxure",
        url: "https://pokeapi.co/api/v2/pokemon/611/",
        count: 0
    },
    {
        name: "haxorus",
        url: "https://pokeapi.co/api/v2/pokemon/612/",
        count: 0
    },
    {
        name: "cubchoo",
        url: "https://pokeapi.co/api/v2/pokemon/613/",
        count: 0
    },
    {
        name: "beartic",
        url: "https://pokeapi.co/api/v2/pokemon/614/",
        count: 0
    },
    {
        name: "cryogonal",
        url: "https://pokeapi.co/api/v2/pokemon/615/",
        count: 0
    },
    {
        name: "shelmet",
        url: "https://pokeapi.co/api/v2/pokemon/616/",
        count: 0
    },
    {
        name: "accelgor",
        url: "https://pokeapi.co/api/v2/pokemon/617/",
        count: 0
    },
    {
        name: "stunfisk",
        url: "https://pokeapi.co/api/v2/pokemon/618/",
        count: 0
    },
    {
        name: "mienfoo",
        url: "https://pokeapi.co/api/v2/pokemon/619/",
        count: 0
    },
    {
        name: "mienshao",
        url: "https://pokeapi.co/api/v2/pokemon/620/",
        count: 0
    },
    {
        name: "druddigon",
        url: "https://pokeapi.co/api/v2/pokemon/621/",
        count: 0
    },
    {
        name: "golett",
        url: "https://pokeapi.co/api/v2/pokemon/622/",
        count: 0
    },
    {
        name: "golurk",
        url: "https://pokeapi.co/api/v2/pokemon/623/",
        count: 0
    },
    {
        name: "pawniard",
        url: "https://pokeapi.co/api/v2/pokemon/624/",
        count: 0
    },
    {
        name: "bisharp",
        url: "https://pokeapi.co/api/v2/pokemon/625/",
        count: 0
    },
    {
        name: "bouffalant",
        url: "https://pokeapi.co/api/v2/pokemon/626/",
        count: 0
    },
    {
        name: "rufflet",
        url: "https://pokeapi.co/api/v2/pokemon/627/",
        count: 0
    },
    {
        name: "braviary",
        url: "https://pokeapi.co/api/v2/pokemon/628/",
        count: 0
    },
    {
        name: "vullaby",
        url: "https://pokeapi.co/api/v2/pokemon/629/",
        count: 0
    },
    {
        name: "mandibuzz",
        url: "https://pokeapi.co/api/v2/pokemon/630/",
        count: 0
    },
    {
        name: "heatmor",
        url: "https://pokeapi.co/api/v2/pokemon/631/",
        count: 0
    },
    {
        name: "durant",
        url: "https://pokeapi.co/api/v2/pokemon/632/",
        count: 0
    },
    {
        name: "deino",
        url: "https://pokeapi.co/api/v2/pokemon/633/",
        count: 0
    },
    {
        name: "zweilous",
        url: "https://pokeapi.co/api/v2/pokemon/634/",
        count: 0
    },
    {
        name: "hydreigon",
        url: "https://pokeapi.co/api/v2/pokemon/635/",
        count: 0
    },
    {
        name: "larvesta",
        url: "https://pokeapi.co/api/v2/pokemon/636/",
        count: 0
    },
    {
        name: "volcarona",
        url: "https://pokeapi.co/api/v2/pokemon/637/",
        count: 0
    },
    {
        name: "cobalion",
        url: "https://pokeapi.co/api/v2/pokemon/638/",
        count: 0
    },
    {
        name: "terrakion",
        url: "https://pokeapi.co/api/v2/pokemon/639/",
        count: 0
    },
    {
        name: "virizion",
        url: "https://pokeapi.co/api/v2/pokemon/640/",
        count: 0
    },
    {
        name: "tornadus-incarnate",
        url: "https://pokeapi.co/api/v2/pokemon/641/",
        count: 0
    },
    {
        name: "thundurus-incarnate",
        url: "https://pokeapi.co/api/v2/pokemon/642/",
        count: 0
    },
    {
        name: "reshiram",
        url: "https://pokeapi.co/api/v2/pokemon/643/",
        count: 0
    },
    {
        name: "zekrom",
        url: "https://pokeapi.co/api/v2/pokemon/644/",
        count: 0
    },
    {
        name: "landorus-incarnate",
        url: "https://pokeapi.co/api/v2/pokemon/645/",
        count: 0
    },
    {
        name: "kyurem",
        url: "https://pokeapi.co/api/v2/pokemon/646/",
        count: 0
    },
    {
        name: "keldeo-ordinary",
        url: "https://pokeapi.co/api/v2/pokemon/647/",
        count: 0
    },
    {
        name: "meloetta-aria",
        url: "https://pokeapi.co/api/v2/pokemon/648/",
        count: 0
    },
    {
        name: "genesect",
        url: "https://pokeapi.co/api/v2/pokemon/649/",
        count: 0
    },
    {
        name: "chespin",
        url: "https://pokeapi.co/api/v2/pokemon/650/",
        count: 0
    },
    {
        name: "quilladin",
        url: "https://pokeapi.co/api/v2/pokemon/651/",
        count: 0
    },
    {
        name: "chesnaught",
        url: "https://pokeapi.co/api/v2/pokemon/652/",
        count: 0
    },
    {
        name: "fennekin",
        url: "https://pokeapi.co/api/v2/pokemon/653/",
        count: 0
    },
    {
        name: "braixen",
        url: "https://pokeapi.co/api/v2/pokemon/654/",
        count: 0
    },
    {
        name: "delphox",
        url: "https://pokeapi.co/api/v2/pokemon/655/",
        count: 0
    },
    {
        name: "froakie",
        url: "https://pokeapi.co/api/v2/pokemon/656/",
        count: 0
    },
    {
        name: "frogadier",
        url: "https://pokeapi.co/api/v2/pokemon/657/",
        count: 0
    },
    {
        name: "greninja",
        url: "https://pokeapi.co/api/v2/pokemon/658/",
        count: 0
    },
    {
        name: "bunnelby",
        url: "https://pokeapi.co/api/v2/pokemon/659/",
        count: 0
    },
    {
        name: "diggersby",
        url: "https://pokeapi.co/api/v2/pokemon/660/",
        count: 0
    },
    {
        name: "fletchling",
        url: "https://pokeapi.co/api/v2/pokemon/661/",
        count: 0
    },
    {
        name: "fletchinder",
        url: "https://pokeapi.co/api/v2/pokemon/662/",
        count: 0
    },
    {
        name: "talonflame",
        url: "https://pokeapi.co/api/v2/pokemon/663/",
        count: 0
    },
    {
        name: "scatterbug",
        url: "https://pokeapi.co/api/v2/pokemon/664/",
        count: 0
    },
    {
        name: "spewpa",
        url: "https://pokeapi.co/api/v2/pokemon/665/",
        count: 0
    },
    {
        name: "vivillon",
        url: "https://pokeapi.co/api/v2/pokemon/666/",
        count: 0
    },
    {
        name: "litleo",
        url: "https://pokeapi.co/api/v2/pokemon/667/",
        count: 0
    },
    {
        name: "pyroar",
        url: "https://pokeapi.co/api/v2/pokemon/668/",
        count: 0
    },
    {
        name: "flabebe",
        url: "https://pokeapi.co/api/v2/pokemon/669/",
        count: 0
    },
    {
        name: "floette",
        url: "https://pokeapi.co/api/v2/pokemon/670/",
        count: 0
    },
    {
        name: "florges",
        url: "https://pokeapi.co/api/v2/pokemon/671/",
        count: 0
    },
    {
        name: "skiddo",
        url: "https://pokeapi.co/api/v2/pokemon/672/",
        count: 0
    },
    {
        name: "gogoat",
        url: "https://pokeapi.co/api/v2/pokemon/673/",
        count: 0
    },
    {
        name: "pancham",
        url: "https://pokeapi.co/api/v2/pokemon/674/",
        count: 0
    },
    {
        name: "pangoro",
        url: "https://pokeapi.co/api/v2/pokemon/675/",
        count: 0
    },
    {
        name: "furfrou",
        url: "https://pokeapi.co/api/v2/pokemon/676/",
        count: 0
    },
    {
        name: "espurr",
        url: "https://pokeapi.co/api/v2/pokemon/677/",
        count: 0
    },
    {
        name: "meowstic-male",
        url: "https://pokeapi.co/api/v2/pokemon/678/",
        count: 0
    },
    {
        name: "honedge",
        url: "https://pokeapi.co/api/v2/pokemon/679/",
        count: 0
    },
    {
        name: "doublade",
        url: "https://pokeapi.co/api/v2/pokemon/680/",
        count: 0
    },
    {
        name: "aegislash-shield",
        url: "https://pokeapi.co/api/v2/pokemon/681/",
        count: 0
    },
    {
        name: "spritzee",
        url: "https://pokeapi.co/api/v2/pokemon/682/",
        count: 0
    },
    {
        name: "aromatisse",
        url: "https://pokeapi.co/api/v2/pokemon/683/",
        count: 0
    },
    {
        name: "swirlix",
        url: "https://pokeapi.co/api/v2/pokemon/684/",
        count: 0
    },
    {
        name: "slurpuff",
        url: "https://pokeapi.co/api/v2/pokemon/685/",
        count: 0
    },
    {
        name: "inkay",
        url: "https://pokeapi.co/api/v2/pokemon/686/",
        count: 0
    },
    {
        name: "malamar",
        url: "https://pokeapi.co/api/v2/pokemon/687/",
        count: 0
    },
    {
        name: "binacle",
        url: "https://pokeapi.co/api/v2/pokemon/688/",
        count: 0
    },
    {
        name: "barbaracle",
        url: "https://pokeapi.co/api/v2/pokemon/689/",
        count: 0
    },
    {
        name: "skrelp",
        url: "https://pokeapi.co/api/v2/pokemon/690/",
        count: 0
    },
    {
        name: "dragalge",
        url: "https://pokeapi.co/api/v2/pokemon/691/",
        count: 0
    },
    {
        name: "clauncher",
        url: "https://pokeapi.co/api/v2/pokemon/692/",
        count: 0
    },
    {
        name: "clawitzer",
        url: "https://pokeapi.co/api/v2/pokemon/693/",
        count: 0
    },
    {
        name: "helioptile",
        url: "https://pokeapi.co/api/v2/pokemon/694/",
        count: 0
    },
    {
        name: "heliolisk",
        url: "https://pokeapi.co/api/v2/pokemon/695/",
        count: 0
    },
    {
        name: "tyrunt",
        url: "https://pokeapi.co/api/v2/pokemon/696/",
        count: 0
    },
    {
        name: "tyrantrum",
        url: "https://pokeapi.co/api/v2/pokemon/697/",
        count: 0
    },
    {
        name: "amaura",
        url: "https://pokeapi.co/api/v2/pokemon/698/",
        count: 0
    },
    {
        name: "aurorus",
        url: "https://pokeapi.co/api/v2/pokemon/699/",
        count: 0
    },
    {
        name: "sylveon",
        url: "https://pokeapi.co/api/v2/pokemon/700/",
        count: 0
    },
    {
        name: "hawlucha",
        url: "https://pokeapi.co/api/v2/pokemon/701/",
        count: 0
    },
    {
        name: "dedenne",
        url: "https://pokeapi.co/api/v2/pokemon/702/",
        count: 0
    },
    {
        name: "carbink",
        url: "https://pokeapi.co/api/v2/pokemon/703/",
        count: 0
    },
    {
        name: "goomy",
        url: "https://pokeapi.co/api/v2/pokemon/704/",
        count: 0
    },
    {
        name: "sliggoo",
        url: "https://pokeapi.co/api/v2/pokemon/705/",
        count: 0
    },
    {
        name: "goodra",
        url: "https://pokeapi.co/api/v2/pokemon/706/",
        count: 0
    },
    {
        name: "klefki",
        url: "https://pokeapi.co/api/v2/pokemon/707/",
        count: 0
    },
    {
        name: "phantump",
        url: "https://pokeapi.co/api/v2/pokemon/708/",
        count: 0
    },
    {
        name: "trevenant",
        url: "https://pokeapi.co/api/v2/pokemon/709/",
        count: 0
    },
    {
        name: "pumpkaboo-average",
        url: "https://pokeapi.co/api/v2/pokemon/710/",
        count: 0
    },
    {
        name: "gourgeist-average",
        url: "https://pokeapi.co/api/v2/pokemon/711/",
        count: 0
    },
    {
        name: "bergmite",
        url: "https://pokeapi.co/api/v2/pokemon/712/",
        count: 0
    },
    {
        name: "avalugg",
        url: "https://pokeapi.co/api/v2/pokemon/713/",
        count: 0
    },
    {
        name: "noibat",
        url: "https://pokeapi.co/api/v2/pokemon/714/",
        count: 0
    },
    {
        name: "noivern",
        url: "https://pokeapi.co/api/v2/pokemon/715/",
        count: 0
    },
    {
        name: "xerneas",
        url: "https://pokeapi.co/api/v2/pokemon/716/",
        count: 0
    },
    {
        name: "yveltal",
        url: "https://pokeapi.co/api/v2/pokemon/717/",
        count: 0
    },
    {
        name: "zygarde",
        url: "https://pokeapi.co/api/v2/pokemon/718/",
        count: 0
    },
    {
        name: "diancie",
        url: "https://pokeapi.co/api/v2/pokemon/719/",
        count: 0
    },
    {
        name: "hoopa",
        url: "https://pokeapi.co/api/v2/pokemon/720/",
        count: 0
    },
    {
        name: "volcanion",
        url: "https://pokeapi.co/api/v2/pokemon/721/",
        count: 0
    },
    {
        name: "rowlet",
        url: "https://pokeapi.co/api/v2/pokemon/722/",
        count: 0
    },
    {
        name: "dartrix",
        url: "https://pokeapi.co/api/v2/pokemon/723/",
        count: 0
    },
    {
        name: "decidueye",
        url: "https://pokeapi.co/api/v2/pokemon/724/",
        count: 0
    },
    {
        name: "litten",
        url: "https://pokeapi.co/api/v2/pokemon/725/",
        count: 0
    },
    {
        name: "torracat",
        url: "https://pokeapi.co/api/v2/pokemon/726/",
        count: 0
    },
    {
        name: "incineroar",
        url: "https://pokeapi.co/api/v2/pokemon/727/",
        count: 0
    },
    {
        name: "popplio",
        url: "https://pokeapi.co/api/v2/pokemon/728/",
        count: 0
    },
    {
        name: "brionne",
        url: "https://pokeapi.co/api/v2/pokemon/729/",
        count: 0
    },
    {
        name: "primarina",
        url: "https://pokeapi.co/api/v2/pokemon/730/",
        count: 0
    },
    {
        name: "pikipek",
        url: "https://pokeapi.co/api/v2/pokemon/731/",
        count: 0
    },
    {
        name: "trumbeak",
        url: "https://pokeapi.co/api/v2/pokemon/732/",
        count: 0
    },
    {
        name: "toucannon",
        url: "https://pokeapi.co/api/v2/pokemon/733/",
        count: 0
    },
    {
        name: "yungoos",
        url: "https://pokeapi.co/api/v2/pokemon/734/",
        count: 0
    },
    {
        name: "gumshoos",
        url: "https://pokeapi.co/api/v2/pokemon/735/",
        count: 0
    },
    {
        name: "grubbin",
        url: "https://pokeapi.co/api/v2/pokemon/736/",
        count: 0
    },
    {
        name: "charjabug",
        url: "https://pokeapi.co/api/v2/pokemon/737/",
        count: 0
    },
    {
        name: "vikavolt",
        url: "https://pokeapi.co/api/v2/pokemon/738/",
        count: 0
    },
    {
        name: "crabrawler",
        url: "https://pokeapi.co/api/v2/pokemon/739/",
        count: 0
    },
    {
        name: "crabominable",
        url: "https://pokeapi.co/api/v2/pokemon/740/",
        count: 0
    },
    {
        name: "oricorio-baile",
        url: "https://pokeapi.co/api/v2/pokemon/741/",
        count: 0
    },
    {
        name: "cutiefly",
        url: "https://pokeapi.co/api/v2/pokemon/742/",
        count: 0
    },
    {
        name: "ribombee",
        url: "https://pokeapi.co/api/v2/pokemon/743/",
        count: 0
    },
    {
        name: "rockruff",
        url: "https://pokeapi.co/api/v2/pokemon/744/",
        count: 0
    },
    {
        name: "lycanroc-midday",
        url: "https://pokeapi.co/api/v2/pokemon/745/",
        count: 0
    },
    {
        name: "wishiwashi-solo",
        url: "https://pokeapi.co/api/v2/pokemon/746/",
        count: 0
    },
    {
        name: "mareanie",
        url: "https://pokeapi.co/api/v2/pokemon/747/",
        count: 0
    },
    {
        name: "toxapex",
        url: "https://pokeapi.co/api/v2/pokemon/748/",
        count: 0
    },
    {
        name: "mudbray",
        url: "https://pokeapi.co/api/v2/pokemon/749/",
        count: 0
    },
    {
        name: "mudsdale",
        url: "https://pokeapi.co/api/v2/pokemon/750/",
        count: 0
    },
    {
        name: "dewpider",
        url: "https://pokeapi.co/api/v2/pokemon/751/",
        count: 0
    },
    {
        name: "araquanid",
        url: "https://pokeapi.co/api/v2/pokemon/752/",
        count: 0
    },
    {
        name: "fomantis",
        url: "https://pokeapi.co/api/v2/pokemon/753/",
        count: 0
    },
    {
        name: "lurantis",
        url: "https://pokeapi.co/api/v2/pokemon/754/",
        count: 0
    },
    {
        name: "morelull",
        url: "https://pokeapi.co/api/v2/pokemon/755/",
        count: 0
    },
    {
        name: "shiinotic",
        url: "https://pokeapi.co/api/v2/pokemon/756/",
        count: 0
    },
    {
        name: "salandit",
        url: "https://pokeapi.co/api/v2/pokemon/757/",
        count: 0
    },
    {
        name: "salazzle",
        url: "https://pokeapi.co/api/v2/pokemon/758/",
        count: 0
    },
    {
        name: "stufful",
        url: "https://pokeapi.co/api/v2/pokemon/759/",
        count: 0
    },
    {
        name: "bewear",
        url: "https://pokeapi.co/api/v2/pokemon/760/",
        count: 0
    },
    {
        name: "bounsweet",
        url: "https://pokeapi.co/api/v2/pokemon/761/",
        count: 0
    },
    {
        name: "steenee",
        url: "https://pokeapi.co/api/v2/pokemon/762/",
        count: 0
    },
    {
        name: "tsareena",
        url: "https://pokeapi.co/api/v2/pokemon/763/",
        count: 0
    },
    {
        name: "comfey",
        url: "https://pokeapi.co/api/v2/pokemon/764/",
        count: 0
    },
    {
        name: "oranguru",
        url: "https://pokeapi.co/api/v2/pokemon/765/",
        count: 0
    },
    {
        name: "passimian",
        url: "https://pokeapi.co/api/v2/pokemon/766/",
        count: 0
    },
    {
        name: "wimpod",
        url: "https://pokeapi.co/api/v2/pokemon/767/",
        count: 0
    },
    {
        name: "golisopod",
        url: "https://pokeapi.co/api/v2/pokemon/768/",
        count: 0
    },
    {
        name: "sandygast",
        url: "https://pokeapi.co/api/v2/pokemon/769/",
        count: 0
    },
    {
        name: "palossand",
        url: "https://pokeapi.co/api/v2/pokemon/770/",
        count: 0
    },
    {
        name: "pyukumuku",
        url: "https://pokeapi.co/api/v2/pokemon/771/",
        count: 0
    },
    {
        name: "type-null",
        url: "https://pokeapi.co/api/v2/pokemon/772/",
        count: 0
    },
    {
        name: "silvally",
        url: "https://pokeapi.co/api/v2/pokemon/773/",
        count: 0
    },
    {
        name: "minior-red-meteor",
        url: "https://pokeapi.co/api/v2/pokemon/774/",
        count: 0
    },
    {
        name: "komala",
        url: "https://pokeapi.co/api/v2/pokemon/775/",
        count: 0
    },
    {
        name: "turtonator",
        url: "https://pokeapi.co/api/v2/pokemon/776/",
        count: 0
    },
    {
        name: "togedemaru",
        url: "https://pokeapi.co/api/v2/pokemon/777/",
        count: 0
    },
    {
        name: "mimikyu-disguised",
        url: "https://pokeapi.co/api/v2/pokemon/778/",
        count: 0
    },
    {
        name: "bruxish",
        url: "https://pokeapi.co/api/v2/pokemon/779/",
        count: 0
    },
    {
        name: "drampa",
        url: "https://pokeapi.co/api/v2/pokemon/780/",
        count: 0
    },
    {
        name: "dhelmise",
        url: "https://pokeapi.co/api/v2/pokemon/781/",
        count: 0
    },
    {
        name: "jangmo-o",
        url: "https://pokeapi.co/api/v2/pokemon/782/",
        count: 0
    },
    {
        name: "hakamo-o",
        url: "https://pokeapi.co/api/v2/pokemon/783/",
        count: 0
    },
    {
        name: "kommo-o",
        url: "https://pokeapi.co/api/v2/pokemon/784/",
        count: 0
    },
    {
        name: "tapu-koko",
        url: "https://pokeapi.co/api/v2/pokemon/785/",
        count: 0
    },
    {
        name: "tapu-lele",
        url: "https://pokeapi.co/api/v2/pokemon/786/",
        count: 0
    },
    {
        name: "tapu-bulu",
        url: "https://pokeapi.co/api/v2/pokemon/787/",
        count: 0
    },
    {
        name: "tapu-fini",
        url: "https://pokeapi.co/api/v2/pokemon/788/",
        count: 0
    },
    {
        name: "cosmog",
        url: "https://pokeapi.co/api/v2/pokemon/789/",
        count: 0
    },
    {
        name: "cosmoem",
        url: "https://pokeapi.co/api/v2/pokemon/790/",
        count: 0
    },
    {
        name: "solgaleo",
        url: "https://pokeapi.co/api/v2/pokemon/791/",
        count: 0
    },
    {
        name: "lunala",
        url: "https://pokeapi.co/api/v2/pokemon/792/",
        count: 0
    },
    {
        name: "nihilego",
        url: "https://pokeapi.co/api/v2/pokemon/793/",
        count: 0
    },
    {
        name: "buzzwole",
        url: "https://pokeapi.co/api/v2/pokemon/794/",
        count: 0
    },
    {
        name: "pheromosa",
        url: "https://pokeapi.co/api/v2/pokemon/795/",
        count: 0
    },
    {
        name: "xurkitree",
        url: "https://pokeapi.co/api/v2/pokemon/796/",
        count: 0
    },
    {
        name: "celesteela",
        url: "https://pokeapi.co/api/v2/pokemon/797/",
        count: 0
    },
    {
        name: "kartana",
        url: "https://pokeapi.co/api/v2/pokemon/798/",
        count: 0
    },
    {
        name: "guzzlord",
        url: "https://pokeapi.co/api/v2/pokemon/799/",
        count: 0
    },
    {
        name: "necrozma",
        url: "https://pokeapi.co/api/v2/pokemon/800/",
        count: 0
    },
    {
        name: "magearna",
        url: "https://pokeapi.co/api/v2/pokemon/801/",
        count: 0
    },
    {
        name: "marshadow",
        url: "https://pokeapi.co/api/v2/pokemon/802/",
        count: 0
    },
    {
        name: "deoxys-attack",
        url: "https://pokeapi.co/api/v2/pokemon/10001/",
        count: 0
    },
    {
        name: "deoxys-defense",
        url: "https://pokeapi.co/api/v2/pokemon/10002/",
        count: 0
    },
    {
        name: "deoxys-speed",
        url: "https://pokeapi.co/api/v2/pokemon/10003/",
        count: 0
    },
    {
        name: "wormadam-sandy",
        url: "https://pokeapi.co/api/v2/pokemon/10004/",
        count: 0
    },
    {
        name: "wormadam-trash",
        url: "https://pokeapi.co/api/v2/pokemon/10005/",
        count: 0
    },
    {
        name: "shaymin-sky",
        url: "https://pokeapi.co/api/v2/pokemon/10006/",
        count: 0
    },
    {
        name: "giratina-origin",
        url: "https://pokeapi.co/api/v2/pokemon/10007/",
        count: 0
    },
    {
        name: "rotom-heat",
        url: "https://pokeapi.co/api/v2/pokemon/10008/",
        count: 0
    },
    {
        name: "rotom-wash",
        url: "https://pokeapi.co/api/v2/pokemon/10009/",
        count: 0
    },
    {
        name: "rotom-frost",
        url: "https://pokeapi.co/api/v2/pokemon/10010/",
        count: 0
    },
    {
        name: "rotom-fan",
        url: "https://pokeapi.co/api/v2/pokemon/10011/",
        count: 0
    },
    {
        name: "rotom-mow",
        url: "https://pokeapi.co/api/v2/pokemon/10012/",
        count: 0
    },
    {
        name: "castform-sunny",
        url: "https://pokeapi.co/api/v2/pokemon/10013/",
        count: 0
    },
    {
        name: "castform-rainy",
        url: "https://pokeapi.co/api/v2/pokemon/10014/",
        count: 0
    },
    {
        name: "castform-snowy",
        url: "https://pokeapi.co/api/v2/pokemon/10015/",
        count: 0
    },
    {
        name: "basculin-blue-striped",
        url: "https://pokeapi.co/api/v2/pokemon/10016/",
        count: 0
    },
    {
        name: "darmanitan-zen",
        url: "https://pokeapi.co/api/v2/pokemon/10017/",
        count: 0
    },
    {
        name: "meloetta-pirouette",
        url: "https://pokeapi.co/api/v2/pokemon/10018/",
        count: 0
    },
    {
        name: "tornadus-therian",
        url: "https://pokeapi.co/api/v2/pokemon/10019/",
        count: 0
    },
    {
        name: "thundurus-therian",
        url: "https://pokeapi.co/api/v2/pokemon/10020/",
        count: 0
    },
    {
        name: "landorus-therian",
        url: "https://pokeapi.co/api/v2/pokemon/10021/",
        count: 0
    },
    {
        name: "kyurem-black",
        url: "https://pokeapi.co/api/v2/pokemon/10022/",
        count: 0
    },
    {
        name: "kyurem-white",
        url: "https://pokeapi.co/api/v2/pokemon/10023/",
        count: 0
    },
    {
        name: "keldeo-resolute",
        url: "https://pokeapi.co/api/v2/pokemon/10024/",
        count: 0
    },
    {
        name: "meowstic-female",
        url: "https://pokeapi.co/api/v2/pokemon/10025/",
        count: 0
    },
    {
        name: "aegislash-blade",
        url: "https://pokeapi.co/api/v2/pokemon/10026/",
        count: 0
    },
    {
        name: "pumpkaboo-small",
        url: "https://pokeapi.co/api/v2/pokemon/10027/",
        count: 0
    },
    {
        name: "pumpkaboo-large",
        url: "https://pokeapi.co/api/v2/pokemon/10028/",
        count: 0
    },
    {
        name: "pumpkaboo-super",
        url: "https://pokeapi.co/api/v2/pokemon/10029/",
        count: 0
    },
    {
        name: "gourgeist-small",
        url: "https://pokeapi.co/api/v2/pokemon/10030/",
        count: 0
    },
    {
        name: "gourgeist-large",
        url: "https://pokeapi.co/api/v2/pokemon/10031/",
        count: 0
    },
    {
        name: "gourgeist-super",
        url: "https://pokeapi.co/api/v2/pokemon/10032/",
        count: 0
    },
    {
        name: "venusaur-mega",
        url: "https://pokeapi.co/api/v2/pokemon/10033/",
        count: 0
    },
    {
        name: "charizard-mega-x",
        url: "https://pokeapi.co/api/v2/pokemon/10034/",
        count: 0
    },
    {
        name: "charizard-mega-y",
        url: "https://pokeapi.co/api/v2/pokemon/10035/",
        count: 0
    },
    {
        name: "blastoise-mega",
        url: "https://pokeapi.co/api/v2/pokemon/10036/",
        count: 0
    },
    {
        name: "alakazam-mega",
        url: "https://pokeapi.co/api/v2/pokemon/10037/",
        count: 0
    },
    {
        name: "gengar-mega",
        url: "https://pokeapi.co/api/v2/pokemon/10038/",
        count: 0
    },
    {
        name: "kangaskhan-mega",
        url: "https://pokeapi.co/api/v2/pokemon/10039/",
        count: 0
    },
    {
        name: "pinsir-mega",
        url: "https://pokeapi.co/api/v2/pokemon/10040/",
        count: 0
    },
    {
        name: "gyarados-mega",
        url: "https://pokeapi.co/api/v2/pokemon/10041/",
        count: 0
    },
    {
        name: "aerodactyl-mega",
        url: "https://pokeapi.co/api/v2/pokemon/10042/",
        count: 0
    },
    {
        name: "mewtwo-mega-x",
        url: "https://pokeapi.co/api/v2/pokemon/10043/",
        count: 0
    },
    {
        name: "mewtwo-mega-y",
        url: "https://pokeapi.co/api/v2/pokemon/10044/",
        count: 0
    },
    {
        name: "ampharos-mega",
        url: "https://pokeapi.co/api/v2/pokemon/10045/",
        count: 0
    },
    {
        name: "scizor-mega",
        url: "https://pokeapi.co/api/v2/pokemon/10046/",
        count: 0
    },
    {
        name: "heracross-mega",
        url: "https://pokeapi.co/api/v2/pokemon/10047/",
        count: 0
    },
    {
        name: "houndoom-mega",
        url: "https://pokeapi.co/api/v2/pokemon/10048/",
        count: 0
    },
    {
        name: "tyranitar-mega",
        url: "https://pokeapi.co/api/v2/pokemon/10049/",
        count: 0
    },
    {
        name: "blaziken-mega",
        url: "https://pokeapi.co/api/v2/pokemon/10050/",
        count: 0
    },
    {
        name: "gardevoir-mega",
        url: "https://pokeapi.co/api/v2/pokemon/10051/",
        count: 0
    },
    {
        name: "mawile-mega",
        url: "https://pokeapi.co/api/v2/pokemon/10052/",
        count: 0
    },
    {
        name: "aggron-mega",
        url: "https://pokeapi.co/api/v2/pokemon/10053/",
        count: 0
    },
    {
        name: "medicham-mega",
        url: "https://pokeapi.co/api/v2/pokemon/10054/",
        count: 0
    },
    {
        name: "manectric-mega",
        url: "https://pokeapi.co/api/v2/pokemon/10055/",
        count: 0
    },
    {
        name: "banette-mega",
        url: "https://pokeapi.co/api/v2/pokemon/10056/",
        count: 0
    },
    {
        name: "absol-mega",
        url: "https://pokeapi.co/api/v2/pokemon/10057/",
        count: 0
    },
    {
        name: "garchomp-mega",
        url: "https://pokeapi.co/api/v2/pokemon/10058/",
        count: 0
    },
    {
        name: "lucario-mega",
        url: "https://pokeapi.co/api/v2/pokemon/10059/",
        count: 0
    },
    {
        name: "abomasnow-mega",
        url: "https://pokeapi.co/api/v2/pokemon/10060/",
        count: 0
    },
    {
        name: "floette-eternal",
        url: "https://pokeapi.co/api/v2/pokemon/10061/",
        count: 0
    },
    {
        name: "latias-mega",
        url: "https://pokeapi.co/api/v2/pokemon/10062/",
        count: 0
    },
    {
        name: "latios-mega",
        url: "https://pokeapi.co/api/v2/pokemon/10063/",
        count: 0
    },
    {
        name: "swampert-mega",
        url: "https://pokeapi.co/api/v2/pokemon/10064/",
        count: 0
    },
    {
        name: "sceptile-mega",
        url: "https://pokeapi.co/api/v2/pokemon/10065/",
        count: 0
    },
    {
        name: "sableye-mega",
        url: "https://pokeapi.co/api/v2/pokemon/10066/",
        count: 0
    },
    {
        name: "altaria-mega",
        url: "https://pokeapi.co/api/v2/pokemon/10067/",
        count: 0
    },
    {
        name: "gallade-mega",
        url: "https://pokeapi.co/api/v2/pokemon/10068/",
        count: 0
    },
    {
        name: "audino-mega",
        url: "https://pokeapi.co/api/v2/pokemon/10069/",
        count: 0
    },
    {
        name: "sharpedo-mega",
        url: "https://pokeapi.co/api/v2/pokemon/10070/",
        count: 0
    },
    {
        name: "slowbro-mega",
        url: "https://pokeapi.co/api/v2/pokemon/10071/",
        count: 0
    },
    {
        name: "steelix-mega",
        url: "https://pokeapi.co/api/v2/pokemon/10072/",
        count: 0
    },
    {
        name: "pidgeot-mega",
        url: "https://pokeapi.co/api/v2/pokemon/10073/",
        count: 0
    },
    {
        name: "glalie-mega",
        url: "https://pokeapi.co/api/v2/pokemon/10074/",
        count: 0
    },
    {
        name: "diancie-mega",
        url: "https://pokeapi.co/api/v2/pokemon/10075/",
        count: 0
    },
    {
        name: "metagross-mega",
        url: "https://pokeapi.co/api/v2/pokemon/10076/",
        count: 0
    },
    {
        name: "kyogre-primal",
        url: "https://pokeapi.co/api/v2/pokemon/10077/",
        count: 0
    },
    {
        name: "groudon-primal",
        url: "https://pokeapi.co/api/v2/pokemon/10078/",
        count: 0
    },
    {
        name: "rayquaza-mega",
        url: "https://pokeapi.co/api/v2/pokemon/10079/",
        count: 0
    },
    {
        name: "pikachu-rock-star",
        url: "https://pokeapi.co/api/v2/pokemon/10080/",
        count: 0
    },
    {
        name: "pikachu-belle",
        url: "https://pokeapi.co/api/v2/pokemon/10081/",
        count: 0
    },
    {
        name: "pikachu-pop-star",
        url: "https://pokeapi.co/api/v2/pokemon/10082/",
        count: 0
    },
    {
        name: "pikachu-phd",
        url: "https://pokeapi.co/api/v2/pokemon/10083/",
        count: 0
    },
    {
        name: "pikachu-libre",
        url: "https://pokeapi.co/api/v2/pokemon/10084/",
        count: 0
    },
    {
        name: "pikachu-cosplay",
        url: "https://pokeapi.co/api/v2/pokemon/10085/",
        count: 0
    },
    {
        name: "hoopa-unbound",
        url: "https://pokeapi.co/api/v2/pokemon/10086/",
        count: 0
    },
    {
        name: "camerupt-mega",
        url: "https://pokeapi.co/api/v2/pokemon/10087/",
        count: 0
    },
    {
        name: "lopunny-mega",
        url: "https://pokeapi.co/api/v2/pokemon/10088/",
        count: 0
    },
    {
        name: "salamence-mega",
        url: "https://pokeapi.co/api/v2/pokemon/10089/",
        count: 0
    },
    {
        name: "beedrill-mega",
        url: "https://pokeapi.co/api/v2/pokemon/10090/",
        count: 0
    },
    {
        name: "rattata-alola",
        url: "https://pokeapi.co/api/v2/pokemon/10091/",
        count: 0
    },
    {
        name: "raticate-alola",
        url: "https://pokeapi.co/api/v2/pokemon/10092/",
        count: 0
    },
    {
        name: "raticate-totem-alola",
        url: "https://pokeapi.co/api/v2/pokemon/10093/",
        count: 0
    },
    {
        name: "pikachu-original-cap",
        url: "https://pokeapi.co/api/v2/pokemon/10094/",
        count: 0
    },
    {
        name: "pikachu-hoenn-cap",
        url: "https://pokeapi.co/api/v2/pokemon/10095/",
        count: 0
    },
    {
        name: "pikachu-sinnoh-cap",
        url: "https://pokeapi.co/api/v2/pokemon/10096/",
        count: 0
    },
    {
        name: "pikachu-unova-cap",
        url: "https://pokeapi.co/api/v2/pokemon/10097/",
        count: 0
    },
    {
        name: "pikachu-kalos-cap",
        url: "https://pokeapi.co/api/v2/pokemon/10098/",
        count: 0
    },
    {
        name: "pikachu-alola-cap",
        url: "https://pokeapi.co/api/v2/pokemon/10099/",
        count: 0
    },
    {
        name: "raichu-alola",
        url: "https://pokeapi.co/api/v2/pokemon/10100/",
        count: 0
    },
    {
        name: "sandshrew-alola",
        url: "https://pokeapi.co/api/v2/pokemon/10101/",
        count: 0
    },
    {
        name: "sandslash-alola",
        url: "https://pokeapi.co/api/v2/pokemon/10102/",
        count: 0
    },
    {
        name: "vulpix-alola",
        url: "https://pokeapi.co/api/v2/pokemon/10103/",
        count: 0
    },
    {
        name: "ninetales-alola",
        url: "https://pokeapi.co/api/v2/pokemon/10104/",
        count: 0
    },
    {
        name: "diglett-alola",
        url: "https://pokeapi.co/api/v2/pokemon/10105/",
        count: 0
    },
    {
        name: "dugtrio-alola",
        url: "https://pokeapi.co/api/v2/pokemon/10106/",
        count: 0
    },
    {
        name: "meowth-alola",
        url: "https://pokeapi.co/api/v2/pokemon/10107/",
        count: 0
    },
    {
        name: "persian-alola",
        url: "https://pokeapi.co/api/v2/pokemon/10108/",
        count: 0
    },
    {
        name: "geodude-alola",
        url: "https://pokeapi.co/api/v2/pokemon/10109/",
        count: 0
    },
    {
        name: "graveler-alola",
        url: "https://pokeapi.co/api/v2/pokemon/10110/",
        count: 0
    },
    {
        name: "golem-alola",
        url: "https://pokeapi.co/api/v2/pokemon/10111/",
        count: 0
    },
    {
        name: "grimer-alola",
        url: "https://pokeapi.co/api/v2/pokemon/10112/",
        count: 0
    },
    {
        name: "muk-alola",
        url: "https://pokeapi.co/api/v2/pokemon/10113/",
        count: 0
    },
    {
        name: "exeggutor-alola",
        url: "https://pokeapi.co/api/v2/pokemon/10114/",
        count: 0
    },
    {
        name: "marowak-alola",
        url: "https://pokeapi.co/api/v2/pokemon/10115/",
        count: 0
    },
    {
        name: "greninja-battle-bond",
        url: "https://pokeapi.co/api/v2/pokemon/10116/",
        count: 0
    },
    {
        name: "greninja-ash",
        url: "https://pokeapi.co/api/v2/pokemon/10117/",
        count: 0
    },
    {
        name: "zygarde-10",
        url: "https://pokeapi.co/api/v2/pokemon/10118/",
        count: 0
    },
    {
        name: "zygarde-50",
        url: "https://pokeapi.co/api/v2/pokemon/10119/",
        count: 0
    },
    {
        name: "zygarde-complete",
        url: "https://pokeapi.co/api/v2/pokemon/10120/",
        count: 0
    },
    {
        name: "gumshoos-totem",
        url: "https://pokeapi.co/api/v2/pokemon/10121/",
        count: 0
    },
    {
        name: "vikavolt-totem",
        url: "https://pokeapi.co/api/v2/pokemon/10122/",
        count: 0
    },
    {
        name: "oricorio-pom-pom",
        url: "https://pokeapi.co/api/v2/pokemon/10123/",
        count: 0
    },
    {
        name: "oricorio-pau",
        url: "https://pokeapi.co/api/v2/pokemon/10124/",
        count: 0
    },
    {
        name: "oricorio-sensu",
        url: "https://pokeapi.co/api/v2/pokemon/10125/",
        count: 0
    },
    {
        name: "lycanroc-midnight",
        url: "https://pokeapi.co/api/v2/pokemon/10126/",
        count: 0
    },
    {
        name: "wishiwashi-school",
        url: "https://pokeapi.co/api/v2/pokemon/10127/",
        count: 0
    },
    {
        name: "lurantis-totem",
        url: "https://pokeapi.co/api/v2/pokemon/10128/",
        count: 0
    },
    {
        name: "salazzle-totem",
        url: "https://pokeapi.co/api/v2/pokemon/10129/",
        count: 0
    },
    {
        name: "minior-orange-meteor",
        url: "https://pokeapi.co/api/v2/pokemon/10130/",
        count: 0
    },
    {
        name: "minior-yellow-meteor",
        url: "https://pokeapi.co/api/v2/pokemon/10131/",
        count: 0
    },
    {
        name: "minior-green-meteor",
        url: "https://pokeapi.co/api/v2/pokemon/10132/",
        count: 0
    },
    {
        name: "minior-blue-meteor",
        url: "https://pokeapi.co/api/v2/pokemon/10133/",
        count: 0
    },
    {
        name: "minior-indigo-meteor",
        url: "https://pokeapi.co/api/v2/pokemon/10134/",
        count: 0
    },
    {
        name: "minior-violet-meteor",
        url: "https://pokeapi.co/api/v2/pokemon/10135/",
        count: 0
    },
    {
        name: "minior-red",
        url: "https://pokeapi.co/api/v2/pokemon/10136/",
        count: 0
    },
    {
        name: "minior-orange",
        url: "https://pokeapi.co/api/v2/pokemon/10137/",
        count: 0
    },
    {
        name: "minior-yellow",
        url: "https://pokeapi.co/api/v2/pokemon/10138/",
        count: 0
    },
    {
        name: "minior-green",
        url: "https://pokeapi.co/api/v2/pokemon/10139/",
        count: 0
    },
    {
        name: "minior-blue",
        url: "https://pokeapi.co/api/v2/pokemon/10140/",
        count: 0
    },
    {
        name: "minior-indigo",
        url: "https://pokeapi.co/api/v2/pokemon/10141/",
        count: 0
    },
    {
        name: "minior-violet",
        url: "https://pokeapi.co/api/v2/pokemon/10142/",
        count: 0
    },
    {
        name: "mimikyu-busted",
        url: "https://pokeapi.co/api/v2/pokemon/10143/",
        count: 0
    },
    {
        name: "mimikyu-totem-disguised",
        url: "https://pokeapi.co/api/v2/pokemon/10144/",
        count: 0
    },
    {
        name: "mimikyu-totem-busted",
        url: "https://pokeapi.co/api/v2/pokemon/10145/",
        count: 0
    },
    {
        name: "kommo-o-totem",
        url: "https://pokeapi.co/api/v2/pokemon/10146/",
        count: 0
    },
    {
        name: "magearna-original",
        url: "https://pokeapi.co/api/v2/pokemon/10147/",
        count: 0
    }
]
function populateDb(){
    //Removes Pokemon Stats
    Pokemon.remove({}, function(err){
        if(err){
            console.log('error line 7');
        }else{
            //Adds all Pokemon stats 
            console.log('removed all pokemon stats')
            data.forEach(function(seed){
                Pokemon.create(seed, function(err, pokemons){
                    if(err){
                        console.log('error line 15');
                    }else{
                        console.log('added all pokemon!')
                    }
                })
            })
        }
    })
}



module.exports = populateDb


