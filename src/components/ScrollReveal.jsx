import { useEffect, useRef, useState } from "react";

const ScrollReveal = ({
  children,
  direction = "bottom",
  delay = 0,
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    switch (direction) {
      case "left":
        return "translateX(-80px)";

      case "right":
        return "translateX(80px)";

      case "top":
        return "translateY(-80px)";

      default:
        return "translateY(80px)";
    }
  };

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translate(0)"
          : getTransform(),
        transition: `all 0.9s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;