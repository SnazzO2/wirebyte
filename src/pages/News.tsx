
import { motion } from "framer-motion";

const News = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8 text-center">Latest News</h1>
        <div className="space-y-6">
          {/* Placeholder for news items */}
          <div className="glass-card p-6">
            <p className="text-sm text-primary mb-2">Coming Soon</p>
            <h2 className="text-2xl font-bold mb-2">Stay Tuned!</h2>
            <p className="text-muted-foreground">
              News and updates about our latest projects will appear here.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default News;
