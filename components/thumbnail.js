import { useState, useEffect } from 'react';

import Image from "next/image";

import styles from "./styles/thumbnail.module.css"

let image_timeout = 0;

function Thumbnail({ thumbnail_images = [] })
{
    const [fadeProp, setFadeProp] = useState( { fade: styles.fade_image_in, });

    const [image_index, setIndex] = useState(0);

    function changeImage(){
        setIndex( (image_index + 1) % thumbnail_images.length )
    }

    

    useEffect( () => 
               
               {
                    image_timeout = setTimeout(changeImage, 3000);
                    setFadeProp( { fade: styles.fade_image_in } )
               }, 
               [image_index]
             );

    useEffect( ()=>
                
                {
                    const timeout = setInterval
                    ( 
                        () =>
                        {
                            if(fadeProp.fade == styles.fade_image_in)
                                setFadeProp( { fade: styles.fade_image_out } )
                            
                            else
                                setFadeProp( { fade: styles.fade_image_in } )
                        },
                    1500
                   );

                    return () => clearInterval(timeout)
                },
                [fadeProp]
             )

    return (
        <div className={styles.container}>
            
            <ul className={styles.carousel_slide} >

                {

                    thumbnail_images.map((element, index) => {

                        let display = "none";
                        let fade = styles.fade_image_out;
                        let fadeBackground = styles.fade_background_out;

                        if(index == image_index)
                        {
                            display = "flex";

                            fade = fadeProp.fade;

                            fadeBackground = fadeProp.fade == styles.fade_image_in ? styles.fade_background_in : styles.fade_background_out;
                        }

                         return  ( 
                            <li key={`image_${index}`} className={styles.carousel_slide_item} style={{display: display}}> 

                                <a href={element.route} className={fadeBackground}>
                            
                                    <Image src={ element.image } className={fade} width={1920} height={500}/>
                            
                                </a>    
                            
                            </li> 
                         );   
                        
                    }
                    )

                }

                { 
                    thumbnail_images.length > 1 &&  
                        <ul className={styles.carousel_slide_menu}>
                            {
                                thumbnail_images.map(
                                    (img,index) => 
                                    {
                                        let active = "";

                                        if(index == image_index)
                                            active = styles.active;

                                        return ( 
                                            <li onClick={()=>{ setIndex( index ); clearTimeout(image_timeout); } } className={`${styles.carousel_slide_menu_item} ${active}`}  key={`dot-${index}`}></li> 
                                         );
                                    }
                                )
                            }

                        </ul> 
                } 
            </ul>
        
        </div>
    );
}

export default Thumbnail;