"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { edgeData } from "../data/data";
import "./edge.css";

export default function Edge() {
  const stepsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const step = entry.target as HTMLDivElement;
            const index = parseInt(step.dataset.index || "0", 10);
            const stepCounter = step.querySelector(".step-counter");
            const stepDescription = step.querySelector(".step-description");

            if (stepCounter) {
              setTimeout(() => {
                stepCounter.classList.add("visible");
              }, index * 250); // Adjusted for smoother animation
            }

            if (stepDescription) {
              setTimeout(() => {
                stepDescription.classList.add("visible");
              }, index * 250); // Adjusted for smoother animation
            }
          }
        });
      },
      { threshold: window.innerWidth < 768 ? 0.2 : 0.5 } // Lower threshold for mobile
    );

    stepsRef.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => observer.disconnect();
  }, []);

  const imgStyle: React.CSSProperties = {
    opacity: 0.2,
    maxWidth: "100%",
    height: "auto",
  };

  return (
    <div className="w-full h-screen edge-container" id="edge">
      {/* Background */}
      <div className="arrows">
        <Image
          src="/images/arrows.png"
          alt="Arrows"
          width={200}
          height={200}
          sizes="(max-width: 768px) 50vw, 200px"
          style={imgStyle}
        />
      </div>
      <div className="edge-circle">
        <Image
          src="/images/circle-transparent.png"
          alt="Circle Background"
          width={200}
          height={100}
          sizes="(max-width: 768px) 50vw, 200px"
          style={imgStyle}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto ">
        <div className="text-center edge-title">
          <h2>Why Shrader Technologies Stands Out</h2>
        </div>
        <div className="w-full flex flex-col items-center gap-4 md:flex-row md:gap-8">
          <div className="edge-image">
            <Image
              src="/images/stand-out.jpg"
              alt="Why Shrader Technologies Stands Out"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="steps-container">
            {edgeData.map((item, index) => (
              <div
                key={item.id}
                className="step"
                ref={(el) => {
                  if (el) stepsRef.current[index] = el;
                }}
                data-index={index.toString()}
              >
                <div className="step-counter-container">
                  <div className="step-counter">
                    <h3 className="step-title">{item.title}</h3>
                    <div className="step-line"></div>
                    <div className="step-icon">{item.id}</div>
                  </div>
                </div>

                <p className="step-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
