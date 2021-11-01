import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import SyncLoader from "react-spinners/SyncLoader";
import { Link } from "react-router-dom";
import { DesktopNavbar, MobileNavbar } from "../landing/navbar";

export const BlogContainer = ({ children }: { children: any }) => {
  return (
    <div className="w-full mt-12 flex justify-center">
      <div className="px-12 lg:px-4 w-full lg:w-3/4">
        <div className="text-3xl font-bold border-b border-gray-200 pb-5 mb-5">
          Dan's Blog
        </div>
        <DesktopNavbar />
        <div className="lg:hidden cursor-pointer text-indigo-600 flex items-center space-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
          <Link to={`/`}>Go back to the main site</Link>
        </div>
        {children}
      </div>
    </div>
  );
};

export const AllBlogPosts = () => {
  const { data, isLoading, isError } = useQuery("blog-posts", getBlogPosts);

  return (
    <>
      {isLoading && <LoadingPosts />}
      {isError && <Error />}
      {data && <BlogPosts posts={data} />}
    </>
  );
};

const getBlogPosts = async () => {
  try {
    const response = await axios.get(
      "https://personal-website-strapi-blog.herokuapp.com/blog-posts?_sort=published_at:DESC"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const LoadingPosts = () => {
  return (
    <div className="w-full my-48 flex flex-col justify-center items-center space-y-2">
      <SyncLoader color="silver" loading={true} size={12} />
      <div className="-mt-12">Loading posts...</div>
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

const BlogPosts = ({
  posts,
}: {
  posts: {
    title: string;
    shortDescription: string;
    id: number;
    published_at: string;
  }[];
}) => {
  return (
    <div className="mt-8 lg:mt-24 flex flex-col space-y-16">
      {posts.map((p) => {
        return (
          <div key={p.id}>
            <div className="text-xl lg:text-2xl font-bold cursor-pointer hover:text-indigo-600">
              <Link to={`/blog/${p.id}`}>{p.title}</Link>
            </div>
            <div className="text-sm flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <div className="mt-1">
                {new Date(p.published_at).toISOString().slice(0, 10)}
              </div>
            </div>
            <div className="text-base lg:text-lg mt-4">
              {p.shortDescription}
            </div>
          </div>
        );
      })}
    </div>
  );
};
