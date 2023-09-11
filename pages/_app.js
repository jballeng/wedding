import '../styles/index.css'
import styles from './styles.module.scss'
function MyApp({ Component, pageProps }) {

  return(
    <div className={`${styles.body} bg-ivory`}>
    <Component {...pageProps} />
    </div>
  )
}

export default MyApp
