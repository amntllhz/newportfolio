import { motion } from "framer-motion"

const Subhead = (props) => {
    const { icon: Icon, children, labelSize = "text-lg", labelColor = "text-slate-900", fontWeight = "font-semibold" } = props
    return (
        <>
            <motion.div initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", type: "spring" }} className="flex space-x-2 justify-center items-center mb-2">
                {Icon && <Icon className="text-xl text-slate-900 dark:text-white" />}
                <p className={`font-main ${fontWeight} ${labelSize} ${labelColor} dark:text-white`}>{children}</p>
            </motion.div>
        </>
    )
}

export default Subhead