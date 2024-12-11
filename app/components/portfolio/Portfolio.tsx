import Image from "next/image";
import { portfolioData } from "../data/data";
import "./portfolio.css";
export default function Portfolio() {
  return (
    <div className="w-full min-h-[70vh] flex justify-center items-center portfolio-container">
      <div className="container mx-auto porfolios">
        <ul className="flex flex-col sm:flex-row sm:flex-wrap justify-start items-center gap-5">
          {portfolioData.map((item) => {
            if (!item) return null;
            return (
              <li
                key={item.id}
                className="w-80 sm:w-[48%] md:w-[30%] lg:w-[22%] rounded-lg outline-none"
              >
                <div className="front-card">
                  <div className="image-card">
                    <Image
                      src={item.imgSrc}
                      alt={item.alt}
                      width={420}
                      height={420}
                    ></Image>
                  </div>
                  <p className="card-titles">{item.title}</p>
                  <p>{item.description}</p>
                </div>
                <div className="back-card">
                  <div className="flex flex-col gap-3 back-items">
                    <p className="problem">{item.problem}</p>
                    <p className="solution">{item.solution}</p>
                    <p className="status">{item.status}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
