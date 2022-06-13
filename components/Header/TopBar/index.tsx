import ButtonIcon from "../../ButtonIcon";
import SearchBar from "../SearchBar";
import styles from "./styles/TopBar.module.scss";

export default function TopBar() {
    return (
        <div className={styles["top-bar-container"]}>
            <div className={styles["top-bar"]}>
                <div className={styles["top-bar__left"]}>
                    <div className={styles["top-bar__left__logo"]}>
                        <ButtonIcon icon="/assets/imgs/logo_beastOFF.png" alt="WIKKA - Logo" link="/"/>
                    </div>
                </div>

                <div className={styles["top-bar__center"]}>
                    <SearchBar />
                </div>

                <div className={styles["top-bar__right"]}>
                  
                    <div className={styles["top-bar__right__actions"]}>
                        <div className={styles["top-bar__right__actions__item"]}>
                            <ButtonIcon icon="/assets/svgs/login.svg" />
                        </div>

                        <div className={styles["top-bar__right__actions__item"]}>
                            <ButtonIcon icon="/assets/svgs/minicart.svg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}