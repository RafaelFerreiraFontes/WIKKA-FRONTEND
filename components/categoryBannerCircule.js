import Image from "next/image";

import cardstyles from "./styles/categoryBannerCirculeGroup.module.css";

function CategoryBanner({link = "/", img = null, name = ""})
{
    console.log("Hello")
    
    return (
        <div className={cardstyles.circule}>
            { 
                (img != null ) &&  
                
                ( 
                    <a className={cardstyles.route} href={link}>
                       
                        <Image src={ img } /> 
                       
                        <p className={cardstyles.text}> { name } </p>
                    
                    </a>
                ) 
            }

        </div>
    );
}

export default CategoryBanner;