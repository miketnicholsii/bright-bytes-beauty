import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
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
    excerpt: "As you start a new week, remember that each day is an opportunity to make progress towards your goals. Don't let setbacks or failures hold you back, instead use them as learning experiences.",
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
    excerpt: "A Health Coach provides many layers of support that will ensure you are able to eliminate the confusion that comes with weeding through diet trends and health overhauls.",
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
    <PageTransition>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
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
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <span className="label-editorial text-primary-foreground/70 mb-6 block">
                Wellness Insights
              </span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-primary-foreground mb-4 leading-[1.1]">
                The <span className="italic text-accent">Journal</span>
              </h1>
              <p className="font-body text-lg text-primary-foreground/85 max-w-xl mx-auto">
                Tips, recipes, and inspiration for your health journey
              </p>
            </motion.div>
          </div>
        </section>

        {/* Author Card */}
        <section className="py-12 bg-background border-b border-border/50">
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
                className="w-16 h-16 rounded-full object-cover shadow-soft border-2 border-primary/10"
              />
              <div>
                <h2 className="font-display text-xl text-foreground">
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
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group"
                >
                  <motion.div 
                    className="bg-card rounded-2xl overflow-hidden border border-border/50 h-full flex flex-col"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 text-muted-foreground mb-3">
                        <Calendar size={14} strokeWidth={1.5} />
                        <span className="font-body text-sm">{post.date}</span>
                      </div>
                      <h3 className="font-display text-xl text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="font-body text-muted-foreground leading-relaxed line-clamp-3 mb-6 flex-grow">
                        {post.excerpt}
                      </p>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 font-body font-medium text-primary group/link"
                      >
                        <motion.span 
                          className="flex items-center gap-2"
                          whileHover={{ x: 4 }}
                        >
                          Read More
                          <ArrowRight size={16} />
                        </motion.span>
                      </Link>
                    </div>
                  </motion.div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default Blog;
