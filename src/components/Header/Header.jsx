import { useState } from "react"

export default function Header() {

    const before = "before:content-['*'] before:absolute before:top-0 before:left-0 before:right-0 before:h-[128px] before:background-linear"

    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className={`${before} relative flex justify-between items-center max-w-[1440px] mx-auto`}>

            {isOpen && <div className="fixed top-0 left-0 right-0 bottom-0 h-full background-linear z-10 sm:hidden"></div>}

            <picture>
                <source media="(min-width: 641px)" srcSet="/assets/img/image-hero-desktop.jpg 1x, /assets/img/image-hero-desktop_2x.jpg 2x" type="image/jpg" />
                <source media="(max-width: 640px)" srcSet="/assets/img/image-hero-mobile.jpg 1x, /assets/img/image-hero-mobile_2x.jpg 2x" type="image/jpg" />
                <img src="/assets/img/image-hero-desktop.jpg" type="image/jpg" alt="Visuel bannière bureau de travail" />
            </picture>

            <nav className="absolute top-4 left-0 right-0 max-w-[1110px] mx-auto w-full z-20 sm:top-12">
                <div className="flex justify-between items-center px-6">
                    <a href="#" className="block py-4 sm:p-0">
                        <img src="/assets/img/logo.svg" alt="Logo CrowdFund" />
                    </a>
                    <ul className="hidden sm:flex sm:gap-8">
                        <li>
                            <a className="block text-white text-[13px] font-medium hover:underline" href="#">About</a>
                        </li>
                        <li>
                            <a className="block text-white text-[13px] font-medium hover:underline" href="#">Discover</a>
                        </li>
                        <li>
                            <a className="block text-white text-[13px] font-medium hover:underline" href="#">Get Started</a>
                        </li>
                    </ul>
                    <img onClick={() => setIsOpen(!isOpen)} className="pt-4 pl-4 pb-4 z-10 cursor-pointer sm:hidden" src={isOpen ? "/assets/img/close.svg" : "/assets/img/menu.svg"} alt="icon" />
                </div>
            </nav>


            {isOpen && (
                <nav className="absolute top-[88px] right-0 left-0 px-6 z-20 sm:hidden">
                    <ul className="border border-light-black rounded-lg divide-y divide-medium-dark-charcoal bg-white">
                        <li>
                            <a className="block text-lg p-6" href="#">About</a>
                        </li>
                        <li>
                            <a className="block text-lg p-6" href="#">Discover</a>
                        </li>
                        <li>
                            <a className="block text-lg p-6" href="#">Get Started</a>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    )
}
