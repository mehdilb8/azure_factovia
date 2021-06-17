import AccueilContainer from "./AccueilContainer"
import FourthSectionHero from "./FourthSectionHero"
import useI18n from "../../hooks/i18n-hook"

export default function FourthSection() {
    const i18 = useI18n()
    return <div className="py-24">
        <AccueilContainer>
            <div className="bg-primaryWhite flex flex-wrap shadow-lg py-12 px-8 md:px-16 space-y-6 md:space-y-0">
                <div className="w-full md:w-1/3">
                    <FourthSectionHero
                        content={i18.t("fourthSection.comments.1.content")}
                        authorName={i18.t("fourthSection.comments.1.author.name")}
                        authorDescription={i18.t("fourthSection.comments.1.author.description")}
                        img="https://stmediarassetsfrcerec.blob.core.windows.net/other/factovia/web/fouadBenris.jpg"
                        authorLogo="https://stmediarassetsfrcerec.blob.core.windows.net/other/factovia/web/hp_enterprise_logo.jpg"
                    />
                </div>
                <div className="w-full md:w-1/3">
                    <FourthSectionHero
                        content={i18.t("fourthSection.comments.2.content")}
                        authorName={i18.t("fourthSection.comments.2.author.name")}
                        authorDescription={i18.t("fourthSection.comments.2.author.description")}
                        img="https://stmediarassetsfrcerec.blob.core.windows.net/other/factovia/web/stephanePotier.jpg"
                        authorLogo="https://stmediarassetsfrcerec.blob.core.windows.net/other/factovia/web/b&r.jpg"
                    />
                </div>
                <div className="w-full md:w-1/3">
                    <FourthSectionHero
                        content={i18.t("fourthSection.comments.3.content")}
                        authorName={i18.t("fourthSection.comments.3.author.name")}
                        authorDescription={i18.t("fourthSection.comments.3.author.description")}
                        img="https://stmediarassetsfrcerec.blob.core.windows.net/other/factovia/web/MarciaPaglia.jpg"
                        authorLogo="https://stmediarassetsfrcerec.blob.core.windows.net/other/factovia/web/SAP-Logo.png"
                    />
                </div>
            </div>
        </AccueilContainer>
    </div>
}