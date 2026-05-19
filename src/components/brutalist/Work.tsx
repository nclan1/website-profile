"use client";

import React, { useState } from "react";
import { CONTENT } from "../../data/content";
import { MaskReveal, Reveal } from "../shared";
import { brutalTheme, brutalStyles } from "./theme";

function ProjectCard({ p, i }: any) {
  const [hover, setHover] = useState(false);
  return (
    <Reveal delay={i * 0.04}>
      <a
        href={p.link}
        target="_blank"
        rel="noopener"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          display: "block",
          ...brutalStyles.hardBox,
          padding: 0,
          position: "relative",
          transform: hover ? "translate(-4px, -4px)" : "translate(0, 0)",
          boxShadow: hover
            ? `8px 8px 0 ${brutalTheme.ink}`
            : `0 0 0 ${brutalTheme.ink}`,
          transition: "transform 0.18s, box-shadow 0.18s",
          background: hover ? brutalTheme.accent : brutalTheme.paper,
          color: hover ? brutalTheme.bg : brutalTheme.ink,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "12px 16px",
            borderBottom: `1.5px solid ${hover ? brutalTheme.bg : brutalTheme.ink}`,
            ...brutalStyles.mono,
          }}
        >
          <span>
            {p.year} / {p.kind}
          </span>
          <span>↗</span>
        </div>
        <div
          style={{
            padding: "24px 20px",
            minHeight: 180,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div
              style={{
                ...brutalStyles.display,
                fontSize: 32,
                marginBottom: 12,
                letterSpacing: "-0.03em",
              }}
            >
              {p.title}
            </div>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.5,
                opacity: hover ? 0.95 : 0.75,
              }}
            >
              {p.description}
            </p>
          </div>
          <div
            style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 16 }}
          >
            {p.stack.map((s: any, si: number) => (
              <span
                key={si}
                style={{
                  ...brutalStyles.mono,
                  padding: "3px 8px",
                  border: `1px solid ${hover ? brutalTheme.bg : brutalTheme.ink}`,
                  fontSize: 10,
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </a>
    </Reveal>
  );
}

export function Work() {
  return (
    <section
      id="br-work"
      style={{ borderBottom: `1.5px solid ${brutalTheme.ink}` }}
    >
      <div style={{ ...brutalStyles.inner, padding: "80px 32px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: 48,
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div>
            <div
              style={{
                ...brutalStyles.mono,
                color: brutalTheme.accent,
                marginBottom: 12,
              }}
            >
              § 03 / things i make
            </div>
            <h2
              style={{
                ...brutalStyles.display,
                fontSize: "clamp(48px, 6vw, 88px)",
              }}
            >
              <MaskReveal text="side" />
              <br />
              <span
                style={{
                  background: brutalTheme.accent,
                  color: brutalTheme.bg,
                  padding: "0 0.15em",
                }}
              >
                <MaskReveal text="projects." delay={0.15} />
              </span>
            </h2>
          </div>
          <div
            style={{
              maxWidth: 320,
              ...brutalStyles.mono,
              color: brutalTheme.muted,
              lineHeight: 1.7,
            }}
          >
            ◢ small things i build for myself or for school. nothing is
            finished. {CONTENT.projects.length} items.
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
          }}
          className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {CONTENT.projects.map((p, i) => (
            <ProjectCard key={i} p={p} i={i} />
          ))}
        </div>

        <div
          style={{ marginTop: 48, display: "flex", justifyContent: "center" }}
        >
          <a
            href="https://github.com/nclan1"
            target="_blank"
            rel="noopener"
            style={{
              ...brutalStyles.mono,
              padding: "14px 24px",
              border: `1.5px solid ${brutalTheme.ink}`,
              background: brutalTheme.paper,
              transition: "all 0.15s",
            }}
            onMouseEnter={(e: any) => {
              e.currentTarget.style.background = brutalTheme.ink;
              e.currentTarget.style.color = brutalTheme.bg;
            }}
            onMouseLeave={(e: any) => {
              e.currentTarget.style.background = brutalTheme.paper;
              e.currentTarget.style.color = brutalTheme.ink;
            }}
          >
            [+] more on github →
          </a>
        </div>
      </div>
    </section>
  );
}
