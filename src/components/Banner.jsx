import React from "react";
import bannerImg from "../assets/BANNER LP - 1920X500.png";

const Banner = () => {
  return (
    <>
      <section id="inicio" className="pt-24 bg-white">
        <div className="w-full">
          <img
            alt="Banner Feirão Limpa Pátio Santander"
            className="w-full h-auto object-cover"
            src={bannerImg}
            fetchPriority="high"
            decoding="sync"
          />
        </div>
      </section>
    </>
  );
};

export default Banner;
