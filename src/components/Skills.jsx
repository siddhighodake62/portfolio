import { skills } from "../data";
import { FadeIn, StaggerContainer, StaggerItem } from "./PageTransitions";
import { motion } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "./3DCard";
import { FiGlobe, FiServer, FiDatabase, FiBarChart2 } from "react-icons/fi";

const iconMap = {
  globe: FiGlobe,
  server: FiServer,
  database: FiDatabase,
  chart: FiBarChart2,
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#7C3AED]">Expertise</span>
            </h2>
            <p className="text-lg text-[#94A3B8] max-w-2xl font-light">
              A comprehensive toolkit spanning data analytics, full-stack development, and modern technologies.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => {
            const Icon = iconMap[skillGroup.icon] || FiGlobe;
            
            return (
              <CardContainer key={index} className="w-full">
                <CardBody className="bg-gradient-to-br from-white/10 to-white/5 relative group/card border border-[#2DD4BF]/20 hover:border-[#2DD4BF]/50 w-full rounded-2xl p-8 backdrop-blur-sm transition-all duration-500">
                  
                  <CardItem translateZ="50" className="flex items-center gap-4 mb-8">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#2DD4BF]/20 to-[#7C3AED]/10 text-[#2DD4BF] group-hover/card:from-[#2DD4BF]/30 group-hover/card:to-[#7C3AED]/20 transition-all duration-500">
                      <Icon size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {skillGroup.category}
                    </h3>
                  </CardItem>

                  <StaggerContainer className="space-y-6">
                    {skillGroup.items.map((skill, i) => (
                      <StaggerItem key={i}>
                        <CardItem translateZ="30" className="w-full">
                          <div className="flex justify-between items-center mb-3">
                            <span className="text-[#CBD5E1] font-medium">{skill.name}</span>
                            <span className="text-[#2DD4BF] font-mono text-sm font-bold">{skill.pct}%</span>
                          </div>
                          <div className="h-2.5 w-full bg-white/5 rounded-full overflow-hidden border border-[#2DD4BF]/10">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.pct}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.5, delay: 0.2 + (i * 0.1), ease: "easeOut" }}
                              className="h-full bg-gradient-to-r from-[#2DD4BF] to-[#7C3AED] rounded-full relative shadow-[0_0_20px_rgba(45,212,191,0.5)]"
                            >
                              <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-r from-transparent to-white/20 blur-sm" />
                            </motion.div>
                          </div>
                        </CardItem>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>

                </CardBody>
              </CardContainer>
            );
          })}
        </div>
      </div>
    </section>
  );
}
