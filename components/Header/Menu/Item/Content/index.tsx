import styles from "./styles/Content.module.scss";

type Props = {
    title?: string;
    categoryList?: string[];
    categoryLinkList?: string[];
    categoryImage?: string;
}

export default function Content({ title = "", categoryList = [], categoryLinkList = [], categoryImage = "" }: Props) {

    console.log(categoryList.length, categoryLinkList.length)

    if (categoryList.length == 0) return (<></>)

    if (categoryList.length != categoryLinkList.length) return (<></>)
    

    return (
        <div className={styles["content-container"]}>

            <div className={styles["content-column-container"]}>
                <div className={styles["content-column-list-container"]}>
                    <div className={styles["content-title-container"]}>
                        <span className={styles["content-title"]}>{title}</span>
                    </div>

                    <ul className={styles["content-column-list"]}>
                        {
                            categoryList.map((category, i) => (
                                <li className={styles["content-column-item"]} key={i}>
                                    <a className={styles["content-column-item-link"]} href={categoryLinkList[i]}>
                                        {category}
                                    </a>
                                </li>
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
