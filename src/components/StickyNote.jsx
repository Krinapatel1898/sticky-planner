export default function StickyNote({ note, onDelete }) {
    return (
      <div className="bg-yellow-200 p-4 rounded-xl shadow-md relative min-h-[100px] break-words">
        <button
          className="absolute top-1 right-2 text-red-600 font-bold"
          onClick={() => onDelete(note.id)}
        >
          ✕
        </button>
        <p className="text-sm">{note.text}</p>
        {note.date && (
          <p className="text-xs mt-2 text-gray-600">📅 {note.date}</p>
        )}
      </div>
    );
  }
  