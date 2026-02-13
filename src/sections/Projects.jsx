import Showcase from "@/organism/Showcase"
import { ScrollArea } from "@/components/ui/scroll-area"

const Projects = () => {    
    return (
        <>
            <div className="w-full h-screen flex gap-6 items-center justify-center">
                <ScrollArea className="lg:px-10 lg:max-w-2xl xs:w-full xs:px-4 lg:h-100 xs:h-2/3 mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">                                        
                    <Showcase></Showcase>                                        
                </ScrollArea>
            </div>
        </>
    )
}

export default Projects