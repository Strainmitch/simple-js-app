let pokemonList = [
    { ID: "6", name: "Charizard", height: 1.7, type: ["fire","flying"] },
    { ID: "7", name: "Squirtle", height: .50, type: ["water"] },
    { ID: "12", name: "Butterfree", height: 1.09, type: ["bug","flying"] },
    { ID: "24", name: "Arbok", height: 3.5, type: ["poison"] },
    { ID: "25", name: "Pikachu", height: .40, type: ["electric"] },
    { ID: "30", name: "Nidorina", height: .78, type: ["poison"] },
    { ID: "45", name: "Vileplume", height: 1.19, type: ["grass","poison"] },
    { ID: "91", name: "Cloyster", height: 1.49, type: ["fire","flying"] },
    { ID: "150", name: "Mewtwo", height: 2, type: ["psychic"] },
    { ID: "395", name: "Empoleon", height: 1.70, type: ["water","steel"] }
];

for (let i = 0; 
    i < pokemonList.length; 
    i++) {
    if (pokemonList[i].height >=3) {
        document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + "m) - Wow, that's big!" + "<br>")
        }
    else if (pokemonList[i].height >= 1.6 && pokemonList[i].height < 5) {
        document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + "m) - That is a normal pokemon!" + "<br>")
        }
    else {
        document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + "m) - That is a small pokemon!" + "<br>")
        }
}
