import { useState } from "react";

export default function Occasions() {
  const [note, setNote] = useState("▪ ");
  const [date, setDate] = useState("");

  const handleChange = (e) => setNote(e.target.value);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const pos = e.target.selectionStart;
      const newValue = note.slice(0, pos) + "\n▪ " + note.slice(pos);
      setNote(newValue);
      setTimeout(() => {
        e.target.selectionStart = e.target.selectionEnd = pos + 3;
      }, 0);
    }
  };

  return (
    <div className="h-screen w-full overflow-hidden flex flex-col items-center justify-start px-3 pt-4">
      {/* Page Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
        🎉 Occasions
      </h2>

      {/* Sticky Note Card */}
      <div
      className="w-[380px] min-h-[420px] rounded-3xl shadow-xl bg-cover bg-center px-4 pt-4 pb-3 flex flex-col items-center text-center"
      style={{ backgroundImage: `url('/PinkBlue.jpg')` }}
    >
        <h3 className="text-base font-bold text-gray-800 mb-1"></h3>
        <p className="text-sm text-gray-700 mb-2">Plan your events and celebrations!</p>

        {/* Date Input */}
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-[75%] p-1 rounded-md border border-gray-300 bg-white/80 text-gray-800 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-300"
        />

        {/* Manual Spacer */}
        <div className="h-3" />

        {/* Textarea */}
        <textarea
          value={note}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Write your note..."
          className="w-[88%] h-[240px] bg-white/80 backdrop-blur-sm rounded-xl p-3 text-gray-800 text-sm leading-relaxed shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
        />
      </div>
    </div>
  );
}
