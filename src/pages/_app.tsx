import GlobalStyles from '../styles/global'
import { ThemeContextProvider } from '../contexts/ThemeContext'

function MyApp({ Component, pageProps }) {
  
  return(
    <ThemeContextProvider>
      <Component {...pageProps} />
      <GlobalStyles/>
    </ThemeContextProvider>
  )
}

export default MyApp
