interface ShareButtonProps {
    title: string
}

export default function ShareButtons(props: ShareButtonProps) {
    if (process.browser) {
        return <div className="flex">
            <a target="_blank" rel="noreferrer" href={`https://twitter.com/intent/tweet?text=${props.title}&url=${window.location.href}`} className="mr-1">
                <button className="bg-twitter p-2 rounded-lg shadow-md">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" >
                        <path fill="#fff" d="M18.258,3.266c-0.693,0.405-1.46,0.698-2.277,0.857c-0.653-0.686-1.586-1.115-2.618-1.115c-1.98,0-3.586,1.581-3.586,3.53c0,0.276,0.031,0.545,0.092,0.805C6.888,7.195,4.245,5.79,2.476,3.654C2.167,4.176,1.99,4.781,1.99,5.429c0,1.224,0.633,2.305,1.596,2.938C2.999,8.349,2.445,8.19,1.961,7.925C1.96,7.94,1.96,7.954,1.96,7.97c0,1.71,1.237,3.138,2.877,3.462c-0.301,0.08-0.617,0.123-0.945,0.123c-0.23,0-0.456-0.021-0.674-0.062c0.456,1.402,1.781,2.422,3.35,2.451c-1.228,0.947-2.773,1.512-4.454,1.512c-0.291,0-0.575-0.016-0.855-0.049c1.588,1,3.473,1.586,5.498,1.586c6.598,0,10.205-5.379,10.205-10.045c0-0.153-0.003-0.305-0.01-0.456c0.7-0.499,1.308-1.12,1.789-1.827c-0.644,0.28-1.334,0.469-2.06,0.555C17.422,4.782,17.99,4.091,18.258,3.266"></path>
                    </svg>
                </button>
            </a>
            <a target="_blank" rel="noreferrer" href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} className="mr-1">
                <button className="bg-facebook p-2 rounded-lg shadow-md">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 20 20">
                        <path fill="#fff" d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z"></path>
                    </svg>
                </button>
            </a>
            <a target="_blank" rel="noreferrer" href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`} className="mr-1">
                <button className="bg-linkedin p-2 rounded-lg shadow-md">
                    <svg version="1.1" id="Layer_1" viewBox="0 0 310 310" className="w-4 h-4 text-white" fill="currentColor" >
                        <g id="XMLID_801_">
                            <path id="XMLID_802_" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
		C77.16,101.969,74.922,99.73,72.16,99.73z"/>
                            <path id="XMLID_803_" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
		c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"/>
                            <path id="XMLID_804_" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
		c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
		c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
		C310,145.43,300.549,94.761,230.454,94.761z"/>
                        </g>
                    </svg>
                </button>
            </a>
        </div>
    }
    return null
}


// https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Ffactovia.github.io%2F2020-02-26-flake-it-till-you-make-it%2F