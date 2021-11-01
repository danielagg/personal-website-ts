import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

export const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const query = useQuery(["blog-post", id], () => getBlogPost(id));

  return (
    <div className="w-3/4 mt-12 px-4 flex justify-center">
      <div>Coming soon!</div>
    </div>
  );
};

const getBlogPost = async (id: string) => {
  try {
    const response = await axios.get(
      `https://personal-website-strapi-blog.herokuapp.com/blog-posts/${id}`
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
