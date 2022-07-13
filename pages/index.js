import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Nathan Peterson</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>My name is Nathan Peterson.</p>
      </main>

      <Footer />
    </div>
  )
}
