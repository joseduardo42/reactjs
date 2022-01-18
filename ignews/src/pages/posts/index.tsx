import styles from './styles.module.scss'
import Head from "next/head";

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | </title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="#">
                        <time>12 de março de 2021</time>
                        <strong>Creating a Monorepo with Lerna</strong>
                        <p>Post here</p>
                    </a>
                    <a href="#">
                        <time>12 de março de 2021</time>
                        <strong>Creating a Monorepo with Lerna</strong>
                        <p>Post here</p>
                    </a>
                    <a href="#">
                        <time>12 de março de 2021</time>
                        <strong>Creating a Monorepo with Lerna</strong>
                        <p>Post here</p>
                    </a>
                </div>
            </main>
        </>
    );
}