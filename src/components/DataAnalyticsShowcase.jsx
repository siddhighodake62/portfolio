import { powerBiDashboards } from "../data";
import { FadeIn, StaggerContainer, StaggerItem } from "./PageTransitions";
import { FiPieChart, FiTrendingUp, FiMaximize2 } from "react-icons/fi";

export default function DataAnalyticsShowcase() {
  return (
    <section id="analytics" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="mb-8 sm:mb-12 flex flex-col items-center text-center">
            <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-[#F5C82A]/10 text-[#F5C82A] mb-3 sm:mb-4">
              <FiPieChart size={24} className="sm:w-8 sm:h-8" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-2 sm:mb-4 text-slate-100">
              Power BI <span className="text-[#F5C82A]">Dashboards</span>
            </h2>
            <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-[#F5C82A] to-[#F59E0B] rounded-full mb-4 sm:mb-6" />
            <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
              Interactive data visualizations driving actionable business intelligence.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {powerBiDashboards.map((dashboard, index) => (
            <StaggerItem key={index}>
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl sm:rounded-2xl overflow-hidden group hover:border-[#F5C82A]/40 transition-all duration-500 shadow-lg">
                
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
                    <button className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#F5C82A] text-slate-950 font-bold text-sm sm:text-base flex items-center gap-2 hover:scale-105 transition-transform shadow-[0_0_20px_rgba(245,200,42,0.4)]">
                      <FiMaximize2 size={16} className="sm:w-5 sm:h-5" /> View Demo
                    </button>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold font-[family-name:var(--font-heading)] text-slate-100 mb-2 sm:mb-3 group-hover:text-[#F5C82A] transition-colors line-clamp-2">
                    {dashboard.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm mb-4 sm:mb-5 line-clamp-2">
                    {dashboard.description}
                  </p>

                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {dashboard.kpis.map((kpi, i) => (
                      <div key={i} className="bg-slate-800/50 rounded-lg p-2.5 sm:p-3 text-center border border-slate-700/50">
                        <FiTrendingUp className="text-[#F5C82A] mx-auto mb-1" size={16} />
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
