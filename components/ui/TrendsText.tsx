import React from 'react';

interface TrendsTextProps {
  className?: string;
}

export default function TrendsText({ className = '' }: TrendsTextProps) {
  return (
    <div className={`relative w-[247px] h-[62px] ${className}`}>
      {/* Base text layer */}
      <div 
        className="absolute inset-0 flex items-center justify-center"
        style={{
          transform: 'rotate(-15deg)',
          fontFamily: '"Shadows Into Light", cursive',
          fontWeight: 400,
          fontSize: '24px',
          lineHeight: '130%',
          letterSpacing: '0%',
          color: '#F7F7F8',
          textAlign: 'center',
          opacity: 1,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        We don't follow trends - we forecast them.
      </div>
      
      {/* Overlapping text layer for emphasis */}
      <div 
        className="absolute inset-0 flex items-center justify-center"
        style={{
          transform: 'rotate(-15deg) translate(2px, 2px)',
          fontFamily: '"Shadows Into Light", cursive',
          fontWeight: 400,
          fontSize: '24px',
          lineHeight: '130%',
          letterSpacing: '0%',
          color: 'rgba(247, 247, 248, 0.7)',
          textAlign: 'center',
          opacity: 0.7,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
        }}
      >
        We don't follow trends - we forecast them.
      </div>
    </div>
  );
}
