import Image from "next/image";

import styles from "./styles/productGridBanner.module.css";

import AddCart from "../images/icons/iconmonstr-shopping-cart-3.svg";

function ProductGridBanner({ name = "", image = "", price = "", buying_info = {}, }) {
    if (name == "" || image == "" || price == "")
        return <di></di>;

        return (
            <div className={styles.container}>

                <div className={styles.product_image_container}> <Image src={image} width={185} /> </div>

                <span className={styles.product_name}> {name} </span>

                <span className={styles.product_price}> R$ {price} </span>

                <div className={styles.buttons_container}>

                    <button className={styles.button_buy} type={"button"}> COMPRAR </button>

                    <button className={styles.button_add_cart} type={"button"}> <AddCart/> </button>

                </div>

            </div>
        );
}

export default ProductGridBanner;