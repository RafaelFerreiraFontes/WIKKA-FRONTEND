import { useEffect, useState } from "react";
import styles from "./styles/Content.module.scss";
import useIsMobile from "../../../../utils/MobileDetect";

type Props = {
    isOpened?: boolean;
    title?: string;
    mainCategoryLink?: string;
    categoryList?: string[];
    categoryLinkList?: string[];
    categoryImage?: string;
}

export default function Content({ isOpened = false, title = "", categoryList = [], categoryLinkList = [], categoryImage = "", mainCategoryLink = undefined }: Props) {
    const [height, setHeight] = useState("0rem");
    const { isMobile } = useIsMobile();
    const animationTime = 500;

    if (categoryList.length > 18) {
        categoryList = categoryList.slice(0, 18);

        categoryList[17] = "Ver todos";

        categoryLinkList = categoryLinkList.slice(0, 18);

        categoryLinkList[17] = mainCategoryLink;
    }

    const minHeight = "0rem";
    const maxHeight = isMobile ? `${(categoryList.length * 39) / 16}rem` : "25rem";


    useEffect(() => {
        if (isOpened) {
            setTimeout(() => {
                setHeight(minHeight)
            }, animationTime);
        } else {
            setHeight(maxHeight);
        }
    }, [isOpened])

    if (categoryList.length == 0) return (<></>)

    if (categoryList.length != categoryLinkList.length) return (<></>)


    return (
        <>
            {
                isMobile ? (
                    <ul className={styles["content-list"]}
                        style={{
                            maxHeight: height,
                            animationName: !isOpened ? `${styles['OpenContent']}` : `${styles['CloseContent']}`,
                            animationDuration: animationTime + 'ms',
                            animationTimingFunction: 'ease-in-out',
                            animationDirection: 'normal',
                            animationFillMode: 'forwards',
                        }}
                    >
                        {
                            categoryList.map((category, i) => (
                                <div
                                    key={i}>

                                    {
                                        i == 17 && mainCategoryLink != undefined ? (<li className={styles["content-list-item"]} key={i}>
                                            <a className={`${styles["content-list-item-link"]} ${styles["content-list-item-see-more-link"]}`} href={categoryLinkList[i]}>
                                                {category}

                                                <img src="\assets\svgs\long_arrow_right.svg" alt="long arrow" />
                                            </a>
                                        </li>) : (
                                            <li className={styles["content-list-item"]} key={i}>
                                                <a className={styles["content-list-item-link"]} href={categoryLinkList[i]}>
                                                    {category}
                                                </a>
                                            </li>
                                        )
                                    }
                                </div>
                            ))
                        }
                    </ul>
                )
                    : (

                        <div className={styles["content-container"]} style={{
                            maxHeight: height,
                            animationName: !isOpened ? `${styles['OpenContent']}` : `${styles['CloseContent']}`,
                            animationDuration: animationTime + 'ms',
                            animationTimingFunction: 'ease-in-out',
                            animationDirection: 'normal',
                            animationFillMode: 'forwards',
                        }} >
                            <div className={styles["content-column-container"]}>
                                <div className={styles["content-column-list-container"]}>
                                    <div className={styles["content-title-container"]}>
                                        <span className={styles["content-title"]}>{title}</span>
                                    </div>

                                    <ul className={styles["content-column-list"]}>
                                        {
                                            categoryList.map((category, i) => (
                                                <div
                                                    key={i}>

                                                    {
                                                        i == 17 && mainCategoryLink != undefined ? (<li className={styles["content-column-item"]} key={i}>
                                                            <a className={`${styles["content-column-item-link"]} ${styles["content-column-item-see-more-link"]}`} href={categoryLinkList[i]}>
                                                                {category}

                                                                <img src="\assets\svgs\long_arrow_right.svg" alt="long arrow" />
                                                            </a>
                                                        </li>) : (<li className={styles["content-column-item"]} key={i}>
                                                            <a className={styles["content-column-item-link"]} href={categoryLinkList[i]}>
                                                                {category}
                                                            </a>
                                                        </li>)
                                                    }
                                                </div>
                                            ))
                                        }
                                    </ul>
                                </div>

                                <div className={styles["content-column-container"]}>
                                    <div className={styles["content-column-image-container"]}>
                                        {
                                            categoryImage != "" ? (
                                                <img src={categoryImage} width="488px" height="320px" alt={title} className={styles["content-column-image"]} />
                                            ) : (
                                                <div style={{ width: "488px", height: "320px" }}>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div >
                    )
            }
        </>
    );
}
