import Head from 'next/head'
import Image from "next/image";
import Header from "../components/Header";
import Collections from "../components/Collections";
import Button from "../components/Button";
import {useState} from "react";
import Project from "../components/Project";
import Goal from "../components/Goal";

// icon={<SearchOutlined />}

export default function Home() {

    return (
        <>
            <Head>
                <title>Crowdfunding product page</title>
                <meta name="description" content="Crowdfunding product page"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header/>


            <main>
                <div className="wrapper">
                    <Project />
                    <Goal />
                    <Collections />
                </div>

            </main>
        </>
    )
}
