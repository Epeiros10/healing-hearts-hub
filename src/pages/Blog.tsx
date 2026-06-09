import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts, SITE_URL } from "@/data/blogPosts";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    blogPosts.forEach((p) => counts.set(p.category, (counts.get(p.category) ?? 0) + 1));
    return [
      { name: "All", count: blogPosts.length },
      ...Array.from(counts.entries())
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(([name, count]) => ({ name, count })),
    ];
  }, []);

  const visiblePosts = useMemo(
    () => (activeCategory === "All" ? blogPosts : blogPosts.filter((p) => p.category === activeCategory)),
    [activeCategory],
  );
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Breakup Recovery Blog: Gentle Guides to Heal After Heartbreak</title>
        <meta
          name="description"
          content="Compassionate, in-depth articles on healing after a breakup, no contact, attachment styles, rebuilding yourself, and more. Written by certified coaches."
        />
        <link rel="canonical" href={`${SITE_URL}/blog`} />
        <meta property="og:title" content="Breakup Recovery Blog: Gentle Guides to Heal After Heartbreak" />
        <meta
          property="og:description"
          content="Compassionate, in-depth articles on healing after a breakup, written by certified coaches."
        />
        <meta property="og:url" content={`${SITE_URL}/blog`} />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
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

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
            role="tablist"
            aria-label="Filter articles by category"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`font-body text-sm px-4 py-2 rounded-full border transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card text-foreground border-border hover:border-primary/40"
                  }`}
                >
                  {cat.name}
                  <span className={`ml-2 text-xs ${isActive ? "opacity-80" : "text-muted-foreground"}`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {visiblePosts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-card border border-border rounded-2xl overflow-hidden flex flex-col hover:shadow-[var(--shadow-soft)] transition-shadow"
              >
                <Link to={`/blog/${post.slug}`} className="block aspect-[16/9] overflow-hidden bg-muted">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    width={1280}
                    height={720}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </Link>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs font-body text-muted-foreground mb-3">
                    <span className="uppercase tracking-[0.15em] text-primary">
                      {post.category}
                    </span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="font-display text-xl text-foreground mb-3 leading-snug">
                    <Link to={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
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
                </div>
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
