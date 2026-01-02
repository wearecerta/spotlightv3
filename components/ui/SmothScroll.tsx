"use client"; 

import { ReactNode } from "react";
import { ReactLenis } from "lenis/react";

interface SmoothScrollProps {
  children: ReactNode;
}

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  return <ReactLenis options={{smoothWheel:true , duration:1.5}} root>{children}</ReactLenis>;
};

export default SmoothScroll;
