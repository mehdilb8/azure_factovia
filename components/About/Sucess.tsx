import useI18n from "../../hooks/i18n-hook"
import SuccessStory from "../SucessStory"
import AccueilContainer from "../Accueil/AccueilContainer"

export default function Success() {
    const i18n = useI18n()
    return <AccueilContainer className="py-10">
        <>
            <h2 className="title text-primary">{i18n.t("about.success.title")}</h2>
            <SuccessStory
                name={i18n.t("about.success.firms.1.name")}
                description={i18n.t("about.success.firms.1.content")}
                picture="https://stmediarassetsfrcerec.blob.core.windows.net/other/factovia/web/lpgThumb.jpg"
                picturePosition="right"
                pictureInParagraph="https://stmediarassetsfrcerec.blob.core.windows.net/other/factovia/web/remiPeletier.jpg"
            />
            <SuccessStory
                name={i18n.t("about.success.firms.2.name")}
                description={i18n.t("about.success.firms.2.content")}
                picture="https://stmediarassetsfrcerec.blob.core.windows.net/other/factovia/web/azdThumb.jpg"
                picturePosition="left"
            />
            <SuccessStory
                name={i18n.t("about.success.firms.3.name")}
                description={i18n.t("about.success.firms.3.content")}
                picture="https://stmediarassetsfrcerec.blob.core.windows.net/other/factovia/web/vaccinThumb.jpg"
                picturePosition="right"
            />
            <SuccessStory
                name={i18n.t("about.success.firms.4.name")}
                description={i18n.t("about.success.firms.4.content")}
                picture="https://stmediarassetsfrcerec.blob.core.windows.net/other/factovia/web/cetimThumb.jpg"
                picturePosition="left"
            />
        </>
    </AccueilContainer>
}