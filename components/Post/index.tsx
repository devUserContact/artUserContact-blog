import React from "react";
import Link from "next/link";
import PostHeader from "../PostHeader";
import PostBody from "../PostBody";
import styles from "../../styles/Main.module.scss";

const Post = ({ post }: any) => {
	const ROUTE_POST_ID = "blog/[id]";
	return (
		<div className={styles.postContainer}>
			<div className={styles.postWrapper}>
				<PostHeader post={post} />
				<div className={styles.postBody}>
					<PostBody post={post} />
				</div>
			</div>
		</div>
	);
};

export default Post;
