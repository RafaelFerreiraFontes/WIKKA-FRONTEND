import { text } from 'stream/consumers';
import styles from './styles/ButtonIcon.module.scss';
import Link from 'next/link';

interface Props {
    icon: string;
    parentStyles?: { [key: string]: string };
    onClick?: () => void;
    alt?: string;
    text?: string;
    link?: string;
    target?: "_blank" | "_self" | "_parent" | "_top";
    width?: string;
    height?: string;
}

export default function ButtonIcon({ icon, alt, onClick, link, target, width = "auto", height = "auto", parentStyles, text }: Props) {
    return (
        <div className={`${styles["button-container"]} ${(parentStyles != undefined) ? `${parentStyles["button-container"]}` : ""}`}>
            <Link href={link || ""} passHref>
                <a className={`${styles["button-link"]} ${(parentStyles != undefined) ? `${parentStyles["button-link"]}` : ""}`} target={target || "_self"} onClick={onClick}>
                    <img className={`${styles["button-icon"]} ${(parentStyles != undefined) ? `${parentStyles["button-icon"]}` : ""}`} width={width || "auto"} height={height || "auto"} src={icon || ""} alt={alt || ""} />

                    {text != undefined ? (<span className={`${styles["button-text"]} ${(parentStyles != undefined) ? `${parentStyles["button-text"]}` : ""}`}>{text}</span>) : ""}
                </a>
            </Link>
        </div>
    );
} 