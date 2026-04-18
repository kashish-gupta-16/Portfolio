import { useEffect, useState } from 'react';
import { Linkedin, Github, Mail, ArrowRight, Sparkles } from 'lucide-react';
import { LeetCodeIcon, HackerRankIcon } from '../assets/Icons';

const ROLES = [
  
  'Database Developer',
  'MERN-Stack Developer',
  
  
];

const LINKS = [
  {
    href: 'https://www.linkedin.com/in/kashish-g-22b3a730a/',
    label: 'LinkedIn',
    hoverColor: '#0077B5',
    hoverBg: 'rgba(0,119,181,0.1)',
    icon: <Linkedin className="w-4 h-4" />,
  },
  {
    href: 'https://github.com/kashish-gupta-16',
    label: 'GitHub',
    hoverColor: '#e2e8f0',
    hoverBg: 'rgba(255,255,255,0.07)',
    icon: <Github className="w-4 h-4" />,
  },
  {
    href: 'https://leetcode.com/u/kashish_16/',
    label: 'LeetCode',
    hoverColor: '#FFA116',
    hoverBg: 'rgba(255,161,22,0.1)',
    icon: <LeetCodeIcon />,
  },
  {
    href: 'https://www.hackerrank.com/profile/kash8604gupta',
    label: 'HackerRank',
    hoverColor: '#2EC866',
    hoverBg: 'rgba(46,200,102,0.1)',
    icon: <HackerRankIcon />,
  },
  {
    href: 'mailto:kash8604gupta@gmail.com',
    label: 'Mail',
    hoverColor: '#f472b6',
    hoverBg: 'rgba(244,114,182,0.1)',
    icon: <Mail className="w-4 h-4" />,
  },
];

/* ── Typewriter hook ─────────────────────────────────────────────── */
function useTypewriter(words, typingSpeed = 90, deletingSpeed = 50, pause = 1800) {
  const [display, setDisplay] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];
    let timeout;
    if (!deleting) {
      timeout = setTimeout(() => {
        setDisplay(word.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
        if (charIndex + 1 === word.length) setTimeout(() => setDeleting(true), pause);
      }, typingSpeed);
    } else {
      timeout = setTimeout(() => {
        setDisplay(word.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
        }
      }, deletingSpeed);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return display;
}

/* ── LinkPill ────────────────────────────────────────────────────── */
function LinkPill({ href, label, icon, hoverColor, hoverBg }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target={href.startsWith('mailto') ? undefined : '_blank'}
      rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderColor: hovered ? hoverColor : undefined,
        background: hovered ? hoverBg : undefined,
        color: hovered ? hoverColor : undefined,
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
      }}
      className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-slate-900
                 border border-slate-800 transition-all duration-200 text-slate-400 no-underline"
    >
      <span
        style={{ color: hovered ? hoverColor : undefined }}
        className="text-slate-400 transition-colors duration-200 flex items-center"
      >
        {icon}
      </span>
      <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
    </a>
  );
}

/* ── Terminal Card ───────────────────────────────────────────────── */
const CODE_SNIPPET = `const dev = {
  name: "Kashish Gupta",
  open: true,
};`;

function TerminalCard() {
  const [status, setStatus] = useState('hiring'); // 'hiring' | 'fresher'
  const [typed, setTyped] = useState('');
  const [lineIndex, setLineIndex] = useState(0);

  const lines = [
    { prefix: '$', cmd: 'whoami', color: '#818cf8' },
    { prefix: '>', out: 'Kashish Gupta', color: '#f1f5f9' },
    { prefix: '$', cmd: 'cat location.txt', color: '#818cf8' },
    { prefix: '>', out: '📍 India  ·  Open to Remote', color: '#fbbf24' },
    { prefix: '$', cmd: 'node profile.js', color: '#818cf8' },
  ];

  // Animate lines sequentially on mount
  useEffect(() => {
    if (lineIndex < lines.length) {
      const timer = setTimeout(() => setLineIndex((i) => i + 1), 380);
      return () => clearTimeout(timer);
    }
  }, [lineIndex]);

  // Type the code snippet after lines finish
  useEffect(() => {
    if (lineIndex < lines.length) return;
    if (typed.length < CODE_SNIPPET.length) {
      const t = setTimeout(
        () => setTyped(CODE_SNIPPET.slice(0, typed.length + 1)),
        18
      );
      return () => clearTimeout(t);
    }
  }, [lineIndex, typed]);

  return (
    <div className="w-full max-w-sm rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-black/40">
      {/* Title bar */}
      <div className="bg-slate-900 px-4 py-2.5 flex items-center gap-2 border-b border-slate-800">
        <span className="w-3 h-3 rounded-full bg-red-500/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
        <span className="w-3 h-3 rounded-full bg-green-400/80" />
        <span className="ml-3 text-[10px] font-mono font-bold text-slate-500 tracking-widest">
          kashish@portfolio ~ zsh
        </span>

        {/* Status toggle — right side of bar */}
        <div className="ml-auto flex items-center gap-1 bg-slate-800 rounded-lg p-0.5">
          <button
            onClick={() => setStatus('hiring')}
            className={`px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-wider transition-all ${
              status === 'hiring'
                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            Hiring
          </button>
          <button
            onClick={() => setStatus('fresher')}
            className={`px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-wider transition-all ${
              status === 'fresher'
                ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30'
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            Fresher
          </button>
        </div>
      </div>

      {/* Terminal body */}
      <div
        className="bg-[#0a0e1a] px-5 py-4 font-mono text-[11px] leading-relaxed min-h-[300px]"
        style={{ fontFamily: "'Fira Code', 'Courier New', monospace" }}
      >
        {/* Animated CLI lines */}
        {lineIndex > 0 && (
          <div className="mb-0.5">
            <span className="text-slate-600">$ </span>
            <span className="text-indigo-400">whoami</span>
          </div>
        )}
        {lineIndex > 1 && (
          <div className="text-slate-100 mb-2">Kashish Gupta</div>
        )}
        {lineIndex > 2 && (
          <div className="mb-0.5">
            <span className="text-slate-600">$ </span>
            <span className="text-indigo-400">cat</span>
            <span className="text-slate-300"> location.txt</span>
          </div>
        )}
        {lineIndex > 3 && (
          <div className="text-yellow-400 mb-2">
            India &nbsp;·&nbsp; Open to Remote
          </div>
        )}
        {lineIndex > 4 && (
          <div className="mb-1">
            <span className="text-slate-600">$ </span>
            <span className="text-indigo-400">node</span>
            <span className="text-slate-300"> profile.js</span>
          </div>
        )}

        {/* Code snippet output */}
        {lineIndex >= lines.length && typed.length > 0 && (
          <pre className="text-[10.5px] leading-[1.75] mb-3 whitespace-pre-wrap">
            <span className="text-slate-500">{'// output\n'}</span>
            {typed.split('\n').map((line, i) => {
              // Syntax-highlight the snippet lines
              const highlighted = line
                .replace(/(const|true)/g, '<span style="color:#c084fc">$1</span>')
                .replace(/(".*?")/g, '<span style="color:#4ade80">$1</span>')
                .replace(/(\[.*?\])/g, '<span style="color:#67e8f9">$1</span>');
              return (
                <span
                  key={i}
                  className="text-slate-300 block"
                  dangerouslySetInnerHTML={{ __html: highlighted }}
                />
              );
            })}
          </pre>
        )}

        {/* Status line — appears after snippet */}
        {typed.length === CODE_SNIPPET.length && (
          <div
            className="flex items-center gap-2 mt-1"
            style={{ animation: 'fadeIn 0.4s ease both' }}
          >
            <span className="text-slate-600">$</span>
            <span className="text-indigo-400">echo</span>
            <span className="text-slate-300"> $STATUS</span>
          </div>
        )}
        {typed.length === CODE_SNIPPET.length && (
          <div
            className="flex items-center gap-2 mt-0.5 mb-1"
            style={{ animation: 'fadeIn 0.4s ease 0.3s both' }}
          >
            {status === 'hiring' ? (
              <>
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
                <span className="text-green-400 font-bold">
                  Open to Hiring &nbsp;·&nbsp; Looking for Opportunities
                </span>
              </>
            ) : (
              <>
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse inline-block" />
                <span className="text-indigo-400 font-bold">
                  Fresh Graduate &nbsp;·&nbsp; Ready to Contribute
                </span>
              </>
            )}
          </div>
        )}

        {/* Blinking cursor */}
        <div className="flex items-center gap-1 mt-2">
          <span className="text-slate-600">$</span>
          <span
            className="inline-block w-2 h-3.5 bg-green-400 align-middle"
            style={{ animation: 'blink 1s step-end infinite' }}
          />
        </div>
      </div>
    </div>
  );
}

/* ── Hero ────────────────────────────────────────────────────────── */
const Hero = ({ setActiveTab }) => {
  const role = useTypewriter(ROLES);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 relative">

      {/* Grid bg */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px),' +
            'linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Glow */}
      <div className="pointer-events-none absolute -top-20 -right-20 w-96 h-96 rounded-full bg-indigo-600/10 blur-[100px] animate-pulse" />

      <div className="relative grid lg:grid-cols-2 gap-16 items-center">

        {/* ── LEFT ─────────────────────────────────────────────────── */}
        <div className="space-y-8 order-2 lg:order-1">

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border
                          bg-indigo-500/10 border-indigo-500/20 text-indigo-400
                          text-[10px] font-black uppercase tracking-[0.2em]">
            <Sparkles className="w-3 h-3" />
            KG
          </div>

          <div className="overflow-hidden text-center lg:text-left">
            
            <h1
              className="text-4xl lg:text-6xl font-black leading-[0.85] tracking-tighter
                         text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-400 to-cyan-400"
              style={{ animation: 'slideUp 0.7s cubic-bezier(.16,1,.3,1) 0.30s both' }}
            > KASHISH GUPTA
            </h1>
          </div>

          <div className="flex items-center gap-3" style={{ animation: 'fadeIn 0.5s ease 0.6s both' }}>
            <span className="text-slate-500 text-sm font-bold">→</span>
            <span className="text-indigo-400 text-base font-bold min-w-[220px] border-r-2 border-indigo-500 pr-1">
              {role}
            </span>
          </div>

          <p
            className="text-base text-slate-400 leading-relaxed max-w-md mx-auto lg:mx-0"
            style={{ animation: 'fadeIn 0.5s ease 0.75s both' }}
          >
            Full-stack developer crafting high-performance, accessible, and
            visually stunning digital products.
          </p>

          <div style={{ animation: 'fadeIn 0.5s ease 0.9s both' }}>
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-3 text-center lg:text-left">
              Connect &amp; Solve
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5">
              {LINKS.map((link) => (
                <LinkPill key={link.label} {...link} />
              ))}
            </div>
          </div>

          <div
            className="flex flex-col sm:flex-row items-center gap-5"
            style={{ animation: 'fadeIn 0.5s ease 1.05s both' }}
          >
            <button
              onClick={() => setActiveTab('projects')}
              className="group flex items-center gap-3 px-10 py-4 bg-indigo-600 text-white rounded-full
                         font-black text-sm uppercase tracking-wider transition-all hover:bg-indigo-500
                         shadow-2xl shadow-600/25 w-full sm:w-auto justify-center"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-white
                         transition-colors underline decoration-indigo-500 decoration-2 underline-offset-8"
            >
              Get in touch
            </button>
          </div>
        </div>

        {/* ── RIGHT — Terminal Card ─────────────────────────────── */}
        <div
          className="relative order-1 lg:order-2 flex justify-center"
          style={{ animation: 'fadeIn 0.8s ease 0.4s both' }}
        >
          <div className="absolute inset-0 bg-indigo-600/10 blur-[100px] rounded-full animate-pulse pointer-events-none" />
          <TerminalCard />
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Hero;