import { useState } from "react";
import Tabs from "./components/Tabs";
import Daily from "./pages/Daily";
import Monthly from "./pages/Monthly";
import Yearly from "./pages/Yearly";
import Occasions from "./pages/Occasions";

function App() {
  const [activeTab, setActiveTab] = useState("Daily");

  const renderTab = () => {
    switch (activeTab) {
      case "Monthly":
        return <Monthly />;
      case "Yearly":
        return <Yearly />;
      case "Occasions":
        return <Occasions />;
      default:
        return <Daily />;
    }
  };

  return (
    <div className="min-h-screen bg-[#c3d2dc] text-gray-800 font-sans p-6 flex flex-col items-center">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 font-cursive text-center">
        ✨ Sticky Planner
      </h1>

      {/* Tabs */}
      <Tabs onTabChange={setActiveTab} />

      {/* Main Content */}
      <main className="mt-10 w-full flex justify-center">{renderTab()}</main>
    </div>
  );
}

export default App;
