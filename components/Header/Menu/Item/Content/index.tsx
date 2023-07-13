import { useEffect, useState } from "react";
import styles from "./styles/Content.module.scss";
import useIsMobile from "../../../../utils/MobileDetect";

type Props = {
    isOpened?: boolean;
    title?: string;
    mainCategoryLink?: string;
    categoryList?: string[];
    categoryLinkList?: string[];
    categoryImage?: string;
}

export default function Content({ isOpened = false, title = "", categoryList = [], categoryLinkList = [], categoryImage = "", mainCategoryLink = undefined }: Props) {
    const { isMobile } = useIsMobile();

    const [ isCreated, setIsCreated ]  = useState(true);

    const animationTime = 500;

    if (categoryList.length > 18) {
        categoryList = categoryList.slice(0, 18);

        categoryList[17] = "Ver todos";

        categoryLinkList = categoryLinkList.slice(0, 18);

        categoryLinkList[17] = mainCategoryLink;
    }

    useEffect(() => {
        if(isCreated){
            const stylecomponent = document.getElementById(`content-menu-styles-${title}`) || document.createElement("style");

            if (stylecomponent.id != `content-menu-styles-${title}`) {
    
                stylecomponent.id = `content-menu-styles-${title}`;
    
                document.head.appendChild(stylecomponent);
            }
    
            const css = `
                    @keyframes OpenContent-${title} 
                    { 
                        from { 
                            height: 0rem; 
                        }  
                        
                        to { 
                            height: 28rem;
                        } 
                    }
                    
                    @keyframes CloseContent-${title}
                    { 
                        from {
                            height: 28rem;
                        }  
                        
                        to { 
                            height: 0rem; 
                        } 
                    }
                    
                    @keyframes OpenContent-Mobile-${title} 
                    { 
                        from { 
                            height: 0rem; 
                        }  
                        
                        to { 
                            height: ${( ( ( ( (categoryList.length - 1) * 37) + 61) / 16).toString() + 'rem')};
                        } 
                    }
                    
                    @keyframes CloseContent-Mobile-${title}
                    { 
                        from {
                            height: ${( ( ( ( (categoryList.length - 1) * 37) + 61) / 16).toString() + 'rem')};
                        }  
                        
                        to { 
                            height: 0rem; 
                        } 
                    }`;
                    
    
            stylecomponent.innerHTML = css;
    
            
        }

        setIsCreated(false);
    }, []);

    if (categoryList.length == 0) return (<></>)

    if (categoryList.length != categoryLinkList.length) return (<></>)


    return (
        <>
            <ul className={styles["content-list"]}
                style={{
                    display: isMobile ? 'flex' : 'none',
                    animationName: !isOpened ? `OpenContent-Mobile-${title}` : `CloseContent-Mobile-${title}`,
                    animationDuration: !isCreated ? animationTime + 'ms' : '0ms',
                    animationTimingFunction: 'ease-in-out',
                    animationDirection: 'normal',
                    height: isOpened ? ( ( ( ( (categoryList.length - 1) * 37) + 61) / 16).toString() + 'rem') : '0rem',
                    animationFillMode: 'forwards',
                }}
            >
                {
                    categoryList.map((category, i) => (
                        <div
                            key={i}>

                            {
                                i == 17 && mainCategoryLink != undefined ? (<li className={styles["content-list-item"]} key={i}>
                                    <a className={`${styles["content-list-item-link"]} ${styles["content-list-item-see-more-link"]}`} href={categoryLinkList[i]}>
                                        {category}

                                        <img src="\assets\svgs\long_arrow_right.svg" alt="long arrow" />
                                    </a>
                                </li>) : (
                                    <li className={styles["content-list-item"]} key={i}>
                                        <a className={styles["content-list-item-link"]} href={categoryLinkList[i]}>
                                            {category}
                                        </a>
                                    </li>
                                )
                            }
                        </div>
                    ))
                }
            </ul>

            <div className={styles["content-container"]} style={{
                display: isMobile ? 'none' : 'flex',
                animationName: !isOpened ? `OpenContent-${title}` : `CloseContent-${title}`,
                animationDuration: !isCreated ? animationTime + 'ms' : '5ms',
                animationTimingFunction: 'ease-in-out',
                animationDirection: 'normal',
                height: isOpened ? '28rem' : '0rem',
                animationFillMode: 'forwards',
            }} >
                <div className={styles["content-column-container"]}>
                    <div className={styles["content-column-list-container"]}>
                        <div className={styles["content-title-container"]}>
                            <span className={styles["content-title"]}>{title}</span>
                        </div>

                        <ul className={styles["content-column-list"]}>
                            {
                                categoryList.map((category, i) => (
                                    <div
                                        key={i}>

                                        {
                                            i == 17 && mainCategoryLink != undefined ? (<li className={styles["content-column-item"]} key={i}>
                                                <a className={`${styles["content-column-item-link"]} ${styles["content-column-item-see-more-link"]}`} href={categoryLinkList[i]}>
                                                    {category}

                                                    <img src="\assets\svgs\long_arrow_right.svg" alt="long arrow" />
                                                </a>
                                            </li>) : (<li className={styles["content-column-item"]} key={i}>
                                                <a className={styles["content-column-item-link"]} href={categoryLinkList[i]}>
                                                    {category}
                                                </a>
                                            </li>)
                                        }
                                    </div>
                                ))
                            }
                        </ul>
                    </div>

                    <div className={styles["content-column-container"]}>
                        <div className={styles["content-column-image-container"]}>
                            {
                                categoryImage != "" ? (
                                    <img src={categoryImage} width="488px" height="320px" alt={title} className={styles["content-column-image"]} />
                                ) : (
                                    <div style={{ width: "488px", height: "320px" }}>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div >

        </>
    );
}
