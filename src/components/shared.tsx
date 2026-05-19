"use client";

import React, { useState, useEffect, useRef } from "react";

// Reveal-on-scroll wrapper — entrance only, simple
export function Reveal({
  children,
  delay = 0,
  y = 24,
  as: Tag = "div",
  className,
  style,
}: any) {
  const ref = useRef<any>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        ...style,
        transform: shown ? "translateY(0)" : `translateY(${y}px)`,
        opacity: shown ? 1 : 0,
        transition: `transform 0.8s cubic-bezier(0.2, 0.7, 0.1, 1) ${delay}s, opacity 0.8s ease ${delay}s`,
      }}
    >
      {children}
    </Tag>
  );
}

// Mask reveal for headlines — letters/words slide up behind a clip
export function MaskReveal({
  text,
  delay = 0,
  stagger = 0.025,
  className,
  style,
  splitBy = "word",
}: any) {
  const ref = useRef<any>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.2 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  if (splitBy === "char") {
    const chars = Array.from(text);
    return (
      <span
        ref={ref}
        className={className}
        style={{ ...style, display: "inline-block" }}
      >
        {chars.map((c: any, i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              overflowX: "visible",
              overflowY: "clip",
              verticalAlign: "bottom",
              paddingBottom: "0.2em",
              marginBottom: "-0.2em",
            }}
          >
            <span
              style={{
                display: "inline-block",
                transform: shown ? "translateY(0)" : "translateY(calc(100% + 0.4em))",
                transition: `transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) ${delay + i * stagger}s`,
              }}
            >
              {(c as string) === " " ? "\u00A0" : c}
            </span>
          </span>
        ))}
      </span>
    );
  }

  // word split — render each word as inline-block with real spaces between
  const words = text.split(" ");
  return (
    <span
      ref={ref}
      className={className}
      style={{ ...style, display: "inline" }}
    >
      {words.map((w: string, i: number) => (
        <React.Fragment key={i}>
          <span
            style={{
              display: "inline-block",
              overflow: "hidden",
              verticalAlign: "bottom",
            }}
          >
            <span
              style={{
                display: "inline-block",
                transform: shown ? "translateY(0)" : "translateY(110%)",
                transition: `transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) ${delay + i * stagger}s`,
              }}
            >
              {w}
            </span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </React.Fragment>
      ))}
    </span>
  );
}

// Live local time (boston)
export function useLiveTime() {
  const [t, setT] = useState("");
  useEffect(() => {
    const tick = () => {
      const s = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "America/New_York",
      }).format(new Date());
      setT(s.replace("AM", "am").replace("PM", "pm"));
    };
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);
  return t;
}

// Image placeholder — labeled, striped
export function ImagePh({
  label,
  ratio = "4/5",
  tone = "#e8e3d8",
  style,
}: any) {
  const baseStyle: any = {
    "--ph-bg": tone,
    width: "100%",
    ...style,
  };
  if (ratio !== "auto") {
    baseStyle.aspectRatio = ratio;
  }
  return (
    <div className="ph" style={baseStyle}>
      {label && (
        <span
          style={{
            position: "relative",
            zIndex: 1,
            padding: "4px 8px",
            background: "rgba(255,255,255,0.5)",
          }}
        >
          {label}
        </span>
      )}
    </div>
  );
}
