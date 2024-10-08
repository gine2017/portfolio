import useIntersectionObserver from "@/hooks/userIntersectionObserver";

export default function WavyText({ text = "", styles = "" }) {
  const [isVisible, textRef] = useIntersectionObserver();

  return (
    <span ref={textRef} className={`${styles} ${isVisible ? "animate" : ""}`}>
      {text}
    </span>
  );
}
