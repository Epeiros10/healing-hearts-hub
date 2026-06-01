import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingDialog from "@/components/BookingDialog";
import { useState } from "react";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) return <Navigate to="/blog" replace />;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Break Up Recovery" },
    articleSection: post.category,
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="pt-32 pb-20 px-4">
        <article className="max-w-2xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to all articles
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 text-xs font-body text-muted-foreground mb-4">
              <span className="uppercase tracking-[0.15em] text-primary">
                {post.category}
              </span>
              <span>·</span>
              <span>{post.date}</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl text-foreground mb-8 leading-tight">
              {post.title}
            </h1>

            <div className="space-y-5">
              {post.content.map((p, i) => (
                <p
                  key={i}
                  className="font-body text-foreground/85 leading-relaxed whitespace-pre-line"
                >
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-14 p-6 bg-card border border-border rounded-2xl text-center">
              <p className="font-body text-sm text-muted-foreground mb-4">
                Need someone to walk through this with you?
              </p>
              <button
                onClick={() => setBookingOpen(true)}
                className="inline-flex items-center px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-body text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Book a 1:1 session
              </button>
            </div>
          </motion.div>
        </article>
      </main>
      <Footer />
      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </div>
  );
};

export default BlogPost;
