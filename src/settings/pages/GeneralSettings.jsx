import { useState } from "react";
import Toggle from "../components/Toggle";

export default function GeneralSettings() {
  const [useSystemAccent, setUseSystemAccent] = useState(true);
  const [language, setLanguage] = useState("english");

  return (
    <div className="page">
      <h1>General</h1>

      {/* Appearance */}
      <div className="card">
        <h2>Appearance</h2>
        <p>
          Choose how your system looks across the interface. Adjust accent
          colors, highlight styles, and UI contrast.
        </p>

        <Toggle
          label="Use System Accent"
          value={useSystemAccent}
          onChange={setUseSystemAccent}
        />
      </div>

      {/* Startup Behavior */}
      <div className="card">
        <h2>Startup Behavior</h2>
        <p>
          Configure how the application launches on startup and how windows
          restore after closing.
        </p>

        <ul className="feature-list">
          <li>Restore last session</li>
          <li>Enable quick-launch</li>
          <li>Background refresh</li>
        </ul>
      </div>

      {/* Language Preferences */}
      <div className="card">
        <h2>Language Preferences</h2>
        <p>
          Select primary and fallback languages used throughout the interface.
        </p>

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="english">English (Default)</option>
          <option value="french">French</option>
          <option value="german">German</option>
          <option value="japanese">Japanese</option>
        </select>
      </div>
    </div>
  );
}