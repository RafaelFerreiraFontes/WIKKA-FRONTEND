import styles from "./styles/divGroup.module.css";

function DivGroup({text = ""})
{
    if(text === "")
        return <div></div>;

    return(
        <div className={styles.container} >
            <div className={styles.line} >
            </div>
            
            <p className={styles.text} > 
                {text}
            </p>
            
            <div className={styles.line} >
            </div>            
        </div>
    );
}

export default DivGroup;