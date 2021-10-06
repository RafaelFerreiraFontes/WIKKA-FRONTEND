import styles from "./styles/productGrid.module.css";

import DivGroup from "./divGroup";

import ProductGridBanner from "./productGridBanner";

import product_image_placeholder from "../images/product_image_1.png";

function ProductGrid({text = "", products = [1,2,3,4,5,6,7,8]})
{
    if(text === "" || products === [])
        return <div></div>;

    return(
        <div className={styles.container} >

            <DivGroup text={text} />        

            <div className={styles.grid_container} >
                {
                    products.map( (element, index) => {
                        return(
                            <ProductGridBanner key={`grid_product_${text}_group_${index}`} name={"Product "+ element} image={product_image_placeholder} price={"99,90"}/>
                        );
                    })
                }
            </div>

        </div>
    );
}

export default ProductGrid;