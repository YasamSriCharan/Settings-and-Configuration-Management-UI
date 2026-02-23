import { useState } from "react";
import Toggle from "../components/Toggle";

export default function NotificationSettings() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [notificationStyle, setNotificationStyle] = useState("banner");
  const [dndEnabled, setDndEnabled] = useState(false);

  return (
    <div className="page">
      <h1>Notifications</h1>

      {/* Push Notifications */}
      <div className="card">
        <h2>Push Notifications</h2>
        <p>Allow important updates and alerts.</p>

        <Toggle
          label="Enable Notifications"
          value={notificationsEnabled}
          onChange={setNotificationsEnabled}
        />
      </div>

      {/* Notification Style */}
      <div className="card">
        <h2>Notification Style</h2>
        <p>Choose how alerts appear.</p>

        <select
          value={notificationStyle}
          onChange={(e) => setNotificationStyle(e.target.value)}
        >
          <option value="banner">Banner</option>
          <option value="alerts">Alerts</option>
          <option value="none">None</option>
        </select>
      </div>

      {/* Do Not Disturb */}
      <div className="card">
        <h2>Do Not Disturb</h2>
        <p>Silence alerts when you're busy.</p>

        <Toggle
          label="Enable DND"
          value={dndEnabled}
          onChange={setDndEnabled}
        />
      </div>
    </div>
  );
}