import { useState } from "react";

export default function Daily() {
  const [note, setNote] = useState("▪ ");

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const cursorPos = e.target.selectionStart;
      const newValue =
        note.slice(0, cursorPos) + "\n▪ " + note.slice(cursorPos);
      setNote(newValue);

      // Move cursor after the bullet
      setTimeout(() => {
        e.target.selectionStart = e.target.selectionEnd = cursorPos + 3;
      }, 0);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center px-4 py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        🗂️ Daily
      </h2>

      <div
        className="w-[380px] h-[420px] rounded-3xl shadow-xl bg-cover bg-center p-6 flex flex-col items-center text-center"
        style={{
          backgroundImage: `url('/PinkBlue.jpg')`,
        }}
      >
        <h3 className="text-lg font-bold text-gray-800 mt-1 mb-2"></h3>
        <p className="text-sm text-gray-700 mb-4">What’s your goal today?</p>

        <textarea
          value={note}
          onChange={handleNoteChange}
          onKeyDown={handleKeyDown}
          placeholder="Write your note..."
          className="w-[88%] h-[240px] bg-white/80 backdrop-blur-sm rounded-xl p-4 text-gray-800 text-sm leading-relaxed shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
        />
      </div>
    </div>
  );
}
