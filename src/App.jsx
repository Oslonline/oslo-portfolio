import { useState, useEffect } from "react";
import FancyLayout from "./layouts/FancyLayout";
import MinimalistLayout from "./layouts/MinimalistLayout";
import { useInitAnalytics } from "./hooks/useAnalytics";

function App() {
  const [isFancy, setIsFancy] = useState(false);

  // Initialize analytics
  useInitAnalytics();

  const toggleLayout = () => {
    setIsFancy(!isFancy);

    // Track layout change (optional)
    if (window.gtag) {
      window.gtag("event", "toggle_layout", {
        layout: !isFancy ? "fancy" : "minimalist",
      });
    }
  };

  return (
    <div className="relative">
      <label className="fixed right-3 bottom-3 z-50 flex cursor-pointer flex-col items-center gap-1 md:right-7 md:bottom-7">
        <div className={`text-xs text-zinc-500`}>{isFancy ? "Fancy" : "Minimalist"}</div>
        <div className="relative">
          <input type="checkbox" className="sr-only" checked={isFancy} onChange={toggleLayout} />
          <div className={`block h-6 w-16 rounded-full transition-colors duration-200 ${isFancy ? "bg-cyan-500" : "bg-gray-600"}`}></div>
          <div className={`dot absolute top-1 left-1 h-4 w-6 rounded-full bg-white transition-transform duration-200 ${isFancy ? "translate-x-8" : "translate-x-0"}`}></div>
        </div>
      </label>
      {isFancy ? <FancyLayout /> : <MinimalistLayout />}
    </div>
  );
}

export default App;
