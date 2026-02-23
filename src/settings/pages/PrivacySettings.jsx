import { useState } from "react";
import Toggle from "../components/Toggle";

export default function PrivacySettings() {
  const [shareData, setShareData] = useState(false);
  const [personalizedAds, setPersonalizedAds] = useState(true);

  return (
    <div className="page">
      <h1>Privacy</h1>

      {/* Data Sharing */}
      <div className="card">
        <h2>Data Sharing</h2>
        <p>Choose which analytics and diagnostics are shared.</p>

        <Toggle
          label="Share Usage Data"
          value={shareData}
          onChange={setShareData}
        />
      </div>

      {/* Ad Personalization */}
      <div className="card">
        <h2>Ad Personalization</h2>
        <p>Control whether you receive personalized ads.</p>

        <Toggle
          label="Personalized Ads"
          value={personalizedAds}
          onChange={setPersonalizedAds}
        />
      </div>

      {/* App Tracking */}
      <div className="card">
        <h2>App Tracking</h2>
        <p>Select which apps can track your activity.</p>

        <ul className="tracking-list">
          <li>Facebook — Allowed</li>
          <li>Instagram — Denied</li>
          <li>TikTok — Ask</li>
        </ul>
      </div>
    </div>
  );
}