import Image from "next/image";

import Arrow from "../images/icons/arrow_right.svg";

import styles from "./styles/rootbar.module.css";

function RootBar({ routes=[] })
{
    return (
        <div className={styles.container}>
            
            <nav className={styles.routelist}>
                {
                     routes.map( (routes,index) => (
                        
                        <div className={styles.routediv} key={`route_${index}`}>
                            
                            <a className={styles.route} href={root.pathRoute}>{root.pathText}</a>

                            {index < (roots.length - 1) && <Arrow className={styles.arrow} />}
                        </div>                    
                    ) )
                }
            </nav>
        </div>
    );
}

export default RootBar;