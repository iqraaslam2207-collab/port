import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePortfolio } from "../context/PortfolioContext.jsx";

export default function Toast() {
  const { toast } = usePortfolio();
  const reduce = useReducedMotion();

  return (
    <AnimatePresence>
      {toast ? (
        <motion.div
          role="status"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: 8 }}
          className="glass glow-border fixed bottom-6 left-1/2 z-[70] -translate-x-1/2 rounded-full px-4 py-2 text-sm text-ink"
        >
          {toast}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
