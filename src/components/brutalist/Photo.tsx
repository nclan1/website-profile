'use client';

import React, { useState } from 'react';
import { MaskReveal, ImagePh } from '../shared';
import { brutalTheme, brutalStyles } from './theme';

export function Photo() {
  const [active, setActive] = useState(0);
  const shots = [
    { label: 'street', meta: 'boston · 35mm · 2025', tone: '#1a1a1a' },
    { label: 'golden hour', meta: 'cambridge · 50mm · 2025', tone: '#3a2a1a' },
    { label: 'friends', meta: 'film · portra 400 · 2024', tone: '#1a2a3a' },
    { label: 'still life', meta: 'café nero · 35mm · 2025', tone: '#2a1a2a' },
    { label: 'on the road', meta: 'maine · digital · 2024', tone: '#2a2a1a' },
  ];

  return (
    <section id="br-photo" style={{ borderBottom: `1.5px solid ${brutalTheme.ink}` }}>
      <div style={{ ...brutalStyles.inner, padding: '80px 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 40, flexWrap: 'wrap', gap: 24 }}>
          <div>
            <div style={{ ...brutalStyles.mono, color: brutalTheme.accent, marginBottom: 12 }}>§ 05 / contact sheet</div>
            <h2 style={{ ...brutalStyles.display, fontSize: 'clamp(48px, 6vw, 88px)' }}>
              <MaskReveal text="through" />{' '}
              <span style={{ background: brutalTheme.ink, color: brutalTheme.bg, padding: '0 0.15em' }}>
                <MaskReveal text="a lens." delay={0.15} />
              </span>
            </h2>
          </div>
          <div style={{ maxWidth: 320, ...brutalStyles.mono, color: brutalTheme.muted, lineHeight: 1.7 }}>
            ◢ a side practice. same muscle as design — looking carefully. fuji x100v + film for slow days.
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: 16,
          border: `1.5px solid ${brutalTheme.ink}`,
        }} className="grid-cols-1 md:grid-cols-[2fr_1fr]">
          {/* feature */}
          <div style={{
            borderRight: `1.5px solid ${brutalTheme.ink}`,
            position: 'relative',
            minHeight: 400,
          }}>
            <ImagePh
              label={shots[active].label}
              ratio="auto"
              tone={shots[active].tone}
              style={{ height: '100%', minHeight: 400, color: '#fff', border: 'none' }}
            />
            <div style={{
              position: 'absolute', top: 14, left: 14,
              ...brutalStyles.mono,
              background: brutalTheme.bg,
              border: `1.5px solid ${brutalTheme.ink}`,
              padding: '4px 10px',
              fontSize: 10,
            }}>
              ◉ frame · 0{active + 1} / 0{shots.length}
            </div>
            <div style={{
              position: 'absolute', bottom: 14, left: 14,
              ...brutalStyles.mono,
              background: brutalTheme.bg,
              border: `1.5px solid ${brutalTheme.ink}`,
              padding: '8px 12px',
              fontSize: 10,
            }}>
              <div style={{ fontWeight: 700, marginBottom: 2 }}>{shots[active].label}</div>
              <div style={{ color: brutalTheme.muted, textTransform: 'none', letterSpacing: 0 }}>{shots[active].meta}</div>
            </div>
          </div>

          {/* thumb strip */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {shots.map((s, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  display: 'block',
                  flex: 1,
                  position: 'relative',
                  borderBottom: i < shots.length - 1 ? `1.5px solid ${brutalTheme.ink}` : 'none',
                  cursor: 'pointer',
                  padding: 0,
                  textAlign: 'left',
                  minHeight: 80,
                  background: 'transparent',
                }}
              >
                <ImagePh
                  label=""
                  ratio="auto"
                  tone={s.tone}
                  style={{ height: '100%', minHeight: 80 }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '0 14px',
                  ...brutalStyles.mono,
                  color: '#fff',
                  background: i === active ? `${brutalTheme.accent}cc` : 'rgba(0,0,0,0.35)',
                  transition: 'background 0.2s',
                }}>
                  <span style={{ fontSize: 11 }}>0{i + 1} · {s.label}</span>
                  <span>{i === active ? '●' : '○'}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div style={{
          marginTop: 16,
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          border: `1.5px solid ${brutalTheme.ink}`,
          ...brutalStyles.mono,
        }} className="grid-cols-2 md:grid-cols-4">
          {[
            ['gear', 'fuji x100v · 35mm'],
            ['film', 'portra 400 / 800'],
            ['count', '2k+ frames / yr'],
            ['journal', '@mr_lan1213'],
          ].map(([k, v], i) => (
            <div key={i} style={{
              padding: '14px 18px',
              borderRight: `1.5px solid ${brutalTheme.ink}`,
            }}>
              <div style={{ color: brutalTheme.muted, marginBottom: 4 }}>{k}</div>
              <div style={{ color: brutalTheme.ink, textTransform: 'none', letterSpacing: 0 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
