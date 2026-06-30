import { useState } from "react";
import { powerBiDashboards } from "../data";
import { FadeIn, StaggerContainer, StaggerItem } from "./PageTransitions";
import { FiPieChart, FiTrendingUp, FiMaximize2 } from "react-icons/fi";

function AnalyticsPreview({ title, image }) {
  const [imgError, setImgError] = useState(false);
  const isPlaceholder = !image || image.includes("placeholder");

  const renderMotif = () => {
    const t = title.toLowerCase();
    if (t.includes("social") || t.includes("ad")) {
      return (
        <div className="absolute inset-x-4 bottom-3 top-3 border border-white/5 rounded-lg bg-slate-950/40 p-2.5 flex flex-col justify-between">
          <div className="flex justify-between items-center border-b border-white/5 pb-1">
            <span className="text-[8px] text-slate-500 font-mono">ad_perf_live</span>
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f5c518]/60" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
            </div>
          </div>
          <div className="flex-grow flex items-end gap-1.5 pt-2">
            {[30, 45, 60, 35, 80, 50, 75, 40, 90, 65].map((h, i) => (
              <div key={i} className="flex-1 bg-gradient-to-t from-[#f5c518]/20 to-[#f5c518]/80 rounded-sm" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      );
    }
    if (t.includes("earthquake") || t.includes("tsunami")) {
      return (
        <div className="absolute inset-x-4 bottom-3 top-3 border border-white/5 rounded-lg bg-slate-950/40 p-2.5 flex flex-col justify-between">
          <div className="flex justify-between items-center border-b border-white/5 pb-1">
            <span className="text-[8px] text-slate-500 font-mono">seismic_depth_mag</span>
            <span className="text-[8px] text-[#f5c518] font-mono">2001-2022</span>
          </div>
          <div className="flex-grow flex items-center justify-center relative">
            <svg viewBox="0 0 100 30" className="w-full h-full stroke-[#f5c518]/80 fill-none stroke-[1.5]" preserveAspectRatio="none">
              <path d="M 0 15 Q 10 5, 20 15 T 40 15 T 60 15 T 80 5 T 90 25 T 100 15" />
            </svg>
          </div>
        </div>
      );
    }
    return (
      <div className="absolute inset-x-4 bottom-3 top-3 border border-white/5 rounded-lg bg-slate-950/40 p-2.5 flex flex-col justify-between">
        <div className="flex justify-between items-center border-b border-white/5 pb-1">
          <span className="text-[8px] text-slate-500 font-mono">sql_sales_query</span>
          <span className="text-[8px] text-slate-500 font-mono">MySQL</span>
        </div>
        <div className="flex-grow flex gap-2 pt-2 items-center">
          <div className="w-1/2 h-full flex flex-col gap-1 justify-center">
            <div className="h-1.5 bg-slate-800 rounded w-full" />
            <div className="h-1.5 bg-slate-800/40 rounded w-3/4" />
            <div className="h-1.5 bg-slate-800/40 rounded w-5/6" />
          </div>
          <div className="w-1/2 h-full flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border-[3px] border-[#f5c518]/20 border-t-[#f5c518]" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-full h-40 bg-[#070a12] rounded-t-xl overflow-hidden border-b border-slate-800/50 flex flex-col shrink-0">
      {/* Browser Header */}
      <div className="flex items-center px-4 py-2 bg-slate-900/60 border-b border-slate-800/40 gap-1.5 shrink-0">
        <div className="flex gap-1">
          <span className="w-2 h-2 rounded-full bg-[#EF4444]/60" />
          <span className="w-2 h-2 rounded-full bg-[#F59E0B]/60" />
          <span className="w-2 h-2 rounded-full bg-[#10B981]/60" />
        </div>
        <div className="flex-grow">
          <div className="bg-[#0a0e1a]/80 border border-slate-800/40 rounded-md text-[8px] text-slate-500 py-0.5 px-3 max-w-[130px] mx-auto text-center truncate font-mono">
            {title.toLowerCase().replace(/\s+/g, '-')}.xlsx
          </div>
        </div>
      </div>

      {/* Browser Content */}
      <div className="relative flex-grow overflow-hidden flex items-center justify-center bg-[#070a12]">
        {(!imgError && !isPlaceholder) ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e1a] via-[#111827] to-[#0a0e1a] flex items-center justify-center overflow-hidden">
            <div 
              className="absolute inset-0 opacity-10 pointer-events-none" 
              style={{
                backgroundImage: 'radial-gradient(#f5c518 1px, transparent 1px)',
                backgroundSize: '12px 12px'
              }}
            />
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#f5c518]/20 to-transparent pointer-events-none" />
            {renderMotif()}
          </div>
        )}

        <div className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-[2px]">
          <button className="px-4 py-2 rounded-full bg-[#f5c518] text-slate-950 font-bold text-xs flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-[0_0_20px_rgba(245,197,24,0.4)]">
            <FiMaximize2 size={12} /> View Demo
          </button>
        </div>
      </div>
    </div>
  );
}

export default function DataAnalyticsShowcase() {
  return (
    <section id="analytics" className="py-20 sm:py-24 md:py-28 px-4 sm:px-6 relative z-10 bg-[#0a0e1a]">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="mb-12 flex flex-col items-center text-center">
            <div className="p-2.5 sm:p-3 rounded-2xl bg-[#f5c518]/10 text-[#f5c518] mb-3 sm:mb-4">
              <FiPieChart size={28} />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-2 sm:mb-4 text-slate-100">
              Data Analytics & <span className="text-[#f5c518]">Dashboards</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#f5c518] to-[#f59e0b] rounded-full mb-4" />
            <p className="text-slate-400 max-w-2xl text-sm sm:text-base font-light">
              Detailed analytical pipelines and interactive dashboards translating complex data into business intelligence.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {powerBiDashboards.map((dashboard, index) => (
            <StaggerItem key={index}>
              <div className="bg-[#0a0e1a]/95 border border-white/5 rounded-2xl overflow-hidden group hover:border-[#f5c518]/40 transition-all duration-500 shadow-xl flex flex-col h-full hover:shadow-[0_20px_40px_rgba(10,14,26,0.8)]">
                
                {/* Custom Preview */}
                <AnalyticsPreview title={dashboard.title} image={dashboard.image} />

                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] text-slate-100 mb-2 group-hover:text-[#f5c518] transition-colors line-clamp-2">
                      {dashboard.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm mb-5 leading-relaxed font-light line-clamp-3">
                      {dashboard.description}
                    </p>
                  </div>

                  {/* Compact KPI stat cards */}
                  <div className="grid grid-cols-3 gap-2 border-t border-white/5 pt-4">
                    {dashboard.kpis.map((kpi, i) => (
                      <div key={i} className="bg-slate-950/60 rounded-xl p-2 text-center border border-white/5 hover:border-[#f5c518]/30 transition-all flex flex-col justify-center gap-1 relative overflow-hidden">
                        <div className="absolute top-1 right-1">
                          <FiTrendingUp className="text-[#f5c518]/60 w-2.5 h-2.5" />
                        </div>
                        <span className="text-xs font-extrabold text-slate-100 tracking-tight leading-none block">
                          {kpi.value}
                        </span>
                        <span className="text-[8px] font-mono uppercase text-slate-400 block leading-tight truncate">
                          {kpi.label}
                        </span>
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
