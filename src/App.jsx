import { useState } from 'react';
import { Linkedin, Github } from 'lucide-react';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { LeetCodeIcon, HackerRankIcon } from './assets/Icons';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500/30 overflow-x-hidden flex flex-col">
      
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="pt-32 pb-20 px-6 flex-grow">
        <div className="max-w-5xl mx-auto">
          {activeTab === 'home'     && <Hero       setActiveTab={setActiveTab} />}
          {activeTab === 'about'    && <Experience />}
          {activeTab === 'projects' && <Projects />}
          {activeTab === 'contact'  && <Contact />}
        </div>
      </main>

      <footer className="py-12 border-t border-slate-900 bg-slate-950/50">
        <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-6">
          <div className="flex gap-8">
            <a href="https://www.linkedin.com/in/kashish-g-22b3a730a/" className="text-slate-600 hover:text-white transition-all transform hover:scale-110">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/kashish-gupta-16" className="text-slate-600 hover:text-white transition-all transform hover:scale-110">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://leetcode.com/u/kashish_16/" className="text-slate-600 hover:text-[#FFA116] transition-all transform hover:scale-110">
              <LeetCodeIcon />
            </a>
            <a href="https://www.hackerrank.com/profile/kash8604gupta" className="text-slate-600 hover:text-[#2EC866] transition-all transform hover:scale-110">
              <HackerRankIcon />
            </a>
          </div>
          <div className="text-slate-800 text-[10px] font-black tracking-[0.5em] uppercase text-center">
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
