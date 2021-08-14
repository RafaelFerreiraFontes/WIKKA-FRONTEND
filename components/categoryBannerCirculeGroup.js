import { useState } from 'react';

import styles from "./styles/categoryBannerCirculeGroup.module.css";

import cardStyles from "./styles/categoryBannerCircule.module.css";

import Arrow_Left from "../images/icons/arrow_left.svg";

import Arrow_Right from "../images/icons/arrow_right.svg";

import CategoryBanner  from "./categoryBannerCircule";

function moveArray(currents, pass)
{
    return [currents[0] + pass, currents[1] + pass, currents[2] + pass, currents[3] + pass, currents[4] + pass];
}

function listIndex(quant)
{   
    let l = [];

    for(let index = 0; index < (quant/5); index++)
    {
        l.push(index);
    }

    return l;
}

function CategoryBannerCirculeGroup({ banners = [] })
{
    const [currents, setCurrents] = useState([0,1,2,3,4]);
    const [currentIndex, setIndex] = useState(0);

    const next = () => {
        setCurrents((currents[4] + 5 > banners.length - 1) ? [0, 1, 2, 3, 4] : moveArray(currents,5));
    }
    
    const previous = () => {    
        setCurrents((currents[0] - 5 >= 0) ? moveArray(currents,-5) : moveArray([0, 1, 2, 3, 4], banners.length - 5))
    }

    const goToIndex = (newIndex) => {
        setCurrents(moveArray([0, 1, 2, 3, 4], 5 * newIndex))
    }

    if(banners.length < 5)
    return (<div></div>);

    let arrayIndex = listIndex(banners.length);

    return (

        <div className={styles.container}>
            <p className={styles.title}>CONFIRA TAMBÉM:</p>

                <div className={styles.carousel_container}>
                    <Arrow_Left onClick={previous}/>
                        {
                            banners.map((element, index) => {
                                
                                let active = cardStyles.inactive;
                                let current = false;

                                if(currents.includes(index))
                                {
                                    active = cardStyles.active;
                                    current = true;
                                }

                                return(
                                    <div className={active} key={`Carousel_Category_Banner_${index}`}>
                                        {current && (<CategoryBanner link={element.link} img={element.img} name={element.name}></CategoryBanner>) } 
                                    </div>
                                );
                            })
                        }
                    <Arrow_Right onClick={next}/>

                </div>

                <ul className={styles.list_group}>
                    {
                        arrayIndex.map((index) => {

                            let select = "";

                            if(index == currentIndex)
                            {
                                select = styles.select;
                            }

                            return ( <li className={`${styles.list_index_element} ${select}`} key={`Group_Banner_index_${index}`} onClick={()=>{ goToIndex(index);  setIndex(index);} } ></li>);
                            
                            }
                        )
                    }
                </ul>
        </div>
    );
}

export default CategoryBannerCirculeGroup;