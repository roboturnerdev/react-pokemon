import React, { Component } from 'react';
// imrc enter snippet

import Pokecard from './Pokecard';

class Pokedex extends Component {
    static defaultProps = {
        pokemon: [
            {id: 1, name: 'Bulbasaur', type: 'grass', exp: 26},
            {id: 24, name: 'Arbok', type: 'poison', exp: 17},
            {id: 35, name: 'Clefairy', type: 'normal', exp: 24},
            {id: 45, name: 'Vileplume', type: 'grass', exp: 84},
            {id: 56, name: 'Mankey', type: 'fighting', exp: 44},
            {id: 62, name: 'Poliwrath', type: 'water', exp: 32},
            {id: 74, name: 'Geodude', type: 'rock', exp: 83},
            {id: 89, name: 'Muk', type: 'poison', exp: 34}
        ]
    };
    render() {
        return (
            <div className="Pokedex">
                <h1>Pokedex!</h1>
                {this.props.pokemon.map(p => (
                <Pokecard 
                id={p.id} 
                name={p.name} 
                type={p.type} 
                exp={p.exp} 
                />))}
            </div>
        );
    }
}

export default Pokedex;