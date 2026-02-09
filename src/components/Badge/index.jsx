
const Badge = (props) => {
    const { children } = props
    return (
        <>
            <div className="relative rounded-sm outline outline-offset-0 outline-gray-300/80 py-0.5 px-3 w-fit">
                <p className="font-main text-gray-400 text-xs font-normal">{children}</p>
            </div>
        </>
    )
}

export default Badge