
import { motion } from "framer-motion";

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

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8 text-center">Our Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
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
  );
};

export default About;
