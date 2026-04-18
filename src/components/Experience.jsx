// import { BookOpen, Download, CheckCircle2 } from 'lucide-react';
// import { experience } from '../constants';

// const Experience = () => {
//   return (
//     <div className="animate-in fade-in slide-in-from-right-8 duration-500 space-y-16">
//       <div className="grid lg:grid-cols-12 gap-12">
//         {/* Left Column */}
//         <div className="lg:col-span-5 space-y-8">
//           <h2 className="text-5xl font-black uppercase tracking-tighter">
//             <span className="text-indigo-500">Kashish Gupta</span>
//           </h2>
//           <div className="p-10 rounded-[3rem] bg-indigo-600 text-white space-y-8 shadow-2xl">
//             <h3 className="text-2xl font-black flex items-center gap-3 uppercase tracking-tighter">
//               <BookOpen className="w-7 h-7" /> Education
//             </h3>
//             <div>
//               <div className="text-lg font-black uppercase tracking-tight">B.Tech Computer Science</div>
//               <div className="text-indigo-100/70 font-bold">Maharana Pratap Engineering College • 2023-2027</div>
//             </div>
//           </div>
//           <button className="group w-full py-6 bg-slate-900 border border-slate-800 rounded-[2rem] font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 hover:bg-slate-800 transition-all border-indigo-500/10 hover:border-indigo-500/50">
//             <Download className="w-5 h-5 text-indigo-400 group-hover:animate-bounce" /> Download Full CV
//           </button>
//         </div>

//         {/* Right Column — Work History */}
//         <div className="lg:col-span-7 space-y-12">
//           <h3 className="text-xl font-black flex items-center gap-3 uppercase tracking-[0.3em] text-slate-600">
//            About me
//           </h3>
//           <div className="space-y-12 border-l-2 border-slate-800 pl-10 ml-2 relative">
//             {experience.map((exp, i) => (
//               <div key={i} className="relative group">
//                 <div className="absolute -left-[51px] top-1 w-6 h-6 bg-indigo-600 rounded-full border-4 border-slate-950 transition-transform group-hover:scale-125 shadow-lg shadow-indigo-600/20"></div>
//                 <div className="space-y-3">
//                   <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400 bg-indigo-400/10 px-3 py-1 rounded-lg">
//                     {exp.period}
//                   </span>
//                   <h4 className="text-2xl font-black tracking-tight">{exp.role}</h4>
//                   <div className="text-indigo-300 font-bold uppercase tracking-widest text-xs">
//                     {exp.company}
//                   </div>
//                   <p className="text-slate-400 leading-relaxed font-medium">{exp.description}</p>
//                   <div className="flex flex-wrap gap-2 pt-2">
//                     {exp.achievements.map((ach, idx) => (
//                       <div
//                         key={idx}
//                         className="flex items-center gap-2 text-xs text-slate-500 bg-slate-900/50 px-3 py-1.5 rounded-xl border border-slate-800"
//                       >
//                         <CheckCircle2 className="w-3 h-3 text-indigo-500" /> {ach}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Experience;
import { useState } from 'react';
import {
  User, GraduationCap, Award, Rocket, Code2,
  Zap, Star, CheckCircle2, Download, ChevronRight,
  Cpu, Database, Globe, Terminal, GitBranch,
} from 'lucide-react';

const SKILLS = [
  {
    category: 'Frontend',
    icon: <Globe className="w-4 h-4" />,
    color: '#818cf8',
    bg: 'rgba(99,102,241,0.1)',
    border: 'rgba(99,102,241,0.25)',
    items: [
      { name: 'React', level: 70 },
      { name: 'HTML', level: 85 },
      { name: 'Javascript', level: 70 },
      { name: 'CSS', level: 80 },
    ],
  },
  {
    category: 'Backend',
    icon: <Database className="w-4 h-4" />,
    color: '#34d399',
    bg: 'rgba(52,211,153,0.1)',
    border: 'rgba(52,211,153,0.25)',
    items: [
      { name: 'Node.js', level: 50 },
      { name: 'Postman', level: 70 },
      { name: 'MongoDB', level: 65 },
    ],
  },
  {
    category: 'Tools & DSA',
    icon: <GitBranch className="w-4 h-4" />,
    color: '#fbbf24',
    bg: 'rgba(251,191,36,0.1)',
    border: 'rgba(251,191,36,0.25)',
    items: [
      { name: 'Git / GitHub', level: 80 },
      { name: 'DSA (Java)', level: 85 },
      { name: 'Python', level: 70 },
      { name: 'VS Code', level: 72 },
    ],
  },
];

const ACHIEVEMENTS = [
  { icon: <Terminal className="w-4 h-4" />, title: '300+ Problems Solved', sub: 'LeetCode & HackerRank combined', color: '#ffa116' },
  { icon: <Star className="w-4 h-4" />,      title: '5-Star HackerRank',    sub: 'Problem Solving & SQL',         color: '#2ec866' },
  { icon: <Cpu className="w-4 h-4" />,       title: 'ML Chrome Extension',  sub: 'Image security via deep learning', color: '#818cf8' },
  { icon: <Zap className="w-4 h-4" />,       title: 'Voice Queue System',   sub: 'Smart voice based queue management',  color: '#34d399' },
];

const EDUCATION = {
  degree: 'B.Tech — Computer Science',
  institution: 'Maharana Pratap Engineering College, Kanpur',
  period: '2023 — 2027',
  cgpa: '7.3',
};

function SkillBar({ name, level, color }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center">
        <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">{name}</span>
        <span className="text-[10px] font-black" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 bg-slate-800/50 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000"
          style={{ width: `${level}%`, background: color }}
        />
      </div>
    </div>
  );
}

function SectionLabel({ icon, label, color }) {
  return (
    <div className="flex items-center gap-2 mb-5">
      <span style={{ color }} className="flex items-center">{icon}</span>
      <span
        className="text-[10px] font-black uppercase tracking-[0.25em]"
        style={{ color }}
      >
        {label}
      </span>
      <div className="flex-1 h-px bg-slate-800/40" />
    </div>
  );
}

const Experience = () => {
  const [activeSkill, setActiveSkill] = useState(0);

  return (
    <div className="relative min-h-screen bg-[#030014] overflow-hidden">

      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99,102,241,0.08) 1px, transparent 1px),' +
            'linear-gradient(90deg, rgba(99,102,241,0.08) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-indigo-600/15 blur-[120px] animate-pulse" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 lg:py-20 animate-in fade-in slide-in-from-bottom-8 duration-700">

        {/* Page Title */}
        <div className="relative mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            <User className="w-3 h-3" /> About Me
          </div>
          <h2 className="text-5xl lg:text-7xl font-black tracking-tighter text-slate-100 leading-none">
            WHO I <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-400 to-cyan-400">AM.</span>
          </h2>
        </div>

        <div className="relative grid lg:grid-cols-12 gap-8">

          {/* ── LEFT COL ── */}
          <div className="lg:col-span-5 space-y-6">

            {/* Profile card */}
            <div className="relative rounded-3xl overflow-hidden border border-white/5 bg-white/[0.03] backdrop-blur-xl p-8">
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-indigo-600/15 rounded-full blur-2xl pointer-events-none" />
              <div className="relative flex items-center gap-6">
                <div
                  className="w-24 h-24 rounded-2xl flex-shrink-0 p-[2.5px]"
                  style={{ background: 'linear-gradient(135deg,#6366f1,#a855f7,#22d3ee)' }}
                >
                  <div className="w-full h-full rounded-[14px] bg-[#030014] flex items-center justify-center">
                    <span className="text-2xl font-black text-indigo-400 tracking-tighter">KG</span>
                  </div>
                </div>
                <div>
                  <p className="text-2xl font-black text-slate-100 tracking-tight leading-none">Kashish Gupta</p>
                  <p className="text-[11px] text-indigo-400 font-bold uppercase tracking-widest mt-2">Full-Stack Developer</p>
                  <div className="flex items-center gap-1.5 mt-3">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
                    <span className="text-[10px] text-green-400 font-bold">Open to Opportunities</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="rounded-3xl border border-white/5 bg-white/[0.03] backdrop-blur-xl p-8">
              <SectionLabel icon={<Rocket className="w-4 h-4" />} label="Mission" color="#818cf8" />
              <p className="text-[14px] text-slate-400 leading-[1.8] font-medium">
                Computer Science student passionate about software development and problem solving, with hands-on experience building real-world projects — from a fingerprint attendance system to an ML-powered Chrome extension. Skilled in full-stack development with a strong focus on database design, writing efficient queries, and making data flow seamlessly through the backend. Proficient in MySQL and MongoDB, with a 5-star HackerRank rating in SQL that reflects my backend depth. Always eager to learn and contribute to impactful projects.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['MERN Stack', 'DSA', 'Open Source'].map((tag) => (
                  <span key={tag}
                    className="px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20
                               text-indigo-300 text-[10px] font-black uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="rounded-3xl border border-white/5 bg-white/[0.03] backdrop-blur-xl p-8">
              <SectionLabel icon={<GraduationCap className="w-4 h-4" />} label="Education" color="#34d399" />
              <div className="group flex gap-5 items-start">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-green-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-base font-black text-slate-100 leading-tight">{EDUCATION.degree}</p>
                  <p className="text-[12px] text-slate-500 mt-1 leading-snug">{EDUCATION.institution}</p>
                  <div className="flex items-center gap-3 mt-4 flex-wrap">
                    <span className="text-[10px] font-black text-green-400 bg-green-500/10 border border-green-500/20 px-2.5 py-1 rounded-lg">
                      CGPA: {EDUCATION.cgpa}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">
                      {EDUCATION.period}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Download CV */}
            <button className="group w-full py-5 bg-white/[0.03] border border-white/5 rounded-2xl
                               font-black uppercase tracking-[0.2em] text-[11px] flex items-center
                               justify-center gap-3 hover:bg-white/[0.06] hover:border-indigo-500/40
                               transition-all text-slate-400 hover:text-white">
              <Download className="w-4 h-4 text-indigo-400 group-hover:animate-bounce" />
              Download Full CV
            </button>
          </div>

          {/* ── RIGHT COL ── */}
          <div className="lg:col-span-7 space-y-6">

            {/* ── Achievements (now first) ── */}
            <div className="rounded-3xl border border-white/5 bg-white/[0.03] backdrop-blur-xl p-8">
              <SectionLabel icon={<Award className="w-4 h-4" />} label="Achievements" color="#f472b6" />
              <div className="grid sm:grid-cols-2 gap-4">
                {ACHIEVEMENTS.map((ach, i) => (
                  <div
                    key={i}
                    className="group flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02]
                               border border-white/5 hover:border-white/10
                               transition-all hover:bg-white/[0.04] cursor-default"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors"
                      style={{ background: `${ach.color}15`, border: `1px solid ${ach.color}30`, color: ach.color }}
                    >
                      {ach.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[13px] font-black text-slate-200 leading-tight group-hover:text-white transition-colors">
                        {ach.title}
                      </p>
                      <p className="text-[11px] text-slate-500 mt-1 leading-snug">{ach.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Technical Skills (now second) ── */}
            <div className="rounded-3xl border border-white/5 bg-white/[0.03] backdrop-blur-xl p-8">
              <SectionLabel icon={<Code2 className="w-4 h-4" />} label="Technical Skills" color="#fbbf24" />

              <div className="flex gap-2 mb-8 flex-wrap">
                {SKILLS.map((s, i) => (
                  <button
                    key={s.category}
                    onClick={() => setActiveSkill(i)}
                    style={
                      activeSkill === i
                        ? { background: s.bg, borderColor: s.border, color: s.color }
                        : {}
                    }
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-black
                                uppercase tracking-widest transition-all border
                                ${activeSkill === i
                                  ? 'border-transparent shadow-lg shadow-black/20'
                                  : 'border-white/5 text-slate-500 hover:text-slate-300 hover:border-white/10'
                                }`}
                  >
                    <span style={activeSkill === i ? { color: s.color } : {}} className="flex items-center">
                      {s.icon}
                    </span>
                    {s.category}
                  </button>
                ))}
              </div>

              <div className="space-y-6">
                {SKILLS[activeSkill].items.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={SKILLS[activeSkill].color}
                  />
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/5">
                <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] mb-4">Also familiar with</p>
                <div className="flex flex-wrap gap-2">
                  {['C++', 'Java', 'MySQL', 'Firebase', 'Vercel', 'Postman', 'Figma', 'VS Code'].map((t) => (
                    <span key={t}
                      className="px-3 py-1.5 bg-white/5 rounded-xl text-[11px] font-bold
                                 text-slate-400 border border-white/5 hover:border-white/20
                                 hover:text-slate-200 transition-colors cursor-default">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;