// src/settings/components/SaveBar.jsx
import { useSettings } from "../store/settingsStore";

export default function SaveBar() {
  const { saved, loading, saveSettings } = useSettings();

  if (saved) return null;

  return (
    <div className="savebar">
      {loading ? (
        <span>Saving...</span>
      ) : (
        <>
          <span>You have unsaved changes</span>
          <button onClick={saveSettings}>Save</button>
        </>
      )}
    </div>
  );
}