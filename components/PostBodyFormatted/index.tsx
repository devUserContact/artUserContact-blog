import React from 'react';
import Markdown from 'react-markdown';
import styles from "../../styles/Main.module.scss";

const PostBodyFormatted = ({ post }: any) => {
  let media = JSON.parse(post.media);
  if (typeof media.media.imgur === 'undefined') {
    return <Markdown linkTarget={'_black'}>{post.body}</Markdown>;
  } else {
    let imgurLinks = [];
    media.media.imgur.map((link, index) => {
      imgurLinks.push(link);
    });
    let bodyArray = post.body.split(/(IMGUR)/);
    return bodyArray.map((fragment, index) => {
      if (fragment != `IMGUR`) {
        return <Markdown>{fragment}</Markdown>;
      }
      if (fragment === `IMGUR`) {
        return <img className={styles.postImage} src={`${imgurLinks}`} />;
      }
    });
  }
};

export default PostBodyFormatted;
