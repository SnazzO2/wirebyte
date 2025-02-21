
import { motion } from "framer-motion";
import { FloatingBubbles } from "../components/Bubbles";

const About = () => {
  const teamMembers = [
    {
      name: "RTD",
      role: "Main Creator",
      location: "Russia",
      languages: ["Russian", "English"],
    },
    {
      name: "Unikat",
      role: "Main Creator",
      location: "Russia",
      languages: ["Russian", "English"],
    },
    {
      name: "Kiwix",
      role: "GUI Developer",
      location: "Kyrgyzstan",
      languages: ["Russian", "English"],
    },
    {
      name: "Picture Cat",
      role: "Scripts Developer",
      location: "Russia",
      languages: ["Russian", "English"],
    },
    {
      name: "Treskyn4ik",
      role: "Tester & Support",
      location: "Russia",
      languages: ["Russian", "English"],
    },
  ];

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
            Our Team
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="glass-card p-6 text-center backdrop-blur-lg border border-white/10 shadow-[0_0_15px_rgba(139,92,246,0.1)]"
              >
                <h3 className="text-2xl font-bold mb-2 text-gradient-primary">{member.name}</h3>
                <p className="text-primary mb-2">{member.role}</p>
                <p className="text-muted-foreground">
                  Location: {member.location}
                </p>
                <p className="text-muted-foreground">
                  Languages: {member.languages.join(", ")}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
