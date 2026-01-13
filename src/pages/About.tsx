import { motion } from "framer-motion";
import { Heart, Leaf, Award, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import coachImage from "@/assets/coach-about.jpg";

const credentials = [
  { icon: Award, label: "IIN Certified Health Coach" },
  { icon: Leaf, label: "Holistic Approach" },
  { icon: Heart, label: "Personalized Care" },
];

const About = () => {
  return (
    <PageTransition>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
          {/* Decorative elements */}
          <motion.div
            className="absolute top-20 right-[5%] w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 rounded-full border border-primary/5"
            animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 left-[10%] w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 rounded-full bg-accent/5 blur-3xl"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="order-2 lg:order-1"
              >
                <span className="label-editorial text-primary mb-4 sm:mb-6 block text-xs">
                  <span className="inline-block w-6 sm:w-8 h-px bg-primary/50 mr-2 sm:mr-3" />
                  About Coach Candice
                </span>
                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 sm:mb-8 leading-[1.1]">
                  Meet Your{" "}
                  <span className="text-primary italic">Health Coach</span>
                </h1>
                
                {/* Credentials */}
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                  {credentials.map((cred, index) => (
                    <motion.div
                      key={cred.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-1.5 sm:gap-2 bg-card rounded-full px-3 sm:px-4 py-1.5 sm:py-2 border border-border/50 text-xs sm:text-sm"
                    >
                      <cred.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" strokeWidth={1.5} />
                      <span className="font-medium text-foreground">{cred.label}</span>
                    </motion.div>
                  ))}
                </div>
                
                <div className="space-y-4 sm:space-y-6 font-body text-muted-foreground leading-relaxed text-sm sm:text-base">
                  <p>
                    Hi! My name is Candice James, also known as "Coach Candice." I am a licensed Health Coach Practitioner by the Institute of Integrative Nutrition. I am committed to seeing our community, particularly moms and women (often-times wearing so many other hats) and perhaps struggling to do their best "thrive" both on the plate and off the plate, holistically: mind, body and spirit.
                  </p>
                  <p>
                    Additionally, I am a wife, a mother, sister, friend and community advocate. My health journey has been complex. I have dealt with unexplained inflammation, poor gut health, acne, and miscarriages before I put in the work to heal myself. And I didn't do it alone.
                  </p>
                  <p>
                    And I am happy to report that I am feeling my best! I still take daily steps to ensure I stay on the path to wellness. As I am sure you have heard before, health is a journey, not a destination.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative order-1 lg:order-2"
              >
                <motion.div 
                  className="absolute -inset-3 sm:-inset-4 border border-primary/10 rounded-2xl sm:rounded-3xl"
                  animate={{ rotate: [0, 1, 0, -1, 0] }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
                <div className="relative">
                  <img
                    src={coachImage}
                    alt="Coach Candice"
                    className="w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto rounded-xl sm:rounded-2xl shadow-elevated aspect-[3/4] object-cover object-top"
                  />
                  {/* Floating badge */}
                  <motion.div
                    className="absolute -bottom-4 -right-2 sm:-right-4 bg-accent text-accent-foreground rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-card"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                      <div>
                        <span className="font-display text-lg sm:text-xl block leading-none">10+</span>
                        <span className="text-[10px] sm:text-xs opacity-80">Years</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* My Story Section */}
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-background relative">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
            backgroundSize: '48px 48px',
          }} />
          
          <div className="container-custom relative px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-10 sm:mb-12"
              >
                <span className="label-editorial text-primary mb-4 sm:mb-6 block text-xs">My Story</span>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground">
                  The <span className="text-primary italic">Journey</span>
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4 sm:space-y-6 font-body text-muted-foreground leading-relaxed text-sm sm:text-base"
              >
                <p>
                  My journey stems from not only my personal health story but also as a result of seeing the lives of others, particularly my family members being impacted negatively; most of which was the result of a lack of wisdom and knowledge concerning how to be proactive in the area of health.
                </p>
                <p>
                  My mission is to help and empower my clients to overcome their most challenging obstacles and live healthier and happier lives. My goal is to encourage positive behavior change and guide individuals towards improving their lifestyle.
                </p>
                <p>
                  It is my intent to partner with you on your personal journey to "thrive" not just with diet but emotionally, spiritually, socially and physically, supporting and empowering individuals to reach their highest health potential.
                </p>
                <p className="text-foreground font-medium text-base sm:text-lg pt-3 sm:pt-4">
                  I look forward to meeting you — Let's Thrive Together!
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 sm:py-20 bg-primary relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-white/5 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          
          <div className="container-custom relative px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 text-center">
              {[
                { title: "Nourish", desc: "Feed your body with intention and purpose" },
                { title: "Heal", desc: "Restore balance and vitality from within" },
                { title: "Thrive", desc: "Live your healthiest, most vibrant life" },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="p-6 sm:p-8"
                >
                  <h3 className="font-display text-2xl sm:text-3xl text-primary-foreground mb-2 sm:mb-3 italic">
                    {value.title}
                  </h3>
                  <p className="font-body text-primary-foreground/70 text-sm sm:text-base">
                    {value.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default About;
