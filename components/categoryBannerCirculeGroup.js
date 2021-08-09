import Image from "next/image";

import styles from "./styles/categoryBannerCirculeGroup.module.css";

import cardStyles from "./styles/categoryBannerCircule.module.css";

import Arrow_Left from "../images/icons/arrow_left.svg";

import Arrow_Right from "../images/icons/arrow_right.svg";

import CategoryBanner from "./categoryBannerCircule";


function CategoryBannerCirculeGroup({ banners = [] })
{
    if(banners.length < 5)
        return (<div></div>);
    
    return (

        <div className={styles.container}>
            <p className={styles.title}>CONFIRA TAMBÉM:</p>

                <div className={styles.carousel_container}>
                    <Arrow_Left/>
                        
                        {
                            banners.map( (element, index) => (
                               
                                    <div className={cardStyles.circule}>
                                    
                                                { 
                                                    (element.img != null ) &&  
                                                    
                                                    ( 
                                                        <a className={cardStyles.route} href={element.link}>
                                                        
                                                            <Image src={ element.img } /> 
                                                        
                                                            <p className={cardStyles.text}> { element.name } </p>
                                                        
                                                        </a>
                                                    ) 
                                                }

                                    </div>
                                )
                    
                            )
                        }

                    <Arrow_Right/>

                </div>
        </div>
    );
}

export default CategoryBannerCirculeGroup;