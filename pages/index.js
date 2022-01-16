import { signOut } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Linked In Clone</title>
        <meta name="description" content="This is a Linked In clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <button onClick = {signOut}>
          sign out
        </button>
      </main>

      <footer>
        
      </footer>
    </div>
  )
}
