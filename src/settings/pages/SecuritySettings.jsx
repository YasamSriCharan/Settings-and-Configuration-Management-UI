import { useState } from "react";
import Toggle from "../components/Toggle";

export default function SecuritySettings() {
  const [twoFAEnabled, setTwoFAEnabled] = useState(false);
  const [emailAlerts, setEmailAlerts] = useState(true);

  return (
    <div className="page">
      <h1>Security</h1>

      {/* Two-Factor Authentication */}
      <div className="card">
        <h2>Two-Factor Authentication</h2>
        <p>Protect your account with an additional layer of security.</p>

        <Toggle
          label="Enable 2FA"
          value={twoFAEnabled}
          onChange={setTwoFAEnabled}
        />
      </div>

      {/* Login Alerts */}
      <div className="card">
        <h2>Login Alerts</h2>
        <p>Receive alerts when a new device signs into your account.</p>

        <Toggle
          label="Send Email Alerts"
          value={emailAlerts}
          onChange={setEmailAlerts}
        />
      </div>

      {/* App Permissions */}
      <div className="card">
        <h2>App Permissions</h2>
        <p>Manage what data applications can access.</p>

        <ul className="permission-list">
          <li>Location — Allowed</li>
          <li>Camera — Ask Every Time</li>
          <li>Microphone — Denied</li>
        </ul>
      </div>
    </div>
  );
}