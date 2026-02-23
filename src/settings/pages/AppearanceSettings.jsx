import { useState } from "react";
import ThemeToggle from "../components/ThemeToggle";
import Toggle from "../components/Toggle";

export default function AppearanceSettings() {
  const [transparency, setTransparency] = useState(true);
  const [accent, setAccent] = useState("blue");

  return (
    <div className="page">
      <h1>Appearance</h1>

      {/* Theme */}
      <div className="card">
        <h2>Color Theme</h2>
        <p>Switch between light and dark modes.</p>

        <ThemeToggle />
      </div>

      {/* Accent */}
      <div className="card">
        <h2>Accent Color</h2>
        <p>Select the highlight color used across the UI.</p>

        <select
          value={accent}
          onChange={(e) => setAccent(e.target.value)}
        >
          <option value="blue">Blue (Default)</option>
          <option value="purple">Purple</option>
          <option value="pink">Pink</option>
          <option value="green">Green</option>
          <option value="graphite">Graphite</option>
        </select>
      </div>

      {/* Transparency */}
      <div className="card">
        <h2>Transparency</h2>
        <p>Choose if UI elements use blur & translucency.</p>

        <Toggle
          label="Enable Transparency"
          value={transparency}
          onChange={setTransparency}
        />
      </div>
    </div>
  );
}