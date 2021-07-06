import { CorporateContactJsonLd } from 'next-seo';
import { LOGO_URL } from '../constantes'

interface SEOProps {
    url: string,

}

export default function SEO(props: SEOProps) {
    return <>
        <CorporateContactJsonLd
            url={props.url}
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