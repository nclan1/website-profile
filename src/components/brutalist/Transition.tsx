'use client';

import React, { useState, useEffect, useRef } from 'react';
import { brutalTheme, brutalStyles } from './theme';

export function Transition() {
  const ref = useRef<any>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = vh + rect.height;
      const seen = vh - rect.top;
      const p = Math.max(0, Math.min(1, seen / total));
      setProgress(p);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const x1 = -progress * 600;
  const x2 = progress * 800 - 400;
  const x3 = -progress * 1200 + 200;
  const dotProgress = progress;

  return (
    <section ref={ref} aria-hidden style={{
      borderBottom: `1.5px solid ${brutalTheme.ink}`,
      background: brutalTheme.bg,
      overflow: 'hidden',
      padding: '40px 0',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, height: 3,
        width: `${progress * 100}%`,
        background: brutalTheme.accent,
        transition: 'width 0.05s linear',
      }} />

      <div style={{
        ...brutalStyles.display,
        fontSize: 'clamp(56px, 8vw, 120px)',
        letterSpacing: '-0.04em',
        whiteSpace: 'nowrap',
        transform: `translateX(${x1}px)`,
        color: brutalTheme.ink,
        marginBottom: 8,
        willChange: 'transform',
      }}>
        ✦ books · guitar · film · iced coffee &nbsp; ✦ books · guitar · film · iced coffee &nbsp; ✦ books · guitar · film
      </div>

      <div style={{
        fontFamily: "var(--font-instrument-serif), serif",
        fontStyle: 'italic',
        fontSize: 'clamp(40px, 6vw, 88px)',
        letterSpacing: '-0.02em',
        whiteSpace: 'nowrap',
        transform: `translateX(${x2}px)`,
        color: brutalTheme.accent,
        marginBottom: 8,
        willChange: 'transform',
      }}>
        a slow page about a slow person — a slow page about a slow person —
      </div>

      <div style={{
        ...brutalStyles.mono,
        fontSize: 'clamp(14px, 1.6vw, 22px)',
        letterSpacing: '0.05em',
        whiteSpace: 'nowrap',
        transform: `translateX(${x3}px)`,
        color: brutalTheme.muted,
        willChange: 'transform',
      }}>
        ◢ scroll · sync · breathe · keep going &nbsp;&nbsp; ◢ scroll · sync · breathe · keep going &nbsp;&nbsp; ◢ scroll · sync · breathe · keep going
      </div>

      <div style={{
        position: 'absolute', bottom: 12, right: 24,
        ...brutalStyles.mono, color: brutalTheme.muted,
        display: 'flex', alignItems: 'center', gap: 8,
      }}>
        <span style={{
          display: 'inline-block', width: 6, height: 6,
          background: brutalTheme.accent,
          transform: `translateX(${dotProgress * 24}px)`,
          transition: 'transform 0.05s linear',
        }} />
        <span>{Math.round(progress * 100).toString().padStart(2, '0')}%</span>
      </div>
    </section>
  );
}
