import { useEffect, useRef } from "react";

export default function InlineAppFrame({ src, title }) {
  const frame = useRef(null);
  const observer = useRef(null);

  const resizeFrame = () => {
    const iframe = frame.current;
    const childDocument = iframe?.contentDocument;
    const root = childDocument?.getElementById("root");
    if (!iframe || !childDocument || !root) return;

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

  useEffect(() => () => observer.current?.disconnect(), []);

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
