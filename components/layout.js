
import Meta from '../components/meta'
import Navbar from './Navbar/Navbar'


export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Navbar />
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> */}
        <main>{children}</main>
      </div>
      
    </>
  )
}
