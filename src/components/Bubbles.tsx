
import { motion } from "framer-motion";

const Bubble = ({ delay = 0, size = "small" }: { delay?: number; size?: "small" | "medium" | "large" }) => {
  const sizeClasses = {
    small: "w-4 h-4",
    medium: "w-8 h-8",
    large: "w-12 h-12"
  };

  return (
    <motion.div
      className={`absolute rounded-full bg-white/10 backdrop-blur-sm ${sizeClasses[size]}`}
      initial={{ y: "120vh", opacity: 0 }}
      animate={{
        y: "-20vh",
        opacity: [0, 1, 1, 0],
        x: ["0vw", "10vw", "-10vw", "0vw"]
      }}
      transition={{
        duration: 15,
        delay,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
};

export const FloatingBubbles = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <Bubble delay={0} size="small" />
      <Bubble delay={2} size="medium" />
      <Bubble delay={4} size="large" />
      <Bubble delay={6} size="small" />
      <Bubble delay={8} size="medium" />
      <Bubble delay={10} size="small" />
      <Bubble delay={12} size="large" />
      <Bubble delay={14} size="medium" />
    </div>
  );
};
