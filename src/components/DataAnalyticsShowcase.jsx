import { powerBiDashboards } from "../data";
import { FadeIn, StaggerContainer, StaggerItem } from "./PageTransitions";
import { FiPieChart, FiTrendingUp, FiMaximize2 } from "react-icons/fi";

export default function DataAnalyticsShowcase() {
  return (
    <section id="analytics" className="py-28 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="mb-16 flex flex-col items-center text-center">
            <div className="p-3 rounded-2xl bg-[#F5C82A]/10 text-[#F5C82A] mb-4">
              <FiPieChart size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-4 text-slate-100">
              Power BI <span className="text-[#F5C82A]">Dashboards</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#F5C82A] to-[#F59E0B] rounded-full mb-6" />
            <p className="text-slate-400 max-w-2xl text-lg">
              Interactive data visualizations driving actionable business intelligence.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid lg:grid-cols-2 gap-10">
          {powerBiDashboards.map((dashboard, index) => (
            <StaggerItem key={index}>
              <div className="bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden group hover:border-[#F5C82A]/40 transition-all duration-500 shadow-2xl">
                
                {/* Dashboard Image / Placeholder */}
                <div className="relative aspect-video bg-slate-800 overflow-hidden">
                  <img 
                    src={dashboard.image} 
                    alt={dashboard.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${dashboard.title.replace(/ /g, "+")}&background=1E293B&color=F5C82A&size=800`;
                    }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                    <button className="px-6 py-3 rounded-full bg-[#F5C82A] text-slate-950 font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-[0_0_20px_rgba(245,200,42,0.4)]">
                      <FiMaximize2 /> View Interactive Demo
                    </button>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-slate-100 mb-3 group-hover:text-[#F5C82A] transition-colors">
                    {dashboard.title}
                  </h3>
                  <p className="text-slate-400 mb-6">
                    {dashboard.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4">
                    {dashboard.kpis.map((kpi, i) => (
                      <div key={i} className="bg-slate-800/50 rounded-xl p-3 text-center border border-slate-700/50">
                        <FiTrendingUp className="text-[#F5C82A] mx-auto mb-1" />
                        <span className="text-xs font-bold text-slate-300 block leading-tight">{kpi}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
