import React, { Component } from 'react';
import './Pokedex.css';

import Pokecard from './Pokecard';

class Pokedex extends Component {
    render() {
        let title;
        if(this.props.isWinner) {
            title = <h1 className='win'>Winning Hand</h1>;
        } else {
            title = <h1 className='lose'>Losing Hand</h1>;
        }
        return (
            <div className="Pokedex">
            {title}
            <h4>Total Exp: {this.props.exp}</h4>
                <div className="Pokedex--cards">
                    {this.props.pokemon.map(p => (
                    <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_exp} />))}
                </div>
            </div>
        );
    }
}

export default Pokedex;