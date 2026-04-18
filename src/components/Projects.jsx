import { Globe, Cpu, Terminal, Github, ExternalLink } from 'lucide-react';
import { projects } from '../constants';

const iconMap = { Globe, Cpu, Terminal };

const Projects = () => {
  return (
    <div className="animate-in fade-in slide-in-from-right-8 duration-500">
      <div className="mb-16 space-y-4">
        <h2 className="text-5xl font-black uppercase tracking-tighter">
          Selected <span className="text-indigo-500">Works</span>
        </h2>
        <p className="text-xl text-slate-400 font-medium max-w-2xl">
          Engineering focused solutions for modern business challenges.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => {
          const Icon = iconMap[p.iconName];
          return (
            <div
              key={i}
              className="group relative bg-slate-900/30 border border-slate-800 rounded-[2.5rem] p-10 hover:border-indigo-500/50 transition-all hover:bg-slate-900 shadow-2xl overflow-hidden min-h-[340px] flex flex-col"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-8 group-hover:scale-110 transition-transform">
                {Icon && <Icon className="w-5 h-5" />}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-black mb-2 uppercase tracking-tighter">{p.title}</h3>

              {/* Description */}
              <p className="text-slate-500 text-sm mb-6 flex-grow">{p.desc}</p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[9px] font-black text-slate-400 uppercase tracking-widest bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4">
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-indigo-400 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
                {p.githubUrl && (
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;