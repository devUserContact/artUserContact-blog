import React from 'react';
import Markdown from 'react-markdown';
import styles from "../../styles/Main.module.scss";

const PostBodyFormatted = ({ post }: any) => {
  let media = JSON.parse(post.media);
  if (typeof media.cloudflair === 'undefined') {
    return <Markdown linkTarget={'_black'}>{post.body}</Markdown>;
  } else {
    let counter = 0;
    let cloudflairLinks: Array<string> = [];
    media.cloudflair.map((link: any, index: any) => {
      cloudflairLinks.push(link);
    });
    let bodyArray = post.body.split(/(CLOUDFLAIR)/);
    return bodyArray.map((fragment: any, index: any) => {
      if (fragment != `CLOUDFLAIR`) {
        return <Markdown>{fragment}</Markdown>;
      }
      if (fragment === `CLOUDFLAIR`) {
      	let photoLink = `${cloudflairLinks[counter]}`
      	counter++;
        return <img className={styles.postImage} src={`${photoLink}`} />;
      }
    });
  }
};

export default PostBodyFormatted;
