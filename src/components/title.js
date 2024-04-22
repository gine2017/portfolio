import { myFont } from "@/utils";

export default function Title({ title, color = "text-purple" }) {
  return (
    <div className=" w-full flex justify-start border-b-4 border-black text-4xl md:text-5xl">
      <span className={`${color} bg-white pb-4 ${myFont.className}`}>
        {title}
      </span>
    </div>
  );
}
