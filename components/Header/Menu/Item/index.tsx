import { useState } from "react";
import Content from "./Content";
import styles from "./styles/Item.module.scss";

type Props = {
    title?: string;
    mainCategoryLink?: string;
    categoryList?: string[];
    categoryLinkList?: string[];
    categoryImage?: string;
}

export default function Item({ title = "", mainCategoryLink = "", categoryList = [], categoryLinkList = [], categoryImage = "" }: Props) {
    const [isOpened, setIsOpened] = useState(false);

    if (categoryList.length > 18) {
        categoryList = categoryList.slice(0, 18);

        categoryList[17] = "Ver todos";

        categoryLinkList = categoryLinkList.slice(0, 18);

        categoryLinkList[17] = mainCategoryLink;
    }

    return (
        <div className={`${styles["item-container"]} ${categoryList.length > 0 ? styles["item-container-opened"] : ""}`}
            onMouseEnter={() => { setIsOpened(true) }}
            onMouseLeave={() => { setIsOpened(false) }}
        >
            <div className={styles["item-title-container"]}>
                <a className={styles["item-title-link"]} href={mainCategoryLink}>
                    <span className={styles["item-title"]}>{title}</span>
                </a>
            </div>

            {
                (categoryList.length > 0) &&
                (<div className={styles["item-content-container"]}>
                    <Content isOpened={!isOpened} mainCategoryLink={mainCategoryLink} title={title} categoryList={categoryList} categoryLinkList={categoryLinkList} categoryImage={categoryImage} />
                </div>)
            }

        </div>
    );
}