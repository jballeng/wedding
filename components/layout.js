
import Meta from '../components/meta'
import Navbar from './Navbar/Navbar'
import { useSelector } from 'react-redux'
import { Loader } from './loader'
export default function Layout({ children }) {
  const { globalLoader } = useSelector(state => state.uiReducer)
  return (
    <>
      <Meta />
      <Navbar />
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> */}
        <main>{children}</main>
      </div>
      {globalLoader && <Loader/>}
    </>
  )
}
