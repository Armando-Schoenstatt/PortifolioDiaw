import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import SplashCursor from "./components/reactbits/SplashCursor/SplashCursor";

function PortfolioCursor() {
  const [active, setActive] = useState(true);

  useEffect(() => {
    const onCursorState = (event) => setActive(!event.detail.insideFrame);

    window.addEventListener("portfolio-reactbits-cursor-state", onCursorState);
    return () => window.removeEventListener("portfolio-reactbits-cursor-state", onCursorState);
  }, []);

  if (!active || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return null;
  }

  return (
    <SplashCursor
      COLOR="#cbd5e1"
      RAINBOW_MODE={false}
      DENSITY_DISSIPATION={2.5}
      VELOCITY_DISSIPATION={2.5}
      PRESSURE={0.15}
      CURL={0}
      SPLAT_RADIUS={0.2}
      SPLAT_FORCE={5000}
      SHADING={true}
    />
  );
}

createRoot(document.getElementById("reactbits-cursor")).render(<PortfolioCursor />);
