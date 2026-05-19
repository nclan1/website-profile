'use client';

import React from 'react';
import { CONTENT } from '../../data/content';
import { MaskReveal, Reveal } from '../shared';
import { brutalTheme, brutalStyles } from './theme';

export function About() {
  return (
    <section id="br-about" style={{ borderBottom: `1.5px solid ${brutalTheme.ink}` }}>
      <div style={{ ...brutalStyles.inner, padding: '80px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr 280px', gap: 48 }} className="grid-cols-1 md:grid-cols-[180px_1fr_280px]">
          <div>
            <div style={{ ...brutalStyles.mono, color: brutalTheme.accent, marginBottom: 12 }}>§ 01 / about</div>
            <div style={{ ...brutalStyles.mono, color: brutalTheme.muted }}>
              who am i,<br />why am i here,<br />what's the deal
            </div>
          </div>

          <div>
            <h2 style={{
              ...brutalStyles.display,
              fontSize: 'clamp(48px, 6vw, 88px)',
              marginBottom: 32,
            }}>
              <MaskReveal text="hi, i'm nolan." />
            </h2>
            <Reveal>
              <p style={{ fontSize: 22, lineHeight: 1.45, maxWidth: 640, marginBottom: 24 }}>
                {CONTENT.about.lead}
              </p>
            </Reveal>
            {CONTENT.about.body.map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.1}>
                <p style={{ fontSize: 16, lineHeight: 1.6, color: brutalTheme.ink2, marginBottom: 16, maxWidth: 600 }}>{p}</p>
              </Reveal>
            ))}
          </div>

          <div>
            <Reveal delay={0.2}>
              <div style={{ ...brutalStyles.hardBox, position: 'relative' }}>
                <div style={{
                  borderBottom: `1.5px solid ${brutalTheme.ink}`,
                  padding: '10px 14px',
                  background: brutalTheme.ink,
                  color: brutalTheme.bg,
                  ...brutalStyles.mono,
                }}>
                  ◢ vital stats
                </div>
                <table style={{ width: '100%', borderCollapse: 'collapse', ...brutalStyles.mono }}>
                  <tbody>
                    {CONTENT.about.facts.map(([k, v], i) => (
                      <tr key={i}>
                        <td style={{
                          padding: '12px 14px',
                          borderBottom: i < CONTENT.about.facts.length - 1 ? `1px dashed ${brutalTheme.ink}40` : 'none',
                          color: brutalTheme.muted,
                          width: '40%',
                          verticalAlign: 'top',
                        }}>{k}</td>
                        <td style={{
                          padding: '12px 14px',
                          borderBottom: i < CONTENT.about.facts.length - 1 ? `1px dashed ${brutalTheme.ink}40` : 'none',
                          color: brutalTheme.ink,
                          fontWeight: 700,
                          textTransform: 'none',
                          letterSpacing: 0,
                        }}>{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
