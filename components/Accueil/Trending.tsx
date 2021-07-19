import AccueilContainer from "./AccueilContainer"
import useI18n from "../../hooks/i18n-hook"
import Link from 'next/link'
import { TrendingProps } from "../../types/Pages"
import LazyElement from "../../elements/LazyElement"

export default function Trending(props: TrendingProps) {
    const i18n = useI18n()
    return <>
        <AccueilContainer >
            <>
                <div className="py-12 lg:py-18">
                    <h2 className="text-primaryDark text-4xl font-bold mb-8">{i18n.t("trending.title")}</h2>
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-3/5 mb-6 lg:mb-0">
                            <p className="text-gray-500 text-sm mb-2">{new Date(props.blog.date || Date.now()).toLocaleDateString()}</p>
                            <Link href={"/" + i18n.activeLocale + "/blog/" + props.blog.slug}>
                                <a>
                                    <h2 className="text-3xl my-2">{props.blog.title}</h2>
                                </a>
                            </Link>
                            <p>{props.blog.description}</p>
                        </div>
                        <div className="w-full lg:w-2/5">
                            <Link href={"/" + i18n.activeLocale + "/blog/" + props.blog.slug}>
                                <a>
                                    <LazyElement>
                                        <img alt={props.blog.title} className="blog-highlight-thumb w-full object-cover rounded-sm shadow-md transition-transform transform hover:translate-x-2 hover:-translate-y-2" src={props.blog.thumb || `https://picsum.photos/seed/${props.blog.title}/1600`} />
                                    </LazyElement>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <hr />
            </>
        </AccueilContainer>
    </>
}