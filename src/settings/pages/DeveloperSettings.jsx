import { useState } from "react";
import Toggle from "../components/Toggle";

export default function DeveloperSettings() {
  const [devMode, setDevMode] = useState(false);
  const [environment, setEnvironment] = useState("production");

  return (
    <div className="page">
      <h1>Developer</h1>

      {/* Developer Mode */}
      <div className="card">
        <h2>Developer Mode</h2>
        <p>Enable additional debugging & internal tools.</p>

        <Toggle
          label="Enable Dev Mode"
          value={devMode}
          onChange={setDevMode}
        />
      </div>

      {/* Debug Logs */}
      <div className="card">
        <h2>Debug Logs</h2>
        <p>View real-time app logs for troubleshooting.</p>

        <button className="btn-secondary">Open Logs</button>
      </div>

      {/* Environment */}
      <div className="card">
        <h2>Environment</h2>
        <p>Select the development environment.</p>

        <select
          value={environment}
          onChange={(e) => setEnvironment(e.target.value)}
        >
          <option value="production">Production</option>
          <option value="staging">Staging</option>
          <option value="development">Development</option>
        </select>
      </div>
    </div>
  );
}