const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "water"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Arbok",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "fix"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

const bListPkmn = pokémon.filter( p => p.name[0] === "B" );
//an array of pokémon objects where the id is evenly divisible by 3:
const pkmnIds = pokémon.filter( p => p.id%3==0 )
// console.log(pkmnIds)

//an array of pokémon objects that are "fire" type
const pkmnFire = pokémon.filter( p =>  p.types.includes("fire"));
const pkmnFire1 = pokémon.filter( p =>  p.types[0]=="fire" && p.types[1]=="fire");
// console.log(pkmnFire1)


const pkmnFire2 = pokémon.filter( p =>  p.types[0].includes("fire") ).map(p => p.types[0]);
// console.log(pkmnFire2)

//an array of pokémon objects that have more than one type
const pkmn3 = pokémon.filter( p =>  p.types.length>1);
// console.log(pkmn3)


const pkmn4 = pokémon.filter( p =>  p.types.length>1).map(p => p.types);
// console.log(pkmn4)

//an array with just the names of the pokémon

const pkmn5 = pokémon.filter(p => p.name).map(p=>p.name);
// console.log(pkmn5)

// an array with just the names of pokémon with an id greater than 99
const pkmn6 = pokémon.filter(p => p.id>99).map(p=>p.name);;
// console.log(pkmn6)

//  an array with just the names of the pokémon whose only type is poison
const pkmn7 = pokémon.filter(p => p.types.includes("poison")).map(p=>p.name);
// console.log(pkmn7)

//an array containing just the first type of all the pokémon whose second type is "flying"
const pkmn8 = pokémon.filter(p => p.types[1] == "flying").map(p=>p.types[0]);
// console.log(pkmn8)


//a count of the number of pokémon that are "normal" type
const pkmn9 = pokémon.filter(p => p.types.includes("normal"));
// console.log(pkmn9.length)

const fitypes = pokémon.map(x=>x.types).flat().filter(x=>x.startsWith("fi"));
// console.log(pkmnFire10)
// console.log(fitypes);
const fitypes2 = pokémon.filter(p=> p.types.join('').length>10).map(p=>p.id);
// console.log(fitypes2);


const fitypes3 = pokémon.map(p=> p.types)
// console.log(fitypes3.sort());

const zaki =  [...pokémon];
console.log(zaki.sort((a,b)=>{
    nameA=a.types[0];
    nameB=b.types[0];
    if (nameA < nameB) {
        console.log("izz")
    return -1;
  }
  if (nameA > nameB){
    console.log("zaki")
    return 1
  }
  // names must be equal (no change)
  
  return 0;}
  )
  );




