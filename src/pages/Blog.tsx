import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">
              The Journal
            </span>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mt-3 mb-4">
              Words for the in-between
            </h1>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              Honest, gentle writing on heartbreak, self-care, healing, and the
              slow art of becoming yourself again.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-card border border-border rounded-2xl p-6 flex flex-col hover:shadow-[var(--shadow-soft)] transition-shadow"
              >
                <div className="flex items-center gap-3 text-xs font-body text-muted-foreground mb-3">
                  <span className="uppercase tracking-[0.15em] text-primary">
                    {post.category}
                  </span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="font-display text-xl text-foreground mb-3 leading-snug">
                  {post.title}
                </h2>
                <p className="font-body text-sm text-muted-foreground mb-5 flex-1">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 font-body text-sm text-primary hover:gap-3 transition-all"
                >
                  Read article <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
