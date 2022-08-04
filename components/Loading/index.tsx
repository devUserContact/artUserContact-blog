import styles from "../../styles/Main.module.scss";

export default function Loading() {
	return (
		<>
			<div className={styles.blogTitleContainer}>
				<p className={styles.loadingText}>
					Loading. . .
				</p>
			</div>
		</>
	);
}
