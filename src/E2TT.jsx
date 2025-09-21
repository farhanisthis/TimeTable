// import React from "react";

// export default function Timetable() {
//   const timeSlots = [
//     "9:30 - 10:30",
//     "10:30 - 11:30",
//     "11:30 - 12:30",
//     "12:30 - 1:30",
//     "1:30 - 2:30",
//     "2:30 - 3:30",
//     "3:30 - 4:30",
//     "4:30 - 5:30",
//   ];

//   const days = [
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];

//   const schedule = {
//     "9:30 - 10:30": {
//       Monday: { text: "SE", bg: "from-blue-700 to-blue-500" },
//       Tuesday: {},
//       Wednesday: {},
//       Thursday: {},
//       Friday: {},
//       Saturday: {},
//     },
//     "10:30 - 11:30": {
//       Monday: { text: "ED", bg: "from-green-700 to-green-500" },
//       Tuesday: { text: "SE", bg: "from-blue-700 to-blue-500" },
//       Wednesday: { text: "SE", bg: "from-blue-700 to-blue-500" },
//       Thursday: { text: "SE", bg: "from-blue-700 to-blue-500" },
//       Friday: { text: "PD", bg: "from-pink-700 to-pink-500" },
//       Saturday: { text: "DM", bg: "from-purple-700 to-purple-500" },
//     },
//     "11:30 - 12:30": {
//       Monday: {
//         text: "IDS 514 / AI Lab 3",
//         bg: "from-orange-700 to-orange-500",
//       },
//       Tuesday: {
//         text: "IDS Lab 4 / AI 515",
//         bg: "from-orange-700 to-orange-500",
//       },
//       Wednesday: { text: "Java", bg: "from-yellow-700 to-yellow-500" },
//       Thursday: {
//         text: "IDS Lab 4 / AI 515",
//         bg: "from-orange-700 to-orange-500",
//       },
//       Friday: { text: "IDS 514 / AI 515", bg: "from-orange-700 to-orange-500" },
//       Saturday: {
//         text: "IDS 514 / AI Lab 3",
//         bg: "from-orange-700 to-orange-500",
//       },
//     },
//     "12:30 - 1:30": {
//       Monday: { text: "BREAK", bg: "from-gray-700 to-gray-600" },
//       Tuesday: { text: "BREAK", bg: "from-gray-700 to-gray-600" },
//       Wednesday: { text: "BREAK", bg: "from-gray-700 to-gray-600" },
//       Thursday: { text: "BREAK", bg: "from-gray-700 to-gray-600" },
//       Friday: { text: "BREAK", bg: "from-gray-700 to-gray-600" },
//       Saturday: { text: "BREAK", bg: "from-gray-700 to-gray-600" },
//     },
//     "1:30 - 2:30": {
//       Monday: { text: "DM", bg: "from-purple-700 to-purple-500" },
//       Tuesday: { text: "DM", bg: "from-purple-700 to-purple-500" },
//       Wednesday: { text: "PD", bg: "from-pink-700 to-pink-500" },
//       Thursday: { text: "DM", bg: "from-purple-700 to-purple-500" },
//       Friday: { text: "Java Lab 4", bg: "from-yellow-800 to-yellow-600" },
//       Saturday: { text: "SE Lab 4", bg: "from-blue-700 to-blue-500" },
//     },
//     "2:30 - 3:30": {
//       Monday: { text: "SE Lab 4", bg: "from-blue-700 to-blue-500" },
//       Tuesday: { text: "Java Lab 4", bg: "from-yellow-800 to-yellow-600" },
//       Wednesday: { text: "SE Lab 4", bg: "from-blue-700 to-blue-500" },
//       Thursday: { text: "Java Lab 4", bg: "from-yellow-800 to-yellow-600" },
//       Friday: { text: "SE Lab 4", bg: "from-blue-700 to-blue-500" },
//       Saturday: { text: "Java Lab 4", bg: "from-yellow-800 to-yellow-600" },
//     },
//     "3:30 - 4:30": {
//       Monday: { text: "Java", bg: "from-yellow-700 to-yellow-500" },
//       Tuesday: { text: "ED", bg: "from-green-700 to-green-500" },
//       Wednesday: { text: "ED", bg: "from-green-700 to-green-500" },
//       Thursday: { text: "Java", bg: "from-yellow-700 to-yellow-500" },
//       Friday: { text: "Java", bg: "from-yellow-700 to-yellow-500" },
//       Saturday: { text: "ED", bg: "from-green-700 to-green-500" },
//     },
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8">
//       <div className="container mx-auto bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-6 shadow-[0_0_15px_rgba(0,0,0,0.7)] border border-gray-700">
//         <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-6 text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
//           Class Schedule E2
//         </h1>
//         <div className="grid grid-cols-7 gap-3 rounded-xl overflow-hidden">
//           {/* Header - Time slot */}
//           <div className="p-4 font-bold text-white bg-gradient-to-br from-gray-700 to-gray-600 rounded-lg text-lg shadow-inner flex items-center justify-center">
//             Time
//           </div>
//           {/* Headers - Days */}
//           {days.map((day) => (
//             <div
//               key={day}
//               className="p-4 font-bold text-white text-center bg-gradient-to-br from-gray-700 to-gray-600 rounded-lg text-lg shadow-inner flex items-center justify-center"
//             >
//               {day}
//             </div>
//           ))}

//           {/* Time slots and schedule */}
//           {timeSlots.map((timeSlot) => (
//             <React.Fragment key={timeSlot}>
//               {/* Time slot */}
//               <div className="p-4 font-semibold text-white bg-gradient-to-br from-gray-700 to-gray-600 rounded-lg text-base shadow-inner flex items-center justify-center">
//                 {timeSlot}
//               </div>
//               {/* Schedule cells */}
//               {days.map((day) => (
//                 <div
//                   key={`${timeSlot}-${day}`}
//                   className={`p-3 flex items-center justify-center rounded-lg shadow-lg transition-all hover:scale-105 hover:shadow-[0_0_10px_rgba(255,255,255,0.2)] bg-gradient-to-br ${
//                     schedule[timeSlot]?.[day]?.bg || "from-gray-700 to-gray-600"
//                   }`}
//                 >
//                   <span className="text-base font-bold text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] text-center">
//                     {schedule[timeSlot]?.[day]?.text || ""}
//                   </span>
//                 </div>
//               ))}
//             </React.Fragment>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
