'use strict'

import { Pokemon } from './pokemon';

// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.
// Ash has a few pokemon.
// A wild pokemon appeared!

let pokemonOfAsh: Pokemon[] = initializePokemon();

function initializePokemon(): Pokemon[] {
    return [
        new Pokemon('Balbasaur', 'leaf', 'water'),
        new Pokemon('Pikatchu', 'electric', 'water'),
        new Pokemon('Charizard', 'fire', 'leaf'),
        new Pokemon('Balbasaur', 'water', 'fire'),
        new Pokemon('Kingler', 'water', 'fire')
    ];
}

let wildPokemon: Pokemon = new Pokemon('Oddish', 'leaf', 'water');

// Which pokemon should Ash use?
// Implement the following `chooseEffective` function which will choose the most effective pokemon for Ash


//for (let i: number = 0; i < pokemonOfAsh.length; i++){
//  if (pokemonOfAsh[i].isEffectiveAgainst(wildPokemon)) {
//  console.log(`I choose you!, ` + pokemonOfAsh[i]._name);
//  }
//}

// vagy a fuggvennyel:

function chooseEffective(oldPokemons: Pokemon[], newPokemon: Pokemon): string {
  for (let i: number = 0; i < pokemonOfAsh.length; i++) {
    if (pokemonOfAsh[i].isEffectiveAgainst(wildPokemon)) {
      return pokemonOfAsh[i]._name;
    }
  }
}
  chooseEffective(pokemonOfAsh, wildPokemon);
  console.log(`I choose you!, ${chooseEffective(pokemonOfAsh, wildPokemon)}`);