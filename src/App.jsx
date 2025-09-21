import React, { useState, useEffect } from "react";

const E1Schedule = {
  "10:30 AM\n—\n11:30 AM": {
    Monday: { text: "CG", bg: "from-green-600 via-green-500 to-green-400" },
    Thursday: { text: "CC", bg: "from-blue-600 via-blue-500 to-blue-400" },
  },
  "11:30 AM\n—\n12:30 PM": {
    Monday: { text: "CG", bg: "from-blue-600 via-blue-500 to-blue-400" },
    Tuesday: { text: "CG", bg: "from-green-600 via-green-500 to-green-400" },
    Wednesday: {
      text: "OS",
      bg: "from-purple-600 via-purple-500 to-purple-400",
    },
    Thursday: {
      text: "OS",
      bg: "from-purple-600 via-purple-500 to-purple-400",
    },
    Friday: { text: "OS", bg: "from-purple-600 via-purple-500 to-purple-400" },
  },
  "12:30 PM\n—\n01:30 PM": {
    Monday: { text: "OS", bg: "from-purple-600 via-purple-500 to-purple-400" },
    Tuesday: { text: "CC", bg: "from-blue-600 via-blue-500 to-blue-400" },
    Wednesday: { text: "CG", bg: "from-green-600 via-green-500 to-green-400" },
    Thursday: { text: "CG", bg: "from-green-600 via-green-500 to-green-400" },
    Friday: { text: "CC", bg: "from-blue-600 via-blue-500 to-blue-400" },
  },
  "01:30 PM\n—\n02:30 PM": {
    Monday: { text: "BREAK", bg: "from-red-500 via-red-400 to-red-300" },
    Tuesday: { text: "BREAK", bg: "from-red-500 via-red-400 to-red-300" },
    Wednesday: {
      text: "CG Lab 4",
      bg: "from-green-700 via-green-600 to-green-500",
    },
    Thursday: { text: "BREAK", bg: "from-red-500 via-red-400 to-red-300" },
    Friday: { text: "BREAK", bg: "from-red-500 via-red-400 to-red-300" },
  },
  "02:30 PM\n—\n03:30 PM": {
    Monday: {
      text: "CG Lab 4",
      bg: "from-green-700 via-green-600 to-green-500",
    },
    Tuesday: {
      text: "CG Lab 4",
      bg: "from-green-700 via-green-600 to-green-500",
    },
    Wednesday: { text: "BREAK", bg: "from-red-500 via-red-400 to-red-300" },
    Thursday: {
      text: "CG Lab 4",
      bg: "from-green-700 via-green-600 to-green-500",
    },
    Friday: {
      text: "ML Lab 4",
      bg: "from-orange-600 via-orange-500 to-orange-400",
    },
  },
  "03:30 PM\n—\n04:30 PM": {
    Monday: { text: "ML", bg: "from-orange-600 via-orange-500 to-orange-400" },
    Tuesday: {
      text: "Linux Lab 4",
      bg: "from-blue-700 via-blue-600 to-blue-500",
    },
    Wednesday: {
      text: "Linux Lab 4",
      bg: "from-blue-700 via-blue-600 to-blue-500",
    },
    Thursday: {
      text: "ML",
      bg: "from-orange-600 via-orange-500 to-orange-400",
    },
    Friday: {
      text: "Linux Lab 4",
      bg: "from-blue-700 via-blue-600 to-blue-500",
    },
  },
  "04:30 PM\n—\n05:30 PM": {
    Monday: {
      text: "ML Lab 4",
      bg: "from-orange-600 via-orange-500 to-orange-400",
    },
    Tuesday: { text: "", bg: "from-gray-800 to-gray-700" },
    Wednesday: {
      text: "ML",
      bg: "from-orange-600 via-orange-500 to-orange-400",
    },
    Thursday: {
      text: "Linux Lab 4",
      bg: "from-blue-700 via-blue-600 to-blue-500",
    },
    Friday: { text: "ML", bg: "from-orange-600 via-orange-500 to-orange-400" },
  },
};

const E2Schedule = {
  "10:30 AM\n—\n11:30 AM": {
    Monday: { text: "OS", bg: "from-purple-600 via-purple-500 to-purple-400" },
    Wednesday: {
      text: "OS",
      bg: "from-blue-600 via-blue-500 to-blue-400",
    },
    Thursday: {
      text: ["CC", "Lab 4"],
      bg: "from-green-600 via-green-500 to-green-400",
    },
  },
  "11:30 AM\n—\n12:30 PM": {
    Monday: {
      text: ["CG", "Lab 4"],
      bg: "from-blue-600 via-blue-500 to-blue-400",
    },
    Tuesday: { text: "OS", bg: "from-purple-600 via-purple-500 to-purple-400" },
    Wednesday: {
      text: ["ML", "Lab 4"],
      bg: "from-orange-600 via-orange-500 to-orange-400",
    },
    Thursday: {
      text: "OS",
      bg: "from-purple-600 via-purple-500 to-purple-400",
    },
    Friday: {
      text: ["ML", "Lab 4"],
      bg: "from-orange-600 via-orange-500 to-orange-400",
    },
  },
  "12:30 PM\n—\n01:30 PM": {
    Monday: { text: "BREAK", bg: "from-red-500 via-red-400 to-red-300" },
    Tuesday: {
      text: ["CG", "511"],
      bg: "from-green-600 via-green-500 to-green-400",
    },
    Wednesday: {
      text: ["ML", "314"],
      bg: "from-orange-600 via-orange-500 to-orange-400",
    },
    Thursday: { text: "BREAK", bg: "from-gray-500 via-gray-400 to-gray-300" },
    Friday: {
      text: ["ML", "511"],
      bg: "from-orange-600 via-orange-500 to-orange-400",
    },
  },
  "01:30 PM\n—\n02:30 PM": {
    Monday: { text: "CC", bg: "from-blue-600 via-blue-500 to-blue-400" },
    Tuesday: { text: "ML", bg: "from-orange-600 via-orange-500 to-orange-400" },
    Wednesday: { text: "BREAK", bg: "from-gray-500 via-gray-400 to-gray-300" },
    Thursday: { text: "CG", bg: "from-green-600 via-green-500 to-green-400" },
    Friday: { text: "BREAK", bg: "from-gray-500 via-gray-400 to-gray-300" },
  },
  "02:30 PM\n—\n03:30 PM": {
    Monday: { text: "CG", bg: "from-green-600 via-green-500 to-green-400" },
    Tuesday: { text: "BREAK", bg: "from-gray-500 via-gray-400 to-gray-300" },
    Wednesday: {
      text: "Linux Lab 4",
      bg: "from-blue-700 via-blue-600 to-blue-500",
    },
    Thursday: {
      text: "ML",
      bg: "from-orange-600 via-orange-500 to-orange-400",
    },
    Friday: { text: "CG", bg: "from-green-600 via-green-500 to-green-400" },
  },
  "03:30 PM\n—\n04:30 PM": {
    Monday: {
      text: "Linux Lab 4",
      bg: "from-blue-700 via-blue-600 to-blue-500",
    },
    Tuesday: { text: "CC", bg: "from-blue-600 via-blue-500 to-blue-400" },
    Wednesday: { text: "CC", bg: "from-blue-600 via-blue-500 to-blue-400" },
    Thursday: {
      text: "Linux Lab 4",
      bg: "from-blue-700 via-blue-600 to-blue-500",
    },
    Friday: { text: "CC", bg: "from-blue-600 via-blue-500 to-blue-400" },
  },
  "04:30 PM\n—\n05:30 PM": {
    Tuesday: {
      text: "Linux Lab 4",
      bg: "from-blue-700 via-blue-600 to-blue-500",
    },
    Wednesday: {
      text: ["CG", "Lab 4"],
      bg: "from-green-600 via-green-500 to-green-400",
    },
    Friday: {
      text: ["CG", "Lab 4"],
      bg: "from-green-600 via-green-500 to-green-400",
    },
  },
};

export default function Timetable() {
  const [isE2, setIsE2] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const schedule = isE2 ? E2Schedule : E1Schedule;
  const timeSlots = Object.keys(schedule);
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

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
            {isE2 ? "Class Schedule E2" : "Class Schedule E1"}
          </h1>
          <button
            onClick={handleSwitch}
            className="relative px-6 py-3 font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-out hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span className="relative z-10">
              Switch to {isE2 ? "E1" : "E2"}
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-out"></span>
          </button>
        </div>
        <div
          className={`grid grid-cols-6 gap-3 rounded-xl overflow-hidden transition-opacity duration-300 ${
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
              {isE2 && day === "Monday" && (
                <div className="text-xs mt-1 text-gray-300"></div>
              )}
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
