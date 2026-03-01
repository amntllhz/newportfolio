import imageA from "../assets/school/smp-logo.png"
import imageB from "../assets/school/sma-logo.png"
import imageC from "../assets/school/umpp-logo.png"

const school = [
    {
        id: 1,        
        title: "SMP N 1 Warungasem",
        image: imageA,
        duration: "2016 - 2019",
        major: {
            en: "Reguler",
            id: "Reguler"
        },
        address: {
            en: "Batang Regency",
            id: "Kabupaten Batang"
        },
    },
    {
        id: 2,        
        title: "SMA N 1 Wonotunggal",
        image: imageB,
        duration: "2019 - 2022",
        major: {
            en: "Science",
            id: "MIPA"
        },
        address: {
            en: "Batang Regency",
            id: "Kabupaten Batang"
        },
    },
    {
        id: 3,        
        title: "Universitas Muhammadiyah Pekajangan Pekalongan",
        image: imageC,
        duration: "2022 - 2026",
        major: {
            en: "Informatics",
            id: "Informatika"
        },
        address: {
            en: "Pekalongan Regency",
            id: "Kabupaten Pekalongan"
        },
    },

]

export default school