import "./header.css";
import Image from "next/image";
export default function Header() {
  const imgStyle = {
    opacity: 0.5,
  };
  return (
    <header className="w-full header">
      <div className="hero-background -z-1">
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
            height={100}
          />
        </div>
        <div className="container mx-auto py-20 header-content">
          <div className="elevate-text">
            <h2>Elevate Your Digital Presence</h2>
          </div>
          <div className="generative-ai">
            <p>with Generative AI</p>
          </div>
        </div>
      </div>
    </header>
  );
}
