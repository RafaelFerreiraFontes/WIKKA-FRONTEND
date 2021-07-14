import styles from "../styles/topBar.module.css";

function TopBar()
{
    return (<nav className={styles.topBar}>
        <a className={styles.shopName}href="#">WIKKA</a>
    </nav>);
}

export default TopBar;