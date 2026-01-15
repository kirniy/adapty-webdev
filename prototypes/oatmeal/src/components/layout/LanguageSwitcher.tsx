'use client'

import { useState, useRef, useEffect } from 'react'
import { CaretDown, Check } from '@phosphor-icons/react'
import Image from 'next/image'
import styles from './LanguageSwitcher.module.css'

interface Language {
  code: string;
  name: string;
  flag: string;
}

const LANGUAGES: Language[] = [
  { code: "en", name: "English", flag: "/flags/us.svg" },
  { code: "zh", name: "中文", flag: "/flags/cn.svg" },
  { code: "ja", name: "日本語", flag: "/flags/jp.svg" },
  { code: "ko", name: "한국어", flag: "/flags/kr.svg" },
  { code: "es", name: "Español", flag: "/flags/es.svg" },
  { code: "pt", name: "Português", flag: "/flags/br.svg" },
  { code: "de", name: "Deutsch", flag: "/flags/de.svg" },
  { code: "fr", name: "Français", flag: "/flags/fr.svg" },
  { code: "tr", name: "Türkçe", flag: "/flags/tr.svg" },
  { code: "vi", name: "Tiếng Việt", flag: "/flags/vn.svg" },
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
        <Image
          src={currentLang.flag}
          alt={currentLang.name}
          width={20}
          height={15}
          className={styles.flag}
        />
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
                <Image
                  src={lang.flag}
                  alt={lang.name}
                  width={20}
                  height={15}
                  className={styles.flag}
                />
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
