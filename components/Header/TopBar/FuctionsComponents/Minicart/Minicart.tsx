import { useEffect, useState } from 'react';
import styles from './styles/Minicart.module.scss';
import MinicartItem from './MinicartItem';

export type ProductCart = {
    id: number | string;
    name: string;
    price: number;
    isSale: boolean;
    quantity: number;
    salePrice?: number;
    link: string;
    image: string;
}

interface Props {
    closeMinicart: (_: boolean) => any;
    productsInCart?: ProductCart[];
}

const productSample = [
    {
        id: 1,
        name: "Afrodite - Full/Casal",
        price: 1215.00,
        isSale: true,
        salePrice: 1315.00,
        quantity: 1,
        link: "/",
        image: "/assets/imgs/afrodite.jpg"
    },
    {
        id: 2,
        name: "Luminária Zahra",
        price: 1665.00,
        isSale: false,
        salePrice: 1765.00,
        quantity: 1,
        link: "/",
        image: "/assets/imgs/luminaria.jpg"
    },
    {
        id: 3,
        name: "Afrodite - Full/Casal",
        price: 1215.00,
        isSale: false,
        salePrice: 1315.00,
        quantity: 1,
        link: "/",
        image: "/assets/imgs/afrodite.jpg"
    },
    {
        id: 4,
        name: "Luminária Zahra",
        price: 1665.00,
        isSale: false,
        salePrice: 1765.00,
        quantity: 1,
        link: "/",
        image: "/assets/imgs/luminaria.jpg"
    }
] as ProductCart[];

export default function Minicart({ closeMinicart, productsInCart = [] }: Props) {
    const [closeFooter, setCloseFooter] = useState(false);
    const [products, setProducts] = useState<ProductCart[]>(productSample || productsInCart);
    const [totalPrice, setTotalPrice] = useState(0);
    const [animationDirection, setAnimationDirection] = useState(`reverse`);
    const [disableAnimation, setDisableAnimation] = useState(false);

    useEffect(() => {
        if (products?.length == 0) {
            setTimeout(() => {
                setCloseFooter(true);
            }, 750);
        }
        else {
            setTotalPrice(products?.reduce((acc, product) => {
                return acc + (product.price * product.quantity);
            }, 0));
            setCloseFooter(false);
        }
    }, [products]);

    useEffect(() => {
        if (!disableAnimation) {
            setTimeout(() => {
                setDisableAnimation(true);
            }, 750);
        }
        else {
            setDisableAnimation(false);
        }
    }, [animationDirection]);

    return (
        <div className={styles["minicart-container"]} onClick={(e: React.MouseEvent<HTMLDivElement>) => {
            setAnimationDirection("normal");
            setTimeout(() => {
                closeMinicart(false);
            }, 500)
        }}>
            <div className={styles["minicart-body"]} style={{
                animationName: !disableAnimation ? `${styles["fade"]}` : '',
                animationDuration: '0.5s',
                animationIterationCount: 1,
                animationDirection: animationDirection,
                animationFillMode: 'none',
                overflowY: closeFooter || products?.length == 0 ? 'hidden' : 'visible',
            }} onClick={(e: React.MouseEvent<HTMLDivElement>) => { e.preventDefault(); e.stopPropagation(); }} >
                <div className={`${styles["minicart-header"]} ${products?.length == 0 ? styles["minicart-empty-header"] : ''}`}>
                    <div className={styles["minicart-header-title-container"]}>
                        <img src='/assets/svgs/minicart.svg' alt="Minicart Icon" />

                        <span className={styles["minicart-header-title"]}>Carrinho</span>
                    </div>
                    <div className={styles["minicart-header-close-button-container"]} >
                        <img src='/assets/svgs/cross.svg' alt="Close Icon" onClickCapture={(e: React.MouseEvent<HTMLDivElement>) => {
                            setAnimationDirection("normal");
                            setTimeout(() => {
                                closeMinicart(false);
                            }, 500)
                        }} />
                    </div>
                </div>

                <div className={styles["minicart-content"]} style={
                    {
                        flex: products?.length == 0 ? 1 : ''
                    }
                }>
                    {
                        products?.length == 0 ?
                            (
                                <div className={styles["minicart-empty-container"]}>
                                    <div className={styles["minicart-empyt-body"]}>
                                        <div className={styles["minicart-empty-message-container"]}>
                                            <img src='/assets/svgs/smiley_sad.svg' alt="Empty Cart Icon" />
                                            <span className={styles["minicart-empty-message"]}> Seu Carrinho está vazio. </span>
                                        </div>

                                        <div className={styles["minicart-empty-button-container"]}>
                                            <button className={styles["minicart-empty-button"]} onClickCapture={(e: React.MouseEvent<HTMLButtonElement>) => {
                                                setAnimationDirection("normal");
                                                setTimeout(() => {
                                                    closeMinicart(false);
                                                }, 500)
                                            }} >Continuar Comprando</button>
                                        </div>
                                    </div>
                                </div>
                            ) :
                            (
                                products?.map((product, index) => (
                                    (product != null && product != undefined &&
                                        <MinicartItem key={index} productCart={product} productList={products} updateList={setProducts} />)
                                ))
                            )
                    }

                </div>

                <div className={styles["minicart-footer"]} style={{
                    animationName: products?.length == 0  ? `${styles["slideOut"]}` : '',
                    animationDuration: '0.75s',
                    animationIterationCount: 1,
                    animationDirection: "normal",
                    animationFillMode: 'none',
                    overflowY: products?.length == 0 ? 'hidden' : 'visible',
                    height: closeFooter ? '0px' : '191px',
                    paddingBottom: closeFooter ? '0px' : '10px',
                }}>
                    <div className={styles["minicart-footer-total-container"]}>
                        <span className={styles["minicart-footer-total-title"]}>Total</span>

                        <span className={styles["minicart-footer-total-value"]}>{
                            totalPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })
                        }</span>
                    </div>

                    <div className={styles["minicart-footer-button-container"]}>
                        <button className={styles["minicart-footer-button"]} onClickCapture={(e: React.MouseEvent<HTMLButtonElement>) => {
                            setAnimationDirection("normal");
                            setTimeout(() => {
                                closeMinicart(false);
                            }, 500)
                        }
                        }>Continuar Comprando</button>


                        <button className={styles["minicart-footer-button"]} onClickCapture={(e: React.MouseEvent<HTMLButtonElement>) => {
                            setAnimationDirection("normal");
                            setTimeout(() => {
                                closeMinicart(false);
                            }, 500)
                        }
                        }>Finalizar Compra</button>

                    </div>
                </div>
            </div>
        </div>
    );
} 