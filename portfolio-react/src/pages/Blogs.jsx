import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "../data/blogData";

const Blogs = () => {
  return (
    <section className="relative min-h-screen py-20 bg-black text-white overflow-hidden">
      {/* Gold gradient overlay like Home component */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-yellow-400/15 to-transparent pointer-events-none"></div>

      {/* Grid pattern overlay like Home component */}
      <div className="absolute inset-0 opacity-10 bg-[url('/assets/grid.svg')] bg-cover pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-6 z-10">
        <h2 className="text-3xl font-bold text-yellow-500 mb-8 text-center">
          My Blogs
        </h2>

        <div className="space-y-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-neutral-900 border border-yellow-500/20 rounded-xl shadow-md p-6"
            >
              <h3 className="text-xl font-semibold text-yellow-400 mb-1">
                {blog.title}
              </h3>
              <p className="text-sm text-yellow-300 mb-2">{blog.date}</p>
              <p className="text-white/80 mb-3">{blog.summary}</p>
              <Link
                to={`/blogs/${blog.id}`}
                className="inline-block text-yellow-500 hover:underline font-medium"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
