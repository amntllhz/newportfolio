import profile from '../../assets/pp.jpg'
import { motion } from "framer-motion"

const Card = () => {
    return (      
        <>              
            <motion.div initial={{ opacity: 0 , y: 80}} animate={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", type: "spring"}} className="flex bg-white outline outline-offset-0 outline-gray-300/80 p-1 w-fit justify-center items-center rounded-xl">
                <div className="w-fit overflow-hidden rounded-lg">
                    <img src={profile} alt="" className="w-40 h-40 object-cover"/>
                </div>
            </motion.div>                                    
        </>
    )
}

export default Card