import useI18n from "../../hooks/i18n-hook"
import SuccessStory from "./SucessStory"
import AccueilContainer from "../Accueil/AccueilContainer"

export default function Success() {
    const i18n = useI18n()
    return <AccueilContainer className="py-10">
        <>
            <h2 className="title text-primary">{i18n.t("about.success.title")}</h2>
            <SuccessStory
                name={i18n.t("about.success.firms.1.name")}
                description={i18n.t("about.success.firms.1.description")}
                picture="https://cdn.pixabay.com/photo/2021/06/06/09/04/bridge-6314795_960_720.jpg"
                picturePosition="left"
            />
            <SuccessStory
                name={i18n.t("about.success.firms.1.name")}
                description={i18n.t("about.success.firms.1.description")}
                picture="https://cdn.pixabay.com/photo/2012/08/06/00/53/bridge-53769_960_720.jpg"
                picturePosition="right"
            />
        </>
    </AccueilContainer>
}