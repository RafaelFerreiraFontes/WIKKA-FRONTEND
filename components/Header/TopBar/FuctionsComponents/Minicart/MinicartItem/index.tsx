import styles from './styles/MinicartItem.module.scss';
import Link from 'next/link';
import { Dispatch, useEffect, useState } from 'react';
import { ProductCart } from '../Minicart';

interface Props {
    productCart: ProductCart;
    productList?: ProductCart[];
    updateList?: Dispatch<React.SetStateAction<ProductCart[]>>;
}

export default function MinicartItem({
    productCart,
    productList = [],
    updateList = () => { }
}: Props) {
    const { id, name, price, isSale, quantity, salePrice, image, link } = productCart;
    const [quantitySelected, setQuantitySelected] = useState(quantity);

    useEffect(() => {
        if (quantitySelected === 0) {
            updateList(productList.filter((product) => product.id !== id));
        }
        else if (quantitySelected != quantity) {
            updateList(productList.map((product) => {
                if (product.id === id) {
                    let newProduct = product;
                    
                    newProduct.quantity = quantitySelected;

                    console.log(newProduct);

                    return newProduct;
                }
                else {
                    return product;
                }
            }));
        }
    }, [quantitySelected]);

    useEffect(() => {
        if(quantitySelected != quantity)
            setQuantitySelected(quantity);
    }, [quantity,productList]);


    return (
        <div className={styles["minicart-item-container"]}>
            <Link href={link} passHref>
                <a className={styles["minicart-item-link"]} target={"_blank"}>

                    <div className={styles["minicart-item-body"]}>
                        <div className={styles["minicart-item-image-container"]}>
                            <img className={styles["minicart-item-image"]} width={80} height={80} src={image} alt={name} />
                        </div>

                        <div className={styles["minicart-item-info-container"]}>
                            <div className={styles["minicart-item-info-column"]}>
                                <span className={styles["minicart-item-text"]}>{name}</span>

                                {
                                    isSale ?
                                        <div className={styles["minicart-item-sale-container"]}>
                                            <span className={styles["minicart-item-sale-text"]}> {salePrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}</span>
                                        </div>
                                        :
                                        <></>
                                }

                                <span className={styles["minicart-item-price"]}>{price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}</span>
                            </div>
                            <div className={styles["minicart-item-info-column"]}>
                                <span className={styles["minicart-item-button-remove"]} onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    updateList(productList.filter((product) => product.id !== id));
                                }}>
                                    remover
                                </span>

                                <div className={styles["minicart-item-quantity-container"]} onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                }}>
                                    <div className={styles["minicart-item-quantity-selector"]}>
                                        <div className={styles["minicart-item-quantity-buttons-container"]} onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            setQuantitySelected(quantitySelected >= 1 ? quantitySelected - 1 : 0);
                                        }}>
                                            <span className={styles["minicart-item-quantity-button"]}><img src='assets/svgs/minus.svg' alt='-' /></span>
                                        </div>

                                        <span className={styles["minicart-item-quantity-text"]}>{quantitySelected}</span>

                                        <div className={styles["minicart-item-quantity-buttons-container"]}
                                            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                setQuantitySelected(quantitySelected + 1);
                                            }}
                                        >
                                            <span className={styles["minicart-item-quantity-button"]}><img src='assets/svgs/plus.svg' alt='-' /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    );
} 