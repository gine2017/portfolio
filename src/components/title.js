import { myFont } from "@/utils";

export default function Title({
  title,
  color = "text-purple",
  styles = "w-full",
  id = "",
}) {
  return (
    <div
      className={` ${styles} flex justify-start border-b-4 border-black text-6xl`}
      id={id}
    >
      <span className={`${color} bg-white pb-8 ${myFont.className}`}>
        {title}
      </span>
    </div>
  );
}
