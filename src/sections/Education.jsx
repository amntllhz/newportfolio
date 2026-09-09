import { ScrollArea } from "@/components/ui/scroll-area"
import Experience from "../organism/Experience"
import School from "../organism/School"

const Education = () => {
    return (
        <>
            <div className="flex lg:h-screen lg:justify-center lg:items-center w-full">
                <ScrollArea className="lg:px-10 xs:px-0 lg:h-100 w-full lg:max-w-xl xs:max-w-full xs:h-dvh lg:mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] mask-[linear-gradient(to_bottom,black_0%,black_90%,transparent)]">
                    <div className="flex flex-col justify-center items-center w-full">
                        <Experience></Experience>
                        <School></School>
                    </div>
                </ScrollArea>
            </div>
        </>
    )
}

export default Education