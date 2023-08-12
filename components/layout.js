import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'
import Navbar from './Navbar/Navbar'
import { useRouter } from 'next/router'

export default function Layout({ children }) {
  const router = useRouter()
  console.log(router , 'routes')
  return (
    <>
      <Meta />
      <Navbar />
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> */}
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
