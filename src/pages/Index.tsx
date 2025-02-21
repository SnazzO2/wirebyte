
import { motion } from "framer-motion";
import { Users, Gamepad2, Star } from "lucide-react";

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
    <div className="relative min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#111827]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent)] pointer-events-none" />

      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center"
        >
          <motion.div
            className="flex justify-center mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.img
              src="/lovable-uploads/0a0c8951-1d32-4201-bea5-c230c96fa8d2.png"
              alt="Wirebyte Logo"
              className="w-24 h-24 md:w-32 md:h-32"
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
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(139,92,246,0.3)" }}
              whileTap={{ scale: 0.95 }}
              href="/about"
              className="glass-card px-8 py-4 font-semibold"
            >
              Meet Our Team
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(139,92,246,0.3)" }}
              whileTap={{ scale: 0.95 }}
              href="https://boosty.to/wirebyteinteractive"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-8 py-4 rounded-2xl font-semibold hover:bg-primary/90 transition-colors"
            >
              Support Us
            </motion.a>
          </motion.div>

          <motion.div
            className="mb-24"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
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
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
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
                className="glass-card p-6 text-center hover:bg-white/5 transition-all duration-300"
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
