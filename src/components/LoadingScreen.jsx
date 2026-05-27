import React from 'react';
import { Sofa } from 'lucide-react';

export const LoadingScreen = () => {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'var(--color-bg)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      color: 'var(--color-primary)'
    }}>
      <div style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '2rem'
      }}>
        {/* Anel exterior girando */}
        <div style={{
          position: 'absolute',
          width: '120px',
          height: '120px',
          border: '2px solid rgba(234, 179, 8, 0.2)', // Accent color soft
          borderTopColor: 'var(--color-accent)',
          borderRadius: '50%',
          animation: 'spin 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite'
        }} />
        
        {/* Ícone no centro */}
        <Sofa size={40} style={{ color: 'var(--color-accent)' }} />
      </div>

      <h2 style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '1.5rem',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        marginBottom: '0.5rem',
        animation: 'pulse 2s ease-in-out infinite'
      }}>
        Estúdio Móveis
      </h2>
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '0.9rem',
        color: 'var(--color-text-muted)',
        letterSpacing: '0.05em',
        animation: 'pulse 2s ease-in-out infinite',
        animationDelay: '0.5s'
      }}>
        Preparando o ambiente...
      </p>

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};
