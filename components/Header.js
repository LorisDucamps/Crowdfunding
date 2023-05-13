import React from 'react';
import Image from "next/image";
import useDeviceDetect from "../utils/useDeviceDetect";
import Navigation from "./Navigation";

const Header = () => {

    const {isMobile} = useDeviceDetect();

    return (
        <header>
            <div className="wrapper">
                <div className="background-hero"></div>
                <div className="inner">
                    <Image src="/logo.svg" alt="logo crowdfund" width={128} height={20} />
                    <Navigation/>
                    {isMobile ? 'yeah' : 'non'}
                </div>
            </div>
        </header>
    );
};

export default Header;