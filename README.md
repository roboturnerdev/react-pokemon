# React - Pokemon

Practice using React components and properties.

## Complete: Notable Take-aways

### Mapping over child components

* Making good use of `props.pokemon.map` - using map is a common pattern to iterate over each item and apply the props.

* In the `Pokecard` component, we are able to use the data passed down with `this.props.variable`.

### Game Logic
`Pokegame` shows a few concepts:
* defaultProps
* game logic

> The game here is run at page load. It randomly generates two "hands" out of the 8 available pokemon, and then compares their total exp to determine victory. I learned how to program in college and focused on game programming because of logic patterns and game states like this. I feel like it would be a harder concept to grasp from, say, the point-of-view of someone who began learning to code and mainly focused on static websites with just HTML and CSS.

## Final Thoughts

I am hungry for more. It is already clear to me that React and Next.js are huge players in the current "meta", no pun intended.

This project is a good one to circle back to and iterate on in the future.



<img src="https://i.imgur.com/fbiR157.png">

# Original Post

## Requirements

Create a pokemon app that displays a group of 8 pokemon.

## Components

* App - render single Pokedex
* Pokecard - show a single Pokemon, and its name image and type.
* Pokedex - provided, via props, array of objects describing different pokrmon, and renders a series of Pokecard components.

```bash
# default pokemon object
{id: 1, name: 'Bulbasaur', type: 'grass', exp: 9}
```

## Optional

* Pokegame component - random on page load, two different "hands" of 4 pokemon each. Shows winner and loser based off greater total "hand exp".
