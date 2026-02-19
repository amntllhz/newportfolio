import profile from '../../assets/school/sma.png'
import { motion } from "framer-motion"

const Card = ({variants}) => {
    return (      
        <>              
            <motion.div variants={variants} className="flex bg-white outline outline-offset-0 outline-gray-300/80 p-1 w-fit justify-center items-center rounded-xl dark:bg-neutral-950 dark:outline-neutral-800">
                <div className="w-fit overflow-hidden rounded-lg">
                    <img src={profile} alt="" className="w-40 h-40 object-cover"/>
                </div>
            </motion.div>                                    
        </>
    )
}

export default Card