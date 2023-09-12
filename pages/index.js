import Homepage from '../components/Homepage/Homepage'
import { isMobile } from '../utils/helpers'
import { Suspense } from 'react'
import Layout from "../components/layout"

export default function IndexPage() {

  const is_mobile = isMobile()
  return (
    <Layout>
      <Suspense fallback={<p>Loading Video...</p>}>
        <Homepage />
      </Suspense>
    </Layout>
  )
}

