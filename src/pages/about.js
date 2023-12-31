import React, { useEffect, useRef } from "react";
import Layout from "@/components/Layout";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import Pfp from "/Users/vivek/Downloads/Residue/Portfolio/public/images/profile/vivek2.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInview = useInView(ref, { once: true });

  useEffect(() => {
    if (isInview) {
      motionValue.set(value);
    }
  }, [isInview, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
        // console.log(latest)
      }
    });
  }, [springValue, value]);
  return <span ref={ref}></span>;
};

const About = () => {
  return (
    <>
      <Head>
        <title>Vivek Aggarwal | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Where Imagination Meets Reality!"
            className="lg:!text-7xl sm:!text-6xl xs:!text-4xl mb-16 sm:mb-8"
          />
          <div className="grid grid-cols-8 w-full gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium ">
                Welcome to my digital hub! I'm Vivek Aggarwal, a passionate
                learner and developer, immersed in the dynamic world of web
                development. As a passionate web developer, I find joy in
                crafting seamless UI/UX experiences and pushing the boundaries
                of what's possible.
              </p>

              <p className="my-4 font-medium">
                Beyond my academic pursuits, my enthusiasm extends to blockchain
                development—a space that captivates me with its decentralized
                and secure possibilities. This curiosity aligns with my
                commitment to staying at the forefront of technological
                advancements.
              </p>

              <p className="font-medium">
                This digital space serves as a canvas for my endeavors,
                featuring a collection of my web development projects, UI/UX
                designs, and insights into the captivating world of blockchain
                development. Join me on this journey as I continue to navigate
                and contribute to the exciting landscape of technology and
                design.
              </p>
            </div>

            <div
              className="col-span-3 relative h-max  rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light 
            xl:col-span-4 md:order-1 md:col-span-8
            "
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%]  rounded-2xl bg-dark dark:bg-light" />
              <Image
                src={Pfp}
                alt="Vivek Aggarwal"
                className="w-full h-auto rounded-2xl border border-solid border-dark dark:border-light"
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="col-span-2  flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center order-3 ">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl  md:text-6xl sm:text-5xl xs:text-4xl font-bold">
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className="text-xl xl:text-center md:text-lg sm:text-base xs:text-sm  font-medium capitalize text-dark/75 dark:text-light/75">
                  Projects Completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl md:text-6xl sm:text-5xl xs:text-4xl font-bold">
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className="text-xl xl:text-center md:text-lg sm:text-base xs:text-sm font-medium capitalize text-dark/75 dark:text-light/75">
                  Projects Completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl md:text-6xl sm:text-5xl xs:text-4xl font-bold">
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className="text-xl xl:text-center md:text-lg sm:text-base xs:text-sm font-medium capitalize text-dark/75 dark:text-light/75">
                  Projects Completed
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About;
