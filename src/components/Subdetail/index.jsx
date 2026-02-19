import { motion } from "framer-motion"

const Subdetail = (props) => {
    const { icon: Icon, children, darkLabel = "dark:text-neutral-100", textAlign = "justify-left", padding = "p-1", iconSize = "text-2xl", labelSize = "text-lg", labelColor = "text-gray-400", fontWeight = "font-normal"} = props
    return (
        <>
            <motion.div initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", type: "spring"}} className="flex gap-1.5 justify-center items-center mb-2">
                {Icon && <Icon className={`${iconSize} text-gray-400 ${padding} rounded-md dark:text-neutral-400`}/>}
                <p className={`font-main ${fontWeight} ${labelSize} ${labelColor} ${textAlign} ${darkLabel}`}>{children}</p>
            </motion.div>
        </>
    )
}

export default Subdetail