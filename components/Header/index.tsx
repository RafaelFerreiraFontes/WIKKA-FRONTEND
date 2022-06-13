import TopBar from "./TopBar";
import styles from "./styles/Header.module.scss";

export default function Header() {
  return (
    <header className={styles["header"]}>
      <TopBar />
    </header>
  );
}