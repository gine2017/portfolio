import { useState } from "react";
import Head from "next/head";
import MobileNav from "@/components/mobile-nav";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Footer from "@/components/footer";
import {
  zoomImage,
  darkerGrotesqueTitle,
  interBody,
  interBold,
  createImageArray,
  solutionInActionStyles,
} from "@/utils";
import useWindowSize from "@/hooks/useWindowSize";
import CaseStudyFooter from "@/components/case-study-footer";

//images
import adp_1 from "../../../assets/capstone/adp/adp-1.png";
import adp_2 from "../../../assets/capstone/adp/adp-2.png";
import adp_3 from "../../../assets/capstone/adp/adp-3.png";
import adp_4 from "../../../assets/capstone/adp/adp-4.png";

export default function ADP() {
  const { width } = useWindowSize();
  const [showContent, setShowContent] = useState(true);
  const [zoomedOutcomeIndex, setZoomedOutcomeIndex] = useState(null);

  const updateContent = (state) => {
    setShowContent(state);
  };
  const handleClick = (index) => {
    setZoomedOutcomeIndex((prev) => (prev === index ? null : index));
  };
  const adpImages = [adp_1, adp_2, adp_3, adp_4];
  return (
    <>
      <Head>
        <title>ADP Case Study </title>
      </Head>
      {width <= 767 ? <MobileNav updateContent={updateContent} /> : <Navbar />}
      {showContent && (
        <main className="mx-auto w-80% flex flex-col gap-y-20 mt-16 mb-48">
          <div className=" h-[35rem] w-full relative  bg-adp-blue">
            <div className="px-4 flex flex-col md:flex-row justify-center items-center h-full gap-x-6">
              <div className=" w-[15rem] h-[15rem] md:w-[30rem] md:h-[30rem] relative">
                <Image
                  src={adp_1}
                  alt="Testwise Dashboard Image"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="w-[15rem] h-[15rem] md:w-[30rem] md:h-[30rem] relative">
                <Image
                  src={adp_2}
                  alt="Testwise Kanban Image"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
          <h1
            className={`flex justify-center text-adp-blue ${darkerGrotesqueTitle.className} text-6xl`}
          >
            ADP
          </h1>
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <h3
              className={`text-adp-blue text-5xl ${darkerGrotesqueTitle.className}`}
            >
              Overview
            </h3>
            <div className={`text-2xl leading-relaxed ${interBody.className}`}>
              <p>
                {`I was a Software Engineer at ADP, working on ADP Run, an enterprise payroll platform 
                serving 800,000+ clients.My main project was rebuilding the B2B client onboarding 
                system. I built React components, optimized workflows, and reduced client setup 
                time by 40% while maintaining WCAG compliance.
                Note: Specific screens cannot be shown due to confidentiality.`}
              </p>
              <span>
                The public product:{" "}
                <a
                  href="https://www.adp.com/what-we-offer/products/run-powered-by-adp.aspx"
                  passHref={true}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-2xl leading-relaxed ${interBody.className} underline cursor-pointer`}
                >
                  ADP Run
                </a>
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <h3
              className={`text-adp-blue text-5xl ${darkerGrotesqueTitle.className}`}
            >
              My Role
            </h3>
            <h4
              className={`text-adp-blue text-4xl ${darkerGrotesqueTitle.className}`}
            >
              What I built
            </h4>
            <ul
              className={`list-disc text-2xl leading-relaxed ${interBody.className} `}
            >
              <li className="mb-4">
                React components for client onboarding workflows
              </li>
              <li className="mb-4">
                Multi-tenant B2B interfaces integrated with C# APIs
              </li>
              <li className="mb-4">WCAG-compliant forms and data tables</li>
              <li className="mb-4">
                Performance-optimized components for 800K+ users
              </li>
            </ul>
            <h4
              className={`text-adp-blue text-4xl ${darkerGrotesqueTitle.className}`}
            >
              Technologies
            </h4>
            <ul
              className={`list-disc text-2xl leading-relaxed ${interBody.className} `}
            >
              <li className="mb-4">React, TypeScript, JavaScript</li>
              <li className="mb-4">HTML/CSS, TailwindCSS, Responsive Design</li>
              <li className="mb-4">WCAG-compliant forms and data tables</li>
              <li className="mb-4">C# RESTful APIs</li>
              <li className="mb-4">Jest, Cypress, Mocha</li>
              <li className="mb-4">Git, Jira, Jenkins CI/CD</li>
            </ul>
            <p className={`text-2xl  ${interBody.className}`}>
              Key Achievement Reduced client onboarding time through component
              optimization and streamlined user flows.
            </p>
          </div>
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <h3
              className={`text-adp-blue text-5xl ${darkerGrotesqueTitle.className}`}
            >
              Outcome
            </h3>
            <div className={`text-2xl leading-relaxed ${interBody.className}`}>
              <p>
                {`My work on ADP Run directly served 800,000+ clients across the
                United States, handling billions of dollars in payroll
                processing annually. I built React components and optimized
                workflows that met WCAG 2.1 AA compliance standards, maintained
                sub-second response times, and supported thousands of concurrent
                businesses with different configurations and needs.`}
              </p>
              <br />
              <p>
                {`The client onboarding optimization was my most significant
                contribution, reducing confusion and excessive third-party
                communication between sales teams, CPAs, and finance
                professionals by 40%. By streamlining the user interface and
                creating clearer workflows, I helped clients complete setup with
                less back-and-forth, reducing support burden while maintaining
                enterprise-grade reliability and accessibility standards.`}
              </p>
              <br />
              <h4
                className={`text-adp-blue text-4xl mb-8 ${darkerGrotesqueTitle.className}`}
              >
                What I Learned
              </h4>
              <p>
                {`Building for hundreds of thousands of users taught me
                performance optimization, accessibility standards, and how to
                work within large engineering teams. I learned to balance
                technical excellence with business requirements while
                maintaining code quality at scale.`}
              </p>
              <br />
              <p>
                Public-facing ADP Run interface. Some screens shown include
                React components I contributed to. My primary work on internal
                onboarding systems cannot be shown due to confidentiality.
              </p>
            </div>
            <p
              className={`${interBody.className} italic text-md text-center  pt-4`}
            >
              Click on each image to enlarge
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {adpImages.map((img, index) => {
                return (
                  <div
                    className={`relative w-[45%]  group cursor-pointer`}
                    onClick={() => handleClick(index)}
                    key={index}
                  >
                    <Image
                      src={img}
                      alt="ADP Product Screen"
                      className="object-contain w-full border-2 rounded-xl border-slate-200 "
                      style={
                        zoomedOutcomeIndex === index
                          ? zoomImage(true, true)
                          : {}
                      }
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"></div>
                  </div>
                );
              })}
            </div>
          </div>
          <CaseStudyFooter casestudy="ADP" />
        </main>
      )}
      {showContent && <Footer width={width} />}
    </>
  );
}
