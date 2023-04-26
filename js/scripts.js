let pokemonRepository = (function() {
  let pokemonList =[];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=200';

  function add(pokemon) {
    if (
        typeof pokemon === "object" &&
        "name" in pokemon
    ){
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon not correct");
    }
  }
  
  function getAll() {
    return pokemonList;
  }
  
  function addListItem(pokemon) {
    let pokemonListElement = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.addEventListener('click', function (event){
      showDetails(pokemon)
    });
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonListElement.appendChild(listpokemon);
  }

  function loadList() {
    return fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    })
    .catch(function (e) {
      console.error(e);
    });
  }

  function loadDetails(pokemon) {
    let url = pokemon.detailsUrl;
    return fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (details) {
      pokemon.imageUrl = details.sprites.front_default;
      pokemon.height = details.height;
      pokemon.types = details.types;
    })
    .catch(function (e) {
      console.error(e);
    });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

  function showModal(pokemon) {
    let modalTitle = document.querySelector(".modal-title");
    modalTitle.innerText = pokemon.name;

    let imageContainer = document.querySelector(".image-container");
    let pokemonImage = document.createElement("img");
    pokemonImage.src = pokemon.imageUrl;
    pokemonImage.classList.add("pokemon-image");
    imageContainer.innerHTML = "";
    imageContainer.append(pokemonImage);

    let pokemonHeight = document.querySelector(".height");
    pokemonHeight.innerText = "Height: " + pokemon.height;

    let modal = document.querySelector("#modal-container");
    modal.classList.add("modal-is-visible");

    let buttonContainer = document.querySelector("#button-container");
    let modalCloseButton = document.createElement("button");
    modalCloseButton.classList.add("btn");
    modalCloseButton.classList.add("modal-close");
    modalCloseButton.innerText = "x";
    buttonContainer.innerHTML = "";
    buttonContainer.append(modalCloseButton);

    modalCloseButton.addEventListener("click", function () {
      closeModal();
    });

    function closeModal() {
      modal.classList.remove("modal-is-visible");
    }
  }
  
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal,
  };
})(); 

pokemonRepository.loadList().then(function(){
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});