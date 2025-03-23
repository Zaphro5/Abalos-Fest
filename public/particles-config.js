{
    particlesJS("particles-js", {
        particles: {
          number: { value: 150, density: { enable: true, value_area: 800 } },
          color: { value: "#ffffff" }, // White snowflakes
          shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 }
          },
          opacity: {
            value: 0.8,
            random: true,
            anim: { enable: false }
          },
          size: {
            value: 4,
            random: true,
            anim: { enable: false }
          },
          line_linked: { enable: false }, // No connections
          move: {
            enable: true,
            speed: 1.5, // Slow snowfall
            direction: "bottom",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: { onhover: { enable: false }, onclick: { enable: false }, resize: true }
        },
        retina_detect: true
      });
      
}