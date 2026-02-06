'use client';

import { ParallaxProvider } from 'react-scroll-parallax';
import { ReactNode } from 'react';

interface ParallaxProviderWrapperProps {
  children: ReactNode;
}

export default function ParallaxProviderWrapper({
  children,
}: ParallaxProviderWrapperProps) {
  return <ParallaxProvider>{children}</ParallaxProvider>;
}
