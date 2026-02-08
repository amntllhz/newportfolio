import { motion } from "framer-motion"

const Subhead = (props) => {
    const { icon: Icon, children } = props
    return (
        <>
            <motion.div initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", type: "spring"}} className="flex space-x-2 justify-center items-center mb-2">
                {Icon && <Icon className="text-3xl text-gray-400 p-1 rounded-md bg-gray-100"/>}
                <p className="font-main text-lg text-gray-400">{children}</p>
            </motion.div>
        </>
    )
}

export default Subhead