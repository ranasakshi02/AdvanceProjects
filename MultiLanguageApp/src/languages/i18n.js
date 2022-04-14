import i18next from "i18next";
import Hindi from './Hindi.json';
import English from './English.json';
import Marathi from './Marathi.json';
import French from './French.json';
import { initReactI18next } from "react-i18next";
import * as RNLocalize from "react-native-localize";

const languageDetector = {
    type: 'languageDetector',
    async: true,
    detect: (callback) => {
        return callback(RNLocalize.getLocales()[0].languageCode)
    },
    init: () => {},
    cacheUserLanguage: () => {},

}
i18next
    .use(languageDetector)
    .use(initReactI18next).init({
        compatibilityJSON: 'v3',
        fallbackLng: 'en',
        resources: {
            en: English,
            hi: Hindi,
            mr: Marathi,
            fr: French

        },
        react: {
            useSuspense: false
        }

    })
export default i18next;
/**
 * marathi mr
 * english en
 * french  fr
 * hindi hi
 */