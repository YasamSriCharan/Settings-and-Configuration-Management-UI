// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import SettingsLayout from "./settings/pages/SettingsLayout";

import GeneralSettings from "./settings/pages/GeneralSettings";
import AccountSettings from "./settings/pages/AccountSettings";
import SecuritySettings from "./settings/pages/SecuritySettings";
import NotificationSettings from "./settings/pages/NotificationSettings";
import PrivacySettings from "./settings/pages/PrivacySettings";
import AppearanceSettings from "./settings/pages/AppearanceSettings";
import LocalizationSettings from "./settings/pages/LocalizationSettings";
import BillingSettings from "./settings/pages/BillingSettings";
import IntegrationsSettings from "./settings/pages/IntegrationsSettings";
import DeveloperSettings from "./settings/pages/DeveloperSettings";
import AdvancedSettings from "./settings/pages/AdvancedSettings";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/settings" element={<SettingsLayout />}>

          {/* ⭐ DEFAULT PAGE (FIX BLANK SCREEN) */}
          <Route index element={<Navigate to="general" replace />} />

          <Route path="general" element={<GeneralSettings />} />
          <Route path="account" element={<AccountSettings />} />
          <Route path="security" element={<SecuritySettings />} />
          <Route path="notifications" element={<NotificationSettings />} />
          <Route path="privacy" element={<PrivacySettings />} />
          <Route path="appearance" element={<AppearanceSettings />} />
          <Route path="localization" element={<LocalizationSettings />} />
          <Route path="billing" element={<BillingSettings />} />
          <Route path="integrations" element={<IntegrationsSettings />} />
          <Route path="developer" element={<DeveloperSettings />} />
          <Route path="advanced" element={<AdvancedSettings />} />
        </Route>

        {/* Optional: redirect root to settings */}
        <Route path="*" element={<Navigate to="/settings" replace />} />
      </Routes>
    </BrowserRouter>
  );
}