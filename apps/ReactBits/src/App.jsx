import { useEffect, useState } from "react";
import BackgroundEffect from "./components/BackgroundEffect/BackgroundEffect";
import EFFECTS from "./data/effects";

function App() {
  const [embeddedCursorActive, setEmbeddedCursorActive] = useState(false);
  const effect = EFFECTS[0];
  const isEmbedded = window.parent !== window;

  useEffect(() => {
    if (!isEmbedded) return undefined;

    const onCursorMessage = (event) => {
      if (
        event.origin === window.location.origin &&
        event.source === window.parent &&
        event.data?.type === "portfolio-reactbits-cursor"
      ) {
        setEmbeddedCursorActive(Boolean(event.data.insideFrame));
      }
    };

    window.addEventListener("message", onCursorMessage);
    return () => window.removeEventListener("message", onCursorMessage);
  }, [isEmbedded]);

  return (
    (!isEmbedded || embeddedCursorActive) && <BackgroundEffect effect={effect} />
  );
}

export default App;
