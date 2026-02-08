
const Badge = (props) => {
    const { children } = props
    return (
        <>
            <div className="relative rounded-full bg-gray-50 ring ring-gray-200 py-0.5 px-3 w-fit">
                <p className="font-secondary text-xs font-semibold">{children}</p>
            </div>
        </>
    )
}

export default Badge