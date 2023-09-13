import '../styles/index.css'
import styles from './styles.module.scss'
import { Provider } from 'react-redux'
import {store} from '../store/store'
function MyApp({ Component, pageProps }) {

  return(
    <Provider store={store}>
    <div className={`${styles.body} bg-ivory`}>
    <Component {...pageProps} />
    </div>
    </Provider>
  )
}

export default MyApp
