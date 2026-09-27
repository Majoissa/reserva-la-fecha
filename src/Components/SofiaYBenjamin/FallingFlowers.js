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
      
      // Cycle 0,1,2,3 for left and 2,3,0,1 for right to avoid consecutive repeats
      const imgIndex = (Math.floor(i / 2) + (isLeft ? 0 : 2)) % flowerImages.length;
      
      return {
        id: i,
        src: flowerImages[imgIndex],
        isLeft,
        top: `${topPos}%`,
        width: "30px", // Smaller size
        delay: (i % 2) * 200
      };
    });
  }, [count]);

  return (
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 2, overflow: "hidden" }}>
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
