import { ScrollArea } from "@/components/ui/scroll-area"
import Technical from "@/organism/technical"

const Skill = () => {
    return (
        <>
            <div className="flex lg:h-screen lg:justify-center lg:items-center w-full">
                <ScrollArea className="lg:px-10 xs:px-0 lg:h-100 xs:h-dvh lg:mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] mask-[linear-gradient(to_bottom,black_0%,black_90%,transparent)]">
                    <div className="flex flex-col justify-center items-center">
                        <Technical></Technical>
                    </div>
                </ScrollArea>
            </div>
        </>
    )
}

export default Skill