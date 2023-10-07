import '../styles/globals.css'
import { Layouts } from '../components/Layout'

function MyApp({ Component, pageProps }) {
  const Layout = Layouts[Component.Layout] ?? ((page) => page);
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
