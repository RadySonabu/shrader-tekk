import Header from "./components/header/Header";
import Marquee from "./components/marquee/Marquee";
import "./globals.css";
export default function Home() {
  return (
    <main className="main">
      <Header />
      <Marquee />
    </main>
  );
}
