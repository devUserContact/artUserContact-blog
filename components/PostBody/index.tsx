import React from "react";
import PostBodyFormatted from "../PostBodyFormatted";
import styles from "../../styles/Main.module.scss";

const PostBody = ({ post }: any) => {
	const ROUTE_POST_ID = "blog/[id]";
	return <><PostBodyFormatted post={post}/></>
};

export default PostBody;
