import "./header.css";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import Image from "next/image";
import { FaArrowRightLong, FaPlay, FaSquareYoutube } from "react-icons/fa6";
export default function Header() {
  const imgStyle = {
    opacity: 0.2,
  };

  const digitalStyle = {
    objectFit: "cover" as const,
    width: "100%",
    height: "100%",
    borderRadius: "30px",
    opacity: 0.2,
  };

  return (
    <header className="w-full header z-10">
      <div className="hero-background -z-1">
        {/* *** Background *** */}
        <div className="circle">
          <Image
            src="/images/circle-transparent.png"
            alt="Circle Background"
            width={600}
            height={100}
            style={imgStyle}
          />
        </div>
        <div className="circle3d">
          <Image
            src="/images/3d-circle.png"
            alt="Circle Background"
            width={300}
            height={300}
          />
        </div>
        <div className="digital-images">
          <Image
            src="/images/digital-marketing.jpg"
            alt="Circle Background"
            width={600}
            height={400}
            loading="eager"
            style={digitalStyle}
          />
        </div>
        {/* *** End Background *** */}
        {/* *** Content *** */}
        <div className="container mx-auto py-20 font-[family-name:var(--monda)] header-content">
          <div className="elevate-text">
            <h2>Elevate Your Digital Presence</h2>
          </div>
          <div className="generative-ai">
            <FaArrowRightLong className="generative-arrow" />
            <p>with Generative AI</p>
          </div>
          <div className="elevate-description font-[family-name:var(--poppins)]">
            <p>
              At Shrader Technologies, we specialize in harnessing the power of
              Generative AI and social media to skyrocket your brand’s
              visibility on platforms like YouTube, Facebook, and TikTok. From
              creating viral content to optimizing your social strategy, we help
              you dominate the digital landscape and connect with your audience
              like never before.
            </p>
          </div>
        </div>
        {/* *** End Content *** */}
        <div className="header-links">
          <div className="social-header-links">
            <Link href="https://www.facebook.com/profile.php?id=61568733444376">
              <FaFacebookSquare className="h-8 w-8" />
            </Link>

            <Link href="https://www.youtube.com/@shradertechnologies">
              <FaSquareYoutube className="h-8 w-8" />
            </Link>
          </div>
          <div className="learn-header-links py-3 px-6 font-[family-name:var(--poppins)]">
            <Link href="/services" className="flex items-center gap-2">
              Learn More
              <FaPlay className="h-6 w-6 faplay-icons" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
