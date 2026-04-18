'use client';

import React, { createContext, Dispatch, SetStateAction, useContext, useEffect, useRef, useState } from 'react';
import { defaultReadingSettings, ReadingSettings } from '@/types/settings';
import { READING_SETTINGS_KEY } from '@/lib/storage';

type ReadingSettingsContextType = {
  settings: ReadingSettings;
  setSettings: Dispatch<SetStateAction<ReadingSettings>>;
  resetSettings: () => void;
};

const SettingsContext = createContext<ReadingSettingsContextType | null>(null);

type SettingsProviderProps = {
  children: React.ReactNode;
};

const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [settings, setSettings] = useState<ReadingSettings>(defaultReadingSettings);
  const hasLoadedFromStorage = useRef(false);

  useEffect(() => {
    try {
      const savedSettings = localStorage.getItem(READING_SETTINGS_KEY);

      if (savedSettings) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSettings(JSON.parse(savedSettings));
      }
    } catch (error) {
      console.error('Failed to load reading settings from localStorage', error);
    } finally {
      hasLoadedFromStorage.current = true;
    }
  }, []);

  useEffect(() => {
    if (!hasLoadedFromStorage.current) return;

    try {
      localStorage.setItem(READING_SETTINGS_KEY, JSON.stringify(settings));
    } catch (error) {
      console.error('Failed to save reading settings to localStorage', error);
    }
  }, [settings]);

  const resetSettings = () => {
    setSettings(defaultReadingSettings);
    localStorage.removeItem(READING_SETTINGS_KEY);
  };

  return <SettingsContext.Provider value={{ settings, setSettings, resetSettings }}>{children}</SettingsContext.Provider>;
};

const useReadingSettings = () => {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error('useReadingSettings must be used within SettingsProvider');
  }

  return context;
};

export { SettingsProvider, useReadingSettings };
