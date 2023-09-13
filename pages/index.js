import { useSelector } from 'react-redux'
import Homepage from '../components/Homepage/Homepage'
import Layout from "../components/layout"
import { Loader } from '../components/loader'
export default function IndexPage() {
const { globalLoader } = useSelector(state => state.uiReducer)
  
  return (
    <>
    <Layout>
        <Homepage />
    </Layout>
    {globalLoader && <Loader />}
    </>
  )
}

