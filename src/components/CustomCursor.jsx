import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for delayed organic tracking
  const springX = useSpring(mouseX, { stiffness: 500, damping: 28, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 28, mass: 0.5 });

  useEffect(() => {
    const manageMouseMove = (e) => {
      // Offset by half to center the cursor
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };

    window.addEventListener('mousemove', manageMouseMove);
    return () => {
      window.removeEventListener('mousemove', manageMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full bg-white pointer-events-none z-[9999] mix-blend-difference"
      style={{
        x: springX,
        y: springY,
      }}
    />
  );
};

export default CustomCursor;
