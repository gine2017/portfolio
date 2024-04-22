import { myFont, darkerGrotesque } from "@/utils";
export default function Stats({ statsArray = [], color = "text-purple" }) {
  return (
    <div className="flex gap-y-8 justify-center mx-auto flex-wrap md:gap-x-20">
      {statsArray.map((item) => {
        return (
          <div className="md:basis-1/6">
            <div className="flex flex-col gap-y-4 flex-1 ">
              <p
                className={` text-center ${color} ${myFont.className} text-5xl`}
              >
                {item.number}%
              </p>
              <p
                className={` text-center text-xl ${darkerGrotesque.className}`}
              >
                {item.text}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
