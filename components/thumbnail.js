import { useState, useEffect } from 'react';

import Image from "next/image";

import styles from "./styles/thumbnail.module.css"

  
function Thumbnail({ thumbnail_images })
{
    const [fadeProp, setFadeProp] = useState( { fade: 'fade-in' });

    const [image_index, setIndex] = useState(0);

    function changeImage(){
        setIndex((image_index + 1) % thumbnail_images.length)
    }

    useEffect(() => {
        setTimeout(changeImage, 300);
    }, [image_index]);

    useEffect(()=>{
        const timeout = setInterval(() =>{
            if(fadeProp.fade === 'fade-in')
                setFadeProp( { fade: 'fade-out' } )
            
            else
                setFadeProp( { fade: 'fade-in' } )
        }, 1000);

        return () => clearInterval(timeout)
    },[fadeProp])

    return (
        <div className={styles.container}>
            
            <ul className={styles.carousel_slide} >

                {

                    thumbnail_images.map((element, index) => {

                        let display = "none";
                        let fade = 'fade-out';

                        if(index == image_index)
                        {
                            display = "block";
                            fade = fadeProp.fade;
                        }

                         return  ( 
                            <li key={`image_${index}`} className={styles.carousel_slide_item} style={{display: display}}> 

                                <a href={element.route} className={fade}>
                            
                                    <Image src={ element.image } width={1920} height={475}/>
                            
                                </a>    
                            
                            </li> 
                         );   
                        
                    }
                    )

                }
                 
            </ul>
        
        </div>
    );
}

export default Thumbnail;