import React from "react";
import Markdown from "react-markdown";
import { readline }from "linebyline";

const PostBodyFormatted = ({ post }: any) => {
	let media =  JSON.parse(post.media)
	if (typeof media.media.imgur === 'undefined') {
		return (
			<Markdown linkTarget={"_black"}>
				{post.body}
			</Markdown>
		)
	} else {
		let rl = readline(post.body);
		rl.on('line', function(line, lineCount) {
			console.log(line)
		})
	}
	
};

export default PostBodyFormatted;
