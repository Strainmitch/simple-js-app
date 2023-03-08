let pokemonRepository = (function () {
  let repository = [
    {
      name: "Charizard",
      height: 1.7,
      type: ["fire","flying"]
    },
    {
      name: "Squirtle",
      height: .50,
      type: ["water"]
    },
    {
      name: "Butterfree",
      height: 1.09,
      type: ["bug","flying"]
    },
    {
      name: "Arbok",
      height: 3.5,
      type: ["poison"]
    },
    {
      name: "Pikachu",
      height: .40,
      type: ["electric"]
    },
    {
      name: "Nidorina",
      height: .78,
      type: ["poison"]
    },
    {
      name: "Vileplume",
      height: 1.19,
      type: ["grass","poison"]
    },
    {
      name: "Cloyster",
      height: 1.49,
      type: ["fire","flying"]
    },
    {
      name: "Mewtwo",
      height: 2,
      type: ["psychic"]
    },
    {
      name: "Empoleon",
      height: 1.70,
      type: ["water","steel"]
    }
];
  function getAll() {
    return pokemonList;
  }
  function add (item) {
    pokemonList.push(item);
  }
function getAll() {
  return repository;
}
function addListItem(pokemon){
  let pokemonList = document.querySelector(".pokemon-list");
  let listpokemon = document.createElement("li");
  let button = document.createElement("button");
  button.innerText = pokemon.name;
  button.classList.add("button-class");
  listpokemon.appendChild(button);
  pokemonList.appendChild(listpokemon);
  button.addEventListener('click', function(){
    showDetails(pokemon);
  })
  }
  function showDetails(pokemon) {
    console.log(pokemon.pokemonName);
  }
  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    showDetails: showDetails
  }
})();


console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
pokemonRepository.addListItem(pokemon);
});