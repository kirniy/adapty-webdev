"use client";

import { useState, useRef, useEffect } from "react";
import { CaretDown, Check } from "@phosphor-icons/react/dist/ssr";
import styles from "./LanguageSwitcher.module.css";

interface Language {
  code: string;
  name: string;
  shortCode: string;
}

const LANGUAGES: Language[] = [
  { code: "en", name: "English", shortCode: "EN" },
  { code: "zh", name: "中文", shortCode: "ZH" },
  { code: "ja", name: "日本語", shortCode: "JA" },
  { code: "ko", name: "한국어", shortCode: "KO" },
  { code: "es", name: "Español", shortCode: "ES" },
  { code: "pt", name: "Português", shortCode: "PT" },
  { code: "de", name: "Deutsch", shortCode: "DE" },
  { code: "fr", name: "Français", shortCode: "FR" },
  { code: "tr", name: "Türkçe", shortCode: "TR" },
  { code: "vi", name: "Tiếng Việt", shortCode: "VI" },
];

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(LANGUAGES[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.languageSwitcher} ref={dropdownRef}>
      <button
        className={styles.toggleButton}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
      >
        <span className={styles.langCode}>{currentLang.shortCode}</span>
        <CaretDown size={12} weight="bold" className={styles.chevron} />
      </button>

      {isOpen && (
        <div className={styles.dropdown} onMouseLeave={() => setIsOpen(false)}>
          <div className={styles.dropdownList}>
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                className={`${styles.languageOption} ${
                  lang.code === currentLang.code ? styles.active : ""
                }`}
                onClick={() => {
                  setCurrentLang(lang);
                  setIsOpen(false);
                }}
              >
                <span className={styles.langCode}>{lang.shortCode}</span>
                <span className={styles.languageName}>{lang.name}</span>
                {lang.code === currentLang.code && (
                  <Check size={14} weight="bold" className={styles.checkIcon} />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
