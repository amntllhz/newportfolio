import { ScrollArea } from "@/components/ui/scroll-area"
import Experience from "../organism/Experience"
import School from "../organism/School"

const Education = () => {
    return (
        <>
            <div className="flex h-screen justify-center items-center">
                <ScrollArea className=" px-10 h-100 mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                    <Experience></Experience>
                    <School></School>
                </ScrollArea>
            </div>
        </>
    )
}

export default Education