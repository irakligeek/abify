'use client';

import { useEffect, useRef } from 'react';

export default function GridBackground({ 
  gridOpacity = 30, 
  hoverOpacity = 60, 
  gridColor = '#e5e7eb', 
  hoverColor = 'blue-300',
  isSubtle = false 
}) {
  const subtleGridColor = isSubtle ? 'rgba(255,255,255,0.2)' : gridColor;
  const subtleHoverOpacity = isSubtle ? 40 : hoverOpacity;
  const gridRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const gridElement = gridRef.current;
    if (!gridElement) return;

    let trailPositions = []; // Store actual grid positions {row, col}
    const maxTrailLength = 3;
    let animationId = null;

    const getGridPosition = (e) => {
      const rect = gridElement.getBoundingClientRect();
      const relativeX = e.clientX - rect.left;
      const relativeY = e.clientY - rect.top;
      
      const cols = Math.floor(gridElement.offsetWidth / 50);
      const col = Math.floor(relativeX / 50);
      const row = Math.floor(relativeY / 50);
      
      return { row, col, cols };
    };

    const getCellFromPosition = (row, col, cols) => {
      const index = row * cols + col;
      return gridElement.children[index];
    };

    const clearAllCells = () => {
      // Clear all grid cells
      Array.from(gridElement.children).forEach(cell => {
        if (cell.classList.contains('grid-cell')) {
          cell.style.background = '';
          cell.style.opacity = '';
          cell.style.transition = '';
        }
      });
    };

    const updateTrail = () => {
      clearAllCells();
      
      // Apply trail effect to current positions
      trailPositions.forEach((pos, index) => {
        const cell = getCellFromPosition(pos.row, pos.col, pos.cols);
        if (cell && cell.classList.contains('grid-cell')) {
          const intensity = 1 - (index / maxTrailLength);
          
          cell.style.transition = 'all 0.15s ease-out';
          
          if (index === 0) {
            // Head - brightest
            cell.style.background = isSubtle ? 'rgba(255,255,255,0.6)' : 'rgba(59, 130, 246, 1)';
            cell.style.opacity = '1';
          } else if (index === 1) {
            // Middle - medium
            cell.style.background = isSubtle ? 'rgba(255,255,255,0.3)' : 'rgba(59, 130, 246, 0.6)';
            cell.style.opacity = '0.8';
          } else {
            // Tail - dimmest
            cell.style.background = isSubtle ? 'rgba(255,255,255,0.15)' : 'rgba(59, 130, 246, 0.3)';
            cell.style.opacity = '0.5';
          }
        }
      });
    };

    const addPosition = (newPos) => {
      // Check if this position is different from the last one
      const lastPos = trailPositions[0];
      if (lastPos && lastPos.row === newPos.row && lastPos.col === newPos.col) {
        return; // Same position, don't add
      }
      
      // Add new head position
      trailPositions.unshift(newPos);
      
      // Remove tail if too long
      if (trailPositions.length > maxTrailLength) {
        trailPositions.pop();
      }
      
      updateTrail();
    };

    let isMouseInside = false;
    
    const handleMouseMove = (e) => {
      if (!isMouseInside) return;
      
      const pos = getGridPosition(e);
      
      // Only add if position is within grid bounds
      if (pos.row >= 0 && pos.col >= 0 && pos.row < Math.floor(gridElement.offsetHeight / 50) && pos.col < pos.cols) {
        addPosition(pos);
      }
    };

    const handleMouseEnter = (e) => {
      isMouseInside = true;
      const pos = getGridPosition(e);
      trailPositions = [pos]; // Start fresh trail
      updateTrail();
    };

    const handleMouseLeave = () => {
      isMouseInside = false;
      
      // Fade out trail gradually
      const fadeInterval = setInterval(() => {
        if (trailPositions.length > 0) {
          trailPositions.pop(); // Remove tail
          updateTrail();
        } else {
          clearInterval(fadeInterval);
          clearAllCells();
        }
      }, 200);
    };

    gridElement.addEventListener('mousemove', handleMouseMove);
    gridElement.addEventListener('mouseenter', handleMouseEnter);
    gridElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      gridElement.removeEventListener('mousemove', handleMouseMove);
      gridElement.removeEventListener('mouseenter', handleMouseEnter);
      gridElement.removeEventListener('mouseleave', handleMouseLeave);
      clearAllCells();
    };
  }, [isSubtle]);
  
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
      
      {/* Interactive Grid Overlay with Direction-Aware Trail Effect */}
      <div 
        ref={gridRef}
        className="absolute inset-0 grid grid-trail-container" 
        style={{gridTemplateColumns: 'repeat(auto-fill, 50px)', gridTemplateRows: 'repeat(auto-fill, 50px)', zIndex: 5, opacity: subtleHoverOpacity / 100}}
      >
        {Array.from({length: 800}, (_, i) => (
          <div 
            key={i}
            className={isSubtle ? "grid-cell hover:bg-white/20" : "grid-cell hover:bg-blue-300"}
          />
        ))}
      </div>
    </>
  );
}