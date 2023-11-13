import Post from "@/pages/Post/Post";
import React from "react";

const page = ({ params }) => {
  return <Post postId={params.postId} />;
};

export default page;
