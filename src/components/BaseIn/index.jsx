import { CiLocationOn } from "react-icons/ci"
import { useTranslation } from "react-i18next";

const BaseIn = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className="flex w-fit justify-center items-center gap-1.5">
                <CiLocationOn className="size-2.5 text-slate-600 dark:text-white" />
                <p className="text-[11px] font-main text-slate-600 dark:text-white">{t("hero.basein")}</p>
            </div>
        </>
    )
}

export default BaseIn;