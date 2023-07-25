import useIsMobile from "../utils/MobileDetect";
import styles from "./styles/CategoryBanner.module.scss";

interface Props {
  title: string;

  description: string;

  image: string;

  link: string;
}

export default function CategoryBanner({
  title,
  description,
  image,
  link
}: Props) {
  const {
    isMobile
  } = useIsMobile();

  return (
    <div className={styles["container"]}>
      <a href={link}>
        <div className={styles["image-container"]}>
          <img src={image} alt={title} />
        </div>

        <div className={styles["title-container"]}>
          <span>{title}</span>
        </div>

        <div className={styles["description-container"]}>
          <p> {description} </p>
        </div>

        <div className={styles["button-container"]}>
          <button> <span>
          Confira
          </span> </button>
        </div>
      </a>
    </div>
  );
}
