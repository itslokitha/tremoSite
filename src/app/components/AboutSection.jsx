"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Digital Marketing",
    id: "digital",
    content: (
      <ul className="list-disc pl-2">
        <li>Search Engine Optimization</li>
        <li>Ad Creation & Management (Google, Facebook, Instagram, etc.)</li>
        <li>CRM Development</li>
        <li>Campaign Creation & Management (Email, Newsletter, SMS)</li>
      </ul>
    ),
  },
  {
    title: "Web Development",
    id: "web",
    content: (
      <ul className="list-disc pl-2">
        <li>Business/Personal Websites</li>
        <li>Portfolio Websites</li>
        <li>E-commerce Web Development (including online purchasing)</li>
        <li>Online Stores</li>
      </ul>
    ),
  },
  {
    title: "Systems Development",
    id: "system",
    content: (
      <ul className="list-disc pl-2">
        <li>POS System Development</li>
        <li>Database Management & Visualization</li>
        <li>Machine Learning Systems</li>
      </ul>
    ),
  },
  {
    title: "Graphic Designing",
    id: "graphic",
    content: (
      <ul className="list-disc pl-2">
        <li>Posters (Hardcopy & Softcopy)</li>
        <li>Online Posts</li>
      </ul>
    ),
  },
  {
    title: "Social Media Management",
    id: "social",
    content: (
      <ul className="list-disc pl-2">
        <li>Social Media Ad Management</li>
        <li>Brand Awareness</li>
        <li>Account Management</li>
        <li>Post Creation & Management</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("digital");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" alt="aboutImage" width={700} height={700} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Us</h2>
          <p className="text-base lg:text-lg">
          At Tremo Management, we&apos;re a digital dynamo team excelling in marketing, web, graphics, and social media. 
          Our aim? To amplify your online impact with creativity and precision. Partner with us, and let&apos;s shape the digital future.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("digital")}
              active={tab === "digital"}
            >
              {" "}
              Digital Marketing{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("web")}
              active={tab === "web"}
            >
              {" "}
              Web Development{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("system")}
              active={tab === "system"}
            >
              {" "}
              Systems Development{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("graphic")}
              active={tab === "graphic"}
            >
              {" "}
              Graphic Designing{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("social")}
              active={tab === "social"}
            >
              {" "}
              Social Media Management{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
