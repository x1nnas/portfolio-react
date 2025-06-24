import React from "react";
import { Link, useParams } from "react-router-dom";
import { blogs } from "../data/blogData";

const BlogPosts = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <p>Blog post not found.</p>
      </div>
    );
  }

  return (
    <section className="relative min-h-screen py-20 bg-black text-white px-6">
      {/* Gradient and grid background (optional) */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-yellow-400/10 to-transparent pointer-events-none" />
      <div className="absolute inset-0 opacity-10 bg-[url('/assets/grid.svg')] bg-cover pointer-events-none" />

      <div className="relative max-w-3xl mx-auto z-10">
        <h1 className="text-3xl font-bold text-yellow-400 mb-2">
          {blog.title}
        </h1>
        <p className="text-sm text-yellow-300 mb-6">{blog.date}</p>
        <p className="text-white/90 whitespace-pre-line leading-relaxed">
          {blog.content}
        </p>

        <div className="mt-8">
          <Link to="/blogs" className="text-yellow-500 hover:underline">
            ← Back to Blogs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
