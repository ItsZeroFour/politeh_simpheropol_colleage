"use client";

import Post from "@/widgets/Posts/Post";
import { Fragment, useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const query = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/post/getAll`
      );
      const response = await query.json();
      setPosts(response);
    };

    getData();
  }, []);

  console.log(posts);

  return (
    <section>
      {posts && (
        <Fragment>
          <ul>
            {posts.map(
              (
                { title, subtitle, image, text, createdAt, viewsCount },
                index
              ) => (
                <li key={index}>
                  <Post
                    title={title}
                    subtitle={subtitle}
                    image={image}
                    text={text}
                    createdAt={createdAt}
                    viewsCount={viewsCount}
                  />
                </li>
              )
            )}
          </ul>
        </Fragment>
      )}
    </section>
  );
};

export default Posts;
