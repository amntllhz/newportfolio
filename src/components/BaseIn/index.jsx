import { CiLocationOn } from "react-icons/ci"
import { useTranslation } from "react-i18next";

const BaseIn = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className="flex w-fit justify-center items-center gap-1.5">
                <CiLocationOn className="size-3 text-gray-500/80 dark:text-yellow-500" />
                <p className="text-xs font-main text-gray-500/80 dark:text-yellow-500">{t("hero.basein")}</p>
            </div>
        </>
    )
}

export default BaseIn;