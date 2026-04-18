import { useState } from 'react';
import { Layout, User, Briefcase, Mail, Code, Menu, X } from 'lucide-react';
import { navItems } from '../constants';

const iconMap = { Layout, User, Briefcase, Mail };

const NavItem = ({ id, label, iconName, activeTab, setActiveTab, setMobileMenuOpen }) => {
  const Icon = iconMap[iconName];
  return (
    <button
      onClick={() => {
        setActiveTab(id);
        setMobileMenuOpen(false);
        window.scrollTo(0, 0);
      }}
      className={`relative flex items-center gap-2 px-6 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${
        activeTab === id ? 'text-white' : 'text-slate-500 hover:text-slate-200'
      }`}
    >
      {activeTab === id && (
        <span className="absolute inset-0 bg-indigo-600 rounded-xl shadow-lg shadow-indigo-600/20 -z-10 animate-in fade-in zoom-in duration-300"></span>
      )}
      <Icon className="w-4 h-4" />
      {label}
    </button>
  );
};

const Navigation = ({ activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-[100] py-6 px-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-2 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-slate-800 shadow-2xl">
        <div
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => setActiveTab('home')}
        >
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white group-hover:rotate-12 transition-all shadow-lg">
            <Code className="w-5 h-5" />
          </div>
          <span className="hidden sm:block font-black uppercase tracking-tighter text-xl">
            Portfolio<span className="text-indigo-500">.</span>Dev
          </span>
        </div>

        <div className="hidden md:flex items-center gap-1 bg-slate-950/50 p-1 rounded-xl border border-slate-800">
          {navItems.map((item) => (
            <NavItem
              key={item.id}
              {...item}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              setMobileMenuOpen={setMobileMenuOpen}
            />
          ))}
        </div>

        <button
          className="md:hidden p-2 text-slate-400"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-slate-900 border border-slate-800 rounded-3xl p-4 shadow-2xl animate-in slide-in-from-top-4 duration-300 z-50">
          <div className="grid gap-1">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => {
                  setActiveTab(id);
                  setMobileMenuOpen(false);
                }}
                className={`p-4 text-left font-bold rounded-2xl capitalize ${
                  activeTab === id ? 'bg-indigo-600 text-white' : 'text-slate-400'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
    
  );
};

export default Navigation;
