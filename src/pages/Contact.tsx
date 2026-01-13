import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle, 
  Instagram, 
  Facebook,
  Clock,
  Sparkles
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contactme@thrivewithcoachcandice.com",
    href: "mailto:contactme@thrivewithcoachcandice.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "265 Eastchester Drive, Suite 109\nHigh Point, NC 27262",
    href: "https://maps.google.com/?q=265+Eastchester+Drive+Suite+109+High+Point+NC+27262",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon - Fri: 9AM - 5PM\nWeekends: By Appointment",
    href: null,
  },
];

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com", label: "Instagram" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    toast({
      title: "Message sent! 🌿",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setIsSuccess(false);
    }, 3000);
  };

  return (
    <PageTransition>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-24 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-b from-primary to-sage-dark">
          {/* Animated background elements */}
          <motion.div
            className="absolute top-20 left-[10%] w-48 md:w-64 h-48 md:h-64 rounded-full border border-primary-foreground/10"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-10 right-[15%] w-24 md:w-32 h-24 md:h-32 rounded-full bg-accent/10 blur-2xl"
            animate={{ 
              scale: [1, 1.3, 1],
              y: [0, -20, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 right-[5%] w-32 md:w-48 h-32 md:h-48 rounded-full border border-primary-foreground/5 hidden sm:block"
            animate={{ 
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center max-w-3xl mx-auto"
            >
              <motion.span 
                className="label-editorial text-primary-foreground/70 mb-4 sm:mb-6 block text-xs sm:text-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="inline-block w-6 sm:w-8 h-px bg-primary-foreground/50 mr-2 sm:mr-3" />
                Let's Connect
                <span className="inline-block w-6 sm:w-8 h-px bg-primary-foreground/50 ml-2 sm:ml-3" />
              </motion.span>
              
              <motion.h1 
                className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground mb-4 sm:mb-6 leading-[1.1]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Start Your{" "}
                <span className="italic text-accent">Wellness</span>{" "}
                Journey
              </motion.h1>
              
              <motion.p 
                className="font-body text-base sm:text-lg md:text-xl text-primary-foreground/80 max-w-xl mx-auto px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Ready to transform your health? Reach out and let's discuss how we can work together to help you thrive.
              </motion.p>
            </motion.div>
          </div>

          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* Main Content */}
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-background relative">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
            backgroundSize: '48px 48px',
          }} />

          <div className="container-custom relative px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
              {/* Contact Info Column */}
              <motion.div 
                className="lg:col-span-2 space-y-6 sm:space-y-8"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div>
                  <span className="label-editorial text-primary mb-3 sm:mb-4 block text-xs">
                    Get in Touch
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground mb-3 sm:mb-4">
                    We'd Love to{" "}
                    <span className="italic text-primary">Hear</span> From You
                  </h2>
                  <p className="font-body text-muted-foreground leading-relaxed text-sm sm:text-base">
                    Whether you have questions about our coaching programs or are ready to start your wellness journey, we're here to help.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-3 sm:space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {info.href ? (
                        <a 
                          href={info.href}
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="block"
                        >
                          <motion.div
                            className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-card border border-border/50 transition-all duration-300 hover:border-primary/30 hover:shadow-soft group"
                            whileHover={{ y: -4 }}
                          >
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                              <info.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" strokeWidth={1.5} />
                            </div>
                            <div className="min-w-0 flex-1">
                              <span className="font-body text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground block mb-0.5 sm:mb-1">
                                {info.label}
                              </span>
                              <span className="font-body text-sm sm:text-base text-foreground whitespace-pre-line leading-relaxed break-words">
                                {info.value}
                              </span>
                            </div>
                          </motion.div>
                        </a>
                      ) : (
                        <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-card border border-border/50">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <info.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" strokeWidth={1.5} />
                          </div>
                          <div>
                            <span className="font-body text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground block mb-0.5 sm:mb-1">
                              {info.label}
                            </span>
                            <span className="font-body text-sm sm:text-base text-foreground whitespace-pre-line leading-relaxed">
                              {info.value}
                            </span>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="pt-4 sm:pt-6"
                >
                  <span className="font-body text-xs sm:text-sm text-muted-foreground block mb-3 sm:mb-4">
                    Follow Us
                  </span>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.icon size={18} strokeWidth={1.5} />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Contact Form Column */}
              <motion.div 
                className="lg:col-span-3"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative">
                  {/* Decorative element */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-24 sm:w-32 h-24 sm:h-32 bg-accent/10 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 6, repeat: Infinity }}
                  />
                  
                  <form 
                    onSubmit={handleSubmit}
                    className="relative bg-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 border border-border/50 shadow-soft"
                  >
                    {/* Form Header */}
                    <div className="flex items-center gap-3 mb-6 sm:mb-8">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center">
                        <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg sm:text-xl text-foreground">Send a Message</h3>
                        <p className="font-body text-xs sm:text-sm text-muted-foreground">We'll respond within 24 hours</p>
                      </div>
                    </div>

                    <div className="space-y-4 sm:space-y-5">
                      {/* Name & Email Row */}
                      <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                        <div className="space-y-1.5 sm:space-y-2">
                          <label className="font-body text-xs sm:text-sm font-medium text-foreground">
                            Full Name <span className="text-accent">*</span>
                          </label>
                          <Input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting || isSuccess}
                            placeholder="Your name"
                            className="h-11 sm:h-12 bg-background border-border/50 rounded-lg sm:rounded-xl px-3 sm:px-4 font-body text-sm focus:border-primary focus:ring-primary/20"
                          />
                        </div>
                        <div className="space-y-1.5 sm:space-y-2">
                          <label className="font-body text-xs sm:text-sm font-medium text-foreground">
                            Email <span className="text-accent">*</span>
                          </label>
                          <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting || isSuccess}
                            placeholder="your@email.com"
                            className="h-11 sm:h-12 bg-background border-border/50 rounded-lg sm:rounded-xl px-3 sm:px-4 font-body text-sm focus:border-primary focus:ring-primary/20"
                          />
                        </div>
                      </div>

                      {/* Phone & Subject Row */}
                      <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                        <div className="space-y-1.5 sm:space-y-2">
                          <label className="font-body text-xs sm:text-sm font-medium text-foreground">
                            Phone <span className="text-muted-foreground text-[10px] sm:text-xs">(Optional)</span>
                          </label>
                          <Input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            disabled={isSubmitting || isSuccess}
                            placeholder="(555) 123-4567"
                            className="h-11 sm:h-12 bg-background border-border/50 rounded-lg sm:rounded-xl px-3 sm:px-4 font-body text-sm focus:border-primary focus:ring-primary/20"
                          />
                        </div>
                        <div className="space-y-1.5 sm:space-y-2">
                          <label className="font-body text-xs sm:text-sm font-medium text-foreground">
                            Subject <span className="text-accent">*</span>
                          </label>
                          <Input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting || isSuccess}
                            placeholder="How can we help?"
                            className="h-11 sm:h-12 bg-background border-border/50 rounded-lg sm:rounded-xl px-3 sm:px-4 font-body text-sm focus:border-primary focus:ring-primary/20"
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div className="space-y-1.5 sm:space-y-2">
                        <label className="font-body text-xs sm:text-sm font-medium text-foreground">
                          Message <span className="text-accent">*</span>
                        </label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting || isSuccess}
                          placeholder="Tell us about your wellness goals..."
                          rows={4}
                          className="bg-background border-border/50 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 font-body text-sm resize-none focus:border-primary focus:ring-primary/20"
                        />
                      </div>

                      {/* Submit Button */}
                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className="pt-1 sm:pt-2"
                      >
                        <Button
                          type="submit"
                          disabled={isSubmitting || isSuccess}
                          className="w-full h-12 sm:h-14 btn-coral text-sm sm:text-base"
                        >
                          <AnimatePresence mode="wait">
                            {isSuccess ? (
                              <motion.span
                                key="success"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                className="flex items-center gap-2"
                              >
                                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                                Message Sent!
                              </motion.span>
                            ) : isSubmitting ? (
                              <motion.span
                                key="loading"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex items-center gap-2"
                              >
                                <motion.div
                                  className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full"
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                />
                                Sending...
                              </motion.span>
                            ) : (
                              <motion.span
                                key="default"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex items-center gap-2"
                              >
                                Send Message
                                <Send className="w-4 h-4" />
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </Button>
                      </motion.div>
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-secondary/50 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          
          <div className="container-custom relative px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto"
            >
              <span className="label-editorial text-primary mb-4 sm:mb-6 block text-xs">
                Ready to Begin?
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 sm:mb-6">
                Book Your Free{" "}
                <span className="italic text-primary">Consultation</span>
              </h2>
              <p className="font-body text-sm sm:text-base md:text-lg text-muted-foreground mb-8 sm:mb-10 px-4">
                Take the first step towards a healthier you. Schedule a complimentary 30-minute discovery call.
              </p>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <Button className="btn-coral group text-sm sm:text-base">
                  <span className="flex items-center gap-2">
                    Schedule a Call
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default Contact;
