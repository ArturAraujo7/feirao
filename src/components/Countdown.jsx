import React, { useState, useEffect } from "react";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-03-27T09:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-4 mb-12">
      <div className="flex flex-col items-center bg-gray-50 border border-gray-100 rounded-2xl p-4 min-w-[80px] shadow-sm">
        <span className="text-2xl font-bold text-[#EC0000]">
          {String(timeLeft.days).padStart(2, "0")}
        </span>
        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
          Dias
        </span>
      </div>
      <div className="flex flex-col items-center bg-gray-50 border border-gray-100 rounded-2xl p-4 min-w-[80px] shadow-sm">
        <span className="text-2xl font-bold text-[#EC0000]">
          {String(timeLeft.hours).padStart(2, "0")}
        </span>
        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
          Hrs
        </span>
      </div>
      <div className="flex flex-col items-center bg-gray-50 border border-gray-100 rounded-2xl p-4 min-w-[80px] shadow-sm">
        <span className="text-2xl font-bold text-[#EC0000]">
          {String(timeLeft.minutes).padStart(2, "0")}
        </span>
        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
          Min
        </span>
      </div>
      <div className="flex flex-col items-center bg-gray-50 border border-gray-100 rounded-2xl p-4 min-w-[80px] shadow-sm">
        <span className="text-2xl font-bold text-[#EC0000]">
          {String(timeLeft.seconds).padStart(2, "0")}
        </span>
        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
          Seg
        </span>
      </div>
    </div>
  );
};

export default Countdown;
