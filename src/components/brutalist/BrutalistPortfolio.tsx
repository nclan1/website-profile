'use client';

import React from 'react';
import { brutalTheme, brutalStyles } from './theme';
import { Header } from './Header';
import { Hero } from './Hero';
import { About } from './About';
import { Transition } from './Transition';
import { Now } from './Now';
import { Work } from './Work';
import { Play } from './Play';
import { Photo } from './Photo';
import { Contact } from './Contact';

export default function BrutalistPortfolio({ density = 'comfortable', accent }: any) {
  const scale = density === 'compact' ? 0.92 : density === 'spacious' ? 1.08 : 1;
  if (accent) brutalTheme.accent = accent;
  
  return (
    <div style={{ ...brutalStyles.root, fontSize: 15 * scale }}>
      <Header />
      <Hero />
      <About />
      <Transition />
      <Now />
      <Work />
      <Play />
      <Photo />
      <Contact />
    </div>
  );
}
