import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import '@/styles/variables.scss'
export default function App({ Component, pageProps }) {
  return <>  <Navbar/><Component {...pageProps} /><Footer/></>
}
