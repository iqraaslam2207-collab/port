import { motion, useReducedMotion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

export default function Reveal({
  children,
  className = "",
  delay = 0,
  as = "div",
  immediate = false,
  ...props
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as] || motion.div;
  const shown = { opacity: 1, y: 0 };

  return (
    <Tag
      className={className}
      initial={reduce || immediate ? false : { opacity: 0, y: 18 }}
      animate={immediate ? shown : undefined}
      whileInView={immediate || reduce ? undefined : shown}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.5, delay, ease }}
      {...props}
    >
      {children}
    </Tag>
  );
}
