import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getBlogById } from "../api/blogs";

const BlogPosts = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const data = await getBlogById(id);
        setBlog(data);
      } catch (err) {
        setError("Blog not found.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <section className="relative min-h-screen py-20 bg-black text-white px-6">
        <p className="text-center mt-20">Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative min-h-screen py-20 bg-black text-white px-6">
        <p className="text-center mt-20">{error}</p>
        <div className="text-center mt-6">
          <Link to="/blogs" className="text-yellow-500 hover:underline">
            ← Back to Blogs
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen py-20 bg-black text-white overflow-hidden px-6">
      {/* Background gradient and grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-yellow-400/15 to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 opacity-10 bg-[url('/assets/grid.svg')] bg-cover pointer-events-none"></div>

      <div className="relative max-w-3xl mx-auto z-10 px-6">

        <h1 className="text-3xl font-bold text-yellow-400 mb-2 mt-10">
          {blog.title}
        </h1>
        <p className="text-sm text-yellow-300 mb-6">
          Published on {new Date(blog.created_at).toLocaleDateString()}
        </p>
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
