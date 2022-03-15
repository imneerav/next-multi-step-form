import Layout from '../theme/Layout'
import styles from '../theme/styles.scss'

function MyApp({ Component, pageProps }) {
  return (
      <div className="layout">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
  )
}

export default MyApp