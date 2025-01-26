import React, { useState, useEffect } from "react";

const E1Schedule = {
  "10:30 AM\n—\n11:30 AM": {
    Friday: { text: "SE LAB 4", bg: "from-blue-600 via-blue-500 to-blue-400" },
  },
  "11:30 AM\n—\n12:30 PM": {
    Monday: { text: "PD", bg: "from-pink-600 via-pink-500 to-pink-400" },
    Tuesday: { text: "ED", bg: "from-green-600 via-green-500 to-green-400" },
    Wednesday: { text: "PD", bg: "from-pink-600 via-pink-500 to-pink-400" },
    Thursday: {
      text: "Java",
      bg: "from-yellow-600 via-yellow-500 to-yellow-400",
    },
    Friday: {
      text: "Java",
      bg: "from-yellow-600 via-yellow-500 to-yellow-400",
    },
    Saturday: {
      text: "SE",
      bg: "from-indigo-600 via-indigo-500 to-indigo-400",
    },
  },
  "12:30 PM\n—\n01:30 PM": {
    Monday: {
      text: ["DS 514", "AI LAB 3"],
      bg: "from-orange-600 via-orange-500 to-orange-400",
    },
    Tuesday: {
      text: ["DS LAB 4", "AI 515"],
      bg: "from-orange-600 via-orange-500 to-orange-400",
    },
    Wednesday: {
      text: "Java",
      bg: "from-yellow-600 via-yellow-500 to-yellow-400",
    },
    Thursday: {
      text: ["DS LAB 4", "AI 515"],
      bg: "from-orange-600 via-orange-500 to-orange-400",
    },
    Friday: {
      text: ["DS 514", "AI 515"],
      bg: "from-orange-600 via-orange-500 to-orange-400",
    },
    Saturday: {
      text: ["DS 514", "AI LAB 3"],
      bg: "from-orange-600 via-orange-500 to-orange-400",
    },
  },
  "01:30 PM\n—\n02:30 PM": {
    Monday: { text: "SE", bg: "from-indigo-600 via-indigo-500 to-indigo-400" },
    Tuesday: {
      text: "Java",
      bg: "from-yellow-600 via-yellow-500 to-yellow-400",
    },
    Wednesday: {
      text: "DM",
      bg: "from-purple-600 via-purple-500 to-purple-400",
    },
    Thursday: { text: "BREAK", bg: "from-red-500 via-red-400 to-red-300" },
    Friday: { text: "BREAK", bg: "from-red-500 via-red-400 to-red-300" },
    Saturday: {
      text: "Java Lab 4",
      bg: "from-yellow-700 via-yellow-600 to-yellow-500",
    },
  },
  "02:30 PM\n—\n03:30 PM": {
    Monday: { text: "BREAK", bg: "from-red-500 via-red-400 to-red-300" },
    Tuesday: { text: "BREAK", bg: "from-red-500 via-red-400 to-red-300" },
    Wednesday: { text: "BREAK", bg: "from-red-500 via-red-400 to-red-300" },
    Thursday: {
      text: "SE LAB 4",
      bg: "from-blue-600 via-blue-500 to-blue-400",
    },
    Friday: { text: "DM", bg: "from-purple-600 via-purple-500 to-purple-400" },
    Saturday: { text: "BREAK", bg: "from-red-500 via-red-400 to-red-300" },
  },
  "03:30 PM\n—\n04:30 PM": {
    Monday: { text: "ED", bg: "from-green-600 via-green-500 to-green-400" },
    Tuesday: { text: "DM", bg: "from-purple-600 via-purple-500 to-purple-400" },
    Wednesday: {
      text: "SE",
      bg: "from-indigo-600 via-indigo-500 to-indigo-400",
    },
    Thursday: {
      text: "DM",
      bg: "from-purple-600 via-purple-500 to-purple-400",
    },
    Friday: { text: "ED", bg: "from-green-600 via-green-500 to-green-400" },
    Saturday: { text: "ED", bg: "from-green-600 via-green-500 to-green-400" },
  },
  "04:30 PM\n—\n05:30 PM": {
    Monday: {
      text: "Java Lab 4",
      bg: "from-yellow-700 via-yellow-600 to-yellow-500",
    },
    Tuesday: { text: "SE LAB 4", bg: "from-blue-600 via-blue-500 to-blue-400" },
    Wednesday: {
      text: "Java Lab 4",
      bg: "from-yellow-700 via-yellow-600 to-yellow-500",
    },
    Thursday: {
      text: "SE",
      bg: "from-indigo-600 via-indigo-500 to-indigo-400",
    },
    Friday: {
      text: "Java Lab 4",
      bg: "from-yellow-700 via-yellow-600 to-yellow-500",
    },
    Saturday: {
      text: "SE LAB 4",
      bg: "from-blue-600 via-blue-500 to-blue-400",
    },
  },
};

const E2Schedule = {
  "10:30 AM\n—\n11:30 AM": {
    Monday: { text: "SE", bg: "from-blue-600 via-blue-500 to-blue-400" },
  },
  "11:30 AM\n—\n12:30 PM": {
    Monday: { text: "ED", bg: "from-green-600 via-green-500 to-green-400" },
    Tuesday: { text: "SE", bg: "from-blue-600 via-blue-500 to-blue-400" },
    Wednesday: { text: "SE", bg: "from-blue-600 via-blue-500 to-blue-400" },
    Thursday: { text: "SE", bg: "from-blue-600 via-blue-500 to-blue-400" },
    Friday: { text: "PD", bg: "from-pink-600 via-pink-500 to-pink-400" },
    Saturday: {
      text: "DM",
      bg: "from-purple-600 via-purple-500 to-purple-400",
    },
  },
  "12:30 PM\n—\n1:30 PM": {
    Monday: {
      text: ["IDS 514", "AI Lab 3"],
      bg: "from-orange-600 via-orange-500 to-orange-400",
    },
    Tuesday: {
      text: ["IDS Lab 4", "AI 515"],
      bg: "from-orange-600 via-orange-500 to-orange-400",
    },
    Wednesday: {
      text: "Java",
      bg: "from-yellow-600 via-yellow-500 to-yellow-400",
    },
    Thursday: {
      text: ["IDS Lab 4", "AI 515"],
      bg: "from-orange-600 via-orange-500 to-orange-400",
    },
    Friday: {
      text: ["IDS 514", "AI 515"],
      bg: "from-orange-600 via-orange-500 to-orange-400",
    },
    Saturday: {
      text: ["IDS 514", "AI Lab 3"],
      bg: "from-orange-600 via-orange-500 to-orange-400",
    },
  },
  "1:30 PM\n—\n2:30 PM": {
    Monday: { text: "BREAK", bg: "from-red-500 via-red-400 to-red-300" },
    Tuesday: { text: "BREAK", bg: "from-red-500 via-red-400 to-red-300" },
    Wednesday: { text: "BREAK", bg: "from-red-500 via-red-400 to-red-300" },
    Thursday: { text: "BREAK", bg: "from-red-500 via-red-400 to-red-300" },
    Friday: { text: "BREAK", bg: "from-red-500 via-red-400 to-red-300" },
    Saturday: { text: "BREAK", bg: "from-red-500 via-red-400 to-red-300" },
  },
  "2:30 PM\n—\n3:30 PM": {
    Monday: { text: "DM", bg: "from-purple-600 via-purple-500 to-purple-400" },
    Tuesday: { text: "DM", bg: "from-purple-600 via-purple-500 to-purple-400" },
    Wednesday: { text: "PD", bg: "from-pink-600 via-pink-500 to-pink-400" },
    Thursday: {
      text: "DM",
      bg: "from-purple-600 via-purple-500 to-purple-400",
    },
    Friday: {
      text: "Java Lab 4",
      bg: "from-yellow-700 via-yellow-600 to-yellow-500",
    },
    Saturday: {
      text: "SE Lab 4",
      bg: "from-blue-600 via-blue-500 to-blue-400",
    },
  },
  "3:30 PM\n—\n4:30 PM": {
    Monday: { text: "SE Lab 4", bg: "from-blue-600 via-blue-500 to-blue-400" },
    Tuesday: {
      text: "Java Lab 4",
      bg: "from-yellow-700 via-yellow-600 to-yellow-500",
    },
    Wednesday: {
      text: "SE Lab 4",
      bg: "from-blue-600 via-blue-500 to-blue-400",
    },
    Thursday: {
      text: "Java Lab 4",
      bg: "from-yellow-700 via-yellow-600 to-yellow-500",
    },
    Friday: { text: "SE Lab 4", bg: "from-blue-600 via-blue-500 to-blue-400" },
    Saturday: {
      text: "Java Lab 4",
      bg: "from-yellow-700 via-yellow-600 to-yellow-500",
    },
  },
  "4:30 PM\n—\n5:30 PM": {
    Monday: {
      text: "Java",
      bg: "from-yellow-600 via-yellow-500 to-yellow-400",
    },
    Tuesday: { text: "ED", bg: "from-green-600 via-green-500 to-green-400" },
    Wednesday: { text: "ED", bg: "from-green-600 via-green-500 to-green-400" },
    Thursday: {
      text: "Java",
      bg: "from-yellow-600 via-yellow-500 to-yellow-400",
    },
    Friday: {
      text: "Java",
      bg: "from-yellow-600 via-yellow-500 to-yellow-400",
    },
    Saturday: { text: "ED", bg: "from-green-600 via-green-500 to-green-400" },
  },
};

export default function Timetable() {
  const [isE2, setIsE2] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const schedule = isE2 ? E2Schedule : E1Schedule;
  const timeSlots = Object.keys(schedule);
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const handleSwitch = () => {
    setFadeOut(true);
    setTimeout(() => {
      setIsE2(!isE2);
      setFadeOut(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="container mx-auto bg-gray-900 rounded-2xl p-6 shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-gray-800">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Class Schedule {isE2 ? "E2" : "E1"}
          </h1>
          <button
            onClick={handleSwitch}
            className="relative px-6 py-3 font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-out hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">
              Switch to {isE2 ? "E1" : "E2"}
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-out"></span>
          </button>
        </div>
        <div
          className={`grid grid-cols-7 gap-3 rounded-xl overflow-hidden transition-opacity duration-300 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* Header - Time slot */}
          <div className="p-4 font-bold text-white bg-gray-800 rounded-lg text-2xl shadow-inner flex items-center justify-center h-24">
            Time
          </div>
          {/* Headers - Days */}
          {days.map((day) => (
            <div
              key={day}
              className="p-4 font-bold text-white text-center bg-gray-800 rounded-lg text-2xl shadow-inner flex items-center justify-center h-24"
            >
              {day}
            </div>
          ))}

          {/* Time slots and schedule */}
          {timeSlots.map((timeSlot) => (
            <React.Fragment key={timeSlot}>
              {/* Time slot */}
              <div className="p-4 font-semibold text-white bg-gray-800 rounded-lg text-xl shadow-inner flex flex-col items-center justify-center h-24 whitespace-pre-line">
                {timeSlot}
              </div>
              {/* Schedule cells */}
              {days.map((day) => (
                <div
                  key={`${timeSlot}-${day}`}
                  className={`p-3 flex flex-col items-center justify-center rounded-lg shadow-lg transition-all bg-gradient-to-br ${
                    schedule[timeSlot]?.[day]?.bg || "from-gray-800 to-gray-700"
                  } h-24 overflow-hidden`}
                >
                  {Array.isArray(schedule[timeSlot]?.[day]?.text) ? (
                    schedule[timeSlot][day].text.map((line, index) => (
                      <span
                        key={index}
                        className="text-xl font-bold text-white text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
                      >
                        {line}
                      </span>
                    ))
                  ) : (
                    <span className="text-xl font-bold text-white text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                      {schedule[timeSlot]?.[day]?.text || ""}
                    </span>
                  )}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
