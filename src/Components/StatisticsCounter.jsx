import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import {
  FaBolt,
  FaTachometerAlt,
  FaExchangeAlt,
  FaWater,
} from "react-icons/fa";

function StatisticsCounter() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const stats = [
    {
      icon: <FaBolt className="text-4xl text-teal-300 mx-auto mb-3" />,
      end: 15000,
      label: "Prepaid Meters Installed",
    },
    {
      icon: <FaTachometerAlt className="text-4xl text-teal-300 mx-auto mb-3" />,
      end: 28000,
      label: "AMR Meters Replaced",
    },
    {
      icon: <FaExchangeAlt className="text-4xl text-teal-300 mx-auto mb-3" />,
      end: 2000,
      label: "Meters Converted to AMR",
    },
    {
      icon: <FaWater className="text-4xl text-teal-300 mx-auto mb-3" />,
      end: 10000,
      label: "Water Meter Tests Completed",
    },
  ];

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center"
    >
      {stats.map((item, index) => (
        <div
          key={index}
          className="p-6 bg-[#14213D]/80 border border-teal-400/30 rounded-xl shadow-lg"
        >
          {item.icon}

          {/* FIX: Wrap CountUp + '+' inside same h3 and make mobile-friendly */}
          <h3 className="text-4xl sm:text-5xl font-bold text-teal-300 flex justify-center items-center gap-1">
            {inView ? <CountUp end={item.end} duration={3} separator="," /> : 0}
            <span className="text-teal-300">+</span>
          </h3>

          <p className="text-gray-300 mt-2 text-xs sm:text-sm md:text-base">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export default StatisticsCounter;
