import ButtonIcon from "../../ButtonIcon";
import styles from "././styles/SearchBar.module.scss";

export default function SearchBar() {
    return (
        <div className={styles["search-bar"]}>
            <input type="text" placeholder="Buscar..." />

            <ButtonIcon icon="\assets\svgs\search.svg" link="#" onClick={() => {console.log("click")}}/>
        </div>
    );
}   