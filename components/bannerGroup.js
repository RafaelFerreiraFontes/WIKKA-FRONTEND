import Image from "next/image";

import styles from "./styles/bannerGroup.module.css";

function BannerGroup({ imgs = [] })
{
    return(

        <div className={styles.container}>
                {
                    imgs.map( (element, index) => (

                            <div className={styles.imagegroup} key={`banner_${index}`}>

                                <a href={ element.route }>

                                    <Image className={styles.image} src={ element.image } height={ 300 } width={ 300 } />                                
                            
                                </a>
                            </div>
                        
                        )
                    )
                }
        </div>
    );
}

export default BannerGroup;