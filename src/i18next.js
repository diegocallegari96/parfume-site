import i18n from 'i18next'      
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next,} from 'react-i18next'

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug:true,
    lng:"en",
    resources: {
        en: {
            translation: {
                home: "Home",
                contact: "Contact",
                chill: "Chill, Eat, Repeat",
            },
        },
        th: {
            translation: {
                home: "หน้าแรก",
                contact: "ติดต่อเรา",
                chill: "ชิลล์ กิน ทำซ้ำ",

            },
        }
    }
})    

export default i18n