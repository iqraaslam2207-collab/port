import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function TiltCard({ children, className = "" }) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (event) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -6, y: px * 8 });
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ transformPerspective: 1100 }}
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      animate={reduce ? undefined : { rotateX: tilt.x, rotateY: tilt.y, scale: 1 }}
      whileHover={reduce ? undefined : { scale: 1.015 }}
      transition={{ type: "spring", stiffness: 240, damping: 18, mass: 0.6 }}
    >
      {children}
    </motion.div>
  );
}
