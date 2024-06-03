import galleryPal from "../../assets/gallery-pal-logo.svg";
import naturalU from "../../assets/natualU_logo.svg";
import friendship_illustration from "../../assets/friendship_illustration.svg";
import modernAttire from "../../assets/capstone/modernattire/modern-attire-thumbnail.png";
import kdit from "../../assets/capstone/testwise/kdit-logo.svg";
import Card from "@/components/card";
import Title from "./title";

export default function CaseStudy() {
  return (
    <div>
      <Title title={"Case Studies"} />
      <div className="flex flex-col gap-8 mt-16 xl:flex-row ">
        <div className="flex flex-col gap-8 xl:basis-1/2 ">
          <Card
            title={"Gatherly"}
            content={"UI/UX Case study for a\ncommunity app"}
            image={friendship_illustration}
            link={"/case-study/gatherly"}
            className="flex-1"
          />
          <Card
            title={"NaturalU"}
            content={`An educational app to learn\nabout different hair types`}
            image={naturalU}
            link={"/case-study/natural-u"}
            className="flex-1"
          />
          <Card
            title={"Gallery Pal"}
            content={"Google Venture Design Sprint"}
            image={galleryPal}
            link={"/case-study/gallery-pal"}
            className="flex-1"
          />
        </div>
        <div className="flex flex-col gap-8 xl:basis-1/2">
          <Card
            title={"TestWise"}
            content={`A requirements dashboard\nfor KDIT Solutions`}
            image={kdit}
            link={"/case-study/testwise"}
            className="flex-1"
          />
          <Card
            title={"Modern Attire"}
            content={`An elegant suit website`}
            image={modernAttire}
            link={"/case-study/modern-attire"}
            className="flex-1"
          />
        </div>
      </div>
    </div>
  );
}
