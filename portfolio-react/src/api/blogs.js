import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api", // 👈 correct backend port
});

export const getAllBlogs = async () => {
  const res = await API.get("/blogs");
  return res.data;
};

export const getBlogById = async (id) => {
  const res = await API.get(`/blogs/${id}`);
  return res.data;
};

export const createBlog = async (blogData) => {
  const res = await API.post("/blogs", blogData);
  return res.data;
};
