import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Calendar, Phone, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const FloatingWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const actions = [
    { id: "call", icon: Phone, label: "Call Now", color: "bg-highlight" },
    { id: "email", icon: Mail, label: "Send Email", color: "bg-accent" },
    { id: "book", icon: Calendar, label: "Book Session", color: "bg-primary" },
  ];

  return (
    <TooltipProvider delayDuration={0}>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        <AnimatePresence>
          {isOpen && (
            <>
              {actions.map((action, index) => (
                <motion.div
                  key={action.id}
                  initial={{ opacity: 0, scale: 0, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0, y: 20 }}
                  transition={{ 
                    delay: index * 0.1, 
                    type: "spring", 
                    stiffness: 300,
                    damping: 20 
                  }}
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <motion.button
                        whileHover={{ scale: 1.15, x: -5 }}
                        whileTap={{ scale: 0.95 }}
                        onHoverStart={() => setHoveredItem(action.id)}
                        onHoverEnd={() => setHoveredItem(null)}
                        className={`${action.color} w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transition-shadow hover:shadow-xl`}
                      >
                        <action.icon size={20} />
                      </motion.button>
                    </TooltipTrigger>
                    <TooltipContent side="left" className="font-medium">
                      {action.label}
                    </TooltipContent>
                  </Tooltip>
                </motion.div>
              ))}
            </>
          )}
        </AnimatePresence>

        <Tooltip>
          <TooltipTrigger asChild>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{ 
                rotate: isOpen ? 180 : 0,
                boxShadow: isOpen 
                  ? "0 0 0 4px rgba(134, 160, 108, 0.3)" 
                  : "0 10px 40px -10px rgba(134, 160, 108, 0.5)"
              }}
              onClick={() => setIsOpen(!isOpen)}
              className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-elevated relative overflow-hidden"
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
              </motion.div>
              
              {/* Pulse ring */}
              {!isOpen && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-primary"
                  animate={{ scale: [1, 1.5, 1.5], opacity: [0.5, 0, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </motion.button>
          </TooltipTrigger>
          <TooltipContent side="left" className="font-medium">
            {isOpen ? "Close" : "Get in Touch"}
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
};

export default FloatingWidget;
