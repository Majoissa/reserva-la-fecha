import React, { useMemo } from "react";
import { Fade } from "react-awesome-reveal";
import flor from "./flor.PNG";
import flor1 from "./flor1.PNG";
import flor2 from "./flor2.PNG";
import flor3 from "./flor3.PNG";

const flowerImages = [flor, flor1, flor2, flor3];

const FallingFlowers = ({ count = 6 }) => {
  const flowers = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const isLeft = i % 2 === 0;
      
      // Calculate top percentage with a small padding so it doesn't clip top/bottom
      const topPos = 5 + (90 / count) * i;
      
      return {
        id: i,
        src: flowerImages[i % flowerImages.length],
        isLeft,
        top: `${topPos}%`,
        width: "50px", // Uniform size
        delay: (i % 2) * 200 // Slight stagger delay
      };
    });
  }, [count]);

  return (
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 1, overflow: "hidden" }}>
      {flowers.map((flower) => (
        <div 
          key={flower.id} 
          style={{ 
            position: "absolute", 
            [flower.isLeft ? "left" : "right"]: "3%", 
            top: flower.top 
          }}
        >
          <Fade direction="down" triggerOnce={false} duration={2000} delay={flower.delay}>
            <img
              src={flower.src}
              alt="flor"
              style={{ width: flower.width, opacity: 0.8 }}
            />
          </Fade>
        </div>
      ))}
    </div>
  );
};

export default FallingFlowers;
