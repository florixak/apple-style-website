"use client";

import {
  PresentationControlProps,
  PresentationControls,
} from "@react-three/drei";
import React, { useRef } from "react";
import MackBook16Model from "../models/Macbook-16.jsx";
import MackBook14Model from "../models/Macbook-14.jsx";
import * as THREE from "three";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface ModelSwitcherProps {
  scale: number;
  isMobile: boolean;
}

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5;

const SCALE_LARGE_DESKTOP = 0.08;
const SCALE_LARGE_MOBILE = 0.05;

const fadeMeshes = (group: THREE.Group | null, opacity: number) => {
  if (!group) return;
  group.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.transparent = true;
      gsap.to(child.material, { opacity, duration: ANIMATION_DURATION });
    }
  });
};

const moveGroup = (group: THREE.Group | null, x: number) => {
  if (!group) return;

  gsap.to(group.position, { x, duration: ANIMATION_DURATION });
};

const ModelSwitcher = ({ scale, isMobile }: ModelSwitcherProps) => {
  const smallMacBookRef = useRef<THREE.Group | null>(null);
  const largeMacBookRef = useRef<THREE.Group | null>(null);

  useGSAP(() => {
    if (showLargeMacBook) {
      moveGroup(smallMacBookRef.current, -OFFSET_DISTANCE);
      moveGroup(largeMacBookRef.current, 0);

      fadeMeshes(smallMacBookRef.current, 0);
      fadeMeshes(largeMacBookRef.current, 1);
    } else {
      moveGroup(smallMacBookRef.current, 0);
      moveGroup(largeMacBookRef.current, OFFSET_DISTANCE);

      fadeMeshes(smallMacBookRef.current, 1);
      fadeMeshes(largeMacBookRef.current, 0);
    }
  }, [scale]);

  const showLargeMacBook =
    scale === SCALE_LARGE_DESKTOP || scale === SCALE_LARGE_MOBILE;

  const controlsConfig: PresentationControlProps & {
    config: { mass: number; tension: number; friction: number };
  } = {
    snap: true, // returns back to center
    speed: 1,
    zoom: 1,
    polar: [-Math.PI, Math.PI], // restrict vertical rotation
    azimuth: [-Infinity, Infinity], // restrict horizontal rotation
    config: { mass: 1, tension: 0, friction: 26 },
  };

  return (
    <>
      <PresentationControls {...controlsConfig}>
        <group ref={largeMacBookRef}>
          <MackBook16Model scale={isMobile ? 0.05 : 0.08} />
        </group>
      </PresentationControls>

      <PresentationControls {...controlsConfig}>
        <group ref={smallMacBookRef}>
          <MackBook14Model scale={isMobile ? 0.03 : 0.06} />
        </group>
      </PresentationControls>
    </>
  );
};

export default ModelSwitcher;
