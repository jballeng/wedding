import Layout from "../components/layout"
import Faq from "../components/Faq/Faq"
import { getFaqList } from "../sanity/sanity.query"
const faq = ({data}) => {
    const { posts } = data
    return(
        <Layout>
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