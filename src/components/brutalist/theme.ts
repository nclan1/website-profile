export const brutalTheme = {
  bg: '#ece7df',         // newsprint
  paper: '#f4f0e7',
  ink: '#0a0a0a',
  ink2: '#2a2a2a',
  muted: '#5e5b54',
  rule: '#0a0a0a',
  accent: '#1a3fcb',     // cobalt
  accent2: '#e8e2d2',
};

export const brutalStyles: any = {
  root: {
    background: brutalTheme.bg,
    color: brutalTheme.ink,
    fontFamily: "var(--font-space-grotesk), system-ui, sans-serif",
    fontSize: 15,
    lineHeight: 1.5,
    width: '100%',
    minHeight: '100vh',
    position: 'relative',
  },
  inner: {
    width: '100%',
    margin: '0 auto',
    padding: '0 32px',
    position: 'relative',
  },
  mono: {
    fontFamily: "var(--font-jetbrains-mono), monospace",
    fontSize: 11,
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
  },
  display: {
    fontFamily: "var(--font-space-grotesk), sans-serif",
    fontWeight: 700,
    letterSpacing: '-0.04em',
    lineHeight: 0.9,
  },
  hardBox: {
    border: `1.5px solid ${brutalTheme.ink}`,
    background: brutalTheme.paper,
  },
};
