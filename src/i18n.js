import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import experience from './data/experience';
import school from './data/school';
import showcase from './data/showcase';

i18n
  .use(LanguageDetector) // Deteksi bahasa otomatis
  .use(initReactI18next) // Kirim i18n ke react-i18next
  .init({
    debug: false, // Set false jika sudah siap sebar (production)
    lng: 'en',
    fallbackLng: 'en', // Jika bahasa user tidak didukung, pakai Inggris
    interpolation: {
      escapeValue: false, // React sudah otomatis aman dari XSS
    },
    resources: {
      en: {
        translation: {
          detail: {
            back: "Back",
            problem: "Problem Statement",
            resolution: "Problem Resolution",
            result: "Development Result",
            buildWith: "Build with :",
            madeUsing: "Made using :",
            challenge: "Challenge",
            concept: "Design Concept",
            deliverables: "Project Deliverables",
            role: "Role and Responsibilities",
          },
          tabs: {
            dev: "App",
            design: "Design",
          },
          subhead: {
            experience: "Experience",
            school: "Education",
            technical: "Technical Skill",
            showcase: "Showcase",
          },
          hero: {
            greeting: "M. Aldi Amanatullah Syahputra",
            basein: "Batang, Central Java, Indonesia",
            p1_start: "Informatics graduate and Fullstack Web Developer with a strong background in visual Design. Experience in building responsive web applications, database architecture, and digitalizing manual workflows. Focus on creating digital products that are not only functional but also visually balanced and aesthetically pleasing. Detail-oriented developer committed to writing clean, scalable, and maintainable code.",
          },
          skill: {
            techdesc: "Technologies and tools I master to build high-quality digital products"
          },
          contact: {
            cv: "Download CV",
            title: "Maybe we can Talk",
            desc: "I'm currently available for new opportunities and collaborations. If you think my skills align with your needs, feel free to start a conversation everywhere",
          },
        }
      },
      id: {
        translation: {
          detail: {
            back: "Kembali",
            problem: "Latar Belakang",
            resolution: "Solusi Masalah",
            result: "Hasil Pengembangan",
            buildWith: "Dibuat dengan :",
            madeUsing: "Dibuat menggunakan :",
            challenge: "Tantangan",
            concept: "Konsep Desain",
            deliverables: "Hasil Karya",
            role: "Peran dan Tanggung Jawab",
          },
          tabs: {
            dev: "Aplikasi",
            design: "Desain",
          },
          subhead: {
            experience: "Pengalaman",
            school: "Pendidikan",
            technical: "Keahlian Teknologi",
            showcase: "Proyek",
          },
          hero: {
            greeting: "M. Aldi Amanatullah Syahputra",
            basein: "Batang, Jawa Tengah, Indonesia",
            p1_start: "Lulusan Informatika dan Fullstack Web Developer dengan background kuat di bidang desain visual. Berpengalaman membangun aplikasi web responsif, merancang arsitektur database, dan mendigitalisasi alur kerja manual. Berfokus menciptakan produk digital yang tidak hanya fungsional, tetapi juga seimbang secara visual dan estetis. Saya berusaha menjadi developer yang teliti dan berkomitmen menulis kode yang bersih, rapi, scalable, dan mudah dimaintenance.",
          },
          skill: {
            techdesc: "Teknologi dan alat bantu yang saya kuasai untuk membangun produk digital"
          },
          contact: {
            cv: "Unduh CV",
            title: "Mungkin kita bisa Bicara",
            desc: "Saya terbuka untuk kesempatan baru dan kolaborasi. Jika menurut anda keahlian saya sesuai dengan kebutuhan anda, jangan ragu untuk berkomunikasi di manapun",
          },
        }
      }
    }
  });

export default i18n;