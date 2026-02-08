import { CiChat2, CiGrid31, CiMap, CiUser } from "react-icons/ci";
import tabs from "../../data/sections"

const IconMap = {
    "Profile": CiUser,
    "Education": CiMap,
    "Projects": CiGrid31,
    "Contact": CiChat2
};

const Navigation = ({active, onChange}) => {    
    return (
        <>  
            <div className="relative flex justify-center items-center">
                <div className="fixed bottom-1 flex bg-white outline outline-offset-0 outline-gray-300/80 py-1.5 px-2 w-fit justify-center items-center mb-2 rounded-lg space-x-4">                                        
                    {tabs.map((section) => {
                        const Icon = IconMap[section.icon];
                        const isActive = active === section.key;

                        return (
                            <button
                            key={section.key}
                            onClick={() => onChange(section.key)}
                            className={`rounded-md p-1 transition
                                ${isActive ? "bg-gray-100" : "hover:bg-gray-100"}
                            `}
                            aria-label={section.title}
                            >
                            <Icon
                                className={`text-2xl ${
                                isActive ? "text-gray-600" : "text-gray-400"
                                }`}
                            />
                            </button>
                        );
                        })} 
                </div>
            </div>
        </>
    )
}

export default Navigation