import '../styles/index.css'

function MyApp({ Component, pageProps }) {

  return(
    <div className='bg-ivory'>
    <Component {...pageProps} />
    </div>
  )
}

export default MyApp
