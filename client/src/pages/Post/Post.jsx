"use client";

/* itsZeroFourX@gmail.com code side */
import { useEffect, useState } from "react";
import PostComponent from "@/widgets/Post/Post";

const Post = ({ postId }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const query = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/post/getOne/${postId}`
      );
      const response = await query.json();
      setPost(response);
    };

    getData();
  }, []);

  return <sectgion>{post && <PostComponent post={post} />}</sectgion>;
};

export default Post;
