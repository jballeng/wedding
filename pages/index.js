import { useSelector } from 'react-redux'
import Homepage from '../sections/Homepage/Homepage'
import Layout from "../components/layout"
import { Loader } from '../components/loader'

const HomeLayout = () => {
  return(
    <>
    <Layout>
      <Homepage/>
    </Layout>
    </>
  )
}

export default function IndexPage() {
const { globalLoader } = useSelector(state => state.uiReducer)
  
  if ( globalLoader ) return <Loader />
  return <HomeLayout />
  
}

