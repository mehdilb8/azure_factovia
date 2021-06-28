import AccueilContainer from "./AccueilContainer"
import useI18n from "../../hooks/i18n-hook"
import Link from 'next/link'
import { TrendingProps } from "../../types/Pages"

export default function Trending(props: TrendingProps) {
    const i18n = useI18n()
    return <>
        <AccueilContainer >
            <>
                <div className="py-12">
                    <h2 className="text-primaryDark text-4xl font-bold mb-8">{i18n.t("trending.title")}</h2>
                    <div className="flex">
                        <div className="w-1/2">
                            <p className="text-gray-500 text-sm mb-2">{new Date(props.blog.date || Date.now()).toLocaleDateString()}</p>
                            <h2 className="text-3xl my-2 cursor-pointer">{props.blog.title}</h2>
                            <p>{props.blog.description}</p>
                        </div>
                        <div className="w-1/2">
                            <Link href={"/" + i18n.activeLocale + "/blog/" + props.blog.slug}>
                                <a>
                                    <img alt={props.blog.title} className="blog-highlight-thumb w-full object-cover rounded-sm shadow-md transition-transform transform hover:translate-x-2 hover:-translate-y-2" src={props.blog.thumb || `https://picsum.photos/seed/${props.blog.title}/1600`} />
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