import type { NextPage } from "next";
import Markdown from "react-markdown";
import NavBar from "../../components/NavBar";
import { Whoami } from "../../assets/Whoami"
import styles from "../../styles/Main.module.scss";

const whoami = Whoami; 

const About: NextPage = () => {
	return (
		<>
			<NavBar />
			<div className={styles.spacer}></div>
			<div className={styles.postBody}>
			<Markdown linkTarget={"_blank"}>{whoami}</Markdown>
			</div>
		</>
	);
};
export default About;
