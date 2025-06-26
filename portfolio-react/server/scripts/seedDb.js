import db from "../db/dbconn.js";

async function seedBlogs() {
  const blogs = [
    {
      title: "First Blog Post",
      content:
        "This is the full content of the first blog post. Lots of interesting stuff here!",
    },
    {
      title: "Second Blog Post",
      content:
        "Here is the full content of the second blog post. It is also very insightful.",
    },
    {
      title: "Third Blog Post",
      content:
        "And this is the third blog post's full content. Enjoy reading it!",
    },
  ];

  for (const blog of blogs) {
    await db.query(`INSERT INTO blogs (title, content) VALUES ($1, $2)`, [
      blog.title,
      blog.content,
    ]);
  }

  console.log("Seeded blogs data.");
}

seedBlogs()
  .then(() => process.exit())
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
