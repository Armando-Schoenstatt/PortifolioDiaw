import { useEffect, useRef } from "react";

export default function InlineAppFrame({ src, title }) {
  const frame = useRef(null);
  const observer = useRef(null);
  const pointerWindow = useRef(null);

  const forwardEmbeddedEvent = (name, detail) => {
    window.dispatchEvent(new CustomEvent(name, { detail }));
  };

  const forwardPointerMove = (event) => {
    const iframe = frame.current;
    if (!iframe) return;
    const rect = iframe.getBoundingClientRect();
    forwardEmbeddedEvent("portfolio-embedded-pointermove", {
      clientX: rect.left + event.clientX,
      clientY: rect.top + event.clientY,
    });
  };

  const forwardPointerLeave = () => {
    forwardEmbeddedEvent("portfolio-embedded-pointerleave");
  };

  const detachPointerBridge = () => {
    const childWindow = pointerWindow.current;
    if (!childWindow) return;
    childWindow.removeEventListener("pointermove", forwardPointerMove);
    childWindow.document.documentElement.removeEventListener("pointerleave", forwardPointerLeave);
    pointerWindow.current = null;
  };

  const resizeFrame = () => {
    const iframe = frame.current;
    const childDocument = iframe?.contentDocument;
    const root = childDocument?.getElementById("root");
    if (!iframe || !childDocument || !root) return;

    detachPointerBridge();
    const childWindow = iframe.contentWindow;
    if (childWindow) {
      pointerWindow.current = childWindow;
      childWindow.addEventListener("pointermove", forwardPointerMove, { passive: true });
      childDocument.documentElement.addEventListener("pointerleave", forwardPointerLeave);
    }

    childDocument.documentElement.classList.add("portfolio-embed");
    observer.current?.disconnect();

    const updateHeight = () => {
      const content = childDocument.querySelector(".page-container") ?? root;
      iframe.style.height = `${Math.ceil(content.getBoundingClientRect().height)}px`;
    };

    observer.current = new ResizeObserver(updateHeight);
    observer.current.observe(root);
    updateHeight();
  };

  useEffect(
    () => () => {
      observer.current?.disconnect();
      detachPointerBridge();
    },
    []
  );

  return (
    <iframe
      ref={frame}
      className="inline-app-frame"
      src={src}
      title={title}
      loading="lazy"
      onLoad={resizeFrame}
    />
  );
}
