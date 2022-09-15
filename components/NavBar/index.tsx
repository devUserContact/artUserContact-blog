import Link from "next/link";
import styles from "../../styles/Main.module.scss";

export default function NavBar() {
	return (
		<>
			<div className={styles.navBarContainer}>
				<p className={styles.navBarText}>
					<Link href="/">
						<a>/artUserContact </a>
					</Link>
				</p>
				<p className={styles.navBarText}>
					<Link href="/posts">
						<a>/posts </a>
					</Link>
				</p>
				<p className={styles.navBarText}>
					<Link href="/about">
						<a>/whoami </a>
					</Link>
				</p>
			</div>
		</>
	);
}
