import 'antd/dist/antd.css';
import '../styles/globals.css'
import '../styles/card.scss'
import '../styles/popup.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
