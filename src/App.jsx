import { useState } from "react";
import FancyLayout from "./layouts/FancyLayout";
import MinimalistLayout from "./layouts/MinimalistLayout";

function App() {
  const [isFancy, setIsFancy] = useState(false);

  const toggleLayout = () => {
    setIsFancy(!isFancy);
  };

  return (
    <div className="relative">
      <label className="fixed bottom-4 right-5 z-50 flex cursor-pointer flex-col items-center gap-1">
        <div className={`text-xs text-zinc-500`}>{isFancy ? "Fancy" : "Minimalist"}</div>
        <div className="relative">
          <input type="checkbox" className="sr-only" checked={isFancy} onChange={toggleLayout} />
          <div className={`block h-4 w-16 rounded-full transition-colors duration-200 ${isFancy ? "bg-cyan-500" : "bg-gray-600"}`}></div>
          <div className={`dot absolute left-1 top-1 h-2 w-6 rounded-full bg-white transition-transform duration-200 ${isFancy ? "translate-x-8" : "translate-x-0"}`}></div>
        </div>
      </label>
      {isFancy ? <FancyLayout /> : <MinimalistLayout />}
    </div>
  );
}

export default App;
