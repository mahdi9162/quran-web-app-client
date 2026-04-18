'use client';

import React from 'react';
import { useReadingSettings } from '@/context/settings-context';
import { arabicFontFamilies, arabicFontOptions } from '@/lib/fonts';

type SettingsSidebarProps = {
  children: React.ReactNode;
};

const SettingsSidebar = ({ children }: SettingsSidebarProps) => {
  const { settings, setSettings, resetSettings } = useReadingSettings();
  const selectedArabicFontFamily = arabicFontFamilies[settings.arabicFont as keyof typeof arabicFontFamilies];

  return (
    <div className="drawer drawer-end">
      <input id="settings-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content">{children}</div>

      <div className="drawer-side z-50">
        <label htmlFor="settings-drawer" aria-label="close sidebar" className="drawer-overlay"></label>

        <aside className="min-h-full w-full max-w-sm border-l border-base-300 bg-base-100">
          <div className="flex items-center justify-between border-b border-base-300 px-5 py-4">
            <div>
              <h2 className="text-xl font-bold text-base-content">Reading Settings</h2>
              <p className="text-sm text-base-content/70">Customize your Quran reading experience</p>
            </div>

            <label htmlFor="settings-drawer" className="btn btn-sm btn-ghost btn-circle text-xl">
              ✕
            </label>
          </div>

          <div className="space-y-6 p-5">
            {/* Arabic Font */}
            <div className="space-y-3">
              <div>
                <h3 className="text-sm font-semibold text-base-content">Arabic Font</h3>
                <p className="text-xs text-base-content/60">Choose your preferred Arabic reading font</p>
              </div>
              <select
                value={settings.arabicFont}
                onChange={(e) =>
                  setSettings((prev) => ({
                    ...prev,
                    arabicFont: e.target.value,
                  }))
                }
                className="select select-bordered w-full cursor-pointer"
              >
                {arabicFontOptions.map((font) => (
                  <option key={font.value} value={font.value}>
                    {font.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Arabic Font Size */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-base-content">Arabic Font Size</h3>
                  <p className="text-xs text-base-content/60">Adjust Arabic verse text size</p>
                </div>

                <span className="badge badge-outline">{settings.arabicFontSize}px</span>
              </div>

              <input
                type="range"
                min="24"
                max="60"
                value={settings.arabicFontSize}
                onChange={(e) =>
                  setSettings((prev) => ({
                    ...prev,
                    arabicFontSize: Number(e.target.value),
                  }))
                }
                className="range range-primary range-sm"
              />
            </div>

            {/* Translation Font Size */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-base-content">Translation Font Size</h3>
                  <p className="text-xs text-base-content/60">Adjust translation text size</p>
                </div>

                <span className="badge badge-outline">{settings.translationFontSize}px</span>
              </div>

              <input
                type="range"
                min="14"
                max="28"
                value={settings.translationFontSize}
                onChange={(e) =>
                  setSettings((prev) => ({
                    ...prev,
                    translationFontSize: Number(e.target.value),
                  }))
                }
                className="range range-primary range-sm"
              />
            </div>

            {/* Preview */}
            <div className="space-y-3 rounded-2xl border border-base-300 bg-base-200 p-4">
              <h3 className="text-sm font-semibold text-base-content">Preview</h3>

              <p
                className="text-right leading-loose text-base-content"
                style={{
                  fontSize: `${settings.arabicFontSize}px`,
                  fontFamily: selectedArabicFontFamily,
                }}
              >
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </p>

              <p
                className="border-t border-base-300 pt-3 leading-7 text-base-content/80"
                style={{ fontSize: `${settings.translationFontSize}px` }}
              >
                In the name of Allah, the Entirely Merciful, the Especially Merciful.
              </p>
            </div>

            {/* Buttons */}
            <div className="space-y-3 pt-2">
              <p className="text-xs text-base-content/60">Changes are saved automatically</p>

              <button onClick={resetSettings} className="btn btn-outline w-full">
                Reset to Default
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default SettingsSidebar;
