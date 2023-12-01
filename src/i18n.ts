import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import az from "./assets/const/az.json";
import en from "./assets/const/en.json";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            az: { translation: az },
        },
        fallbackLng: "en",
        detection: {
            order: ["queryString", "cookie", "localStorage", "navigator"],
            caches: ["cookie"],
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;