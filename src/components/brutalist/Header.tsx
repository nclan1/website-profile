"use client";

import React from "react";
import { useLiveTime } from "../shared";
import { brutalTheme, brutalStyles } from "./theme";

export function Header() {
  const time = useLiveTime();
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: brutalTheme.bg,
        borderBottom: `1.5px solid ${brutalTheme.ink}`,
      }}
    >
      <div
        style={{
          ...brutalStyles.inner,
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          padding: "14px 32px",
          ...brutalStyles.mono,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span
            style={{
              display: "inline-block",
              width: 14,
              height: 14,
              background: brutalTheme.accent,
              border: `1.5px solid ${brutalTheme.ink}`,
            }}
          />
          <span style={{ fontWeight: 700 }}>nolan/ngim</span>
          <span
            style={{ color: brutalTheme.muted }}
            className="hidden md:inline"
          >
            · portfolio.026
          </span>
        </div>
        <nav style={{ display: "flex", gap: 4 }}>
          {["intro", "about", "now", "work", "play", "photo", "contact"].map(
            (n, i) => (
              <a
                key={n}
                href={`#br-${n}`}
                style={{
                  padding: "6px 12px",
                  border: `1.5px solid transparent`,
                  transition: "all 0.15s",
                }}
                onMouseEnter={(e: any) => {
                  e.currentTarget.style.background = brutalTheme.ink;
                  e.currentTarget.style.color = brutalTheme.bg;
                }}
                onMouseLeave={(e: any) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = brutalTheme.ink;
                }}
              >
                <span className="hidden sm:inline">
                  [{i.toString().padStart(2, "0")}]
                </span>{" "}
                {n}
              </a>
            ),
          )}
        </nav>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 14,
            color: brutalTheme.muted,
          }}
          className="hidden lg:flex"
        >
          <span>new hampshire</span>
          <span>·</span>
          <span>{time || "—:—"}</span>
          <span>·</span>
          <span style={{ color: "#3aa86b" }}>● avail</span>
        </div>
      </div>
    </header>
  );
}
