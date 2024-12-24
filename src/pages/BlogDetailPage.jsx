// src/BlogDetailPage.js

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetailPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/blogs/${id}/`)
      .then((response) => {
        setBlog(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the blog!", error);
      });
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-5">
      <div className="rounded-lg bg-white p-6 shadow-md">
        <h1 className="mb-5 text-4xl font-bold">{blog.title}</h1>
        <img
          src={blog.image}
          alt={blog.title}
          className="mb-5 h-64 w-full rounded-lg object-cover"
        />
        <div className="mb-5 text-gray-700">
          <p>{blog.summary}</p>
        </div>
        <div className="text-sm text-gray-500">
          <span>{new Date(blog.date).toLocaleDateString()}</span> |{" "}
          <span>By {blog.author}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
