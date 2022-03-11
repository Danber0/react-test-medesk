import React, { useState } from "react";

import { tabs } from "./utils/tabs";
import "./index.css";

function App() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleActive = (index: number) => {
    if (index !== activeId) {
      setActiveId(index);
    } else {
      setActiveId(null);
    }
  };

  return (
    <div id="app">
      <div className="app-container">
        <h1 className="app-title">FAQ</h1>
        <div className="app-tabs">
          {tabs.map((obj, index) => (
            <div className={obj.id === activeId ? "tab active" : "tab"}>
              <input id="tab-four" type="checkbox" name="tabs" />
              <label htmlFor="tab-four" onClick={() => handleActive(index + 1)}>
                {obj.title}
              </label>
              <div className="tab-content">
                <p>{obj.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;
