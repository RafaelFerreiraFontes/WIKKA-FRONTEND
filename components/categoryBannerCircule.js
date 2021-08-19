import Image from "next/image";

import cardstyles from "./styles/categoryBannerCircule.module.css";

function CategoryBanner({link = "/", img = null, name = "", pos = 0})
{
    
    return(
        <div className={cardstyles.container} style={ { right: pos, transition: "0.85s ease-in-out"} } >

            <div className={`${cardstyles.circule}`} >

                { 
                    (img != null ) &&  
                
                        <a className={cardstyles.route} href={link}>
                        
                            <Image src={ img } /> 
                        
                            <p className={cardstyles.text} href={link}> { name } </p>
                        
                        </a>
                    
                }

            </div>

        </div>
    );
}

export default CategoryBanner;