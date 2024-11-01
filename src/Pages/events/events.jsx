import { useState, useEffect } from "react";
import CarouselComponent from "../../components/carousel";

import icl2 from "../../assets/images/icl2.jpg"
import cloneitup from "../../assets/images/cloneitup.jpg"
import ace from "../../assets/images/aceplacements.jpg"
import code2 from "../../assets/images/code2job.jpg"
import ctf from "../../assets/images/ctf.jpg"
import dsa from "../../assets/images/dsa-blitz.jpg"
import encode from "../../assets/images/encode.jpg"
import excite from "../../assets/images/excite.jpg"
import tech from "../../assets/images/tech-trial.jpg"
import turtle from "../../assets/images/turtle.jpg"

const images = [
  {
    img: "/image.png",
    ename: "DAWN 1.0",
    date: "22 MAY 2023",
    desc: "Intro to CP basics",
  },
  {
    img: icl2,
    ename: "Interclass Coding League",
    date: "22 JULY 2024",
    desc: "Interclass coding competition",
  },
  {
    img: cloneitup,
    ename: "CloneItUp",
    date: "11 SEPTEMBER 2024",
    desc: "Beginner coding challenge",
  },
  {
    img: ace,
    ename: "Strategies to Ace Placements",
    date: "JULY 31",
    desc: "Placement preparation strategies",
  },
  {
    img: code2,
    ename: "Code2Job",
    date: "AUG 7",
    desc: "Career-focused coding event",
  },
  {
    img: ctf,
    ename: "CaptureTheFlag",
    date: "17 AUGUST 2024",
    desc: "CTF hacking challenge",
  },
  {
    img: dsa,
    ename: "DSA Blitz",
    date: "AUGUST 3",
    desc: "Quick DSA practice",
  },
  {
    img: encode,
    ename: "XTREME ENCODE",
    date: "22 JULY 2024",
    desc: "Advanced encoding contest",
  },
  {
    img: excite,
    ename: "EXCITE",
    date: "12 APRIL 2024",
    desc: "Exciting tech showdown",
  },
  {
    img: tech,
    ename: "TECH TRIAL",
    date: "27 SEPTEMBER 2024",
    desc: "Tech skills competition",
  },
  {
    img: turtle,
    ename: "TURTLE POOKALAM",
    date: "18 SEPTEMBER 2024",
    desc: "Cultural design contest",
  },
];


function EventComponent() {
  const [tab, setTab] = useState(0);
  const [transition, setTransition] = useState("");
  const [screen, setScreen] = useState(true);

  const isSmallScreen = () =>
    window.innerWidth <= 768 ? setScreen(false) : setScreen(true);

  useEffect(() => {
    isSmallScreen();
    window.addEventListener("resize", isSmallScreen);
    return () => window.removeEventListener("resize", isSmallScreen);
  }, []);

  const handleNext = () => {
    setTransition("fade-out");
    setTimeout(() => {
      setTab((tab + 1) % images.length);
      setTransition("fade-in");
    }, 300);
  };

  const handlePrev = () => {
    setTransition("fade-out");
    setTimeout(() => {
      setTab((tab - 1 + images.length) % images.length);
      setTransition("fade-in");
    }, 300);
  };

  return (
    <section id="events" className="px-4 py-8 md:px-24 flex flex-col">
      <div className="grid grid-cols-1 sm:grid-cols-2 pb-8">
        <div className="flex flex-col col-span-1 pb-4 sm:pb-0">
          <div className="text-5xl font-semibold text-white">EVENTS</div>
          <div className="text-2xl text-[#DB9EE5] font-semibold">
            Our Current and Upcoming Events
          </div>
        </div>
        <div
          className="cols-span-1 flex items-center justify-start sm:justify-end 
        "
        >
          {/* <button
            onClick={handlePrev}
            className="flex items-center text-slate-300 pb-1 px-4 rounded border-2 border-slate-300 text-xl font-semibold justify-center bg-[#9A00B3] hover:bg-transparent hover:border-[#9A00B3] hover:text-[#9A00B3] duration-300"
          >
            Previous Events
          </button> */}
        </div>
      </div>
      {screen && (
        <div>
          <div className="event-carousel flex relative overflow-hidden h-[60vh]">
            <div className="relative h-full w-full flex items-center justify-center">
              <div className="w-full absolute left-[25%] flex">
                <img
                  className={`three absolute -left-60 scale-[0.85] h-full -z-10 blur-md aspect-square w-[360px] ${transition}`}
                  src={images[(tab + 2) % images.length].img}
                  alt="Event"
                />
                <img
                  className={`two absolute -left-32 scale-[0.925] h-full -z-10 blur-sm aspect-square w-[360px] ${transition}`}
                  src={images[(tab + 1) % images.length].img}
                  alt="Event"
                />
                <img
                  className={`one aspect-square w-[360px] ${transition}`}
                  src={images[tab].img}
                  alt="Event"
                />
                <div className="bg-[#7b2e87] w-[35%] p-4 scale-y-[0.85]">
                  <div className="pl-4 pb-2 text-2xl scale-y-[1.2] font-arial font-bold text-white">
                    {images[tab].ename}
                  </div>
                  <div className="pl-4 pb-4">
                    <div className="text-lg scale-y-[1.2] font-arial font-semibold text-slate-200">
                      Date : {images[tab].date}
                    </div>
                  </div>
                 
                  <div className="pl-4 pb-4 flex scale-y-[1.2]  font-mono font-normal text-slate-200">
                    {images[tab].desc}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={handlePrev}
              className="px-4 py-2 mx-2 min-w-[120px] rounded border-2 text-xl font-semibold bg-transparent border-[#9A00B3] text-[#9A00B3] duration-300 hover:bg-[#9A00B3] hover:text-[#111010] outline outline-transparent hover:outline-black -outline-offset-4"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className=" px-4 py-2 mx-2 min-w-[120px] rounded border-2 text-xl font-semibold bg-transparent border-[#9A00B3] text-[#9A00B3] duration-300 hover:bg-[#9A00B3] hover:text-[#111010] outline outline-transparent hover:outline-black -outline-offset-4"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {!screen && <CarouselComponent images={images} />}
    </section>
  );
}

export default EventComponent;
