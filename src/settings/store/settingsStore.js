// src/settings/store/settingsStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialData = {
  theme: "light",
  fullName: "",
  email: "",
  phone: "",
  twoFactor: false,
  smsAlerts: false,
  emailAlerts: true,
  profileVisibility: "public",
  accentColor: "#ff0000",
  fontSize: "medium",
  language: "en",
  region: "US",
  autoRenew: true,
  paymentMethod: "visa",
  apiKeys: ["API-123456"],
  betaFeatures: false,
};

export const useSettings = create(
  persist(
    (set, get) => ({
      data: initialData,

      loading: false,
      saved: true,

      /* ---------------- UPDATE ONE FIELD ---------------- */
      updateField: (key, value) =>
        set((state) => ({
          data: { ...state.data, [key]: value },
          saved: false,
        })),

      /* ---------------- UPDATE MULTIPLE FIELDS ---------------- */
      updateFields: (fields) =>
        set((state) => ({
          data: { ...state.data, ...fields },
          saved: false,
        })),

      /* ---------------- RESET ---------------- */
      resetSettings: () =>
        set({
          data: initialData,
          saved: true,
        }),

      /* ---------------- SAVE ---------------- */
      saveSettings: async () => {
        set({ loading: true });

        // Simulated API delay
        await new Promise((r) => setTimeout(r, 1000));

        set({
          loading: false,
          saved: true,
        });
      },
    }),
    {
      name: "app-settings-storage", // localStorage key
    }
  )
);