'use client';

import React from 'react';
import { CONTENT } from '../../data/content';
import { MaskReveal, Reveal, ImagePh } from '../shared';
import { brutalTheme, brutalStyles } from './theme';

export function Play() {
  return (
    <section id="br-play" style={{ borderBottom: `1.5px solid ${brutalTheme.ink}` }}>
      <div style={{ ...brutalStyles.inner, padding: '80px 32px' }}>
        <div style={{ marginBottom: 56 }}>
            <div style={{ ...brutalStyles.mono, color: brutalTheme.accent, marginBottom: 12 }}>§ 04 / off the clock</div>
          <h2 style={{ ...brutalStyles.display, fontSize: 'clamp(48px, 6vw, 88px)' }}>
            <MaskReveal text="i also..." />
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, border: `1.5px solid ${brutalTheme.ink}` }} className="grid-cols-1 md:grid-cols-3">
          {CONTENT.hobbies.map((h, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div style={{
                padding: 0,
                borderRight: i < 2 ? `1.5px solid ${brutalTheme.ink}` : 'none',
                background: i === 1 ? brutalTheme.paper : brutalTheme.bg,
                display: 'flex',
                flexDirection: 'column',
                minHeight: 520,
              }}>
                <div style={{
                  borderBottom: `1.5px solid ${brutalTheme.ink}`,
                  padding: '14px 20px',
                  ...brutalStyles.mono,
                  display: 'flex', justifyContent: 'space-between',
                  background: i === 1 ? brutalTheme.accent : 'transparent',
                  color: i === 1 ? brutalTheme.bg : brutalTheme.ink,
                }}>
                  <span>0{i + 1} / {h.key}</span>
                  <span>◷</span>
                </div>
                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <ImagePh label={`${h.key} placeholder`} ratio="4/5" tone={i === 1 ? '#1a3fcb' : brutalTheme.bg} style={{ color: i === 1 ? '#fff' : brutalTheme.ink, border: `1.5px solid ${brutalTheme.ink}` }} />
                  <h3 style={{
                    ...brutalStyles.display,
                    fontSize: 32,
                    color: i === 1 ? brutalTheme.accent : brutalTheme.ink,
                  }}>
                    {h.lead}
                  </h3>
                  <p style={{ fontSize: 14, lineHeight: 1.5, color: brutalTheme.ink2 }}>
                    {h.body}
                  </p>
                  <div style={{ marginTop: 'auto', display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {h.bits.map((b: any, bi: number) => (
                      <span key={bi} style={{
                        ...brutalStyles.mono,
                        padding: '4px 8px',
                        border: `1px solid ${brutalTheme.ink}`,
                        background: brutalTheme.bg,
                        fontSize: 10,
                      }}>{b}</span>
                    ))}
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
