import galleryPal from "../../assets/gallery-pal-logo.svg";
import naturalU from "../../assets/natualU_logo.svg";
import friendship_illustration from "../../assets/friendship_illustration.svg";
import modernAttire from "../../assets/capstone/modernattire/modern-attire-thumbnail.png";
import Card from "@/components/card";
import Title from "./title";

export default function CaseStudy() {
  return (
    <section>
      <Title title={"Case Studies"} />
      <div className="flex flex-col gap-16 mt-16 lg:flex-row">
        <div className="flex flex-col gap-16 md:flex-[1 0 50%]">
          <Card
            title={"Gatherly"}
            content={"UI/UX Case study for a\ncommunity app"}
            image={friendship_illustration}
            link={"/case-study/gatherly"}
          />
          <Card
            title={"Gallery Pal"}
            content={"Google Venture Design Sprint"}
            image={galleryPal}
            link={"/case-study/gallery-pal"}
          />
        </div>
        <div className="flex flex-col gap-16 md:flex-[1 0 50%]">
          <Card
            title={"NaturalU"}
            content={`An educational app to learn\nabout different hair types`}
            image={naturalU}
            link={"/case-study/natural-u"}
          />
          <Card
            title={"Modern Attire"}
            content={`An elegant suit website`}
            image={modernAttire}
            link={"/case-study/modern-attire"}
          />
        </div>
      </div>
    </section>
  );
}
