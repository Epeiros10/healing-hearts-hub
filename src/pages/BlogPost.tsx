import { useEffect, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Share2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingDialog from "@/components/BookingDialog";
import { blogPosts, legacySlugMap, SITE_URL } from "@/data/blogPosts";
import brunaImg from "@/assets/blog-emotions.jpg";

const BlogPost = () => {
  const { slug } = useParams();
  const [bookingOpen, setBookingOpen] = useState(false);

  // Legacy slug? Redirect to new SEO-friendly URL.
  if (slug && legacySlugMap[slug]) {
    return <Navigate to={`/blog/${legacySlugMap[slug]}`} replace />;
  }

  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) return <Navigate to="/blog" replace />;

  const url = `${SITE_URL}/blog/${post.slug}`;
  const related = post.related
    .map((s) => blogPosts.find((p) => p.slug === s))
    .filter((p): p is (typeof blogPosts)[number] => Boolean(p));

  const midpoint = Math.floor(post.content.length / 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.h1,
    description: post.metaDescription,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "Break Up Recovery",
      url: SITE_URL,
    },
    image: `${SITE_URL}${post.image}`,
    mainEntityOfPage: url,
    articleSection: post.category,
  };

  const shareText = encodeURIComponent(`${post.title}, `);
  const shareUrl = encodeURIComponent(url);
  const shareImg = encodeURIComponent(`${SITE_URL}${post.image}`);

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: post.title, text: post.excerpt, url });
      } catch {
        /* user cancelled */
      }
    } else {
      navigator.clipboard?.writeText(url);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{post.seoTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <link rel="canonical" href={url} />
        <meta name="author" content={post.author} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.seoTitle} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={`${SITE_URL}${post.image}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.seoTitle} />
        <meta name="twitter:description" content={post.metaDescription} />
        <meta name="twitter:image" content={`${SITE_URL}${post.image}`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Navbar />

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
              <span>{post.readTime}</span>
              <span>·</span>
              <span>{post.date}</span>
            </div>

            <h1 className="font-display text-3xl md:text-4xl text-foreground mb-8 leading-tight">
              {post.h1}
            </h1>

            <div className="flex items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-muted overflow-hidden flex items-center justify-center">
                  <img
                    src={brunaImg}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover opacity-70"
                  />
                </div>
                <span className="font-body text-sm text-muted-foreground">
                  Written by{" "}
                  <span className="text-foreground font-medium">{post.author}</span>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`https://wa.me/?text=${shareText}${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on WhatsApp"
                  className="p-2 rounded-full border border-border hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
                    <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413z" />
                  </svg>
                </a>
                <a
                  href={`https://pinterest.com/pin/create/button/?url=${shareUrl}&media=${shareImg}&description=${shareText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pin on Pinterest"
                  className="p-2 rounded-full border border-border hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.988c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.012.001z" />
                  </svg>
                </a>
                <button
                  onClick={handleNativeShare}
                  aria-label="Share article"
                  className="p-2 rounded-full border border-border hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <figure className="mb-10 rounded-2xl overflow-hidden bg-muted aspect-[16/9]">
              <img
                src={post.image}
                alt={post.imageAlt}
                width={1280}
                height={720}
                className="w-full h-full object-cover"
              />
            </figure>

            <div className="space-y-5">
              {post.content.map((p, i) => {
                const blocks = p.split(/\n{2,}/);
                return (
                  <div key={i}>
                    {blocks.map((block, j) => {
                      if (block.startsWith('### ')) {
                        return (
                          <h3
                            key={j}
                            className="font-display text-lg md:text-xl text-foreground mt-8 mb-3 leading-snug"
                          >
                            {block.slice(4)}
                          </h3>
                        );
                      }
                      if (block.startsWith('## ')) {
                        return (
                          <h2
                            key={j}
                            className="font-display text-2xl md:text-[1.6rem] text-foreground mt-10 mb-4 leading-snug"
                          >
                            {block.slice(3)}
                          </h2>
                        );
                      }
                      const lines = block.split('\n').filter(Boolean);
                      const isNumbered =
                        lines.length > 1 && lines.every((l) => /^\d+\.\s/.test(l));
                      const isBullet =
                        lines.length > 1 && lines.every((l) => /^[-•]\s/.test(l));
                      if (isNumbered) {
                        return (
                          <ol
                            key={j}
                            className="list-decimal pl-6 space-y-2 font-body text-foreground/85 leading-relaxed marker:text-primary marker:font-medium"
                          >
                            {lines.map((l, k) => (
                              <li key={k}>{l.replace(/^\d+\.\s/, '')}</li>
                            ))}
                          </ol>
                        );
                      }
                      if (isBullet) {
                        return (
                          <ul
                            key={j}
                            className="list-disc pl-6 space-y-2 font-body text-foreground/85 leading-relaxed marker:text-primary"
                          >
                            {lines.map((l, k) => (
                              <li key={k}>{l.replace(/^[-•]\s/, '')}</li>
                            ))}
                          </ul>
                        );
                      }
                      return (
                        <p
                          key={j}
                          className="font-body text-foreground/85 leading-relaxed"
                        >
                          {block}
                        </p>
                      );
                    })}

                    {i > 0 && i < post.content.length - 1 && i % 3 === 0 && i !== midpoint && (
                      <div
                        className="flex items-center justify-center gap-2 my-8"
                        aria-hidden="true"
                      >
                        <span className="h-px w-10 bg-border" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent-gold,42_55%_55%))] opacity-70" />
                        <span className="h-px w-10 bg-border" />
                      </div>
                    )}

                    {i === midpoint && (
                      <aside className="my-10 p-5 sm:p-6 bg-muted/40 border-l-4 border-primary rounded-r-xl">
                        <p className="font-body text-sm text-foreground/85 leading-relaxed mb-3">
                          Struggling with this on your own? You don't have to. A 45-minute
                          1:1 session with{" "}
                          <Link to="/#coaching" className="text-primary underline underline-offset-4">
                            a breakup recovery coach
                          </Link>{" "}
                          can help you move through it with support.
                        </p>
                        <button
                          onClick={() => setBookingOpen(true)}
                          className="inline-flex items-center gap-2 text-sm font-body font-medium text-primary hover:gap-3 transition-all"
                        >
                          Book a session <ArrowRight className="w-4 h-4" />
                        </button>
                      </aside>
                    )}
                  </div>
                );
              })}
            </div>


            <div className="mt-14 p-6 sm:p-8 bg-card border border-border rounded-2xl text-center">
              <h2 className="font-display text-xl text-foreground mb-2">
                Need someone to walk through this with you?
              </h2>
              <p className="font-body text-sm text-muted-foreground mb-5 max-w-md mx-auto">
                Book a 45-minute 1:1 session with Bruna or Pascal. Compassionate,
                judgment-free, and built around where you are right now.
              </p>
              <button
                onClick={() => setBookingOpen(true)}
                className="inline-flex items-center px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-body text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Book a 1:1 session
              </button>
            </div>
          </motion.div>

          {related.length > 0 && (
            <section className="mt-20 pt-12 border-t border-border">
              <h2 className="font-display text-2xl text-foreground mb-8">
                Related articles
              </h2>
              <div className="grid gap-6 sm:grid-cols-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/blog/${r.slug}`}
                    className="group block bg-card border border-border rounded-xl overflow-hidden hover:shadow-[var(--shadow-soft)] transition-shadow"
                  >
                    <div className="aspect-[16/9] overflow-hidden bg-muted">
                      <img
                        src={r.image}
                        alt={r.imageAlt}
                        width={640}
                        height={360}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-[10px] font-body uppercase tracking-[0.15em] text-primary mb-1.5">
                        {r.category}
                      </p>
                      <h3 className="font-display text-sm text-foreground leading-snug">
                        {r.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>
      </main>
      <Footer />
      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </div>
  );
};

export default BlogPost;
