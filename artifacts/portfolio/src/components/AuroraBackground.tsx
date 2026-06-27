export function AuroraBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-[#09090B]">
      <div 
        className="absolute inset-0" 
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(245,158,11,0.06) 0%, transparent 70%)' }}
      />
    </div>
  );
}
