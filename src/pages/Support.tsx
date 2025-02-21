
import { motion } from "framer-motion";

const Support = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8 text-center">Support Us</h1>
        <div className="max-w-2xl mx-auto">
          <div className="glass-card p-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Support Our Work</h2>
            <p className="text-muted-foreground mb-6">
              Help us continue creating amazing games and content for our community.
            </p>
            <a
              href="https://boosty.to/wirebyteinteractive"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors"
            >
              Support on Boosty
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Support;
