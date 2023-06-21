import Item from "./Item";
import styles from "./styles/Menu.module.scss";

export default function Menu() {
    return (
        <div className={styles["menu-container"]}>
            <ul className={styles["menu-category-list"]}>
                {
                    (new Array(10).fill(0)).map((_, i) => (
                        <li key={i} className={styles["menu-category-item"]}>

                            {
                                ( i == 0 ? <Item title={`Categoria ${i}`} mainCategoryLink="#" categoryList={["Subcategoria 1", "Subcategoria 2", "Subcategoria 3", "Subcategoria 4", "Subcategoria 5", "Subcategoria 6", "Subcategoria 7", "Subcategoria 8", "Subcategoria 9", "Subcategoria 10", "Subcategoria 11", "Subcategoria 12", "Subcategoria 13", "Subcategoria 14", "Subcategoria 15", "Subcategoria 16", "Subcategoria 17", "Subcategoria 18", "Subcategoria 19", "Subcategoria 20", "Subcategoria 21", "Subcategoria 22", "Subcategoria 23", "Subcategoria 24"]} categoryLinkList={["#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#"]} categoryImage="https://picsum.photos/200" /> :
                                    <Item title={`Categoria ${i}`} mainCategoryLink="#" />)
                            }
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}