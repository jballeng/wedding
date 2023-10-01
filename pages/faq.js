import Layout from "../components/layout"
import Faq from "./sections/Faq/Faq"
import { getFaqList } from "../sanity/sanity.query"
import styles from "./styles.module.scss"
const faq = ({data}) => {
    const { posts } = data
    return(
        <Layout>
          <h2 className={`${styles.header}`}>More of your questions will be answered soon! For now, please see the following Q&A.</h2>
            <Faq posts={posts}/>
        </Layout>
        
    )
}

export default faq

export async function getServerSideProps() {
  
    const posts = await getFaqList()
    
    return {
      
      props: {
        data: { posts },
      },
    }
  }