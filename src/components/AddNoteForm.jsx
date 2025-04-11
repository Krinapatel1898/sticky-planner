import { useState } from "react";

export default function AddNoteForm({ onAddNote, hasDate = false }) {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    onAddNote({
      id: Date.now(),
      text,
      date: hasDate ? date : null,
    });

    setText("");
    setDate("");
  };

  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="relative w-[350px] h-[350px] bg-white rounded-2xl shadow-[4px_4px_0_#E5E7EB] border border-gray-200 p-6 flex flex-col justify-between items-center text-center transition-all"
      >
        {/* Tape look */}
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-24 h-3 bg-yellow-300 rounded-sm shadow-sm z-10"></div>

        {/* Top Heading */}
        <div className="space-y-1">
          <h2 className="text-sm text-gray-500 uppercase tracking-wide">Ask Yourself</h2>
          <p className="text-lg font-medium text-gray-800">What’s your goal today?</p>
        </div>

        {/* Textarea */}
        <textarea
          placeholder="Write here..."
          className="w-full h-[120px] resize-none rounded-md border border-gray-300 bg-gray-50 p-3 text-gray-700 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {/* Optional Date */}
        {hasDate && (
          <input
            type="date"
            className="w-full p-2 rounded-md border border-gray-300 bg-gray-50 text-gray-700 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 mt-2 rounded-md font-medium transition duration-300 shadow-md"
        >
          Add Note
        </button>
      </form>
    </div>
  );
}
