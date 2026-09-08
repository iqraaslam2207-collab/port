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
  const hidden = reduce ? false : { opacity: 0, y: 22 };
  const shown = { opacity: 1, y: 0 };

  return (
    <Tag
      className={className}
      initial={hidden}
      animate={immediate ? shown : undefined}
      whileInView={immediate ? undefined : shown}
      viewport={{ once: true, margin: "-72px" }}
      transition={{ duration: 0.55, delay, ease }}
      {...props}
    >
      {children}
    </Tag>
  );
}
