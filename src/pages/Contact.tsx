import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Instagram, Facebook } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent! 🌿",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <PageTransition>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-32 bg-primary relative overflow-hidden">
          <motion.div
            className="absolute top-1/4 right-[10%] w-64 h-64 rounded-full border border-primary-foreground/5"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          
          <div className="container-custom relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <span className="label-editorial text-primary-foreground/70 mb-6 block">
                Get in Touch
              </span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-primary-foreground mb-4 leading-[1.1]">
                Let's <span className="italic text-accent">Connect</span>
              </h1>
              <p className="font-body text-lg text-primary-foreground/85 max-w-2xl mx-auto">
                Ready to start your wellness journey? Reach out and let's thrive together!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="label-editorial text-primary mb-6 block">
                  <span className="inline-block w-8 h-px bg-primary/50 mr-3" />
                  Contact Info
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-10">
                  Get in <span className="text-primary italic">Touch</span>
                </h2>

                <div className="space-y-8 mb-12">
                  <motion.div 
                    className="flex items-start gap-5"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-foreground mb-1">Email</h3>
                      <a href="mailto:contactme@thrivewithcoachcandice.com" className="font-body text-muted-foreground hover:text-primary transition-colors">
                        contactme@thrivewithcoachcandice.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start gap-5"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-foreground mb-1">Location</h3>
                      <p className="font-body text-muted-foreground">
                        265 Eastchester Drive, Suite 109<br />
                        High Point, NC 27262
                      </p>
                    </div>
                  </motion.div>
                </div>

                <div>
                  <h3 className="font-display text-lg text-foreground mb-4">Follow Along</h3>
                  <div className="flex gap-3">
                    {[
                      { icon: Facebook, href: "https://www.facebook.com" },
                      { icon: Instagram, href: "https://www.instagram.com" },
                    ].map((social, i) => (
                      <motion.a
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.icon size={20} strokeWidth={1.5} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-card border border-border/50">
                  <h2 className="font-display text-2xl text-foreground mb-8">
                    Send a Message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block font-body text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="h-12 rounded-xl border-border/50 focus:border-primary"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block font-body text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="h-12 rounded-xl border-border/50 focus:border-primary"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block font-body text-sm font-medium text-foreground mb-2">
                        Phone <span className="text-muted-foreground">(Optional)</span>
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="h-12 rounded-xl border-border/50 focus:border-primary"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block font-body text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="min-h-32 rounded-xl resize-none border-border/50 focus:border-primary"
                        placeholder="How can I help you on your wellness journey?"
                      />
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="btn-coral w-full group"
                      >
                        {isSubmitting ? (
                          <motion.div
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default Contact;
