import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Send, Sparkles, CheckCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Newsletter = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    toast({
      title: "Welcome to the community! 🎉",
      description: "You'll receive wellness tips and updates soon.",
    });
    
    setTimeout(() => {
      setName("");
      setEmail("");
      setIsSuccess(false);
    }, 2000);
  };

  return (
    <TooltipProvider delayDuration={200}>
      <section className="bg-primary py-16 relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl"
          animate={{ 
            y: [0, 20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div
              className="flex items-center justify-center gap-2 mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-sm uppercase tracking-widest text-primary-foreground/80">
                Join the Community
              </span>
              <Sparkles className="w-5 h-5 text-accent" />
            </motion.div>
            
            <motion.h2 
              className="font-display text-2xl md:text-3xl font-semibold text-primary-foreground uppercase tracking-wide mb-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Want to Stay Up to Date on All Things Wellness? Sign Up!
            </motion.h2>

            <motion.form 
              onSubmit={handleSubmit} 
              className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.div 
                className="flex-1 relative"
                whileFocus={{ scale: 1.02 }}
              >
                <Input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  disabled={isSubmitting || isSuccess}
                  className="bg-primary-foreground border-0 text-foreground placeholder:text-muted-foreground h-12 rounded-lg focus:ring-2 focus:ring-accent transition-all"
                />
              </motion.div>
              
              <motion.div 
                className="flex-1 relative"
                whileFocus={{ scale: 1.02 }}
              >
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting || isSuccess}
                  className="bg-primary-foreground border-0 text-foreground placeholder:text-muted-foreground h-12 rounded-lg focus:ring-2 focus:ring-accent transition-all"
                />
              </motion.div>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      type="submit"
                      disabled={isSubmitting || isSuccess}
                      className="bg-accent hover:bg-coral-dark text-accent-foreground font-semibold px-8 h-12 rounded-lg transition-all relative overflow-hidden min-w-[140px]"
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
                            <CheckCircle className="w-5 h-5" />
                            Done!
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
                              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
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
                            Sign Up!
                            <Send className="w-4 h-4" />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </Button>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent>Get weekly wellness tips</TooltipContent>
              </Tooltip>
            </motion.form>
            
            <motion.p
              className="text-xs text-primary-foreground/60 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              No spam, unsubscribe anytime. We respect your privacy.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default Newsletter;
