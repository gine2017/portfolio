import { myFont } from "@/utils";

export default function Title({
  title,
  color = "text-purple",
  styles = "w-full",
  id = "",
}) {
  return (
    <div
      className={` ${styles} flex justify-start border-b-4 border-black text-5xl`}
      id={id}
    >
      <h2 className={`${color} bg-white pb-8 ${myFont.className}`}>{title}</h2>
    </div>
  );
}
