import styles from './styles/ButtonIcon.module.scss';
import Link from 'next/link';

interface Props {
    icon: string;
    onClick?: () => void;
    alt?: string;
    link?: string;
    target?: "_blank" | "_self" | "_parent" | "_top";
    width?: string;
    height?: string;
}

export default function ButtonIcon({ icon, alt, onClick, link, target, width = "auto", height = "auto" }: Props) {
    return (
        <div className={styles["button-container"]}>
            <Link href={link || "#"} passHref>
                <a className={styles["button-link"]} target={target || "_self"} onClick={onClick}>
                    <img className={styles["button-icon"]} width={width || "auto"} height={height || "auto"} src={icon || ""} alt={alt || ""} />
                </a>
            </Link>
        </div>
    );
} 