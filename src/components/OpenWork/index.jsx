
const OpenWork = () => {
    return (
        <>
            <div className="flex w-fit justify-center items-center gap-2">
                <span className="relative flex size-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gray-500/80 dark:bg-yellow-500 opacity-75"></span>
                    <span className="relative inline-flex size-1.5 rounded-full bg-gray-500/80 dark:bg-yellow-500"></span>
                </span>
                <p className="text-xs font-main text-gray-500/80 dark:text-yellow-500">Open to Work</p>
            </div>
        </>
    )
}

export default OpenWork