import profile from '../../assets/profile.webp'
import { motion } from "framer-motion"
import { useState } from "react"
import { Skeleton } from "../ui/skeleton"

const Card = ({variants}) => {
    const [isLoaded, setIsLoaded] = useState(false);    

    return (      
        <>              
            <motion.div variants={variants} className="flex bg-white outline outline-offset-0 outline-gray-300/80 p-1 w-fit justify-center items-center rounded-xl dark:bg-neutral-950 dark:outline-neutral-800">
                
                {/* Tambahkan relative + ukuran eksplisit di sini */}
                <div className="relative w-40 h-40 overflow-hidden rounded-lg">
                    
                    {/* Skeleton overlay, hanya muncul saat belum loaded */}
                    {!isLoaded && (
                        <Skeleton className="absolute inset-0 w-full h-full rounded-lg z-10" />
                    )}

                    <img 
                        src={profile} 
                        alt="Profile" 
                        fetchPriority="high"
                        className={`w-40 h-40 object-cover rounded-lg transition-opacity pointer-events-none duration-700 ${
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