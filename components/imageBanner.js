import Image from "next/image";

import DivLine from "../images/icons/vertical_line.svg";

import styles from "./styles/imageBanner.module.css";

function ImageBanner({ imgs = [] })
{
    return(

        <div className={styles.container}>
                {
                    imgs.map( (img, index) => (

                            <div className={styles.imagegroup} key={`Image_${index}`}>

                                <Image className={styles.image} src={ img } height={ 55 } width={ 318 } />
                                
                                { index < (imgs.length - 1) && <DivLine className={styles.divline} /> }
                            </div>

                        )
                    )
                }
        </div>
    );
}

export default ImageBanner;