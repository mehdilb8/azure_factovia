import useI18n from "../../hooks/i18n-hook"
import AccueilContainer from "../Accueil/AccueilContainer"

export default function OfferTraining() {
    const i18n = useI18n()
    return <section className="bg-secondary py-12">
        <AccueilContainer>
            <>
                <h2 className="title text-primaryYellow">
                    <span>{i18n.t("offers.training.title.1")} </span>
                    <span className="text-primaryWhite">{i18n.t("offers.training.title.2")} </span>
                    <span>{i18n.t("offers.training.title.3")}</span>
                </h2>
                <article>
                    <p className="text-primaryWhite">
                        {i18n.t("offers.training.content")}
                    </p>
                </article>
            </>
        </AccueilContainer>
    </section>
}