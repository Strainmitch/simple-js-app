let pokemonRepository = (function () {
  let pokemonList = [
    { name: "Charizard", height: 1.7, type: ["fire","flying"] },
    { name: "Squirtle", height: .50, type: ["water"] },
    { name: "Butterfree", height: 1.09, type: ["bug","flying"] },
    { name: "Arbok", height: 3.5, type: ["poison"] },
    { name: "Pikachu", height: .40, type: ["electric"] },
    { name: "Nidorina", height: .78, type: ["poison"] },
    { name: "Vileplume", height: 1.19, type: ["grass","poison"] },
    { name: "Cloyster", height: 1.49, type: ["fire","flying"] },
    { name: "Mewtwo", height: 2, type: ["psychic"] },
    { name: "Empoleon", height: 1.70, type: ["water","steel"] }
]

function add(pokemon) {
  pokemonList.push(pokemon);
}

function getAll() {
  return pokemonList;
}

return {
  add: add,
  getAll: getAll
};
})();

pokemonRepository.getAll().forEach(function(pokemon) {
  document.write(pokemon.name +  pokemon.height);
});

pokemonList.forEach(function(pokemon) {
  if (pokemon.height >=5) {
    document.write(pokemon.name + " (height: " + pokemon.height + "m) - Wow, that is a big Pokemon!!" + "<br>")
  } else if (pokemon.height >= 1.6 && pokemon.height < 5) {
    document.write(pokemon.name + " (height: " + pokemon.height + "m) - That is a normal Pokemon!" + "<br>")
  } else {
    document.write(pokemon.name + " (height: " + pokemon.height + "m) - That is a small pokemon!" + "<br>")
  }
});