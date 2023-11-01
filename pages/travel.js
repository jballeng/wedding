import Layout from "../components/layout"
import Travel from "../sections/Travel/Travel"
import {getTravelSections, getAccomodationSections} from "../sanity/sanity.query"
const travel = ({data, test}) => {
    const {posts} = data
    const {accom} = test
    return(
        <Layout>
            <Travel posts={posts} accom={accom}/>
        </Layout>
        
    )
}
export default travel

export async function getServerSideProps() {
    const posts = await getTravelSections()
    const accom = await getAccomodationSections()
    return {
      props: {
        data: { posts },
        test: { accom },
      },
    }
  }

