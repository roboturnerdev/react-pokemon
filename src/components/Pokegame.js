import React, { Component } from 'react';
import Pokedex from './Pokedex';

class Pokegame extends Component {
    static defaultProps = {
        pokemon: [
            {id: 1, name: 'Bulbasaur', type: 'grass', base_exp: 26},
            {id: 24, name: 'Arbok', type: 'poison', base_exp: 17},
            {id: 35, name: 'Clefairy', type: 'normal', base_exp: 24},
            {id: 45, name: 'Vileplume', type: 'grass', base_exp: 84},
            {id: 56, name: 'Mankey', type: 'fighting', base_exp: 44},
            {id: 62, name: 'Poliwrath', type: 'water', base_exp: 32},
            {id: 74, name: 'Geodude', type: 'rock', base_exp: 83},
            {id: 89, name: 'Muk', type: 'poison', base_exp: 34}
        ]
    };
    render() {
        let hand1 = [];
        let hand2 = [ ...this.props.pokemon ];    // spread Pog
        while(hand1.length < hand2.length) {
            let randIdx = Math.floor(Math.random() * hand2.length);
            let randPokemon = hand2.splice(randIdx, 1)[0];
            hand1.push(randPokemon);
        }   // basically this loop moving from hand2 into hand1 over and over

        // all of hand for each pokemon we take that exp and add together, start index 0
        let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_exp, 0);
        let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_exp, 0);
        return (
            <div>
                <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2}/>
                <Pokedex pokemon={hand2} exp={exp2} isWinner={exp1 < exp2}/>
            </div>
        )
    }
}

export default Pokegame;