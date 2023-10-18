import { useState } from "react"

export default function Header() {

    const [isOpen, setIsOpen] = useState(false)

    function handleOpenMenu() {
        setIsOpen(!isOpen)
    }

    return (
        <header className="relative flex justify-between items-center max-w-[1440px] mx-auto px-6 pt-8">

            {isOpen &&
                <div className="fixed top-0 left-0 right-0 bottom-0 h-full background-linear z-10"></div>
            }

            <picture className="absolute top-0 left-0 right-0 -z-10">
                <source media="(min-width: 376px)" srcSet="/assets/img/image-hero-desktop.jpg 1x, /assets/img/image-hero-desktop_2x.jpg 2x" type="image/jpg" />
                <source media="(max-width: 375px)" srcSet="/assets/img/image-hero-mobile.jpg 1x, /assets/img/image-hero-mobile_2x.jpg 2x" type="image/jpg" />
                <img src="/assets/img/image-hero-desktop.jpg" type="image/jpg" />
            </picture>

            <nav className="flex justify-between max-w-[1110px] mx-auto w-full z-20">
                <a href="#" className="block">
                    <img src="/assets/img/logo.svg" alt="Logo CrowdFund" />
                </a>
                <ul className="hidden sm:flex sm:gap-8">
                    <li>
                        <a className="text-white text-[13px] font-medium" href="#">About</a>
                    </li>
                    <li>
                        <a className="text-white text-[13px] font-medium" href="#">Discover</a>
                    </li>
                    <li>
                        <a className="text-white text-[13px] font-medium" href="#">Get Started</a>
                    </li>
                </ul>
            </nav>

            <img onClick={handleOpenMenu} className="z-10 cursor-pointer sm:hidden" src={isOpen ? "/assets/img/close.svg" : "/assets/img/menu.svg"} alt="icon" />

            {isOpen && (
                <nav className="absolute top-[88px] left-0 right-0 px-6 z-20 sm:hidden">
                    <ul className="border border-navigation rounded-lg divide-y divide-dark/10 bg-white">
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
