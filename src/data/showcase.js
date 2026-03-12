
// Cover
import coverInternval from "../assets/internval/internval-cover.jpg"
import coverEgoverse from "../assets/egoverse/egoverse-cover.jpg"
import coverAnaksehat from "../assets/anaksehat/anaksehat-cover.jpg"
import coverWeestaw from "../assets/weestaw/weestaw-cover.jpg"
import coverGaneshacup from "../assets/ganeshacup/ganeshacup-cover.jpg"
import coverEgoverselogo from "../assets/egoverse/egoverselogo-cover.jpg"
import coverInternvallogo from "../assets/internval/internvallogo-cover.jpg"
import coverKknlogo from "../assets/kkn/kknlogo-cover.jpg"
import coverLabhub from "../assets/labhub/labhub-cover.jpg"

// Images

// Internval
import Internval1 from "../assets/internval/internval-car-1.jpg"
import Internval2 from "../assets/internval/internval-car-2.jpg"
import Internval3 from "../assets/internval/internval-car-3.jpg"
import Internval4 from "../assets/internval/internval-car-4.jpg"
import Internval5 from "../assets/internval/internval-car-5.jpg"

// Egoverse
import Egoverse1 from "../assets/egoverse/egoverse-car-1.jpg"
import Egoverse2 from "../assets/egoverse/egoverse-car-2.jpg"
import Egoverse3 from "../assets/egoverse/egoverse-car-3.jpg"
import Egoverse4 from "../assets/egoverse/egoverse-car-4.jpg"
import Egoverse5 from "../assets/egoverse/egoverse-car-5.jpg"

// Anaksehat
import Anaksehat1 from "../assets/anaksehat/anaksehat-car-1.jpg"
import Anaksehat2 from "../assets/anaksehat/anaksehat-car-2.jpg"
import Anaksehat3 from "../assets/anaksehat/anaksehat-car-3.jpg"
import Anaksehat4 from "../assets/anaksehat/anaksehat-car-4.jpg"
import Anaksehat5 from "../assets/anaksehat/anaksehat-car-5.jpg"

// Labhub
import Labhub1 from "../assets/labhub/labhub-car-1.jpg"
import Labhub2 from "../assets/labhub/labhub-car-2.jpg"
import Labhub3 from "../assets/labhub/labhub-car-3.jpg"
import Labhub4 from "../assets/labhub/labhub-car-4.jpg"



const showcase = [

    // Web
    {   
        id: 1,
        category: "dev",
        title: "Labhub",
        subtitle: {
            en: "Laboratory Facility Reporting App",
            id: "Aplikasi Pelaporan Fasilitas Laboratorium"
        },
        cover: coverLabhub,
        images: [
            Labhub1,
            Labhub2,
            Labhub3,
            Labhub4
        ],
        description: {
            en: "A simple desktop application developed using Python and Customtkinter for reporting computer and network facility issues in the computer laboratory at the Faculty of Engineering and Computer Science (UMPP). The system aims to provide an efficient communication channel between students/users and staff/managers.",
            id: "Sebuah aplikasi desktop sederhana yang dikembangkan menggunakan Python dan Customtkinter untuk melaporkan masalah fasilitas komputer dan jaringan di laboratorium komputer Fakultas Teknik dan Ilmu Komputer (UMPP). Sistem ini bertujuan menyediakan saluran komunikasi yang efisien antara mahasiswa/pengguna dan staf/pengelola."
        },
        techstack: ["Python", "Customtkinter", "PHP", "JS", "MySQL", "TailwindCSS", "AlpineJS"],
        role: {
            en: ["Fullstack Developer", "UI/UX Designer"],
            id: ["Fullstack Developer", "Desainer UI/UX"]
        },
        problem: {
            en: "Frequent network disturbances and facility issues occur in the UMPP Computer Laboratory. The existing reporting method relies solely on direct, informal communication with staff or lecturers, which is inefficient and often results in delayed handling of issues.",
            id: "Sering terjadi gangguan jaringan dan masalah fasilitas di Laboratorium Komputer UMPP. Metode pelaporan yang ada selama ini hanya menggunakan komunikasi langsung kepada staf atau dosen, yang dinilai tidak efisien dan seringkali menyebabkan penanganan masalah terlambat."
        },
        subproblem: {
            en: [
                "Disruptions to ongoing academic activities due to slow problem handling",
                "Lack of a structured communication channel between lab users and management staff", 
                "Risk of data inconsistency or errors with manual reporting methods", 
                "Inefficient service delivery for students experiencing technical issues", 
            ],
            id: [
                "Gangguan pada kegiatan perkuliahan akibat penanganan masalah yang lambat",
                "Kurangnya saluran komunikasi terstruktur antara pengguna lab dan staf pengelola",
                "Risiko inkonsistensi data atau kesalahan dengan metode pelaporan manual",
                "Penyampaian layanan yang tidak efisien bagi mahasiswa yang mengalami masalah teknis",
            ]
        },
        solution: {
            en: "Developed a Python-based reporting program with a Customtkinter GUI that connects to a MySQL database (via PHPMyAdmin/XAMPP) to capture and manage facility issue reports. A PHP script is also implemented to present the collected data to administrators via a simple web interface.",
            id: "Mengembangkan program pelaporan berbasis Python dengan GUI Customtkinter yang terhubung ke database MySQL (melalui PHPMyAdmin/XAMPP) untuk menangkap dan mengelola laporan masalah fasilitas. Script PHP juga diimplementasikan untuk menyajikan data yang terkumpul kepada administrator melalui antarmuka web sederhana."
        },
        keyfeaturesdesc: {
            en: "The system provides core functionalities to improve lab facility management:",
            id: "Sistem ini menyediakan fungsi inti untuk meningkatkan manajemen fasilitas lab:"
        },
        keyfeatures: {
            en: [
                "Customtkinter Graphical User Interface (GUI)",
                "MySQL Database Integration", 
                "PHP Data Presentation Webpage", 
                "User-friendly Input Form", 
                "Data Submission Confirmation & Error Handling",             
            ],
            id: [
                "Antarmuka Pengguna Grafis (GUI) Customtkinter",
                "Integrasi Basis Data MySQL",
                "Halaman Web Presentasi Data PHP",
                "Formulir Input yang Ramah Pengguna",
                "Konfirmasi Pengiriman Data & Penanganan Kesalahan",
            ]
        },
    },
    {   
        id: 2,
        category: "dev",
        title: "Anaksehat",
        subtitle: {
            en: "Nutrition Status Calculator",
            id: "Kalkulator Status Gizi Anak"
        },
        cover: coverAnaksehat,
        images: [
            Anaksehat1,
            Anaksehat2,
            Anaksehat3,
            Anaksehat4,
            Anaksehat5            
        ],
        description: {
            en: "Anaksehat is a website that contains nutritional information equipped with a toddler nutritional status calculation system using the z-score method according to standards. This website was created as an effort to reduce stunting in Indonesia through the dissemination of nutritional information and flexibility in checking the nutritional status of toddlers.",
            id: "Anaksehat adalah situs web yang berisi informasi gizi yang dilengkapi dengan sistem perhitungan status gizi balita menggunakan metode z-score sesuai standar. Situs web ini dibuat sebagai upaya untuk mengurangi stunting di Indonesia melalui penyebaran informasi gizi dan fleksibilitas dalam mengecek status gizi balita."
        },
        techstack: ["PHP", "JS", "Laravel", "MySQL", "TailwindCSS", "Vite", "Filament", "AlpineJS"],
        role: {
            en: ["Fullstack Web Developer", "UI/UX Designer"],
            id: ["Fullstack Web Developer", "Desainer UI/UX"]
        },
        problem: {
            en: "Stunting and malnutrition in Indonesian toddlers often stem from a lack of accessible nutritional information and the absence of independent growth monitoring tools. Many parents cannot easily determine their child's nutritional status according to medical standards, leading to delayed intervention in cases of chronic malnutrition.",
            id: "Stunting dan malnutrisi pada balita di Indonesia seringkali disebabkan oleh kurangnya akses terhadap informasi gizi dan tidak adanya alat pemantauan pertumbuhan yang independen. Banyak orang tua kesulitan menentukan status gizi anak mereka sesuai standar medis, sehingga menyebabkan keterlambatan intervensi pada kasus malnutrisi kronis."
        },
        subproblem: {
            en: [
                "High prevalence of stunting due to chronic micro and macronutrient deficiencies",
                "Limited access for parents to perform independent nutritional screening outside of healthcare facilities", 
                "The complexity of calculating nutritional status manually using anthropometric tables", 
                "Lack of a centralized and manageable platform for disseminating validated nutritional education", 
                "The urgent need for digital tools to support government programs in reducing stunting rates",
            ],
            id: [
                "Tingginya angka stunting akibat defisiensi mikronutrien dan makronutrien kronis",
                "Keterbatasan akses bagi orang tua untuk melakukan skrining gizi mandiri di luar fasilitas kesehatan",
                "Kompleksitas penghitungan status gizi secara manual menggunakan tabel antropometri",
                "Kurangnya platform terpusat dan mudah dikelola untuk menyebarkan pendidikan gizi yang tervalidasi",
                "Kebutuhan akan alat digital untuk mendukung program pemerintah dalam mengurangi angka stunting",
            ]
        },
        solution: {
            en: "The system provides a two-fold solution: an automated nutritional status calculator using the Z-Score method for accurate growth tracking, and a robust Content Management System (CMS) powered by Filament. This allows administrators to manage educational resources efficiently while giving parents a flexible, anytime-anywhere tool to ensure their children's nutritional needs are met.",
            id: "Sistem ini memberikan solusi dua arah: kalkulator status gizi otomatis menggunakan metode Z-Score untuk pelacakan pertumbuhan yang akurat, dan Content Management System (CMS) tangguh berbasis Filament. Hal ini memungkinkan administrator mengelola sumber daya edukasi secara efisien sekaligus memberikan alat yang fleksibel bagi orang tua untuk memastikan kebutuhan gizi anak mereka terpenuhi kapan saja dan di mana saja."
        },
        keyfeaturesdesc: {
            en: "The platform integrates medical standards with modern web management to provide the following core functionalities:",
            id: "Platform ini mengintegrasikan standar medis dengan manajemen web modern untuk menyediakan fungsi inti berikut:"
        },
        keyfeatures: {
            en: [
                "Z-Score Nutritional Status Calculator",
                "Anthropometric Standard Integration", 
                "Filament-Powered Admin Dashboard", 
                "Educational Content Management", 
                "Responsive Informational Interface",             
            ],
            id: [
                "Kalkulator Status Gizi Z-Score",
                "Integrasi Standar Antropometri", 
                "Dashboard Admin Berbasis Filament", 
                "Manajemen Konten Edukasi", 
                "Antarmuka Informasi Responsif",             
            ]
        },
    },
    {   
        id: 3,
        category: "dev",
        title: "eGoverse",
        subtitle: {
            en: "E-Government Services",
            id: "Layanan E-Government"
        },
        cover: coverEgoverse,
        images: [
            Egoverse1,
            Egoverse2,
            Egoverse3,
            Egoverse4,
            Egoverse5
        ],
        description: {
            en: "eGoverse or E-Government Services is an innovative OPD (Regional Apparatus Organization) Digitalization Service Portal designed to facilitate the submission of Clearance, Server, Device services, and other support to enhance the efficiency and performance of Regional Apparatus Organizations (OPD) in Pekalongan Regency.",
            id: "eGoverse atau E-Government Services adalah Portal Layanan Digitalisasi OPD (Organisasi Perangkat Daerah) inovatif yang dirancang untuk memfasilitasi pengajuan layanan Clearance, Server, Perangkat, dan dukungan lainnya guna meningkatkan efisiensi serta kinerja OPD di Kabupaten Pekalongan."
        },
        techstack: ["PHP", "JS", "Laravel", "MySQL", "TailwindCSS", "AlpineJS", "Filament"],
        role: {
            en: ["Front-end Web Developer", "UI/UX Designer"],
            id: ["Front-end Web Developer", "Desainer UI/UX"]
        },
        problem: {
            en: "Despite the push for E-Government, service submissions at the Dinkominfo of Pekalongan Regency are still conducted manually. This manual process is inefficient, lacks transparency, and does not fully align with the principles of Good Governance, contributing to Indonesia's relatively low E-Government Development Index (EGDI).",
            id: "Meskipun ada dorongan untuk E-Government, pengajuan layanan di Dinkominfo Kabupaten Pekalongan masih dilakukan secara manual. Proses manual ini tidak efisien, kurang transparan, dan belum sepenuhnya selaras dengan prinsip Tata Kelola Pemerintahan yang Baik (Good Governance), yang berkontribusi pada rendahnya Indeks Pengembangan E-Government (EGDI) Indonesia."
        },
        subproblem: {
            en: [
                "Inefficient manual submission methods for government services",
                "Lack of transparency and accountability in administrative processes", 
                "Limited accessibility for the public to monitor their submission status", 
                "Misalignment with Good Governance principles regarding budget and administrative efficiency", 
                "Low public awareness and socialization of existing electronic government systems",
                "The need for a more intuitive interface to bridge the gap between technology and public users",
            ],
            id: [
                "Metode pengajuan layanan pemerintah yang tidak efisien melalui cara manual",
                "Kurangnya transparansi dan akuntabilitas dalam proses administrasi", 
                "Aksesibilitas terbatas bagi publik untuk memantau status pengajuan mereka", 
                "Ketidakselarasan dengan prinsip Good Governance terkait efisiensi anggaran dan administrasi", 
                "Rendahnya kesadaran dan sosialisasi publik terhadap sistem pemerintahan elektronik yang ada",
                "Kebutuhan akan antarmuka yang lebih intuitif untuk menjembatani celah antara teknologi dan pengguna publik",
            ]
        },
        solution: {
            en: "Developed the Egoverse interface to modernize and streamline the submission process. By digitalizing service requests, the platform ensures more effective service delivery, reduces bureaucratic bottlenecks, and provides a structured information flow that supports the realization of an efficient E-Government ecosystem in Pekalongan Regency.",
            id: "Mengembangkan antarmuka Egoverse untuk memodernisasi dan menyederhanakan proses pengajuan. Dengan mendigitalisasi permintaan layanan, platform ini memastikan pengiriman layanan yang lebih efektif, mengurangi hambatan birokrasi, dan menyediakan alur informasi terstruktur yang mendukung terwujudnya ekosistem E-Government yang efisien di Kabupaten Pekalongan."
        },
        keyfeaturesdesc: {
            en: "The interface was designed to simplify interactions between citizens and government bodies through several key components:",
            id: "Antarmuka ini dirancang untuk menyederhanakan interaksi antara warga dan badan pemerintah melalui beberapa komponen utama:"
        },
        keyfeatures: {
            en: [
                "Integrated Service Dashboard",
                "Digital Submission Forms", 
                "Real-time Process Tracking", 
                "Public Information Portal", 
                "Administrative Verification Panel", 
            ],
            id: [
                "Dashboard Layanan Terintegrasi",
                "Formulir Pengajuan Digital", 
                "Pelacakan Proses Real-time", 
                "Portal Informasi Publik", 
                "Panel Verifikasi Administratif", 
            ]
        },
    },
    {   
        id: 4,
        category: "dev",
        title: "Internval",
        subtitle: {
            en: "Internship Validation",
            id: "Validasi Magang Mahasiswa"
        },
        cover: coverInternval,
        images: [
            Internval1,
            Internval2,
            Internval3,
            Internval4,
            Internval5
        ],
        description: {
            en: "Internval is a web-based application designed to streamline the internship application and tracking process for university students. This platform allows students to submit internship applications to various institutions and monitor the status of their submissions in real-time. Administrators and faculty can manage and verify submissions efficiently through an intuitive Filament-powered dashboard.",
            id: "Internval adalah aplikasi berbasis web yang dirancang untuk menyederhanakan proses pengajuan dan pelacakan magang bagi mahasiswa. Platform ini memungkinkan mahasiswa untuk mengirimkan pengajuan magang ke berbagai instansi dan memantau status pengajuan mereka secara real-time. Admin dan fakultas dapat mengelola serta memverifikasi pengajuan secara efisien melalui dashboard berbasis Filament yang intuitif."
        },
        techstack: ["PHP", "JS", "Laravel", "MySQL", "TailwindCSS", "Vite", "AlpineJS", "Filament"],
        role: {
            en: ["Fullstack Web Developer", "UI/UX Designer", "Graphic Designer"],
            id: ["Fullstack Web Developer", "Desainer UI/UX", "Desainer Grafis"]
        },
        problem: {
            en: "The application procedure for internships or field work practices (PKL) at the Faculty of Engineering and Computer Science (UMPP) currently faces various administrative obstacles that hinder efficient service delivery for students. Several crucial issues that require attention are:",
            id: "Prosedur pengajuan magang atau Praktik Kerja Lapangan (PKL) di Fakultas Teknik dan Ilmu Komputer (UMPP) saat ini menghadapi berbagai hambatan administratif yang menghambat efisiensi layanan bagi mahasiswa. Beberapa masalah krusial yang memerlukan perhatian adalah:"
        },
        subproblem: {
            en: [
                "Students must physically visit campus just to collect paper forms",
                "Manual entries increase the risk of errors and data inconsistency", 
                "Validation is delayed by the requirement for the Program Head's physical presence", 
                "Students must move between offices multiple times to complete the process", 
                "The absence of real-time tracking forces manual status checks",
                "Irresponsible multiple applications damage the university's reputation",
            ],
            id: [
                "Mahasiswa harus datang secara fisik ke kampus hanya untuk mengambil formulir kertas",
                "Entri data manual meningkatkan risiko kesalahan dan ketidakkonsistenan data", 
                "Validasi tertunda karena keharusan kehadiran fisik Ketua Program Studi", 
                "Mahasiswa harus berpindah antar kantor berkali-kali untuk menyelesaikan proses", 
                "Tidak adanya pelacakan real-time memaksa pengecekan status dilakukan secara manual",
                "Pengajuan ganda yang tidak bertanggung jawab merusak reputasi universitas",
            ]
        },
        solution: {
            en: "The system resolves administrative bottlenecks by transitioning from manual paperwork to a centralized management system. By implementing multi-role dashboards and dynamic data handling, the platform automates the validation process between departments. The integration of an automated PDF & QR code engine ensures document authenticity, while real-time tracking and responsive digital forms provide transparency and accessibility for students at every stage of their application.",
            id: "Sistem ini menyelesaikan hambatan administratif dengan bertransisi dari tumpukan kertas manual ke sistem manajemen terpusat. Dengan menerapkan dashboard multi-peran dan penanganan data dinamis, platform ini mengotomatisasi proses validasi antar departemen. Integrasi mesin PDF & kode QR otomatis memastikan keaslian dokumen, sementara pelacakan real-time dan formulir digital responsif memberikan transparansi serta aksesibilitas bagi mahasiswa di setiap tahap pengajuan mereka."
        },
        keyfeaturesdesc: {
            en: "This development has successfully delivered a series of features designed to bridge the gap between students and administrative bodies which can be seen below.",
            id: "Pengembangan ini telah berhasil menghadirkan serangkaian fitur yang dirancang untuk menjembatani celah antara mahasiswa dan badan administratif yang dapat dilihat di bawah ini."
        },
        keyfeatures: {
            en: [
                "Responsive Digital Forms",
                "Dynamic Data Handling", 
                "Real-Time Application Tracking", 
                "Automated PDF & QR Code Engine", 
                "Multi-Role Dashboard",
                "Centralized Management System",
            ],
            id: [
                "Formulir Digital Responsif",
                "Penanganan Data Dinamis", 
                "Pelacakan Pengajuan Real-Time", 
                "Mesin PDF & Kode QR Otomatis", 
                "Dashboard Multi-Peran",
                "Sistem Manajemen Terpusat",
            ]
        },
    },
    
    // Design
    {   
        id: 4,
        category: "design",
        title: "Weestaw",
        subtitle: {
            en: "Prelove and Thrift Shoping App",
            id: "Aplikasi Jual Beli Pakaian Bekas"
        },
        cover: coverWeestaw,
        description: {
            en: "Weestaw is a dedicated UI/UX design for a specialized e-commerce platform focused on buying and selling high-quality pre-loved clothing. The project aims to bridge the gap between thrifting enthusiasts and sellers by providing a professional marketplace environment that distinguishes used goods from new products.",
            id: "Weestaw adalah desain UI/UX khusus untuk platform e-commerce yang berfokus pada jual beli pakaian bekas (pre-loved) berkualitas tinggi. Proyek ini bertujuan untuk menjembatani celah antara penggemar thrifting dan penjual dengan menyediakan lingkungan pasar profesional yang membedakan barang bekas dari produk baru."
        },
        techstack: ["Photoshop", "Illustrator", "Figma"],
        role: {
            en: ["UI Designer", "Graphic Designer"],
            id: ["Desainer UI", "Desainer Grafis"]
        },
        challenge: {
            en: "The primary challenge involves designing a specialized ecosystem that legitimizes thrifting as a professional trade. Current sellers are forced to use non-commercial social media platforms like Instagram and TikTok, which lack structured transaction tools. Furthermore, general e-commerce platforms often mix new and used items, creating a high risk of customer misunderstanding regarding the actual condition of the products.",
            id: "Tantangan utamanya adalah merancang ekosistem khusus yang melegitimasi thrifting sebagai perdagangan profesional. Penjual saat ini terpaksa menggunakan platform media sosial non-komersial seperti Instagram dan TikTok yang tidak memiliki alat transaksi terstruktur. Selain itu, platform e-commerce umum sering mencampur barang baru dan bekas, sehingga menciptakan risiko tinggi kesalahpahaman pelanggan terkait kondisi sebenarnya dari produk tersebut."
        },        
        concept: {
            en: "The design focuses on 'Transparency and Trust' to eliminate the stigma of used goods. By using a clean, modern aesthetic and implementing specific 'Condition Tags', the interface ensures users can clearly distinguish item quality. The layout is optimized to mimic a professional boutique experience while maintaining the 'thrift' value of affordability.",
            id: "Desain ini berfokus pada 'Transparansi dan Kepercayaan' untuk menghilangkan stigma barang bekas. Dengan menggunakan estetika yang bersih dan modern serta menerapkan 'Tag Kondisi' yang spesifik, antarmuka memastikan pengguna dapat membedakan kualitas barang dengan jelas. Tata letak dioptimalkan untuk meniru pengalaman butik profesional namun tetap mempertahankan nilai 'thrift' yang terjangkau."
        },
        deliverablesdesc: {
            en: "This design process resulted in a tailored solution for the secondary market ecosystem, including:",
            id: "Proses desain ini menghasilkan solusi yang disesuaikan untuk ekosistem pasar barang bekas, termasuk:"
        },
        deliverables: {
            en: [
                "Specialized Product Condition Grading UI",
                "Seller-to-Buyer Direct Communication Flow", 
                "Curated Thrift Store Discovery Interface", 
                "Standardized Pre-loved Item Listing System", 
                "High-Fidelity Interactive Mobile Prototype",
            ],
            id: [
                "UI Grading Kondisi Produk Khusus",
                "Alur Komunikasi Langsung Penjual-ke-Pembeli", 
                "Antarmuka Penemuan Toko Thrift Terkurasi", 
                "Sistem Daftar Barang Pre-loved Standar", 
                "Prototipe Mobile Interaktif High-Fidelity",
            ]
        },
    },
    {   
        id: 5,
        category: "design",
        title: "Ganesha Cup II",
        subtitle: {
            en: "Event Identity & Print Collaterals",
            id: "Identitas Acara & Media Cetak"
        },
        cover: coverGaneshacup,
        description: {
            en: "A complete set of print-ready designs for the Ganesha Cup II futsal tournament. This project includes a large-scale photo backdrop and various award banners, all maintaining a consistent visual theme to strengthen the event's identity and professional appearance.",
            id: "Rangkaian lengkap desain siap cetak untuk turnamen futsal Ganesha Cup II. Proyek ini mencakup backdrop foto skala besar dan berbagai banner penghargaan, semuanya mempertahankan tema visual yang konsisten untuk memperkuat identitas acara dan kesan profesional."
        },
        techstack: ["Photoshop", "Illustrator", "Figma"],
        role: {
            en: ["Graphic Designer"],
            id: ["Desainer Grafis"]
        },
        challenge: {
            en: "The challenge was to create a cohesive visual language that represents both the competitive spirit of futsal and the event's branding. The design had to be versatile enough to work on a 3x4 meter backdrop while remaining clear and impactful on smaller award banners for Best Player, Top Scorer, and Champions.",
            id: "Tantangannya adalah menciptakan bahasa visual kohesif yang merepresentasikan semangat kompetitif futsal sekaligus branding acara. Desain harus cukup fleksibel untuk diaplikasikan pada backdrop ukuran 3x4 meter namun tetap terlihat jelas dan kuat pada banner penghargaan yang lebih kecil untuk Pemain Terbaik, Pencetak Gol Terbanyak, dan Juara."
        },        
        concept: {
            en: "The concept revolves around the slogan 'Empower Together: Uniting Minds, Shaping Success!'. By using a white base to keep the layout clean, the vibrant blue and yellow accents (inspired by the branding of Ganesha Futsal and partners like Tri) are used to draw focus to key information. The composition is balanced to provide a perfect frame for photographs during the awarding session.",
            id: "Konsepnya berpusat pada slogan 'Empower Together: Uniting Minds, Shaping Success!'. Dengan menggunakan dasar putih agar tata letak tetap bersih, aksen biru dan kuning cerah (terinspirasi dari branding Ganesha Futsal dan mitra seperti Tri) digunakan untuk menarik fokus ke informasi utama. Komposisinya diseimbangkan untuk memberikan bingkai yang sempurna bagi dokumentasi foto selama sesi penganugerahan."
        },
        deliverablesdesc: {
            en: "The design package includes several high-resolution assets ready for large-format printing:",
            id: "Paket desain ini mencakup beberapa aset resolusi tinggi yang siap untuk pencetakan format besar:"
        },
        deliverables: {
            en: [
                "Main Event Photo Backdrop",
                "Best Player & Top Scorer Award Banners", 
                "1st, 2nd, and 3rd Place Winner Banners", 
                "Cohesive Typography System", 
                "Standardized Event Color Guide",
            ],
            id: [
                "Backdrop Foto Acara Utama",
                "Banner Penghargaan Pemain Terbaik & Top Scorer", 
                "Banner Pemenang Juara 1, 2, dan 3", 
                "Sistem Tipografi yang Kohesif", 
                "Panduan Warna Acara Terstandarisasi",
            ]
        },
    },
    {   
        id: 6,
        category: "design",
        title: "eGoverse",
        subtitle: {
            en: "E-Government Services",
            id: "Layanan E-Government"
        },
        cover: coverEgoverselogo,
        description: {
            en: "A comprehensive brand identity design for Egoverse (E-Government Services) at Dinkominfo Pekalongan Regency. The identity is crafted to bridge the gap between traditional government administration and modern digital efficiency, fostering trust and accessibility for the public.",
            id: "Desain identitas merek yang komprehensif untuk Egoverse (E-Government Services) di Dinkominfo Kabupaten Pekalongan. Identitas ini dirancang untuk menjembatani celah antara administrasi pemerintahan tradisional dan efisiensi digital modern, guna menumbuhkan kepercayaan dan aksesibilitas bagi publik."
        },
        techstack: ["Photoshop", "Illustrator", "Figma"],
        role: {
            en: ["Graphic Designer"],
            id: ["Desainer Grafis"]
        },
        challenge: {
            en: "The primary challenge was to create a visual identity that humanizes rigid bureaucratic processes. The branding needed to represent the transition from manual, inefficient paper-based systems to a transparent, electronic-based government (E-Government) while aligning with the core principles of Good Governance and the technical prestige of Dinkominfo.",
            id: "Tantangan utamanya adalah menciptakan identitas visual yang memanusiakan proses birokrasi yang kaku. Branding ini harus merepresentasikan transisi dari sistem berbasis kertas manual yang tidak efisien menuju pemerintahan berbasis elektronik (E-Government) yang transparan, sembari menyelaraskan dengan prinsip inti Tata Kelola Pemerintahan yang Baik serta prestise teknis Dinkominfo."
        },        
        concept: {
            en: "The 'eGoverse' identity utilizes a 'Modern-Global' approach. The logo features a stylized globe icon held by symmetrical hands, symbolizing universal service, care, and the protection of public interests. A professional monochromatic blue gradient is used to project stability, technology, and transparency. The use of a bold, rounded sans-serif typeface ensures high legibility and a friendly, accessible persona for the digital government initiative.",
            id: "Identitas 'eGoverse' menggunakan pendekatan 'Modern-Global'. Logo tersebut menampilkan ikon bola dunia yang ditopang oleh tangan simetris, melambangkan layanan universal, kepedulian, dan perlindungan kepentingan publik. Gradasi biru monokromatik profesional digunakan untuk memproyeksikan stabilitas, teknologi, dan transparansi. Penggunaan tipografi sans-serif bulat yang tebal memastikan keterbacaan tinggi dan persona yang ramah serta mudah diakses untuk inisiatif pemerintah digital."
        },
        deliverablesdesc: {
            en: "This project established a unified visual foundation to support the E-Government Development Index (EGDI) goals, including:",
            id: "Proyek ini menetapkan fondasi visual terpadu untuk mendukung tujuan Indeks Pengembangan E-Government (EGDI), termasuk:"
        },
        deliverables: {
            en: [
                "Primary Logo with Global & Guardian Symbolism",
                "Institutional Blue Gradient Color System", 
                "Dynamic Background Pattern for Digital Assets", 
                "Brand Application on Official Administrative Portals", 
                "E-Government Visual Style Guide",
            ],
            id: [
                "Logo Utama dengan Simbolisme Global & Penjagaan",
                "Sistem Warna Gradasi Biru Institusional", 
                "Pola Latar Belakang Dinamis untuk Aset Digital", 
                "Aplikasi Brand pada Portal Administratif Resmi", 
                "Panduan Gaya Visual E-Government (Visual Style Guide)",
            ]
        },
    },
    {   
        id: 7,
        category: "design",
        title: "Internval",
        subtitle: {
            en: "Internship Validation",
            id: "Validasi Magang"
        },
        cover: coverInternvallogo,
        description: {
            en: "A comprehensive brand identity design for Internval (Internship Validation) at the Faculty of Engineering and Computer Science (UMPP). The identity is crafted to bridge the gap between traditional academic administration and modern digital efficiency, fostering trust and accessibility for students.",
            id: "Desain identitas merek yang komprehensif untuk Internval (Internship Validation) di Fakultas Teknik dan Ilmu Komputer (UMPP). Identitas ini dirancang untuk menjembatani celah antara administrasi akademik tradisional dan efisiensi digital modern, guna menumbuhkan kepercayaan dan aksesibilitas bagi mahasiswa."
        },
        techstack: ["Photoshop", "Illustrator", "Figma"],
        role: {
            en: ["Graphic Designer"],
            id: ["Desainer Grafis"]
        },
        challenge: {
            en: "The challenge was to visually translate the binary nature of administrative approval (yes or no) into a sophisticated brand mark. The identity had to represent the complex 'stages' of internal submissions while maintaining a clean and modern aesthetic that aligns with the speed of digital transformation.",
            id: "Tantangannya adalah menerjemahkan sifat biner dari persetujuan administratif (ya atau tidak) secara visual ke dalam tanda merek yang canggih. Identitas tersebut harus merepresentasikan 'tahapan' kompleks dari pengajuan internal dengan tetap mempertahankan estetika bersih dan modern yang selaras dengan kecepatan transformasi digital."
        },        
        concept: {
            en: "The 'Internval' logo concept is derived from a checkbox element, representing a submission in its unapproved state. By 'cutting' the shape into multiple segments of varying lengths, the design visualizes the sequential stages and time-intensive nature of internal academic systems, ultimately resolved through digital efficiency.",
            id: "Konsep logo 'Internval' diturunkan dari elemen kotak centang (checkbox), yang merepresentasikan pengajuan dalam keadaan belum disetujui. Dengan 'memotong' bentuk tersebut menjadi beberapa segmen dengan panjang yang bervariasi, desain ini memvisualisasikan tahapan berurutan dan sifat sistem akademik internal yang memakan waktu, yang akhirnya diselesaikan melalui efisiensi digital."
        },
        deliverablesdesc: {
            en: "A complete visual toolkit designed to provide clarity throughout the internship validation lifecycle, including:",
            id: "Toolkit visual lengkap yang dirancang untuk memberikan kejelasan di seluruh siklus hidup validasi magang, termasuk:"
        },
        deliverables: {
            en: [
                "Grid-Perfect Primary Logo Mark",
                "Clash Display Typography System", 
                "Monochromatic Green Color Scheme (representing digital approval)", 
                "Systemic Branding for Internship Stages", 
                "Visual Documentation of Logo Construction",
            ],
            id: [
                "Tanda Logo Utama dengan Presisi Grid",
                "Sistem Tipografi Clash Display", 
                "Skema Warna Hijau Monokromatik (melambangkan persetujuan digital)", 
                "Branding Sistemik untuk Tahapan Magang", 
                "Dokumentasi Visual Konstruksi Logo",
            ]
        },
    },    
    {   
        id: 8,
        category: "design",
        title: "KKN Logo",
        subtitle: {
            en: "KKN Pasirkratonkramat Brand Identity",
            id: "Identitas Merek KKN Pasirkratonkramat"
        },
        cover: coverKknlogo,
        description: {
            en: "A specialized logo identity designed for the KKN (Community Service Program) in PasirKratonKramat, Pekalongan. The visual system integrates local geographical features, cultural heritage, and historical backgrounds into a unified symbol of community service.",
            id: "Identitas logo khusus yang dirancang untuk program KKN di PasirKratonKramat, Pekalongan. Sistem visual ini mengintegrasikan fitur geografis lokal, warisan budaya, dan latar belakang sejarah ke dalam simbol pengabdian masyarakat yang terpadu."
        },
        techstack: ["Photoshop", "Illustrator", "Figma"],
        role: {
            en: ["Graphic Designer"],
            id: ["Desainer Grafis"]
        },
        challenge: {
            en: "The challenge was to synthesize five distinct local identities—geography, coastal culture, the batik industry, historical origins, and local landmarks—into a singular, cohesive emblem that resonates with the residents of PasirKratonKramat while maintaining a professional institutional appearance.",
            id: "Tantangannya adalah menyintesis lima identitas lokal yang berbeda—geografi, budaya pesisir, industri batik, asal-usul sejarah, dan landmark lokal—menjadi satu lambang kohesif yang beresonansi dengan warga PasirKratonKramat sambil tetap mempertahankan tampilan institusional yang profesional."
        },        
        concept: {
            en: "The logo utilizes a 'Nested Symbolism' approach, where each layer of the emblem tells a story about the KKN location. By combining organic shapes representing nature (coastal waves and sand) with cultural patterns (Batik) and architectural silhouettes (Stadion Hoegeng), the design acts as a visual map of the Kelurahan's identity.",
            id: "Logo ini menggunakan pendekatan 'Simbolisme Berlapis', di mana setiap lapisan lambang menceritakan kisah tentang lokasi KKN. Dengan menggabungkan bentuk organik yang mewakili alam (gelombang pesisir dan pasir) dengan pola budaya (Batik) serta siluet arsitektur (Stadion Hoegeng), desain ini bertindak sebagai peta visual dari identitas Kelurahan tersebut."
        },
        deliverablesdesc: {
            en: "This project delivered a culturally-rich identity system to be used throughout the KKN program duration, including:",
            id: "Proyek ini menghasilkan sistem identitas yang kaya budaya untuk digunakan selama durasi program KKN, termasuk:"
        },
        deliverables: {
            en: [
                "Philosophical Logo with Deep Local Symbolism",
                "Community Service Program Branding", 
                "Visual Documentation of Local Cultural Values", 
                "Social Media & Printed Event Assets", 
                "Institutional Identity for Regional Collaboration",
            ],
            id: [
                "Logo Filosofis dengan Simbolisme Lokal yang Mendalam",
                "Branding Program Pengabdian Masyarakat", 
                "Dokumentasi Visual Nilai-Nilai Budaya Lokal", 
                "Aset Media Sosial & Media Cetak Acara", 
                "Identitas Institusional untuk Kolaborasi Regional",
            ]
        },
    },
]

export default showcase