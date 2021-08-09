import Image from "next/image";

import DivLine from "../images/icons/vertical_line.svg";

import styles from "./styles/imageBanner.module.css";

function ImageBanner({ imgs = [] })
{
    return(

        <div className={styles.container}>
                {
                    imgs.map( (element, index) => (

                            <div className={styles.imagegroup} key={`Image_${index}`}>

                                <a href={element.route}>
                                    <Image className={styles.image} src={ element.image } height={ 38 } width={ 226 } />
                                </a>

                                { index < (imgs.length - 1) && <DivLine className={styles.divline} width={1.5} height={28}  /> }
                            </div>

                        )
                    )
                }
        </div>
    );
}

export default ImageBanner;