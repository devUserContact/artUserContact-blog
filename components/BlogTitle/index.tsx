import type { NextPage } from "next";
import styles from "../../styles/Main.module.scss";

export default function BlogTitle() {
	return (
		<>
			<div className={styles.blogTitleContainer}>
				<p className={styles.blogTitle}>artUserContact_blog</p>
				<p className={styles.blogSubTitle}>
					sharing my art on the internet
				</p>
			</div>
		</>
	);
}
