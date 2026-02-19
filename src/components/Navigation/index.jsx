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
                <div className="
                    fixed bottom-1 flex 
                    bg-gray-100 dark:bg-neutral-900
                    outline outline-offset-0 
                    outline-gray-100 dark:outline-neutral-900
                    py-1.5 px-1.5 w-fit 
                    justify-center items-center mb-2 
                    rounded-lg space-x-4
                    transition-colors duration-300
                ">
                    {tabs.map((section) => {
                        const Icon = IconMap[section.icon];
                        const isActive = active === section.key;

                        return (
                            <button
                            key={section.key}
                            onClick={() => onChange(section.key)}
                            className={`
                                rounded-sm cursor-pointer p-1 transition-colors
                                ${isActive 
                                ? "bg-gray-200 dark:bg-neutral-800" 
                                : "hover:bg-gray-100 dark:hover:bg-neutral-800"}
                            `}
                            aria-label={section.title}
                            >
                            <Icon
                                className={`text-2xl transition-colors ${
                                isActive
                                    ? "text-gray-600 dark:text-neutral-200"
                                    : "text-gray-400 dark:text-neutral-500"
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