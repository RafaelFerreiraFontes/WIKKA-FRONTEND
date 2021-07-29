import Image from "next/image";

import Arrow from "../images/icons/arrow_right.svg";

import styles from "./styles/rootbar.module.css";

function RootBar({ roots=[] })
{
    return (
        <div className={styles.container}>
            <nav className={styles.rootlist}>
                {
                     roots.map( (root,index) => (
                        
                        <div className={styles.rootdiv} key={`root_${index}`}>
                            
                            <a className={styles.root} href={root.pathRoot}>{root.pathText}</a>

                            {index < (roots.length - 1) && <Arrow className={styles.arrow} />}
                        </div>                    
                    ) )
                }
            </nav>
        </div>
    );
}

export default RootBar;