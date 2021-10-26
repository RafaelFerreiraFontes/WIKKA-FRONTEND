import Image from "next/image";

import styles from "./styles/productGridBanner.module.css";

import AddCart from "../images/icons/iconmonstr-shopping-cart-3.svg";

/*
    buying_info = {
        "max_portion" : 24,
        "ispromotion" : false,
        "promotion_percent" : 25,
        "max_portion_nt_interest" : 12,
    };
*/

function ProductGridBanner({ name = "", image = "", price = "", buying_info = {
    "max_portion": 24,
    "ispromotion": false,
    "promotion_percent": 25,
    "max_portion_nt_interest": 12,
}, }) {

    if (name == "" || image == "" || price == "")
        return <di></di>;

    return (
        <div className={styles.container}>

            <div className={styles.product_image_container}> <Image src={image} width={185} /> </div>

            <div className={styles.product_info_container}>
                <span className={styles.product_name}> {name} </span>

                <span className={styles.product_price}> R$ {price} </span>

                <div className={styles.buttons_container}>

                    <button className={styles.button_buy} type={"button"}> COMPRAR </button>

                    <button className={styles.button_add_cart} type={"button"}> <AddCart /> </button>

                </div>
            </div>

        </div>
    );
}

export default ProductGridBanner;