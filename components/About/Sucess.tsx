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
                intro={i18n.t("about.success.firms.1.intro")}
                description={i18n.t("about.success.firms.1.content")}
                picture="https://stfactowebprdsrcfrce.blob.core.windows.net/factoviaweb-public-resources/lpgThumb.jpg"
                picturePosition="right"
                pictureInParagraph="https://stfactowebprdsrcfrce.blob.core.windows.net/factoviaweb-public-resources/remiPeletier.jpg"
            />
            <SuccessStory
                name={i18n.t("about.success.firms.2.name")}
                intro={i18n.t("about.success.firms.2.intro")}
                description={i18n.t("about.success.firms.2.content")}
                picture="https://stfactowebprdsrcfrce.blob.core.windows.net/factoviaweb-public-resources/azdThumb.jpg"
                picturePosition="left"
            />
            <SuccessStory
                name={i18n.t("about.success.firms.3.name")}
                intro={i18n.t("about.success.firms.3.intro")}
                description={i18n.t("about.success.firms.3.content")}
                picture="https://stfactowebprdsrcfrce.blob.core.windows.net/factoviaweb-public-resources/vaccinThumb.jpg"
                picturePosition="right"
            />
            <SuccessStory
                name={i18n.t("about.success.firms.4.name")}
                intro={i18n.t("about.success.firms.4.intro")}
                description={i18n.t("about.success.firms.4.content")}
                picture="https://stfactowebprdsrcfrce.blob.core.windows.net/factoviaweb-public-resources/cetimThumb.jpg"
                picturePosition="left"
            />
        </>
    </AccueilContainer>
}