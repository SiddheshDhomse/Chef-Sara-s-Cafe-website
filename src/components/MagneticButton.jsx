import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MagneticButton = ({ children, href, className = "" }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    // The multiplier defines the "pull" strength
    setPosition({ x: middleX * 0.4, y: middleY * 0.4 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 350, damping: 15, mass: 0.5 }}
      style={{ display: "inline-block" }}
      className={className}
    >
      {/* Inner text magnetic effect - travels further than the box */}
      <motion.span
        animate={{ x: x * 0.4, y: y * 0.4 }}
        transition={{ type: "spring", stiffness: 350, damping: 15, mass: 0.5 }}
        style={{ display: "inline-block" }}
      >
        {children}
      </motion.span>
    </motion.a>
  );
};

export default MagneticButton;
