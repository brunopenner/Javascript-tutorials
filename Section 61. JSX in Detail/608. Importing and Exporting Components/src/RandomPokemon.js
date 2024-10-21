import "./RandomPokemon.css";

export default function RandomPokemon() {
    const RandomNumber = (Math.floor(Math.random() * 150)) + 1;
    const pokemonImgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${RandomNumber}.png`
    return <div className="RandomPokemon">
      <h1>Pokemon #{RandomNumber}</h1>
      <img src={pokemonImgUrl} alt="Random Pokemon" />
    </div>
  }