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
                <h2>Loading but different.....</h2>
            )}
        </div>
    )
}