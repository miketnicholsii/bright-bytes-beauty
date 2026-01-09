import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import vegetablesHero from "@/assets/vegetables-hero.jpg";
import coachAbout from "@/assets/coach-about.jpg";
import pantryPurge from "@/assets/blog/pantry-purge.jpeg";
import fruitsVegetables from "@/assets/blog/fruits-vegetables.jpeg";
import holdingPlate from "@/assets/blog/holding-plate.jpeg";
import oatmealFruit from "@/assets/blog/oatmeal-fruit.jpeg";
import selfLoveJournaling from "@/assets/blog/self-love-journaling.jpeg";
import tulips from "@/assets/blog/tulips.jpeg";

const blogPosts = [
  {
    slug: "sunday-reset-grocery-order",
    title: "#SundayReset...Grocery Order Is \"My Boo\"",
    excerpt: "Sunday Reset\" is my time to shine cause who's that girl? Me! And You! #SundayReset is a phrase that refers to the practice of taking time on Sundays to reflect on the past week and set intentions for the week ahead.",
    image: pantryPurge,
    date: "April 3, 2023",
  },
  {
    slug: "blood-type-diet",
    title: "Ever Heard of The Blood Type Diet?",
    excerpt: "It's Wellness Wednesday...how many of you have heard of the blood type \"diet\"?! As much as I don't believe in \"dieting\" I do believe the lifestyle choices we make in the area of food consumption is \"vital\" to setting our bodies up to \"thrive\".",
    image: fruitsVegetables,
    date: "April 3, 2023",
  },
  {
    slug: "goal-setting-motivational-monday",
    title: "Goal Setting....Motivational Monday!",
    excerpt: "As you start a new week, remember that each day is an opportunity to make progress towards your goals. Don't let setbacks or failures hold you back, instead use them as learning experiences and a chance to grow.",
    image: holdingPlate,
    date: "April 3, 2023",
  },
  {
    slug: "ways-to-eat-your-water",
    title: "Ways to \"Eat\" Your Water",
    excerpt: "It's Wellness Wednesday and I am here to help you \"thrive\" Let's talk water consumption. Did You Know.... Dehydration can contribute to loss of energy, to headaches and that general feeling of overall sluggishness.",
    image: oatmealFruit,
    date: "April 3, 2023",
  },
  {
    slug: "why-you-need-a-health-coach",
    title: "Why You Need A Health Coach...",
    excerpt: "A Health Coach provides many layers of support that will ensure you are able to eliminate the confusion that comes with weeding through diet trends and health overhauls, to assist you in creating an individualized, long-term sustainable change.",
    image: selfLoveJournaling,
    date: "April 3, 2023",
  },
  {
    slug: "audacity-to-choose-you",
    title: "Do You Have the Audacity to Choose You",
    excerpt: "Bio-individuality in a nutshell is the notion that there isn't a \"one size fits all\" health program for any of us; rather each person is \"unique\" with highly individualized nutritional requirements.",
    image: tulips,
    date: "April 3, 2023",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={vegetablesHero}
              alt="Fresh vegetables"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 hero-gradient-overlay" />
          </div>

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-primary-foreground mb-4">
                Blog
              </h1>
              <p className="font-body text-lg text-primary-foreground/90">
                Wellness tips, recipes, and inspiration for your health journey
              </p>
            </motion.div>
          </div>
        </section>

        {/* Author Card */}
        <section className="py-12 bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 justify-center"
            >
              <img
                src={coachAbout}
                alt="Coach Candice"
                className="w-16 h-16 rounded-full object-cover shadow-soft"
              />
              <div>
                <h2 className="font-display text-xl font-semibold text-foreground">
                  Candice James
                </h2>
                <p className="font-body text-sm text-muted-foreground">
                  Holistic Health Coach
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl overflow-hidden shadow-card card-hover group"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-muted-foreground mb-3">
                      <Calendar size={14} />
                      <span className="font-body text-sm">{post.date}</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 font-body font-semibold text-primary hover:gap-3 transition-all"
                    >
                      Read More
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
