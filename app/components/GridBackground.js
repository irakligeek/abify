export default function GridBackground({ 
  gridOpacity = 30, 
  hoverOpacity = 60, 
  gridColor = '#e5e7eb', 
  hoverColor = 'blue-300',
  isSubtle = false 
}) {
  const subtleGridColor = isSubtle ? 'rgba(255,255,255,0.2)' : gridColor;
  const subtleHoverOpacity = isSubtle ? 40 : hoverOpacity;
  const subtleHoverColor = isSubtle ? 'white/10' : hoverColor;
  
  return (
    <>
      {/* Grid Background */}
      <div className={`absolute inset-0 pointer-events-none z-0`} style={{opacity: gridOpacity / 100}}>
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, ${subtleGridColor} 1px, transparent 1px),
              linear-gradient(to bottom, ${subtleGridColor} 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
      
      {/* Interactive Grid Overlay */}
      <div className="absolute inset-0 grid" style={{gridTemplateColumns: 'repeat(auto-fill, 50px)', gridTemplateRows: 'repeat(auto-fill, 50px)', zIndex: 5, opacity: subtleHoverOpacity / 100}}>
        {Array.from({length: 800}, (_, i) => (
          <div 
            key={i}
            className={isSubtle ? "hover:bg-white/20 transition-colors duration-200 ease-in-out" : "hover:bg-blue-300 transition-colors duration-200 ease-in-out"}
          />
        ))}
      </div>
    </>
  );
}