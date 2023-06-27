import { useEffect, useState } from "react";
import styles from "./styles/Content.module.scss";

type Props = {
    isOpened?: boolean;
    title?: string;
    mainCategoryLink?: string;
    categoryList?: string[];
    categoryLinkList?: string[];
    categoryImage?: string;
}

export default function Content({isOpened=false ,title = "", categoryList = [], categoryLinkList = [], categoryImage = "", mainCategoryLink = undefined }: Props) {
    const [startEffect, setStartEffect] = useState(false);
    const [height, setHeight] = useState("0rem");
    const [currentState, setCurrentState] = useState(false);
    
    const minHeight = "0rem";
    const maxHeight = "25rem";

    if (categoryList.length > 18) {
        categoryList = categoryList.slice(0, 18);

        categoryList[17] = "Ver todos";

        categoryLinkList = categoryLinkList.slice(0, 18);

        categoryLinkList[17] = mainCategoryLink;
    }

    useEffect(() => {
        if (startEffect == false && isOpened != currentState)
            setStartEffect(true);
        
    }, [isOpened])

    useEffect(() => {
        if(startEffect)
        {
            const heightPass = isOpened ? -0.5 : 0.5;

            if (isOpened ? parseFloat(height) >= parseFloat(minHeight) : parseFloat(height) <= parseFloat(maxHeight)) {
                setTimeout(() => {
                    setHeight((parseFloat(height) + heightPass).toString() + "rem");
                }, 5);
            }
            else {
                setHeight(isOpened ? minHeight : maxHeight)

                setStartEffect(false);

                setCurrentState(isOpened);
            }


        }
    })


    if (categoryList.length == 0) return (<></>)

    if (categoryList.length != categoryLinkList.length) return (<></>)
    

    return (
        <div className={styles["content-container"]} style={{
            height: height
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
                        <img src={categoryImage} width="488px" height="320px" alt={title} className={styles["content-column-image"]} />
                    </div>
                </div>
            </div>
        </div>
    );
}
