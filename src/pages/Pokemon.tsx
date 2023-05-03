import { useNavigate, useParams } from "react-router-dom";
import PokeballImg from '../assets/pokeball.png'
import Footer from "../components/Footer";
import styles from "./pokemon.module.css"
import { useState, useEffect } from 'react';
import { PokemonDetails } from '../types/types';
import LoadingScreen from "../components/loadingScreen";
import { waitFor } from "../utils/utils";
import { fetchPokemon } from "../api/fetchPokemon";


const Pokemon = () => {
  const [pokemon, setPokemon] = useState<PokemonDetails>();
  const { name } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function getPokemon() {
      setIsLoading(true);
      waitFor(500);
      const fetchedPokemon = await fetchPokemon(name as string);
      setPokemon(fetchedPokemon);
      setIsLoading(false);
    }
    getPokemon();
  }, [name, setPokemon]);

  if (isLoading || !pokemon) {
    return <LoadingScreen />;
  }

  return <>
    <button className={styles.pokeballButton} onClick={() => navigate(-1)}>
      <img className={styles.pokeballImg} src={PokeballImg} alt="Pokeball"/>Go back
    </button>
    <div className={styles.pokemon}>
      <main className={styles.pokemonInfo}>
        <div className={styles.pokemonTitle}>{name?.toUpperCase()}</div>
        <div>Num: {pokemon?.id}</div>
        <div>
          <img className={styles.pokemonInfoImg} src={pokemon.imgSrc} alt={pokemon.name} />
        </div>
        <div>HP: {pokemon?.hp}</div>
        <div>Atack: {pokemon?.attack}</div>
        <div>Defense: {pokemon?.defense}</div>
      </main>
    </div>
    <Footer/>
  </>;
};

export default Pokemon;

