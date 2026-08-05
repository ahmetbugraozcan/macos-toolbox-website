import { motion, useReducedMotion } from "motion/react";

/**
 * Scroll-in reveal. Critically-damped spring (no overshoot) by default; under
 * reduced-motion it degrades to a short opacity cross-fade — never a slide.
 */
export default function Reveal({ children, delay = 0, y = 26, className, style }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      style={style}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={
        reduce
          ? { duration: 0.25, ease: "easeOut" }
          : { type: "spring", bounce: 0, duration: 0.7, delay }
      }
    >
      {children}
    </motion.div>
  );
}
