import { CorporateContactJsonLd } from 'next-seo';
import { LOGO_URL } from '../constantes'

interface SEOProps {
    path: string,

}

export default function SEO(props: SEOProps) {
    return <>
        <CorporateContactJsonLd
            url={"https://factovia.fr/" + props.path}
            logo={LOGO_URL}
            contactPoint={[
                {
                    telephone: '+33651383002',
                    contactType: 'customer service',
                    areaServed: ['FR', 'US', 'UK', 'CA'],
                    availableLanguage: ['English', 'French'],
                },
            ]}
        />
    </>
}