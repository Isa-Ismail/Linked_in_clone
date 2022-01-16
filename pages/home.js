import Head from "next/head"
import Image from "next/image"

function HomePage() {
    return (
        <div>
            <Head>
                <title>LinkedIn</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <div className = "relative w-36 h-10 ">
                    <Image src="https://rb.gy/vtbzlp" layout="fill" objectFit="contain" />
                </div>
                <div className = 'flex items-center sm:divide-x divide-gray-300'>
                    <div>
                        hello
                    </div>
                    <div>
                        hello 2
                    </div>
                </div>
            </header>
        </div>
    )
}

export default HomePage
