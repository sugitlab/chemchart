import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import dynamic from "next/dynamic"
import styles from "../styles/Home.module.css"
import { ChemChartProps } from "chemchart";

const PlotNoSSR = dynamic<ChemChartProps>(() => import("chemchart"), {ssr: false, loading: () => <p>loading...</p>})

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ChemChart</title>
        <meta
          name="description"
          content="Chart library for Chemical Data Visualization"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to ChemChart library.</h1>
        <PlotNoSSR useDemoChromatogram />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
