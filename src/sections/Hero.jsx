import Card from "../components/Card"
import { motion } from "framer-motion"

const Hero = () => {
    return (
        <>
            <div className="w-full h-screen flex gap-6 items-center justify-center">
                <Card></Card> 
                <motion.div initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", delay: 0.1, type: "spring"}} className="flex flex-col gap-2 max-w-lg">
                    <h1 className="font-main font-semibold text-xl text-gray-900">Halo, I'm M. Aldi Amanatullah Syahputra,</h1> 
                    <p className="font-main text-xs text-gray-400 text-justify leading-normal">
                        A passionate individual with a deep enthusiasm for visual technology and modern design. As a 
                        <span className=" font-semibold text-gray-500/80"> Front-end Web Developer, Graphic Designer,</span> and <span className="font-semibold text-gray-500/80">UI Designer</span>, I focus on creating digital products that are not only functional but also visually balanced and aesthetically pleasing.
                    </p>
                    <p className="font-main text-xs text-gray-400 text-justify leading-normal">
                        I always strive to deliver modern interfaces with seamless user experience, while keeping innovation and usability in harmony. I value teamwork highly, i believe collaboration creates more efficient and effective solutions.
                    </p>
                    
                </motion.div>
            </div>
        </>
    )
}

export default Hero