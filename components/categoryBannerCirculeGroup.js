import { useState, useEffect} from 'react';

import styles from "./styles/categoryBannerCirculeGroup.module.css";

import cardStyles from "./styles/categoryBannerCircule.module.css";

import Arrow_Left from "../images/icons/arrow_left.svg";

import Arrow_Right from "../images/icons/arrow_right.svg";

import CategoryBanner  from "./categoryBannerCircule";

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
    const [pos , setPos] = useState(0);
    const [currentIndex, setIndex] = useState(0);
    const [items, updateItems] = useState([]);

    if(banners.length < 5)
       return (<div></div>);

    let arrayIndex = listIndex(banners.length);

    const next = () => {
        if( (currentIndex + 1) <= (arrayIndex.length - 1) )
        {
            setPos(pos + ( 192 * 5 ));

            setIndex( (currentIndex + 1) );
        }
        else
        {
            let fistpos = (arrayIndex.length - 1);

            setPos(pos - ( ( 192 * 5 ) * fistpos) );

            setIndex( 0 );
        }
    }
    
    const previous = () => {    
        if( (currentIndex - 1) >= 0 )
        {
            setPos(pos - ( 192 * 5 ));

            setIndex( (currentIndex - 1) );
        }
        else
        {
            let lastpos = (arrayIndex.length - 1);

            setPos(pos + ( ( 192 * 5 ) * lastpos) );

            setIndex( arrayIndex[lastpos] );
        }
    }

    const createBanners = (banners) => {
        let arrayBanners = [];

        banners.map((element, index) => {
            arrayBanners.push(
                    <CategoryBanner  key={`Carousel_Category_Banner_${index}`} link={element.link} img={element.img} name={element.name} pos={ pos  }></CategoryBanner>
            );
        })

        return arrayBanners;
    }
    
    const goToIndex = (newIndex) => {
        let newPos = newIndex - currentIndex;

        setPos(pos + ( ( 192 * 5 ) * newPos) );

        setIndex(newIndex);
    };

    useEffect(() => {

        updateItems( createBanners(banners) ); 
        
    }, [currentIndex]
    );

    return (

        <div className={styles.container}>
            <p className={styles.title}>CONFIRA TAMBÉM:</p>

                <div className={styles.carousel_container}>
                    <Arrow_Left onClick={previous}/>

                        <div className={styles.carousel_container_items}>
                            {
                                items
                            }
                        </div>

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

                            return ( <li className={`${styles.list_index_element} ${select}`} key={`Group_Banner_index_${index}`} onClick={()=>{ goToIndex(index)} } ></li>);
                            
                            }
                        )
                    }
                </ul>
        </div>
    );
}

export default CategoryBannerCirculeGroup;