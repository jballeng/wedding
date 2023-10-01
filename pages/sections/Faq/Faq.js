import styles from './styles.module.scss'

const Faq = ({ posts }) => {



    return (
        posts.map((post) => {
            return(
            <div key={post._id} className={styles.postContainer}>
                <div className={styles.question}>
                    <h1 key={post.title}>
                        {post.title}
                    </h1>
                </div>
                <div className={styles.answer}>
                    <span key={post.body}>
                        {post.body}
                    </span>
                </div>
            </div>

            )
           
        })
        
    )
}
export default Faq

