import "./header.css";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
// import Image from "next/image";
import { FaPlay, FaSquareYoutube } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import VideoBackground from "./videoBG/videoBackground";
export default function Header() {
  // const imgStyle = {
  //   opacity: 0.2,
  // };

  return (
    <header className="w-full header z-10">
      <div className="hero-background -z-1">
        {/* *** Background *** */}
        {/* <div className="circle">
          <Image
            src="/images/circle-transparent.png"
            alt="Circle Background"
            width={600}
            height={100}
            style={imgStyle}
          />
        </div> */}

        <VideoBackground />

        {/* *** End Background *** */}
        {/* *** Content *** */}
        <div className="container mx-auto py-20 font-[family-name:var(--monda)] header-content">
          <div className="elevate-text">
            <h2>
              Leverage <span>the best</span> Offshore AI Social Media Agency
            </h2>
          </div>

          <div className="elevate-description font-[family-name:var(--poppins)]">
            <div className="elevate-videos">
              <div className="videos">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/Cqc6xJXBKjs?autoplay=1&controls=0&modestbranding=1&rel=0"
                  title="YouTube video player"
                  style={{ border: "none" }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>

              <p>
                Let us skyrocket your social media.  Let us build your apps. 
                Let us plan and build your solutions with greater efficiency,
                <span> affordability and flexibility </span>than you will find
                anywhere else.
              </p>
            </div>
          </div>
        </div>
        {/* *** End Content *** */}
        <div className="header-links z-10 pb-4">
          <div className="social-header-links">
            <Link href="https://www.facebook.com/shradertech/">
              <FaFacebookSquare className="h-8 w-8 text-black-600 hover:text-blue-600 transition duration-300" />
            </Link>
            <Link href="hhttps://youtube.com/@shradertechnologies">
              <FaSquareYoutube className="h-8 w-8 hover:text-red-600 transition duration-300" />
            </Link>

            <Link href="https://www.tiktok.com/@shrader.tech">
              <AiFillTikTok className="h-8 w-8 hover:text-teal-600 transition duration-300" />
            </Link>
          </div>
          <div className="learn-header-links py-3 px-6 font-[family-name:var(--poppins)]">
            <Link href="/contact" className="flex items-center gap-2">
              Learn More
              <FaPlay className="h-6 w-6 faplay-icons" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
