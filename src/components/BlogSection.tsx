import blogs from "@/data/blogs";
import BlogCard from "./BlogCard";

export default function BlogSection() {
  return (
    <section className="space-y-8" id="blog">
      <h2 className="text-3xl font-semibold border-b pb-2">Blog</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {blogs.map((post) => (
          <BlogCard key={post.title} {...post} />
        ))}
      </div>
    </section>
  );
}
