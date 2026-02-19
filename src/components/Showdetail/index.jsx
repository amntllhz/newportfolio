import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Subdetail from "../Subdetail"
import { CiCircleChevLeft, CiStar } from "react-icons/ci"
import Techbadge from "../Techbadge"
import { PiChartPolarLight, PiUserSwitchLight, PiSealWarningLight, PiSirenLight } from "react-icons/pi"
import { BsCaretRight } from "react-icons/bs"
import { Carousel, CarouselContent, CarouselItem,  } from "@/components/ui/carousel"
import Badge from "../Badge"

const Showdetail = ({project, onBack, variants}) => {
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

    const images = project.images || [project.cover]
    
    return (
        <>  
                <motion.div                      
                    variants={variants}                                           
                    className="lg:max-w-xl xs:max-w-full w-full flex flex-col gap-4">                
                        
                        {/* Tombol kembali */}
                        <motion.button onClick={onBack} className="text-left w-fit flex items-center gap-1 hover:gap-1.5 transform ease-in-out duration-300 cursor-pointer">
                            <CiCircleChevLeft className="text-2xl text-gray-400 p-1 rounded-md dark:text-neutral-100" />
                            <p className="font-main text-sm text-gray-500/80 dark:text-neutral-100">Back</p>                        
                        </motion.button>

                        {/* Gambar */}
                        <motion.div variants={variants} className="relative w-full">
                            {/* SetApi digunakan untuk menangkap instance carousel */}
                            <Carousel setApi={setApi} opts={{ align: "start" }} className="w-full">
                                <CarouselContent className="ml-0">
                                    {images.map((img, index) => (
                                    <CarouselItem key={index} className="pl-0 lg:basis-80 xs:basis-full">
                                        <div className="pr-4">
                                            <img src={img} className="lg:w-80 xs:w-full object-cover rounded-xl border border-gray-100 dark:border-neutral-700" />
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
                        <motion.div variants={variants} className="flex flex-col gap-2 max-w-full w-full ">

                            {/* Nama Aplikasi */}
                            <div className="flex">
                                <p className="font-main font-semibold text-sm text-gray-900 dark:text-neutral-100">{project.title}</p>
                                <p className="font-main font-semibold text-sm text-gray-900 dark:text-neutral-100 mx-2">•</p>
                                <p className="font-main font-semibold text-sm text-gray-900 dark:text-neutral-100">{project.subtitle}</p>
                            </div>

                            {/* Deskripsi */}
                            <p className="font-main text-xs text-justify text-gray-400 dark:text-neutral-400 leading-relaxed">
                                {project.description}
                            </p>  

                            {/* Techstack */}
                            <motion.div className="flex justify-start items-center gap-1.5">
                                <p className="font-main text-xs text-gray-400 dark:text-neutral-400">Build with : </p>
                                <Techbadge roundedSize="rounded-sm" iconSize="text-2xl" items={project.techstack} variants={variants}></Techbadge>
                            </motion.div> 

                            {/* Problem Statement */}
                            <motion.div className="flex flex-col gap-0.5 mt-4 justify-left items-start">
                                <Subdetail fontWeight="font-medium" labelColor="text-gray-900" labelSize="text-sm" icon={PiSirenLight}>Problem Statement</Subdetail>                
                                <p className="font-main text-xs text-justify text-gray-400 dark:text-neutral-400 leading-relaxed mb-2">
                                    {project.problem}
                                </p>  
                                <div className="flex flex-col items-start">
                                    {project.subproblem.map((subproblem, index) => {
                                        return(                                        
                                            <Subdetail key={index} darkLabel="dark:text-neutral-400" textAlign="text-justify" padding="py-0 pr-2.5" fontWeight="font-normal" labelColor="text-gray-400" iconSize="text-xl" labelSize="text-xs" icon={BsCaretRight}>{subproblem}</Subdetail>
                                        )
                                    })}
                                </div>
                            </motion.div>

                            {/* Problem Resolution */}
                            <motion.div className="flex flex-col gap-0.5 mt-4 justify-left items-start">
                                <Subdetail fontWeight="font-medium" labelColor="text-gray-900" labelSize="text-sm" icon={PiChartPolarLight}>Problem Resolution</Subdetail>                
                                <p className="font-main text-xs text-justify text-gray-400 leading-relaxed mb-2 dark:text-neutral-400">
                                    {project.solution}
                                </p>                                  
                            </motion.div>

                            {/* Key Features */}
                            <motion.div className="flex flex-col gap-0.5 mt-4 justify-left items-start">
                                <Subdetail fontWeight="font-medium" labelColor="text-gray-900" labelSize="text-sm" icon={CiStar}>Development Result</Subdetail>                
                                <p className="font-main text-xs text-justify text-gray-400 leading-relaxed mb-2 dark:text-neutral-400">
                                    {project.keyfeaturesdesc}
                                </p>  
                                <div className="flex flex-col items-start">
                                    {project.keyfeatures.map((keyfeatures, index) => {
                                        return(                                        
                                            <Subdetail key={index} darkLabel="dark:text-neutral-400" textAlign="text-justify" padding="py-0 pr-2.5" fontWeight="font-normal" labelColor="text-gray-400" iconSize="text-xl" labelSize="text-xs" icon={BsCaretRight}>{keyfeatures}</Subdetail>
                                        )
                                    })}
                                </div>
                            </motion.div>

                            {/* Informasi Tambahan */}
                            <motion.div className="flex flex-col gap-0.5 mt-4 justify-left items-start">
                                <Subdetail fontWeight="font-medium" labelColor="text-gray-900" labelSize="text-sm" icon={PiUserSwitchLight}>Role and Responsibilities</Subdetail>                

                                <motion.div className="flex items-start">                                      
                                    <div className="flex flex-wrap gap-2 items-start">
                                        {project.role.map((role, index) => {
                                            return(                                        
                                                <Badge key={index} variants={variants}>{role}</Badge>
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