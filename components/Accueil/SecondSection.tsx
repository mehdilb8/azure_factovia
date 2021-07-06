import AccueilContainer from './AccueilContainer'
import SecondSectionCard from './SecondSectionCard'
import SecondSectionCardVideo from './SecondSectionCardVideo'
import useI18n from "../../hooks/i18n-hook"
import OnSeeElement from '../../elements/LazyElement'

export default function SecondSection() {
    const i18 = useI18n()

    return <AccueilContainer>
        <div className="py-12">
            <div className="mb-6">
                <h2 className="text-primaryDark text-4xl font-bold">{i18.t('seconSection.title')}</h2>
            </div>
            <div className="py-6">
                <div className="mb-12">
                    <SecondSectionCard
                        title={i18.t('seconSection.cards.problem.title')}
                        content={i18.t('seconSection.cards.problem.description')}
                        buttonText={i18.t('buttons.contact')}
                    />
                </div>
                <div className="mb-12">
                    <SecondSectionCard
                        title={i18.t('seconSection.cards.opportunities.title')}
                        content={i18.t('seconSection.cards.opportunities.description')}
                        buttonText={i18.t('buttons.informations')}
                    />
                </div>
                <div className="flex flex-wrap space-y-6 lg:space-y-0">
                    <div className="w-full lg:w-2/5">
                        <SecondSectionCardVideo
                            title={i18.t('seconSection.cards.seeInAction.title')}
                            youtubeUrl="https://www.youtube.com/watch?v=Uc5gQKQkjYg"
                            buttonText={i18.t('buttons.contact')}
                        />
                    </div>
                    <div className="w-1/5" />
                    <div className="w-full lg:w-2/5">
                        <SecondSectionCardVideo
                            title={i18.t('seconSection.cards.guidedTour.title')}
                            youtubeUrl="https://www.youtube.com/watch?v=dd2ppeeYNXA"
                            buttonText={i18.t('buttons.informations')}
                        />
                    </div>
                </div>
            </div>
        </div>
    </AccueilContainer>
}