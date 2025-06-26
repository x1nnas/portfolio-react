import db from "./dbconn.js";

export const getAllBlogs = async () => {
  const result = await db.query("SELECT * FROM blogs ORDER BY created_at DESC");
  return result.rows;
};

export const getBlogById = async (id) => {
  const result = await db.query("SELECT * FROM blogs WHERE id = $1", [id]);
  return result.rows[0];
};

export const createBlog = async (title, content) => {
  const result = await db.query(
    "INSERT INTO blogs (title, content) VALUES ($1, $2) RETURNING *",
    [title, content]
  );
  return result.rows[0];
};
