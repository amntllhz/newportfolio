import profile from '../../assets/profile.webp'
import { motion } from "framer-motion"
import { useState } from "react"
import { Skeleton } from "../ui/skeleton"

const Card = ({variants}) => {
    const [isLoaded, setIsLoaded] = useState(false);    

    return (      
        <>              
            <motion.div variants={variants} className="flex bg-white outline outline-offset-0 outline-gray-300/80 p-1 w-fit justify-center items-center rounded-xl dark:bg-neutral-950 dark:outline-neutral-800">
                <div className="w-fit overflow-hidden rounded-lg">
                    {/* 2. Skeleton hanya muncul jika isLoaded FALSE */}
                    {!isLoaded && (
                        <Skeleton className="absolute inset-0 w-full h-full rounded-lg" />
                    )}

                    {/* 3. Gambar akan memicu onLoad saat benar-benar siap */}
                    <img 
                        src={profile} 
                        alt="Profile" 
                        fetchPriority="high" // Memberitahu browser ini gambar penting
                        className={`w-40 h-40 object-cover rounded-lg transition-opacity duration-700 ${
                            isLoaded ? "opacity-100" : "opacity-0"
                        }`}
                        onLoad={() => setIsLoaded(true)}
                    />
                </div>
            </motion.div>                                    
        </>
    )
}

export default Card