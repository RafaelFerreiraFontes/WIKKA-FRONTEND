import Magnifier from "../images/icons/magnifier.svg";

import Menu_Hamburguer from "../images/icons/hamburguer_menu.svg";

import WishList from "../images/icons/wishlist.svg";

import Cart from "../images/icons/cart.svg";

import Login from "../images/icons/login.svg";

import styles from "./styles/topBar.module.css";

function TopBar()
{
    return (
    <nav className={styles.topBar}>
        <div className={styles.nav_div_start}>
            <a className={styles.shopName}href="/">WIKKA</a>
        </div>

        <div className={styles.nav_div_mid}>   
            <div className={styles.seachBar}>
                <input className={styles.textInput} placeholder={"Pesquise o seu Produto"}></input>
                
                <button className={styles.seachButton}>
                    <Magnifier />
                </button>
            </div>
            
            <button className={styles.menuButton}>
                <Menu_Hamburguer />
            </button>
        </div>
        
        <div className={styles.nav_div_end}>
            <button className={styles.wishlistButton} onClick={() =>{console.log("clique")}}>
                <WishList />
            </button>
            
            <button className={styles.loginButton} onClick={() =>{console.log("clique")}}>
                <Login /> <text> Entrar </text>
            </button>
            
            <button className={styles.cartButton} onClick={() =>{console.log("clique")}}>
                <Cart />
            </button>
        </div>
    </nav>
    );
}

export default TopBar;