import Layout from "../components/layout"
import About from "../components/About/About"
import { getImages } from "../sanity/sanity.query"

const about = ({data}) => {
    const {posts} = data
    return(
        <Layout>
            <About images={posts}/>
        </Layout>
    )
}
export default about
export async function getServerSideProps() {
  
    const posts = await getImages()
    
    return {
      
      props: {
        data: { posts },
      },
    }
  }