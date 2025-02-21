
import { motion } from "framer-motion";
import { FloatingBubbles } from "../components/Bubbles";

const News = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#111827] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent)] pointer-events-none" />
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-5xl font-bold mb-12 text-center animate-shimmer bg-clip-text text-transparent bg-[linear-gradient(110deg,#8B5CF6,45%,#4F46E5,55%,#8B5CF6)] bg-[length:200%_100%]"
            variants={itemVariants}
          >
            Latest News
          </motion.h1>
          <motion.div 
            className="space-y-6 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="glass-card p-6 backdrop-blur-lg border border-white/10 shadow-[0_0_15px_rgba(139,92,246,0.1)]"
            >
              <motion.div
                className="absolute inset-0 bg-primary/5 blur-3xl rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <p className="text-sm text-primary mb-2">Coming Soon</p>
              <h2 className="text-2xl font-bold mb-2 text-gradient-primary">Stay Tuned!</h2>
              <p className="text-muted-foreground">
                News and updates about our latest projects will appear here.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default News;
