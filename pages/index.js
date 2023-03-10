import Head from 'next/head'
import Categories from '../components/Categories'
import Boards from '../components/Boards'
import Brands from '../components/Brands'
import Reviews from '../components/Reviews'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
       <Categories/>
       <Boards/>
       <Brands/>
       <Reviews/>
      </main>
    </div>
  )
}
