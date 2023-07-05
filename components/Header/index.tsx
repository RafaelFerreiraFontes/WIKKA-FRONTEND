import useIsMobile from "../utils/MobileDetect";
import Menu from "./Menu";
import TopBar from "./TopBar";
import styles from "./styles/Header.module.scss";

export default function Header() {
  const {
    isMobile
  } = useIsMobile();

  return (
    <header className={styles["header"]} >
      {
        !isMobile ? (

          <div className={styles["header-container"]}>
            <TopBar />

            <div className={styles["header-line"]}></div>

            <Menu />
          </div>
        )
          : (
            <div className={styles["header-container"]}>
              <TopBar />
            </div>
          )
      }
    </header>
  );
}
