import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Load lightweight version

const Particle = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          options={{
            background: {
              color: "transparent", // No background, fits into design
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "bubble",
                },
                onClick: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                bubble: {
                  distance: 250,
                  size: 4,
                  duration: 2,
                  opacity: 0.8,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              number: {
                value: 300,
                density: {
                  enable: true,
                  value_area: 1500,
                },
              },
              color: {
                value: "#ffffff",
              },
              shape: {
                type: "circle",
              },
              opacity: {
                value: 0.1,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.05,
                },
              },
              size: {
                value: 2,
                random: true,
              },
              move: {
                enable: true,
                speed: 0.4,
                direction: "right",
                straight: false,
              },
            },
            retina_detect: true,
          }}
        />
      )}
    </>
  );
};

export default Particle;
