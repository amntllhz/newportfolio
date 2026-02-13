import { ScrollArea } from "@/components/ui/scroll-area"
import Experience from "../organism/Experience"
import School from "../organism/School"
import Technical from "@/organism/Technical"

const Education = () => {
    return (
        <>
            <div className="flex h-screen justify-center items-center w-full">
                <ScrollArea className="lg:px-10 xs:px-0 lg:h-100 xs:h-2/3 mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                    <div className="flex flex-col justify-center items-center">
                        <Technical></Technical>
                        <Experience></Experience>
                        <School></School>
                    </div>
                </ScrollArea>
            </div>
        </>
    )
}

export default Education