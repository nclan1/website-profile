'use client';

import React from 'react';
import { CONTENT } from '../../data/content';
import { MaskReveal, Reveal } from '../shared';
import { brutalTheme, brutalStyles } from './theme';

export function Now() {
  return (
    <section id="br-now" style={{
      borderBottom: `1.5px solid ${brutalTheme.ink}`,
      background: brutalTheme.ink,
      color: brutalTheme.bg,
    }}>
      <div style={{ ...brutalStyles.inner, padding: '80px 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 48 }}>
          <div>
            <div style={{ ...brutalStyles.mono, color: brutalTheme.accent, marginBottom: 12 }}>§ 02 / live wire</div>
            <h2 style={{
              ...brutalStyles.display,
              fontSize: 'clamp(48px, 6vw, 88px)',
            }}>
              <MaskReveal text="/now" />
            </h2>
          </div>
          <div style={{ ...brutalStyles.mono, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{
              width: 8, height: 8, background: '#3aa86b', display: 'inline-block',
              animation: 'brblink 1.5s ease-in-out infinite',
            }} />
            transmitting · last sync: today
          </div>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          border: `1.5px solid ${brutalTheme.bg}`,
        }} className="grid-cols-2 lg:grid-cols-4">
          {CONTENT.now.map((n, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div style={{
                padding: '32px 24px',
                borderRight: `1.5px solid ${brutalTheme.bg}`,
                minHeight: 220,
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                position: 'relative',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e: any) => e.currentTarget.style.background = brutalTheme.accent}
              onMouseLeave={(e: any) => e.currentTarget.style.background = 'transparent'}
              >
                <div style={{ ...brutalStyles.mono, color: brutalTheme.accent2, opacity: 0.7 }}>
                  ▼ {n.label}
                </div>
                <div>
                  <div style={{
                    ...brutalStyles.display,
                    fontSize: 28,
                    marginBottom: 8,
                    letterSpacing: '-0.02em',
                  }}>
                    {n.value}
                  </div>
                  <div style={{ ...brutalStyles.mono, color: brutalTheme.accent2, opacity: 0.6, textTransform: 'none', letterSpacing: 0, fontSize: 12 }}>
                    {n.detail}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
