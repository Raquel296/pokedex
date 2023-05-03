import { Link } from "react-router-dom";
import styles from './footer.module.css'
import PokemonPic from '../assets/pikachu.png'
import LocationPic from '../assets/pointer.png'
import ItemsPic from '../assets/pokeball.png'

const Footer= () => {
  return <footer className={styles.footer}>
    <Link to="/pokemons" className={styles.footerLink}
        onClick={(event) => event.preventDefault()}>
        <img className={styles.footerIcon} src={PokemonPic} alt="Pokeball"/>
        Pokemons
    </Link>
    <Link to="/items" className={styles.footerLink}
        onClick={(event) => event.preventDefault()}>
        <img className={styles.footerIcon} src={ItemsPic} alt="Items"/>
        Items
    </Link>
    <Link to="/location" className={styles.footerLink}
         onClick={(event) => event.preventDefault()}>
        <img className={styles.footerIcon} src={LocationPic} alt="Map"/>
        Map
    </Link>
  </footer>;
};

export default Footer;
