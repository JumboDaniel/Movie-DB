import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ThemeSwitch from "../components/ThemeSwitch";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 dark:bg-black">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeSwitch />{" "}
<p>MovieDB</p>
    </div>
  )
}

export default Home
