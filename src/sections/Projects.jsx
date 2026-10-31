import Showcase from "@/organism/Showcase"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useRef } from "react"

const Projects = () => {
    const scrollAreaRef = useRef(null);
    return (
        <>
            <div className="w-full lg:h-screen flex gap-6 lg:items-center lg:justify-center">
                <ScrollArea ref={scrollAreaRef} className="lg:px-10 lg:max-w-2xl xs:w-full xs:px-4 lg:h-100 xs:h-dvh">
                    <Showcase scrollRef={scrollAreaRef}></Showcase>
                </ScrollArea>
            </div>
        </>
    )
}

export default Projects