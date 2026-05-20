"use client";

import React from "react";
import { MaskReveal, Reveal } from "../shared";
import { brutalTheme, brutalStyles } from "./theme";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="br-intro"
      style={{
        borderBottom: `1.5px solid ${brutalTheme.ink}`,
        position: "relative",
      }}
    >
      {/* grid columns lines */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(to right, ${brutalTheme.ink}10 1px, transparent 1px)`,
          backgroundSize: "8.333% 100%",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          ...brutalStyles.inner,
          padding: "40px 32px 0",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* run label */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 32,
            ...brutalStyles.mono,
          }}
        >
          <div style={{ display: "flex", gap: 20, color: brutalTheme.muted }}>
            <span>vol/03</span>
            <span>iss/01</span>
            <span>↳ portfolio</span>
          </div>
          <div style={{ color: brutalTheme.muted }}>
            file: chanrithya.www / 2026
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.55fr 1fr",
            gap: 32,
            alignItems: "stretch",
          }}
          className="grid-cols-1 md:grid-cols-[1.55fr_1fr]"
        >
          {/* left column — name + intro */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: 400,
            }}
          >
            <h1
              style={{
                ...brutalStyles.display,
                fontSize: "clamp(72px, 11vw, 168px)",
                color: brutalTheme.ink,
                marginBottom: 24,
              }}
            >
              <MaskReveal text="nolan" splitBy="char" stagger={0.05} />
              <br />
              <span style={{ position: "relative", display: "inline-block" }}>
                <MaskReveal
                  text="ngim."
                  splitBy="char"
                  stagger={0.05}
                  delay={0.25}
                />
                <span
                  style={{
                    position: "absolute",
                    right: "-1.4em",
                    top: "0.2em",
                    fontSize: "0.11em",
                    ...brutalStyles.mono,
                    border: `1.5px solid ${brutalTheme.ink}`,
                    padding: "4px 8px",
                    background: brutalTheme.accent,
                    color: brutalTheme.bg,
                    transform: "rotate(-3deg)",
                    whiteSpace: "nowrap",
                  }}
                >
                  [pronounced: NHIM]**
                </span>
              </span>
            </h1>

            <div>
              <Reveal>
                <p
                  style={{
                    fontSize: 26,
                    lineHeight: 1.3,
                    fontWeight: 500,
                    maxWidth: 640,
                    marginBottom: 20,
                  }}
                >
                  new hampshire-based. graduated from boston u. will write
                  software for a living. this page is a little about me {">"}:-)
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p
                  style={{
                    ...brutalStyles.mono,
                    color: brutalTheme.muted,
                    lineHeight: 1.7,
                  }}
                >
                  ↳ scroll for: about · now · work · play · photo · contact{" "}
                </p>
              </Reveal>
            </div>
          </div>

          {/* right column — portrait + stickers */}
          <div
            style={{ position: "relative", minHeight: 400 }}
            className="hidden md:block"
          >
            <Reveal delay={0.1}>
              <div
                style={{
                  width: "100%",
                  height: 560,
                  border: `1.5px solid ${brutalTheme.ink}`,
                  position: "relative",
                  background: brutalTheme.paper,
                  overflow: "hidden",
                  display: "flex",
                }}
              >
                {/*portrait placeholder */}
                <div
                  className="ph"
                  style={
                    {
                      "--ph-bg": brutalTheme.ink,
                      flex: 1,
                      width: "100%",
                      color: brutalTheme.bg,
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                      fontSize: 11,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      background: `
                    repeating-linear-gradient(135deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 8px),
                    ${brutalTheme.ink}
                  `,
                    } as any
                  }
                >
                  <Image
                    src="/portrait.JPG" // Put your image in the 'public' folder
                    alt="Nolan Ngim"
                    width={500}
                    height={500}
                    style={{
                      objectFit: "cover",
                      // filter: "grayscale(100%) contrast(110%)", // Optional: fits the brutalist vibe
                      display: "block",
                    }}
                  />
                </div>

                {/* corner timestamp */}
                <div
                  style={{
                    position: "absolute",
                    top: 12,
                    left: 12,
                    ...brutalStyles.mono,
                    background: brutalTheme.bg,
                    border: `1.5px solid ${brutalTheme.ink}`,
                    padding: "4px 8px",
                    fontSize: 9,
                    zIndex: 2,
                  }}
                >
                  fig.01 · self
                </div>

                {/* corner camera mark */}
                <div
                  style={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    ...brutalStyles.mono,
                    background: brutalTheme.bg,
                    border: `1.5px solid ${brutalTheme.ink}`,
                    padding: "4px 8px",
                    fontSize: 9,
                    zIndex: 2,
                  }}
                >
                  ◉ rec
                </div>
              </div>
            </Reveal>

            {/* sticker stack — overlaid on photo */}
            <Reveal delay={0.25}>
              <div
                style={{
                  position: "absolute",
                  top: 24,
                  right: -16,
                  ...brutalStyles.mono,
                  ...brutalStyles.hardBox,
                  padding: "12px 16px",
                  transform: "rotate(3deg)",
                  boxShadow: `4px 4px 0 ${brutalTheme.ink}`,
                }}
              >
                <div
                  style={{
                    fontSize: 9,
                    color: brutalTheme.muted,
                    marginBottom: 2,
                  }}
                >
                  fueled by
                </div>
                <div>robusta + condensed milk</div>
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <div
                style={{
                  position: "absolute",
                  bottom: 16,
                  left: -14,
                  ...brutalStyles.mono,
                  ...brutalStyles.hardBox,
                  padding: "12px 16px",
                  background: brutalTheme.accent,
                  color: brutalTheme.bg,
                  transform: "rotate(-2deg)",
                  boxShadow: `4px 4px 0 ${brutalTheme.ink}`,
                }}
              >
                <div style={{ fontSize: 9, opacity: 0.85, marginBottom: 2 }}>
                  {/*TODO, MAKE THIS PULSATE THROUGH OPACITY*/}
                  currently reading...
                </div>
                {/*TODO: CONNECT THIS WITH AN EASY WAY FOR ME TO UPDATE WHAT IM READING.*/}
                <div>Orbital - Samantha Harvey</div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* spacer */}
        <div style={{ height: 40 }} />
      </div>

      {/* bottom ticker bar */}
      <div
        style={{
          borderTop: `1.5px solid ${brutalTheme.ink}`,
          background: brutalTheme.ink,
          color: brutalTheme.bg,
          ...brutalStyles.mono,
          padding: "14px 0",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        <div
          style={{
            display: "inline-block",
            animation: "brmarquee 40s linear infinite",
          }}
        >
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <span key={i} style={{ marginRight: 48 }}>
                ✦ new hampshire &nbsp;&nbsp; ✦ books · running · tea · gym
                &nbsp;&nbsp; ✦ software engineer &nbsp;&nbsp;
              </span>
            ))}
        </div>
      </div>
    </section>
  );
}
