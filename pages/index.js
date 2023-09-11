import Homepage from '../components/Homepage/Homepage'
import { isMobile } from '../utils/helpers'
import About from '../components/About/About'
import Layout from "../components/layout"

export default function IndexPage() {

  const is_mobile = isMobile()
  return (
    <Layout>
      <Homepage />
    </Layout>
  )
}

