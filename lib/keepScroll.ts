import isBrowser from "../utils/isBrowser";

export default function keepScroll() {

    function saveScrollPosition() {
        const { scrollTop } = document.documentElement;
        sessionStorage.setItem('scroll', scrollTop.toString())
    }

    if (isBrowser()) {
        const scrollPosition = Number(sessionStorage.getItem('scroll')) || 0;
        window.scroll({
            top: scrollPosition
        })
        window.addEventListener('scroll', saveScrollPosition)
    }

    return () => {
        window.removeEventListener('scroll', saveScrollPosition)
    }
}