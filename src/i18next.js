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
                about: "About us",
                weed: "Weed",
                shop: "Shop",
                contact: "Contact",
                name: "Business name",
                chill: "Chill, Smoke, Repeat",
                btnw: "View Weed",
                btns: "View Shop",
                header1: "Premium Quality Ganja",
                header2: "Discover the Difference",
                intro1: "Our selection features only the finest strains, meticulously cultivated and hand-picked to ensure top-notch quality. From aromatic indicas to invigorating sativas, our premium-grade ganja caters to both connoisseurs and newcomers alike.",
                intro2: "Experience the exceptional quality and service that set us apart. Whether you're seeking relaxation, creativity, or relief, we're here to help you navigate the world of cannabis with confidence.",
                intro3: "Visit us today and discover why [Your Dispensary Name] is the trusted choice for premium-grade ganja in Nonthaburi.",
            },
        },
        th: {
            translation: {
                home: "หน้าแรก",
                about: "เกี่ยวกับเรา",
                weed: "กัญชา",
                shop: "ร้านค้า",
                contact: "ติดต่อเรา",
                name: "ชื่อธุรกิจ", 
                chill: "ชิลล์ กิน ทำซ้ำ",
                btnw: "ดูกัญชา",
                btns: "ดูร้านค้า",
                header1: "กัญชาคุณภาพพรีเมี่ยม",
                header2: "ค้นพบความแตกต่าง",
                intro1: "เราคัดสรรเฉพาะสายพันธุ์ที่ดีที่สุด ปลูกด้วยความพิถีพิถันและคัดเลือกด้วยมือ เพื่อให้มั่นใจในคุณภาพระดับสูงสุด ตั้งแต่สายพันธุ์อินดิกาที่มีกลิ่นหอมไปจนถึงซาติว่าที่ให้ความกระปรี้กระเปร่า กัญชาระดับพรีเมี่ยมของเราตอบโจทย์ทั้งผู้เชี่ยวชาญและผู้เริ่มต้น",
                intro2: "สัมผัสคุณภาพและการบริการที่ยอดเยี่ยมที่ทำให้เราโดดเด่น ไม่ว่าคุณกำลังมองหาการผ่อนคลาย ความคิดสร้างสรรค์ หรือการบรรเทาอาการ เราพร้อมช่วยให้คุณสำรวจโลกของกัญชาอย่างมั่นใจ",
                intro3: "แวะมาเยี่ยมชมเราได้วันนี้ และค้นพบว่าทำไม [ชื่อร้านของคุณ] จึงเป็นตัวเลือกที่น่าเชื่อถือสำหรับกัญชาคุณภาพพรีเมี่ยมในนนทบุรี",
            },
        }
    }
})    

export default i18n