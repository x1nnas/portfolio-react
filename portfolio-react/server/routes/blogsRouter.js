import express from "express";
import { getAllBlogs, getBlogById, createBlog } from "../db/blogQueries.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const blogs = await getAllBlogs();
    res.json(blogs);
  } catch {
    res.status(500).json({ error: "Database error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const blog = await getBlogById(req.params.id);
    if (!blog) return res.status(404).json({ error: "Blog not found" });
    res.json(blog);
  } catch {
    res.status(500).json({ error: "Database error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const blog = await createBlog(req.body.title, req.body.content);
    res.status(201).json(blog);
  } catch {
    res.status(500).json({ error: "Failed to create blog" });
  }
});

export default router;
