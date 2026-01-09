import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import coachImage from "@/assets/coach-about.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block font-body text-sm tracking-widest uppercase text-primary mb-4">
                  About Coach Candice
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-8">
                  Meet Your{" "}
                  <span className="text-primary italic">Health Coach</span>
                </h1>
                
                <div className="space-y-6 font-body text-muted-foreground leading-relaxed">
                  <p>
                    Hi! My name is Candice James, also known as "Coach Candice." I am a licensed Health Coach Practitioner by the Institute of Integrative Nutrition. I am committed to seeing our community, particularly moms and women (often-times wearing so many other hats) and perhaps struggling to do their best "thrive" both on the plate and off the plate, holistically: mind, body and spirit.
                  </p>
                  <p>
                    Additionally, I am a wife, a mother, sister, friend and community advocate. My health journey has been complex. I have dealt with unexplained inflammation, poor gut health, acne, and miscarriages before I put in the work to heal myself. And I didn't do it alone. I had a lot of help along the way, including my very own Health Coach who has been instrumental in my personal health story.
                  </p>
                  <p>
                    And I am happy to report that I am feeling my best! I still take daily steps to ensure I stay on the path to wellness. As I am sure you have heard before, health is a journey, not a destination, and consistent actionable steps are the only way to get and maintain results.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-secondary to-accent/20 rounded-3xl -z-10" />
                <img
                  src={coachImage}
                  alt="Coach Candice"
                  className="w-full max-w-lg mx-auto rounded-2xl shadow-elevated"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* My Story Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-4">
                  My <span className="text-primary italic">Journey</span>
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6 font-body text-muted-foreground leading-relaxed"
              >
                <p>
                  My journey stems from not only my personal health story but also as a result of seeing the lives of others, particularly my family members being impacted negatively; most of which was the result of a lack of wisdom and knowledge concerning how to be proactive in the area of health and how to use holistic knowledge to reverse signs of sickness and disease.
                </p>
                <p>
                  My mission is to help and empower my clients to overcome their most challenging obstacles and live healthier and happier lives. My goal is to encourage positive behavior change and guide individuals towards improving their lifestyle and better managing negative influencing factors.
                </p>
                <p>
                  It is my intent to partner with you on your personal journey to "thrive" not just with diet but emotionally, spiritually, socially and physically, supporting and empowering individuals to reach their highest health potential.
                </p>
                <p className="text-foreground font-semibold text-lg">
                  I look forward to meeting you — Let's Thrive Together!!
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
