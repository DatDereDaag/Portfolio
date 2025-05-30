import { useEffect } from "react";

declare global {
  interface Window {
    FinisherHeader: any;
  }
}

function Home() {
  // Initialize FinisherHeader after the component mounts
  useEffect(() => {
    if (window.FinisherHeader) {
      new window.FinisherHeader({
        count: 6,
        size: { min: 1300, max: 1500, pulse: 0 },
        speed: { x: { min: 0.8, max: 1 }, y: { min: 0.1, max: 0.6 } },
        colors: {
          background: "#260303",
          particles: ["#2e0308", "#080808", "#170011","#220128" ],
        },
        blending: "lighten",
        opacity: { center: 0.5, edge: 0.05 },
        skew: -2,
        shapes: ["c"],
      });
    }
  }, []);

  return (
    <div>
      <div
        className="header finisher-header"
        style={{ width: "100%", height: "700px" }}
      ></div>
    </div>
  );
}

export default Home;
