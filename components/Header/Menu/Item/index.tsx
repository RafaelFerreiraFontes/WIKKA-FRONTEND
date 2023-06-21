import Content from "./Content";
import styles from "./styles/Item.module.scss";

type Props = {
    title?: string;
    mainCategoryLink?: string;
    categoryList?: string[];
    categoryLinkList?: string[];
    categoryImage?: string;
}

export default function Item({ title = "", mainCategoryLink="", categoryList = [], categoryLinkList = [], categoryImage = ""}: Props) {
    if (categoryList.length > 18) {
        categoryList = categoryList.slice(0, 18);

        categoryList[17] = "Ver todos";

        categoryLinkList = categoryLinkList.slice(0, 18);

        categoryLinkList[17] = mainCategoryLink;
    }

    return (
        <div className={styles["item-container"]}>
            <div className={styles["item-title-container"]}>
                <a className={styles["item-title-link"]} href={mainCategoryLink}>
                    <span className={styles["item-title"]}>{title}</span>
                </a>
            </div>

            <div className={styles["item-content-container"]}>
                 <Content title={title} categoryList={categoryList} categoryLinkList={categoryLinkList} categoryImage={categoryImage} />
            </div>
        </div>
    );
}