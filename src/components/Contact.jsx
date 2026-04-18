import { useState } from 'react';
import { Linkedin, Github, Mail, Send } from 'lucide-react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('');

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus(''), 3000);
    }, 1000);
  };

  return (
    <div className="animate-in fade-in slide-in-from-right-8 duration-500">
      <div className="bg-indigo-600 rounded-[4rem] p-8 md:p-20 grid lg:grid-cols-2 gap-12 shadow-3xl overflow-hidden relative">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        {/* Left Info */}
        <div className="space-y-10 relative z-10">
          <h2 className="text-6xl font-black uppercase tracking-tighter text-white leading-[0.9]">
            Contact Me <br />
          </h2>
          <p className="text-xl text-indigo-100/80 font-medium">
            Have an idea? Let's turn it into reality. Currently open for project collaborations and
            consultations.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/kashish-g-22b3a730a/"
              className="p-6 bg-white/10 rounded-3xl text-white hover:bg-white/20 transition-all border border-white/5 shadow-xl"
            >
              <Linkedin />
            </a>
            <a
              href="https://github.com/kashish-gupta-16"
              className="p-6 bg-white/10 rounded-3xl text-white hover:bg-white/20 transition-all border border-white/5 shadow-xl"
            >
              <Github />
            </a>
            <a href="mailto:kash8604gupta@gmail.com"
              className="p-6 bg-white/10 rounded-3xl text-white hover:bg-white/20 transition-all border border-white/5 shadow-xl"
            >
              <Mail />
            </a>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-white rounded-[3rem] p-8 md:p-10 shadow-3xl relative z-10 text-slate-950">
          {formStatus === 'success' ? (
            <div className="py-20 text-center space-y-6 animate-in zoom-in duration-300">
              <div className="w-24 h-24 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <Send className="w-10 h-10" />
              </div>
              <h3 className="text-4xl font-black">Success!</h3>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">
                Message dispatched successfully.
              </p>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-5">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">
                  Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-slate-100 border-0 rounded-2xl p-4 text-slate-950 focus:ring-4 focus:ring-indigo-600/10 outline-none transition-all font-bold"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">
                  Email
                </label>
                <input
                  required
                  type="email"
                  placeholder="email@company.com"
                  className="w-full bg-slate-100 border-0 rounded-2xl p-4 text-slate-950 focus:ring-4 focus:ring-indigo-600/10 outline-none transition-all font-bold"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">
                  Message
                </label>
                <textarea
                  required
                  rows="3"
                  placeholder="Briefly describe..."
                  className="w-full bg-slate-100 border-0 rounded-2xl p-4 text-slate-950 focus:ring-4 focus:ring-indigo-600/10 outline-none transition-all font-bold resize-none"
                ></textarea>
              </div>
              <button className="group w-full py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-[0.3em] hover:bg-slate-950 transition-all shadow-xl flex items-center justify-center gap-4">
                <span>Send</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
