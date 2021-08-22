import styles from "./styles/productGrid.module.css";

import DivGroup from "./divGroup";

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
                            <div key={`grid_product_${text}_group_${index}`} className={styles.grid_item} > 
                                { element } 
                            </div>
                        );
                    })
                }
            </div>

        </div>
    );
}

export default ProductGrid;