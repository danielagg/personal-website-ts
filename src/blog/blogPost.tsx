import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import ReactMarkdown from "react-markdown";

export const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useQuery(["blog-post", id], () =>
    getBlogPost(id)
  );

  return (
    <>
      {isLoading && <LoadingPost />}
      {isError && <Error />}
      {data && (
        <div className="my-24">
          <div className="min-w-full prose prose-sm lg:prose-lg prose-indigo">
            <ReactMarkdown children={data.content} />
          </div>
        </div>
      )}
    </>
  );
};

const getBlogPost = async (id: string) => {
  try {
    const response = await axios.get(
      `https://personal-website-strapi-blog.herokuapp.com/blog-posts/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const LoadingPost = () => {
  return (
    <div className="w-full my-48 flex flex-col justify-center items-center space-y-2">
      <SyncLoader color="silver" loading={true} size={12} />
      <div className="-mt-12">Loading post...</div>
    </div>
  );
};

const Error = () => {
  return (
    <div className="w-full my-48 flex flex-col justify-center items-center space-y-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 opacity-80"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <div className="-mt-12">
        Sorry, something went wrong while trying to load the posts. Please try
        again later.
      </div>
    </div>
  );
};
