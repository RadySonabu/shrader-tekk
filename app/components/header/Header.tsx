import React from "react";
import Navbar from "../navbar/Navbar";
import "./header.css";
export default function Header() {
  return (
    <header className="w-full h-24 header flex items-center">
      <Navbar />
    </header>
  );
}
