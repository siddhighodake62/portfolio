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
    <section id="skills" className="py-28 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-4 text-slate-100">
              Technical <span className="text-[#2DD4BF]">Expertise</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#2DD4BF] to-[#7C3AED] rounded-full mx-auto" />
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => {
            const Icon = iconMap[skillGroup.icon] || FiGlobe;
            
            return (
              <CardContainer key={index} className="w-full">
                <CardBody className="bg-slate-900/40 relative group/card border-slate-800/60 border hover:border-[#2DD4BF]/30 w-full rounded-3xl p-8 backdrop-blur-xl h-auto">
                  
                  <CardItem translateZ="50" className="flex items-center gap-4 mb-8">
                    <div className="p-3 rounded-2xl bg-[#2DD4BF]/10 text-[#2DD4BF]">
                      <Icon size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-100 font-[family-name:var(--font-heading)]">
                      {skillGroup.category}
                    </h3>
                  </CardItem>

                  <StaggerContainer className="space-y-6">
                    {skillGroup.items.map((skill, i) => (
                      <StaggerItem key={i}>
                        <CardItem translateZ="30" className="w-full">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-slate-300 font-medium">{skill.name}</span>
                            <span className="text-[#2DD4BF] font-mono text-sm">{skill.pct}%</span>
                          </div>
                          <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.pct}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.5, delay: 0.2 + (i * 0.1), ease: "easeOut" }}
                              className="h-full bg-gradient-to-r from-[#2DD4BF] to-[#7C3AED] rounded-full relative"
                            >
                              <div className="absolute top-0 right-0 bottom-0 w-10 bg-gradient-to-r from-transparent to-white/30 blur-[2px]" />
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
