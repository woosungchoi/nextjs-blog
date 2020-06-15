import '../styles/global.css'


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}