
// Cover
import coverInternval from "../assets/internval/internval-cover.webp"
import coverEgoverse from "../assets/egoverse/egoverse-cover.webp"
import coverAnaksehat from "../assets/anaksehat/anaksehat-cover.webp"
import coverWeestaw from "../assets/weestaw/weestaw-cover.webp"
import coverGaneshacup from "../assets/ganeshacup/ganeshacup-cover.webp"
import coverEgoverselogo from "../assets/egoverse/egoverselogo-cover.webp"
import coverInternvallogo from "../assets/internval/internvallogo-cover.webp"
import coverKknlogo from "../assets/kkn/kknlogo-cover.webp"
import coverLabhub from "../assets/labhub/labhub-cover.webp"

// Images

// Internval
import Internval1 from "../assets/internval/internval-car-1.webp"
import Internval2 from "../assets/internval/internval-car-2.webp"
import Internval3 from "../assets/internval/internval-car-3.webp"
import Internval4 from "../assets/internval/internval-car-4.webp"
import Internval5 from "../assets/internval/internval-car-5.webp"

// Egoverse
import Egoverse1 from "../assets/egoverse/egoverse-car-1.webp"
import Egoverse2 from "../assets/egoverse/egoverse-car-2.webp"
import Egoverse3 from "../assets/egoverse/egoverse-car-3.webp"
import Egoverse4 from "../assets/egoverse/egoverse-car-4.webp"
import Egoverse5 from "../assets/egoverse/egoverse-car-5.webp"

// Anaksehat
import Anaksehat1 from "../assets/anaksehat/anaksehat-car-1.webp"
import Anaksehat2 from "../assets/anaksehat/anaksehat-car-2.webp"
import Anaksehat3 from "../assets/anaksehat/anaksehat-car-3.webp"
import Anaksehat4 from "../assets/anaksehat/anaksehat-car-4.webp"
import Anaksehat5 from "../assets/anaksehat/anaksehat-car-5.webp"

// Labhub
import Labhub1 from "../assets/labhub/labhub-car-1.webp"
import Labhub2 from "../assets/labhub/labhub-car-2.webp"
import Labhub3 from "../assets/labhub/labhub-car-3.webp"
import Labhub4 from "../assets/labhub/labhub-car-4.webp"

// Weestaw
import Weestaw1 from "../assets/weestaw/weestaw-car-1.webp"
import Weestaw2 from "../assets/weestaw/weestaw-car-2.webp"
import Weestaw3 from "../assets/weestaw/weestaw-car-3.webp"
import Weestaw4 from "../assets/weestaw/weestaw-car-4.webp"
import Weestaw5 from "../assets/weestaw/weestaw-car-5.webp"

// Ganeshacup
import Ganeshacup1 from "../assets/ganeshacup/ganeshacup-car-1.webp"
import Ganeshacup2 from "../assets/ganeshacup/ganeshacup-car-2.webp"
import Ganeshacup3 from "../assets/ganeshacup/ganeshacup-car-3.webp"

// Egoverselogo
import Egoverselogo1 from "../assets/egoverse/egoverselogo-car-1.webp"
import Egoverselogo2 from "../assets/egoverse/egoverselogo-car-2.webp"

// Internvallogo
import Internvallogo1 from "../assets/internval/internvallogo-car-1.webp"
import Internvallogo2 from "../assets/internval/internvallogo-car-2.webp"
import Internvallogo3 from "../assets/internval/internvallogo-car-3.webp"

// Kknlogo
import Kknlogo1 from "../assets/kkn/kknlogo-car-1.webp"
import Kknlogo2 from "../assets/kkn/kknlogo-car-2.webp"
import Kknlogo3 from "../assets/kkn/kknlogo-car-3.webp"


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
            id: "Sebuah aplikasi desktop sederhana yang dikembangkan menggunakan Python dan Customtkinter untuk melaporkan kendala yang dialami pengguna fasilitas komputer dan jaringan di laboratorium komputer Fakultas Teknik dan Ilmu Komputer (UMPP). Aplikasi ini dikembangkan untuk menyediakan saluran komunikasi yang efisien antara mahasiswa/pengguna dan staf/pengelola."
        },
        techstack: ["Python", "Customtkinter", "PHP", "JS", "MySQL", "TailwindCSS", "AlpineJS"],
        role: {
            en: ["Fullstack Developer", "UI/UX Designer"],
            id: ["Fullstack Developer", "Desainer UI/UX"]
        },
        problem: {
            en: "Frequent network disturbances and facility issues occur in the Computer Laboratory. The existing reporting method relies solely on direct, informal communication with staff or lecturers, which is inefficient and often results in delayed handling of issues.",
            id: "Sering terjadi gangguan jaringan dan masalah fasilitas di Laboratorium Komputer. Metode pelaporan yang ada selama ini hanya menggunakan komunikasi langsung kepada staf atau dosen, yang dinilai tidak efisien dan seringkali menyebabkan penanganan masalah terlambat."
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
            en: "Developed a Python-based reporting program with a CustomTkinter GUI connected to a MySQL database to store and manage facility problem reports. Collected data is presented to administrators/staff through a simple web interface developed using PHP and TailwindCSS.",
            id: "Mengembangkan program pelaporan berbasis Python dengan GUI Customtkinter yang terhubung dengan database MySQL untuk menyimpan dan mengelola laporan masalah fasilitas. Data yang terkumpul ditampilkan kepada administrator/staf melalui antarmuka web sederhana yang dikembangkan menggunakan PHP dan TailwindCSS."
        },
        keyfeaturesdesc: {
            en: "The system provides core functionalities to improve lab facility management :",
            id: "Sistem ini menyediakan fungsi inti untuk meningkatkan manajemen fasilitas lab :"
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
            en: "Nutrition Education & Prediction",
            id: "Edukasi & Prediksi Gizi"
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
            id: "Anaksehat merupakan sebuah web edukasi yang tidak hanya menyediakan informasi gizi, tetapi juga dilengkapi dengan sistem perhitungan status gizi balita menggunakan metode z-score sesuai standar. Web ini dibuat sebagai upaya untuk mengurangi stunting di Indonesia melalui penyebaran informasi gizi dan fleksibilitas dalam mengecek status gizi balita."
        },
        techstack: ["PHP", "JS", "Laravel", "MySQL", "TailwindCSS", "Vite", "Filament", "AlpineJS"],
        role: {
            en: ["Fullstack Web Developer", "UI/UX Designer"],
            id: ["Fullstack Web Developer", "Desainer UI/UX"]
        },
        problem: {
            en: "Stunting and malnutrition among toddlers in Indonesia are often caused by a lack of access to nutritional information and nutritional status measurement tools. Many parents struggle to determine their child's nutritional status according to medical standards, leading to delayed intervention in cases of chronic malnutrition.",
            id: "Stunting dan malnutrisi pada balita di Indonesia seringkali disebabkan oleh kurangnya akses terhadap informasi gizi dan alat penghitung status gizi balita. Banyak orang tua kesulitan untuk mengetahui status gizi anak mereka sesuai standar medis, hal tersebut menyebabkan keterlambatan intervensi pada kasus malnutrisi kronis."
        },
        subproblem: {
            en: [
                "High prevalence of stunting due to chronic micro and macronutrient deficiencies",
                "Limited parental home-based nutritional screening", 
                "The complexity of calculating nutritional status manually using anthropometric tables", 
                "Lack of a centralized and manageable platform for disseminating validated nutritional education", 
                "The urgent need for digital tools to support government programs in reducing stunting rates",
            ],
            id: [
                "Tingginya angka stunting akibat defisiensi mikronutrien dan makronutrien kronis",
                "Keterbatasan akses bagi orang tua untuk melakukan skrining gizi mandiri diluar fasilitas kesehatan",
                "Kompleksitas penghitungan status gizi secara manual menggunakan tabel antropometri",
                "Kurangnya platform untuk menyebarkan pendidikan gizi yang tervalidasi",
                "Kebutuhan alat digital untuk mendukung pemerintah dalam mengurangi angka stunting",
            ]
        },
        solution: {
            en: "This system provides a 2-in-1 solution, equipped with an automatic nutritional status calculator using the Z-Score method for accurate growth tracking, and a robust Content Management System (CMS) based on Filament. This allows administrators to efficiently manage information resources. The combination of these two is expected to provide flexibility for parents to ensure their children's nutritional needs are met anytime and anywhere.",
            id: "Sistem ini memberikan solusi 2 in 1, dilengkapi kalkulator status gizi otomatis menggunakan metode Z-Score untuk pelacakan pertumbuhan yang akurat, dan Content Management System (CMS) tangguh berbasis Filament. Hal ini memungkinkan administrator mengelola sumber informasi secara efisien, kedua kombinasi tersebut diharapkan dapat memberikan fleksibilitas bagi orang tua untuk memastikan kebutuhan gizi anak mereka terpenuhi kapan saja dan di mana saja."
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
                "Kebutuhan akan antarmuka yang intuitif untuk menjembatani celah antara teknologi dan pengguna publik",
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
            en: "Internval is a web-based application designed to simplify the internship application and tracking process for students. The platform allows students to submit internship applications from anywhere, anytime, and monitor the status of their applications in real time.",
            id: "Internval adalah aplikasi berbasis web yang dirancang untuk menyederhanakan proses pengajuan dan pelacakan magang bagi mahasiswa. Platform ini memungkinkan mahasiswa untuk mengirimkan pengajuan magang dari manapun dan kapanpun, selain itu mahasiswa dapat memantau status pengajuan mereka secara real-time."
        },
        techstack: ["PHP", "JS", "Laravel", "MySQL", "TailwindCSS", "Vite", "AlpineJS", "Filament"],
        role: {
            en: ["Fullstack Web Developer", "UI/UX Designer", "Graphic Designer"],
            id: ["Fullstack Web Developer", "Desainer UI/UX", "Desainer Grafis"]
        },
        problem: {
            en: "The internship or Field Work Practice (PKL) application process at the Faculty of Engineering and Computer Science (UMPP) currently faces several administrative challenges that hinder efficient service delivery to students. Some crucial issues requiring attention are :",
            id: "Prosedur pengajuan magang atau Praktik Kerja Lapangan (PKL) di Fakultas Teknik dan Ilmu Komputer (UMPP) saat ini masih memiliki beberapa kendala administratif yang menghambat efisiensi layanan bagi mahasiswa. Beberapa masalah krusial yang memerlukan perhatian adalah :"
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
            en: "This system overcomes administrative challenges by transitioning from manual forms to a centralized digital management system. By implementing a multi-role dashboard and dynamic data handling, the platform automates the cross-department validation process. The integration of an automated PDF and QR code generator ensures document authenticity, while real-time tracking and responsive digital forms provide transparency and accessibility for students at every stage of their application.",
            id: "Sistem ini mengatasi kendala administratif dengan bertransisi dari penggunaan formulir manual ke sistem manajemen digital yang terpusat. Dengan menerapkan dashboard multi-peran dan penanganan data dinamis, platform ini mengotomatisasi proses validasi antar bagian. Integrasi pembuat PDF & kode QR otomatis memastikan keaslian dokumen, sementara pelacakan real-time dan formulir digital responsif memberikan transparansi serta aksesibilitas bagi mahasiswa di setiap tahap pengajuan mereka."
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
        images: [
            Weestaw1,
            Weestaw2,
            Weestaw3,
            Weestaw4,
            Weestaw5
        ],
        description: {
            en: "Weestaw is a dedicated UI/UX design for a specialized e-commerce platform focused on buying and selling high-quality pre-loved clothing. The project aims to bridge the gap between thrifting enthusiasts and sellers by providing a professional marketplace environment that distinguishes used goods from new products.",
            id: "Weestaw adalah aplikasi yang berfokus pada jual beli pakaian bekas (pre-loved) berkualitas tinggi. Aplikasi ini menjembatani celah antara penggemar thrifting dan penjual dengan menyediakan lingkungan pasar profesional yang membedakan barang bekas dari produk baru."
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
            en: "This app themed Transparency and Trust aims to dispel the stigma that all secondhand goods are inherently bad. With a clean UI and comprehensive information about the item's condition, users can clearly understand and appreciate its condition.",
            id: "Aplikasi ini mengangkat tema Transparansi dan Kepercayaan untuk menghilangkan stigma bahwa semua barang bekas pasti buruk. Dengan UI bersih dan informasi yang lengkap terkait kondisi barang, pengguna dapat mengerti dan memahami kondisi barang dengan jelas."
        },
        deliverablesdesc: {
            en: "This design process resulted in a tailored solution for the secondary market ecosystem, including :",
            id: "Proses desain ini menghasilkan solusi yang disesuaikan untuk ekosistem pasar barang bekas, termasuk :"
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
        images: [
            Ganeshacup1,
            Ganeshacup2,
            Ganeshacup3,            
        ],
        description: {
            en: "A complete suite of print-ready designs for a futsal tournament, the Ganesha Cup II. The project included backdrop designs and several award banners, all maintaining a consistent visual theme to reinforce the event's identity and professionalism.",
            id: "Rangkaian lengkap desain siap cetak untuk sebuah turnamen futsal bertajuk Ganesha Cup II. Proyek ini mencakup desain backdrop dan beberapa banner penghargaan, semuanya mempertahankan tema visual yang konsisten untuk memperkuat identitas acara dan kesan profesional."
        },
        techstack: ["Photoshop", "Illustrator", "Figma"],
        role: {
            en: ["Graphic Designer"],
            id: ["Desainer Grafis"]
        },
        challenge: {
            en: "The challenge was to determine key colors that would represent the spirit of the event. These colors would be applied throughout the entire event design. Furthermore, the design had to be flexible enough to be applied to multiple print media of varying sizes.",
            id: "Tantangannya adalah menentukan warna-warna utama yang dapat merepresentasikan semangat acara tersebut, warna-warna tersebut akan diterapkan pada seluruh desain acara. Selain itu desain harus cukup fleksibel untuk diaplikasikan pada beberapa media cetak yang memiliki perbedaan ukuran."
        },        
        concept: {
            en: "This design takes its meaning from the slogan 'Empower Together: Uniting Minds, Shaping Success!' and the Ganesha Futsal team logo which produces several colors, namely sky blue, white, and yellow. The color combination reflects the harmony between youthful enthusiasm, clean sportsmanship, and the ambition to achieve the highest achievements on the field.",
            id: "Design ini mengambil makna pada slogan 'Empower Together: Uniting Minds, Shaping Success!' serta logo tim Ganesha Futsal yang menghasilkan beberapa warna yaitu biru langit, putih, dan kuning.Kombinasi warna tersebut mencerminkan harmoni antara semangat muda, sportivitas yang bersih, serta ambisi untuk meraih prestasi tertinggi di lapangan."
        },
        deliverablesdesc: {
            en: "The design package includes several high-resolution assets ready for large-format printing :",
            id: "Paket desain ini mencakup beberapa aset resolusi tinggi yang siap untuk pencetakan format besar :"
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
                "Backdrop Acara Utama",
                "Banner Penghargaan Pemain Terbaik & Top Scorer", 
                "Banner Pemenang Juara 1, 2, dan 3", 
                "Sistem Tipografi yang Tegas", 
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
        images: [
            Egoverselogo1,
            Egoverselogo2            
        ],
        description: {
            en: "Complete visual identity design for Egoverse (E-Government Services) at the Pekalongan Regency Communications and Information Office. This identity aims to bridge conventional government administration with a more efficient digital system, creating more reliable and accessible public services.",
            id: "Perancangan identitas visual lengkap untuk Egoverse (E-Government Services) di Dinkominfo Kabupaten Pekalongan. Identitas ini hadir untuk menjembatani administrasi pemerintah yang konvensional dengan sistem digital yang lebih efisien, demi menciptakan layanan publik yang lebih terpercaya dan mudah dijangkau."
        },
        techstack: ["Photoshop", "Illustrator", "Figma"],
        role: {
            en: ["Graphic Designer"],
            id: ["Desainer Grafis"]
        },
        challenge: {
            en: "The primary challenge was creating a visual identity that made the bureaucracy feel more welcoming and human. This branding reflected the transition from a manual, paper-based system to transparent digital services (e-government), while still prioritizing good governance and the technical expertise of the Communications and Information Technology Office.",
            id: "Tantangan utamanya adalah menciptakan identitas visual yang membuat birokrasi terasa lebih ramah dan manusiawi. Branding ini harus menggambarkan transisi dari sistem manual berbasis kertas ke layanan digital (E-Government) yang transparan, dengan tetap mengutamakan tata kelola pemerintahan yang baik serta keahlian teknis Dinkominfo."
        },        
        concept: {
            en: "The 'eGoverse' identity utilizes a 'Modern-Global' approach. The logo features a stylized globe icon held by symmetrical hands, symbolizing universal service, care, and the protection of public interests. A professional monochromatic blue gradient is used to project stability, technology, and transparency. The use of a bold, rounded sans-serif typeface ensures high legibility and a friendly, accessible persona for the digital government initiative.",
            id: "'eGoverse' mengangkat tema 'Modern-Global'. Logo tersebut menampilkan ikon bola dunia yang ditopang oleh tangan simetris, melambangkan layanan universal, kepedulian, dan perlindungan kepentingan publik. Gradasi biru monokromatik profesional digunakan untuk memproyeksikan stabilitas, teknologi, dan transparansi. Penggunaan tipografi sans-serif bulat yang tebal memastikan keterbacaan tinggi dan persona yang ramah serta mudah diakses untuk inisiatif pemerintah digital."
        },
        deliverablesdesc: {
            en: "This project established a unified visual foundation to support the E-Government Development Index (EGDI) goals, including:",
            id: "Proyek ini menetapkan fondasi visual terpadu untuk mendukung tujuan E-Government Development Index (EGDI), termasuk:"
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
            id: "Validasi Magang Mahasiswa"
        },
        cover: coverInternvallogo,
        images: [
            Internvallogo1,
            Internvallogo2,
            Internvallogo3
        ],
        description: {
            en: "Internship Validation logo design for the Faculty of Engineering and Computer Science (UMPP). This logo was designed for use on the Internval web application being developed. This ensures that the application is not only well-developed but also professionally developed.",
            id: "Desain logo Internval (Internship Validation) untuk Fakultas Teknik dan Ilmu Komputer (UMPP). Logo ini dirancang untuk digunakan pada aplikasi web Internval yang dikembangkan. Dengan demikian, aplikasi tersebut tidak hanya dikembangkan dengan baik tetapi juga dikembangkan secara profesional."
        },
        techstack: ["Photoshop", "Illustrator", "Figma"],
        role: {
            en: ["Graphic Designer"],
            id: ["Desainer Grafis"]
        },
        challenge: {
            en: "The challenge was to visually translate the binary nature of administrative approval (yes or no) into a sophisticated brand mark. The identity had to represent the complex 'stages' of internal submissions while maintaining a clean and modern aesthetic that aligns with the speed of digital transformation.",
            id: "Tantangannya adalah menerjemahkan sistem persetujuan administrasi yang bersifat pasti (ya atau tidak) ke dalam identitas visual yang modern. Desain ini harus mampu menggambarkan kerumitan tahapan pengajuan internal, namun tetap mempertahankan estetika bersih dan dinamis yang sejalan dengan laju transformasi digital."
        },        
        concept: {
            en: "The 'Internval' logo is inspired by the checkbox element, which represents yes or no. Visually, an empty checkbox means no, and in the case of an application, it means it has not been approved. By 'slicing' the shape into segments of varying lengths, the design visualizes the sequential stages and time-consuming nature of internal academic systems, ultimately resolved through digital efficiency.",
            id: "Logo 'Internval' terinspirasi dari elemen kotak centang (checkbox), yang merepresentasikan ya atau tidak, secara visual checkbox kosong berarti tidak, dalam hal pengajuan bisa diartikan belum disetujui. Dengan 'memotong' bentuk tersebut menjadi beberapa segmen dengan panjang yang bervariasi, desain ini memvisualisasikan tahapan berurutan dan sifat sistem akademik internal yang memakan waktu, yang akhirnya diselesaikan melalui efisiensi digital."
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
            en: "KKN Pasirkratonkramat",
            id: "KKN Pasirkratonkramat"
        },
        cover: coverKknlogo,
        images: [
            Kknlogo1,
            Kknlogo2,
            Kknlogo3
        ],
        description: {
            en: "A logo identity designed for the KKN program in PasirKratonKramat, Pekalongan City. This logo integrates local geographic conditions, cultural heritage, and historical background into a unified symbol of community service.",
            id: "Identitas logo yang dirancang untuk program KKN di PasirKratonKramat, Kota Pekalongan. Logo ini mengintegrasikan beberapa kondisi geografis lokal, warisan budaya, dan latar belakang sejarah ke dalam simbol pengabdian masyarakat yang terpadu."
        },
        techstack: ["Photoshop", "Illustrator", "Figma"],
        role: {
            en: ["Graphic Designer"],
            id: ["Desainer Grafis"]
        },
        challenge: {
            en: "The challenge was to unite five diverse local identities, ranging from geography, coastal culture, the batik industry, history, and regional icons, into one cohesive symbol. This logo must feel close to the hearts of the PasirKratonKramat residents while still appearing professional as the identity of the KKN program. By harmonizing these distinctive elements, the resulting visual identity is expected to strengthen the community's emotional bond with their region.",
            id: "Tantangannya adalah menyatukan lima identitas lokal yang beragam, mulai dari kondisi geografis, budaya pesisir, industri batik, sejarah, hingga ikon daerah, menjadi satu lambang yang utuh. Logo ini harus terasa dekat di hati warga PasirKratonKramat namun tetap terlihat profesional sebagai identitas program KKN. Dengan menyelaraskan berbagai elemen khas ini, identitas visual yang dihasilkan diharapkan dapat memperkuat ikatan emosional masyarakat terhadap daerahnya sendiri."
        },        
        concept: {
            en: "This logo uses a 'Layered Symbolism' approach, where each element tells a profound story about the KKN location. By combining organic natural forms such as coastal waves and stretches of sand, distinctive cultural patterns of Batik, and the architectural silhouette of Hoegeng Stadium, this design serves as a visual map that encapsulates the entire identity of the village. This combination not only highlights the physical beauty of the area but also weaves the historical values ​​and life of the local community into a strong visual unity.",
            id: "Logo ini menggunakan pendekatan 'Simbolisme Berlapis', di mana setiap elemennya menceritakan kisah mendalam tentang lokasi KKN. Dengan memadukan bentuk organik alam seperti gelombang pesisir dan hamparan pasir, pola budaya khas Batik, hingga siluet arsitektur Stadion Hoegeng, desain ini berfungsi sebagai peta visual yang merangkum seluruh identitas kelurahan tersebut. Kombinasi ini tidak hanya menonjolkan keindahan fisik daerahnya, tetapi juga merajut nilai sejarah dan kehidupan masyarakat setempat dalam satu kesatuan visual yang kuat."
        },
        deliverablesdesc: {
            en: "This project delivered a culturally-rich identity system to be used throughout the KKN program duration, including :",
            id: "Proyek ini menghasilkan sistem identitas yang kaya budaya untuk digunakan selama durasi program KKN, termasuk :"
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