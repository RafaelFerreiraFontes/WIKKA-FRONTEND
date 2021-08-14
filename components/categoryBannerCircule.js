import Image from "next/image";

import cardstyles from "./styles/categoryBannerCircule.module.css";

function CategoryBanner({link = "/", img = null, name = ""})
{
    
    return(
        <div className={`${cardstyles.circule}`} >

            { 
                (img != null ) &&  
            
                    <a className={cardstyles.route} href={link}>
                       
                        <Image src={ img } /> 
                       
                        <p className={cardstyles.text} href={link}> { name } </p>
                    
                    </a>
                 
            }

        </div>
    );
}

export default CategoryBanner;