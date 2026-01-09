import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Welcome to the community!",
      description: "You'll receive wellness tips and updates soon.",
    });
    setName("");
    setEmail("");
  };

  return (
    <section className="bg-primary py-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary-foreground uppercase tracking-wide mb-8">
            Want to Stay Up to Date on All Things Wellness? Sign Up!
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="flex-1 bg-primary-foreground border-0 text-foreground placeholder:text-muted-foreground h-12 rounded-lg"
            />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-primary-foreground border-0 text-foreground placeholder:text-muted-foreground h-12 rounded-lg"
            />
            <Button 
              type="submit"
              className="bg-accent hover:bg-coral-dark text-accent-foreground font-semibold px-8 h-12 rounded-lg transition-colors"
            >
              Sign Up!
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
