import { motion } from "framer-motion"

const Badge = (props) => {
    const { children, variants } = props
    return (
        <>
            <motion.div initial="hidden" animate="visible" variants={variants} className="relative rounded-sm outline outline-offset-0 outline-gray-300/80 py-0.5 px-3 w-fit">
                <p className="font-main text-gray-400 text-xs font-normal">{children}</p>
            </motion.div>
        </>
    )
}

export default Badge