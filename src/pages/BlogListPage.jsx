import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "../components/DummyData/DummyData"; // Importing dummy data

const BlogListPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container mx-auto flex-grow px-5 py-10">
        <h1 className="mb-12 animate-gradient-slow bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-center text-5xl font-extrabold leading-relaxed text-transparent">
          আমাদের প্রত্যহ ব্লগসমূহ
        </h1>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <Link
              to={`/blog/${blog.id}`}
              key={blog.id}
              className="transform overflow-hidden rounded-lg bg-white shadow-lg transition duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
              </div>
              <div className="p-6">
                <h2 className="mb-3 text-2xl font-semibold text-gray-900">
                  {blog.title}
                </h2>
                <p className="mb-5 text-gray-700">{blog.summary}</p>
                <div className="text-sm text-gray-500">
                  <span>{new Date(blog.date).toLocaleDateString()}</span> |{" "}
                  <span>By {blog.author}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogListPage;