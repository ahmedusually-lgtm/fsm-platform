// Converted to TypeScript
RooyaLogo({ size = 'default', theme = 'dark' }) {
  return (
    <div className={`font-black tracking-tight ${size === 'large' ? 'text-4xl' : size === 'small' ? 'text-xl' : 'text-2xl'} ${theme === 'dark' ? 'text-white' : 'text-gray-900'} flex items-center gap-1`}>
      rooya<span className="text-cyan-400">.</span>
      <span className="text-xs font-bold bg-cyan-500/20 text-cyan-400 px-1.5 py-0.5 rounded-md border border-cyan-500/30 tracking-widest">AI</span>
    </div>
  );
}

// An additional sample component to illustrate splitting.
const