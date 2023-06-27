import { useEffect, useState } from 'react';
import styles from './styles/Minicart.module.scss';
import MinicartItem from './MinicartItem';
import { animated } from 'react-spring';

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
    const [isCreated, setIsCreated] = useState(true);
    const [isOpenMinicart, setIsOpenMinicart] = useState(false);
    const [starEffect, setStarEffect] = useState(true);
    const [width, setWidth] = useState(0);
    const [closeFooter, setCloseFooter] = useState(false);
    const [products, setProducts] = useState<ProductCart[]>(productSample || productsInCart);
    const [totalPrice, setTotalPrice] = useState(0);
    const maxWidth = 375;

    useEffect(() => {
        if (starEffect) {
            const widthPass = isCreated ? 5 : -5;

            if (isCreated ? width <= maxWidth : width >= 0) {

                setTimeout(() => {
                    setWidth(width + widthPass);

                }, 5);
            }
            else {
                setStarEffect(false);

                setWidth(isCreated ? maxWidth : 0);

                setIsOpenMinicart(isCreated ? true : false);

                setIsCreated(false);

            }

        }
        else {
            if (!isCreated && !isOpenMinicart) {
                closeMinicart(false);
            }
        }

    })

    useEffect(() => {
        if (products?.length == 0) {
            setTimeout(() => {
                setCloseFooter(true);
            }, 500);
        }
        else {
            setTotalPrice(products?.reduce((acc, product) => {
                return acc + (product.price * product.quantity);
            }, 0));
            setCloseFooter(false);
        }
    }, [products]);



    return (
        <div className={styles["minicart-container"]} style={
            {
                animation: starEffect ? isCreated ? `${styles["fade"]} 0.280s ease-in-out forwards` : `${styles["fade"]} 0.180s ease-in-out reverse forwards` : ''
            }
        } onClick={(e: React.MouseEvent<HTMLDivElement>) => {
            setIsOpenMinicart(false)
            setStarEffect(true)

        }}>
            <div className={styles["minicart-body"]} style={{
                width: `${width}px`
            }} onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                e.preventDefault()
                e.stopPropagation()
            }} >
                <div className={styles["minicart-header"]}>
                    <div className={styles["minicart-header-title-container"]}>
                        <img src='/assets/svgs/minicart.svg' alt="Minicart Icon" />

                        <span className={styles["minicart-header-title"]}>Carrinho</span>
                    </div>
                    <div className={styles["minicart-header-close-button-container"]} >
                        <img src='/assets/svgs/cross.svg' alt="Close Icon" onClickCapture={(e: React.MouseEvent<HTMLDivElement>) => {
                            setIsOpenMinicart(false)
                            setStarEffect(true)
                        }} />
                    </div>
                </div>

                <div className={styles["minicart-content"]}>
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
                                                setIsOpenMinicart(false)
                                                setStarEffect(true)
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
                    animation: products?.length == 0 ? `${styles["slideOut"]} 0.5s linear` : '',
                    display: closeFooter ? 'none' : 'flex'
                }}>
                    <div className={styles["minicart-footer-total-container"]}>
                        <span className={styles["minicart-footer-total-title"]}>Total</span>

                        <span className={styles["minicart-footer-total-value"]}>{
                            totalPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })
                        }</span>
                    </div>

                    <div className={styles["minicart-footer-button-container"]}>
                        <button className={styles["minicart-footer-button"]} onClickCapture={(e: React.MouseEvent<HTMLButtonElement>) => {
                            setIsOpenMinicart(false)
                            setStarEffect(true)
                        }
                        }>Continuar Comprando</button>
                        

                        <button className={styles["minicart-footer-button"]} onClickCapture={(e: React.MouseEvent<HTMLButtonElement>) => {
                            setIsOpenMinicart(false)
                            setStarEffect(true)
                        }
                        }>Finalizar Compra</button>

                    </div>
                </div>
            </div>
        </div>
    );
} 