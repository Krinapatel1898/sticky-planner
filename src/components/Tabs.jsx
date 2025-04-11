import { useState } from "react";

const tabs = ["Daily", "Monthly", "Yearly", "Occasions"];

export default function Tabs({ onTabChange }) {
  const [activeTab, setActiveTab] = useState("Daily");

  const handleClick = (tab) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <div className="flex justify-center gap-4 py-4 bg-white shadow-md">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => handleClick(tab)}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            activeTab === tab
              ? "bg-blue-600 text-white"
              : "bg-gray-100 hover:bg-gray-300"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
