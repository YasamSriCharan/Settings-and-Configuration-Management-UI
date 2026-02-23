import { useState } from "react";
import Toggle from "../components/Toggle";

export default function AdvancedSettings() {
  const [experiments, setExperiments] = useState(false);

  return (
    <div className="page">
      <h1>Advanced</h1>

      {/* Cache */}
      <div className="card">
        <h2>Cache & Storage</h2>
        <p>Manage disk usage and temporary files.</p>

        <button className="btn-secondary">Clear Cache</button>
      </div>

      {/* Reset */}
      <div className="card">
        <h2>Reset Options</h2>
        <p>Reset preferences or restore original defaults.</p>

        <button className="btn-danger">Reset Settings</button>
      </div>

      {/* Experimental */}
      <div className="card">
        <h2>Experimental Features</h2>
        <p>Try new test features before release.</p>

        <Toggle
          label="Enable Experiments"
          value={experiments}
          onChange={setExperiments}
        />
      </div>
    </div>
  );
}