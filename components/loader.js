import styles from './styles.module.scss'


export const Loader = () => {
    const textLoader = false
    return (
        <div className={styles.loaderWrapper}>
            
            {textLoader ? (
                <>
                <h2>Loading....</h2>
                </>
            ) : (
                <h2>Loading cute video...</h2>
            )}
        </div>
    )
}