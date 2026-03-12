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
            greeting: "Halo, I'm M. Aldi Amanatullah Syahputra,",
            p1_start: "A passionate individual with a deep enthusiasm for visual technology and modern design. As a",
            p1_middle: "and",
            p1_end: ", I focus on creating digital products that are not only functional but also visually balanced and aesthetically pleasing.",
            p2: "I always strive to deliver modern interfaces with seamless user experience, while keeping innovation and usability in harmony. I value teamwork highly, i believe collaboration creates more efficient and effective solutions."
          },
          contact: {
            cv: "Resume",
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
            greeting: "Halo, Saya M. Aldi Amanatullah Syahputra,",
            p1_start: "Seseorang yang memiliki ketertarikan dalam teknologi visual dan desain modern. Sebagai seorang",
            p1_middle: "dan",
            p1_end: ", saya berfokus untuk menciptakan sebuah produk digital yang tidak hanya baik secara fungsional tetapi juga seimbang dari segi visual dan estetika.",
            p2: "Saya selalu berusaha menciptakan antarmuka modern dan pengalaman pengguna yang halus dengan menjaga keseimbangan inovasi dan kegunaan. Saya sangat menyukai kerja sama tim, saya percaya kolaborasi menciptakan solusi yang lebih efisien dan efektif."
          },
          contact: {
            cv: "Resume",
            title: "Mungkin Kita Bisa Bicara",
            desc: "Saat ini saya terbuka untuk kesempatan baru dan kolaborasi. Jika menurut anda keahlian saya sesuai dengan kebutuhan anda, jangan ragu untuk berkomunikasi di manapun",
          },          
        }
      }
    }
  });

export default i18n;