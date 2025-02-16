// src/animations.js
export const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };
  
  export const hoverEffect = {
    whileHover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.5)" }
  };
  