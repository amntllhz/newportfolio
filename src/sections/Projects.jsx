import Showcase from "@/organism/Showcase"
import { ScrollArea } from "@/components/ui/scroll-area"

const Projects = () => {    
    return (
        <>
            <div className="w-full h-screen flex gap-6 items-center justify-center">
                <ScrollArea className=" px-10 h-100 mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                    <Showcase></Showcase>
                </ScrollArea>
            </div>
        </>
    )
}

export default Projects