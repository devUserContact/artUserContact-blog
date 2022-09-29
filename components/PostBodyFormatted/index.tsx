import React from 'react';
import Markdown from 'react-markdown';
import styles from "../../styles/Main.module.scss";

const PostBodyFormatted = ({ post }: any) => {
  let media = JSON.parse(post.media);
  if (typeof media.cloudflare === 'undefined') {
    return <Markdown linkTarget={'_black'}>{post.body}</Markdown>;
  } else {
    let counter = 0;
    let cloudflareLinks: Array<string> = [];
    media.cloudflare.map((link: any, index: any) => {
      cloudflareLinks.push(link);
    });
    let bodyArray = post.body.split(/(CLOUDFLARE)/);
    return bodyArray.map((fragment: any, index: any) => {
      if (fragment != `CLOUDFLARE`) {
        return <Markdown>{fragment}</Markdown>;
      }
      if (fragment === `CLOUDFLARE`) {
      	let photoLink = `${cloudflareLinks[counter]}`
      	counter++;
        return <img className={styles.postImage} src={`${photoLink}`} />;
      }
    });
  }
};

export default PostBodyFormatted;
