
import { motion } from "framer-motion";
import { useCallback } from "react";
import Particles from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { Users, Gamepad2, Star } from "lucide-react";

const Index = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Particles container loaded", container);
  }, []);

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

  return (
    <div className="relative min-h-screen bg-[#1A1F2C]">
      <Particles
        id="tsparticles"
        className="absolute inset-0 -z-10"
        particlesInit={particlesInit}
        particlesLoaded={particlesLoaded}
        options={{
          fullScreen: false,
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "bubble",
              },
              resize: {
                enable: true,
                delay: 0.5,
              },
            },
            modes: {
              push: {
                quantity: 4,
              },
              bubble: {
                distance: 200,
                duration: 2,
                opacity: 0.8,
                size: 20,
              },
            },
          },
          particles: {
            color: {
              value: ["#8B5CF6", "#4F46E5", "#ffffff"],
            },
            links: {
              color: "#8B5CF6",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />

      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex justify-center mb-8">
            <motion.img
              src="/lovable-uploads/0a0c8951-1d32-4201-bea5-c230c96fa8d2.png"
              alt="Wirebyte Logo"
              className="w-24 h-24 md:w-32 md:h-32"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-shimmer bg-clip-text text-transparent bg-[linear-gradient(110deg,#8B5CF6,45%,#4F46E5,55%,#8B5CF6)] bg-[length:200%_100%]">
            Wirebyte Interactive
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Creating incredible gaming experiences on Roblox
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 mb-16">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/about"
              className="glass-card px-8 py-4 font-semibold"
            >
              Meet Our Team
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://boosty.to/wirebyteinteractive"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-8 py-4 rounded-2xl font-semibold hover:bg-primary/90 transition-colors"
            >
              Support Us
            </motion.a>
          </div>

          <div className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gradient-primary">Our Games</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {games.map((game, index) => (
                <motion.div
                  key={game.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="glass-card p-8 text-center group hover:bg-white/5 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{game.icon}</div>
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-primary transition-colors">{game.title}</h3>
                  <p className="text-muted-foreground mb-4">{game.description}</p>
                  <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/20 text-primary">
                    {game.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 text-center hover:bg-white/5 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
