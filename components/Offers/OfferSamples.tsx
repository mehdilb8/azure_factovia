import useI18n from "../../hooks/i18n-hook"
import SuccessStory from "../SucessStory"
import AccueilContainer from "../Accueil/AccueilContainer"

export default function OffersSample() {
    const i18n = useI18n()
    return <AccueilContainer className="py-10">
        <>
            <h2 className="title text-primary">{i18n.t("offers.samples.title")}</h2>
            <SuccessStory
                name={i18n.t("offers.samples.offers.1.name")}
                description={i18n.t("offers.samples.offers.1.description")}
                picture="https://stfactowebprdsrcfrce.blob.core.windows.net/factoviaweb-public-resources/offerSample1.jpg"
                picturePosition="right"
                list={i18n.t("offers.samples.offers.1.list").split(";")}
            />
            <SuccessStory
                name={i18n.t("offers.samples.offers.2.name")}
                description={i18n.t("offers.samples.offers.2.description")}
                picture="https://stfactowebprdsrcfrce.blob.core.windows.net/factoviaweb-public-resources/offerSample2.jpg"
                picturePosition="left"
                list={i18n.t("offers.samples.offers.2.list").split(";")}
            />
            <SuccessStory
                name={i18n.t("offers.samples.offers.3.name")}
                description={i18n.t("offers.samples.offers.3.description")}
                picture="https://stfactowebprdsrcfrce.blob.core.windows.net/factoviaweb-public-resources/offerSample3.jpg"
                picturePosition="right"
                list={i18n.t("offers.samples.offers.3.list").split(";")}
            />
        </>
    </AccueilContainer>
}