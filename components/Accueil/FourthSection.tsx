import AccueilContainer from "./AccueilContainer"
import FourthSectionHero from "./FourthSectionHero"
import useI18n from "../../hooks/i18n-hook"

export default function FourthSection() {
    const i18 = useI18n()
    return <div className="py-24">
        <AccueilContainer>
            <div className="bg-primaryWhite  shadow-lg py-6 px-8 lg:px-16">
                <h2 className="text-primary text-4xl font-bold mb-12">{i18.t('fourthSection.title')}</h2>
                <div className="flex flex-wrap space-y-6 lg:space-y-0">
                    <div className="w-full lg:w-1/3">
                        <FourthSectionHero
                            content={i18.t("fourthSection.comments.1.content")}
                            authorName={i18.t("fourthSection.comments.1.author.name")}
                            authorDescription={i18.t("fourthSection.comments.1.author.description")}
                            img="https://blobfactoviacommonsrc.blob.core.windows.net/assets/factovia/web/fouadBenris.jpg"
                            authorLogo="https://blobfactoviacommonsrc.blob.core.windows.net/assets/factovia/web/hp_enterprise_logo.jpg"
                            firmName="Hewlett Packard Logo"
                        />
                    </div>
                    <div className="w-full lg:w-1/3">
                        <FourthSectionHero
                            content={i18.t("fourthSection.comments.2.content")}
                            authorName={i18.t("fourthSection.comments.2.author.name")}
                            authorDescription={i18.t("fourthSection.comments.2.author.description")}
                            img="https://blobfactoviacommonsrc.blob.core.windows.net/assets/factovia/web/stephanePotier.jpg"
                            authorLogo="https://blobfactoviacommonsrc.blob.core.windows.net/assets/factovia/web/b&r.jpg"
                            firmName="B&R Logo"
                        />
                    </div>
                    <div className="w-full lg:w-1/3">
                        <FourthSectionHero
                            content={i18.t("fourthSection.comments.3.content")}
                            authorName={i18.t("fourthSection.comments.3.author.name")}
                            authorDescription={i18.t("fourthSection.comments.3.author.description")}
                            img="https://blobfactoviacommonsrc.blob.core.windows.net/assets/factovia/web/MarciaPaglia.jpg"
                            authorLogo="https://blobfactoviacommonsrc.blob.core.windows.net/assets/factovia/web/SAP-Logo.png"
                            firmName="SAP Logo"
                        />
                    </div>
                </div>
            </div>
        </AccueilContainer>
    </div>
}