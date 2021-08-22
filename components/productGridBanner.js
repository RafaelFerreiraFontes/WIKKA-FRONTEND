import { Image } from "next/image";

import styles from "./styles/productGridBanner.module.css";

function ProductGridBanner({text = "", image = "", price = ""})
{
    return(
        <div className={styles.container}>
            <Image src={image} />
            <p> { text } </p>
            <p> {price} </p>
        </div>        
    );
}

export default ProductGridBanner;