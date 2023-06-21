import Menu from "./Menu";
import TopBar from "./TopBar";
import styles from "./styles/Header.module.scss";

export default function Header() {
  return (
    <header className={styles["header"]}>
      <div className={styles["header-container"]}>
        <TopBar />
        <div className={styles["header-line"]}></div>
        <Menu />
      </div>
    </header>
  );
}