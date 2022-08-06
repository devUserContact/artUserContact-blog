import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../../components/NavBar";
import BlogTitle from "../../components/BlogTitle";
import styles from "../../styles/Main.module.scss";

const Test: NextPage = () => {
	return (
		<div className={styles.mainWrapper}>
			<Head>
				<title>devUserContact_blog</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<NavBar />
			</main>
		</div>
	);
};

export default Test;
