import { motion, useReducedMotion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

export default function Reveal({
  children,
  className = "",
  delay = 0,
  as = "div",
  ...props
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as] || motion.div;

  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-72px" }}
      transition={{ duration: 0.55, delay, ease }}
      {...props}
    >
      {children}
    </Tag>
  );
}
