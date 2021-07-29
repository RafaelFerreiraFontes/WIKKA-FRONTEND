import Image from "next/image";

import styles from "./styles/bannerGroup.module.css";

function BannerGroup({ imgs = [] })
{
    return(

        <div className={styles.container}>
                {
                    imgs.map( (img, index) => (

                            <div className={styles.imagegroup} key={`banner_${index}`}>

                                <Image className={styles.image} src={ img } height={ 300 } width={ 300 } />                                
                            
                            </div>
                        
                        )
                    )
                }
        </div>
    );
}

export default BannerGroup;