'use client';

import React from 'react';
import { CONTENT } from '../../data/content';
import { MaskReveal, useLiveTime } from '../shared';
import { brutalTheme, brutalStyles } from './theme';

export function Contact() {
  const time = useLiveTime();
  return (
    <section id="br-contact">
      <div style={{ ...brutalStyles.inner, padding: '80px 32px 32px' }}>
            <div style={{ ...brutalStyles.mono, color: brutalTheme.accent, marginBottom: 12 }}>§ 06 / handshake</div>
        <h2 style={{
          ...brutalStyles.display,
          fontSize: 'clamp(64px, 11vw, 180px)',
          marginBottom: 48,
          letterSpacing: '-0.05em',
        }}>
          <MaskReveal text="say" splitBy="char" />{' '}
          <span style={{ fontStyle: 'italic', fontWeight: 400, fontFamily: "var(--font-instrument-serif), serif" }}>
            <MaskReveal text="hello" splitBy="char" delay={0.15} />
          </span><br />
          <span style={{ color: brutalTheme.accent }}>
            <MaskReveal text="anytime." splitBy="char" delay={0.3} />
          </span>
        </h2>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0,
          border: `1.5px solid ${brutalTheme.ink}`,
          marginBottom: 32,
        }} className="grid-cols-1 md:grid-cols-2">
          <a href={`mailto:${CONTENT.email}`} style={{
            padding: '40px 32px',
            borderRight: `1.5px solid ${brutalTheme.ink}`,
            background: brutalTheme.accent,
            color: brutalTheme.bg,
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}>
            <div>
              <div style={{ ...brutalStyles.mono, opacity: 0.8, marginBottom: 8 }}>[ email ]</div>
              <div style={{ ...brutalStyles.display, fontSize: 32, letterSpacing: '-0.02em' }} className="text-xl md:text-3xl">{CONTENT.email}</div>
            </div>
            <span style={{ fontSize: 36 }}>→</span>
          </a>
          <a href={CONTENT.resume} target="_blank" rel="noopener" style={{
            padding: '40px 32px',
            background: brutalTheme.paper,
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}>
            <div>
              <div style={{ ...brutalStyles.mono, color: brutalTheme.muted, marginBottom: 8 }}>[ résumé / pdf ]</div>
              <div style={{ ...brutalStyles.display, fontSize: 32, letterSpacing: '-0.02em' }}>the doc</div>
            </div>
            <span style={{ fontSize: 36, color: brutalTheme.accent }}>↗</span>
          </a>
        </div>

        <div style={{
          border: `1.5px solid ${brutalTheme.ink}`,
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          ...brutalStyles.mono,
        }} className="grid-cols-2 md:grid-cols-4">
          {CONTENT.socials.map((s: any, i: number) => (
            <a key={s.label} href={s.url} target="_blank" rel="noopener" style={{
              padding: '20px 24px',
              borderRight: `1.5px solid ${brutalTheme.ink}`,
              transition: 'all 0.15s',
            }}
            onMouseEnter={(e: any) => { e.currentTarget.style.background = brutalTheme.ink; e.currentTarget.style.color = brutalTheme.bg; }}
            onMouseLeave={(e: any) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = brutalTheme.ink; }}
            >
              <div style={{ marginBottom: 6, opacity: 0.6 }}>// {s.label}</div>
              <div style={{ textTransform: 'none', letterSpacing: 0, fontSize: 14 }}>{s.handle} ↗</div>
            </a>
          ))}
        </div>

        {/* footer rule */}
        <div style={{
          marginTop: 32,
          paddingTop: 16,
          borderTop: `1.5px solid ${brutalTheme.ink}`,
          display: 'flex', justifyContent: 'space-between',
          ...brutalStyles.mono, color: brutalTheme.muted,
          flexWrap: 'wrap',
          gap: 16,
        }}>
          <span>© nolan ngim · 2026</span>
          <span>boston / est · {time}</span>
          <span className="hidden lg:inline">set in space grotesk + jetbrains mono</span>
          <span>v.03 / printed on the web</span>
        </div>
      </div>
    </section>
  );
}
