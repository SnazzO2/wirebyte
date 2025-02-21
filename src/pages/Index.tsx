import { motion } from "framer-motion";
import { Users, Gamepad2, Star } from "lucide-react";

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

const FloatingBubbles = () => {
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

const Index = () => {
  const games = [
    {
      title: "Project Capybaras",
      description: "A spine-chilling single-player experience inspired by Five Nights at Freddy's.",
      icon: "🐹",
      status: "Released"
    },
    {
      title: "Project Capybaras Revolver",
      description: "An exciting multiplayer AU project expanding the Capybaras universe.",
      icon: "🔫",
      status: "In Development"
    },
    {
      title: "Quab",
      description: "A mind-bending puzzle game inspired by Portal. Test your wit and creativity.",
      icon: "🌀",
      status: "Coming Soon"
    }
  ];

  const features = [
    {
      icon: <Gamepad2 className="w-8 h-8 text-primary" />,
      title: "Engaging Games",
      description: "Experience thrilling gameplay with our meticulously crafted Roblox games."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Active Community",
      description: "Join our vibrant community of players and developers."
    },
    {
      icon: <Star className="w-8 h-8 text-primary" />,
      title: "Regular Updates",
      description: "Enjoy frequent content updates and new features in our games."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
      
      <div className="container mx-auto px-4 py-24 relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center"
        >
          <motion.div
            className="flex justify-center mb-8 relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="absolute inset-0 bg-primary/20 blur-2xl rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src="/lovable-uploads/0a0c8951-1d32-4201-bea5-c230c96fa8d2.png"
              alt="Wirebyte Logo"
              className="w-24 h-24 md:w-32 md:h-32 relative"
              initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
            />
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 animate-shimmer bg-clip-text text-transparent bg-[linear-gradient(110deg,#8B5CF6,45%,#4F46E5,55%,#8B5CF6)] bg-[length:200%_100%]"
            variants={itemVariants}
          >
            Wirebyte Interactive
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Creating incredible gaming experiences on Roblox
          </motion.p>
          
          <motion.div
            className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 mb-16"
            variants={itemVariants}
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/about"
              className="glass-card px-8 py-4 font-semibold backdrop-blur-lg border border-white/10 shadow-[0_0_15px_rgba(139,92,246,0.1)]"
            >
              Meet Our Team
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://boosty.to/wirebyteinteractive"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary/80 backdrop-blur-lg text-white px-8 py-4 rounded-2xl font-semibold hover:bg-primary/90 transition-colors shadow-[0_0_15px_rgba(139,92,246,0.2)] border border-white/10"
            >
              Support Us
            </motion.a>
          </motion.div>

          <motion.div
            className="mb-24 relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
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
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-12 text-gradient-primary"
              variants={itemVariants}
            >
              Our Games
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {games.map((game, index) => (
                <motion.div
                  key={game.title}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className="glass-card p-8 text-center group hover:bg-white/5 transition-all duration-300"
                >
                  <motion.div
                    className="text-4xl mb-4"
                    whileHover={{ rotate: [0, -10, 10, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {game.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
                    {game.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{game.description}</p>
                  <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/20 text-primary">
                    {game.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="glass-card p-6 text-center hover:bg-white/5 transition-all duration-300 backdrop-blur-lg border border-white/10 shadow-[0_0_15px_rgba(139,92,246,0.1)]"
              >
                <motion.div
                  className="flex justify-center mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
