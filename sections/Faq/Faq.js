import styles from './styles.module.scss'
import Accordion from '../../components/Accordion/Accordion'

const Faq = ({ posts }) => {



    return (
        posts.map((post) => {
            return(
            <div key={post._id} className={styles.postContainer}>
                <Accordion title={post.title} content={post.body} />
                {/* <div className={styles.question}>
                    <h1 key={post.title}>
                        {post.title}
                    </h1>
                </div>
                <div className={styles.answer}>
                    <span key={post.body}>
                        {post.body}
                    </span>
                </div> */}
            </div>

            )
           
        })
        
    )
}
export default Faq

