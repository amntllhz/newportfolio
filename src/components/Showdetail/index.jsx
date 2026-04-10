import { motion } from "framer-motion"
import { useState, useEffect, useLayoutEffect } from "react"
import Subdetail from "../Subdetail"
import { CiCircleChevLeft, CiStar } from "react-icons/ci"
import Techbadge from "../Techbadge"
import { PiChartPolarLight, PiUserSwitchLight, PiSirenLight, PiPolygonLight, PiPenNibLight } from "react-icons/pi"
import { BsCaretRight } from "react-icons/bs"
import { Carousel, CarouselContent, CarouselItem,  } from "@/components/ui/carousel"
import Badge from "../Badge"
import { useTranslation } from "react-i18next"
import { Skeleton } from "../ui/skeleton"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // Memberikan jeda 0.2 detik antar elemen anak
      staggerChildren: 0.1, 
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100 } 
  },
};

const Showdetail = ({project, onBack, scrollRef}) => {
    // State untuk melacak api carousel embla
    const [api, setApi] = useState(null)
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    // Update state saat slide berubah
    useEffect(() => {
        if (!api) return

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap())

        api.on("select", () => {
        setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    // Reset scroll saat project berubah
    useLayoutEffect(() => {
        if (scrollRef && scrollRef.current) {
            const viewport = scrollRef.current.querySelector('[data-radix-scroll-area-viewport]');
            if (viewport) {
                // 'instant' memastikan tidak ada animasi scroll yang terlihat
                viewport.scrollTo({ top: 0, behavior: 'instant' });
            }
        }
    }, []);

    const images = project.images || [project.cover]

    const [loadedStates, setLoadedStates] = useState(() => 
        new Array(images.length).fill(false)
    )
    
    const handleImageLoad = (index) => {
        setLoadedStates(prev => {
            const updated = [...prev]
            updated[index] = true
            return updated
        })
    }

    const isDev = project.category === "dev"
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language.split('-')[0];
    
    return (
        <>  
                <motion.div                      
                    variants={containerVariants} 
                    initial="hidden" 
                    animate="visible"                                         
                    exit="hidden"
                    className="lg:max-w-xl xs:max-w-full w-full flex flex-col gap-4 xs:mb-2">                
                        
                        {/* Tombol kembali */}
                        <motion.button onClick={onBack} className="text-left w-fit flex items-center gap-1 hover:gap-1.5 transform ease-in-out duration-300 cursor-pointer">
                            <CiCircleChevLeft className="text-2xl text-gray-400 p-1 rounded-md dark:text-neutral-100" />
                            <p className="font-main text-sm text-gray-500/80 dark:text-neutral-100">{t("detail.back")}</p>                        
                        </motion.button>

                        {/* Gambar */}
                        <motion.div variants={itemVariants} className="relative w-full">
                            {/* SetApi digunakan untuk menangkap instance carousel */}
                            <Carousel setApi={setApi} opts={{ align: "start" }} className="w-full">
                                <CarouselContent className="ml-0 gap-4">
                                    {images.map((img, index) => (
                                    <CarouselItem key={index} className="pl-0 lg:basis-80 xs:basis-full">
                                        
                                            {/* ✅ BARU: wrapper dengan rasio eksak + relative */}
                                            <div className="relative aspect-1616/976 w-full rounded-xl overflow-hidden border border-gray-100 dark:border-neutral-900">
                                                
                                                {/* ✅ BARU: skeleton per gambar */}
                                                {!loadedStates[index] && (
                                                    <Skeleton className="absolute inset-0 w-full h-full rounded-xl z-10" />
                                                )}

                                                {/* ✅ BERUBAH: tambah opacity transition + onLoad, hapus loading attribute */}
                                                <img 
                                                    src={img}
                                                    className={`absolute inset-0 object-cover w-full h-full rounded-xl border border-gray-100 dark:border-neutral-900 transition-opacity duration-700 ${
                                                        loadedStates[index] ? "opacity-100" : "opacity-0"
                                                    }`}
                                                    onLoad={() => handleImageLoad(index)}
                                                />
                                            </div>
                                        
                                    </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>

                            {/* DOT INDICATORS - Di pojok kiri bawah gambar */}
                            <div className="flex gap-1.5 mt-3 px-1">
                                {Array.from({ length: count }).map((_, i) => (
                                    <button
                                    key={i}
                                    onClick={() => api?.scrollTo(i)}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${
                                        current === i 
                                        ? "w-6 bg-gray-300 dark:bg-neutral-400" // Dot aktif lebih panjang dan gelap
                                        : "w-1.5 bg-gray-300 hover:bg-gray-400 dark:bg-neutral-400 dark:hover:bg-neutral-500" // Dot tidak aktif
                                    }`}
                                    aria-label={`Go to slide ${i + 1}`}
                                    />
                                ))}
                            </div>
                        </motion.div>
                        
                        {/* Detail */}
                        <motion.div variants={containerVariants} className="flex flex-col gap-2 max-w-full w-full ">

                            {/* Nama Aplikasi */}
                            <motion.div variants={itemVariants} className="flex">
                                <p className="font-main font-semibold text-sm text-gray-900 dark:text-neutral-100">{project.title}</p>
                                <p className="font-main font-semibold text-sm text-gray-900 dark:text-neutral-100 mx-2">•</p>
                                <p className="font-main font-semibold text-sm text-gray-900 dark:text-neutral-100">{project.subtitle[currentLang]}</p>
                            </motion.div>

                            {/* Deskripsi */}
                            <motion.p variants={itemVariants} className="font-main text-xs text-justify text-gray-400 dark:text-neutral-400 leading-relaxed">
                                {project.description[currentLang]}
                            </motion.p>  

                            {/* Techstack */}
                            <motion.div variants={containerVariants} className="flex justify-start items-center gap-1.5">
                                <p className="font-main text-xs text-gray-400 dark:text-neutral-400">{isDev ? t("detail.buildWith") : t("detail.madeUsing") }</p>
                                <Techbadge roundedSize="rounded-sm" iconSize="text-2xl" items={project.techstack} variants={itemVariants}></Techbadge>
                            </motion.div> 

                            {/* Problem Statement */}
                            <motion.div variants={itemVariants} className="flex flex-col gap-0.5 mt-4 justify-left items-start">
                                <Subdetail fontWeight="font-medium" labelColor="text-gray-900" labelSize="text-sm" icon={isDev ? PiSirenLight : PiPolygonLight}>{isDev ? t("detail.problem") : t("detail.challenge")}</Subdetail>                
                                <p className="font-main text-xs text-justify text-gray-400 dark:text-neutral-400 leading-relaxed mb-2">
                                    {isDev ? project.problem[currentLang] : project.challenge[currentLang]}
                                </p>  

                                {isDev && project.subproblem && (
                                    <div className="flex flex-col items-start">
                                        {project.subproblem[currentLang].map((subproblem, index) => {
                                            return(                                        
                                                <Subdetail key={index} darkLabel="dark:text-neutral-400" textAlign="text-justify" padding="py-0 pr-2.5" fontWeight="font-normal" labelColor="text-gray-400" iconSize="text-xl" labelSize="text-xs" icon={BsCaretRight}>{subproblem}</Subdetail>
                                            )
                                        })}
                                    </div>
                                )}
                            </motion.div>

                            {/* Problem Resolution */}
                            <motion.div variants={itemVariants} className="flex flex-col gap-0.5 mt-4 justify-left items-start">
                                <Subdetail fontWeight="font-medium" labelColor="text-gray-900" labelSize="text-sm" icon={isDev ? PiChartPolarLight : PiPenNibLight}>{isDev ? t("detail.resolution") : t("detail.concept")}</Subdetail>                
                                <p className="font-main text-xs text-justify text-gray-400 leading-relaxed mb-2 dark:text-neutral-400">
                                    {isDev ? project.solution[currentLang] : project.concept[currentLang]}
                                </p>                                  
                            </motion.div>

                            {/* Key Features */}
                            <motion.div variants={itemVariants} className="flex flex-col gap-0.5 mt-4 justify-left items-start">
                                <Subdetail fontWeight="font-medium" labelColor="text-gray-900" labelSize="text-sm" icon={CiStar}>{isDev ? t("detail.result") : t("detail.deliverables")}</Subdetail>                
                                <p className="font-main text-xs text-justify text-gray-400 leading-relaxed mb-2 dark:text-neutral-400">
                                    {isDev ? project.keyfeaturesdesc[currentLang] : project.deliverablesdesc[currentLang]}
                                </p>  
                                <div className="flex flex-col items-start">
                                    {(isDev ? project.keyfeatures[currentLang] : project.deliverables[currentLang])?.map((keyfeatures, index) => {
                                        return(                                        
                                            <Subdetail key={index} darkLabel="dark:text-neutral-400" textAlign="text-justify" padding="py-0 pr-2.5" fontWeight="font-normal" labelColor="text-gray-400" iconSize="text-xl" labelSize="text-xs" icon={BsCaretRight}>{keyfeatures}</Subdetail>
                                        )
                                    })}
                                </div>
                            </motion.div>

                            {/* Informasi Tambahan */}
                            <motion.div variants={itemVariants} className="flex flex-col gap-0.5 mt-4 justify-left items-start">
                                <Subdetail fontWeight="font-medium" labelColor="text-gray-900" labelSize="text-sm" icon={PiUserSwitchLight}>{t("detail.role")}</Subdetail>                

                                <motion.div variants={itemVariants} className="flex items-start">                                      
                                    <div className="flex flex-wrap gap-2 items-start">
                                        {project.role[currentLang].map((role, index) => {
                                            return(                                        
                                                <Badge key={index} variants={itemVariants}>{role}</Badge>
                                            )
                                        })}
                                    </div>
                                </motion.div>
                            </motion.div>

                        </motion.div>  

                </motion.div>                
                     
        </>
    )
}

export default Showdetail