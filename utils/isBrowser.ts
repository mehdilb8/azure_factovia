export default function isBrowser() {
    return process.browser && typeof window !== 'undefined'
}