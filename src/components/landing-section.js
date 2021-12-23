import React from "react";
import Link from 'next/link'
import SaborScene from "../scenes/sabor";
import { useTranslation, Trans } from 'next-i18next';
import { FcDownload } from "react-icons/fc";
import { useRouter } from "next/router";

function Container(props) {
    return <section className="container
        relative
        max-w-screen-lg w-full
        flex flex-col md:flex-row items-center justify-around
        overflow-hidden
        my-10">
        {props.children}
    </section>
}

function About(props) {
    return <div className="flex
    flex-col items-center md:items-start
    md:relative md:left-0
    md:w-1/2 w-full
    pb-10">
        {props.children}
    </div>
 }

function Greetings(props) {
    return <div className="flex flex-col items-center md:items-start
        mb-10
        cursor-pointer
        overflow-hidden
        max-w-max">
        {props.children}
    </div>
}

function Title(props) {
    return <h1 className="text-4xl font-bold select-none">
        {props.children}
    </h1>
}

function Subtitle(props) {
    return <h2 className="after:text-sm
        after:font-thin
        after:select-none
        after:dark:text-white
        after:text-black
        after:content-['Tap here to change language']
        after:animate-language-guide">
        {props.children}
    </h2>
}

function WavingHand() {
    return <span className="waving-hand" />
}

function Description(props) {
    return <div className="text-lg text-centermd:text-left">
        {props.children}
    </div>
}

function ResumeDownloadContainer(props) {
    return <div className="resume-download-container" >
        {props.children}
    </div>
}

function ResumeDownloadIcon() {
    return <div className="animate-bounce mr-3">
        <FcDownload size="2em" />
    </div>
}

function ResumeLink(props) {
    return <a href={props.href} className="flex items-center justify-center
        text-sm uppercase
        cursor-pointer
        w-full h-full
        rounded-md
        p-5
        bg-green-100 dark:bg-black
        text-gray-800 dark:text-white" >
        {props.children}
    </a>
}

function CanvasContainer(props) {
    return <div className="flex items-center
        relative
        right-0
        md:w-2/3 lg:w-1/2 xl:w-2/5 w-full
        object-contain">
        {props.children}
    </div>
}

export default function LandingSection() {
    const { t, i18n } = useTranslation("home");
    const router = useRouter();
    let resumeUrl = router.locale == 'en'?
        "https://docs.google.com/document/d/13RuquH_8FjIR39k3a7dr5uJn5Ml93opzPl73DiKLRHs/edit?usp=sharing":
        "https://docs.google.com/document/d/1r7z6yY6IXzcgwkhEgzqlLIi6ythl60zVPnxkyPIo8Gs/edit?usp=sharing";
    return <Container>
        <About>
            <Link href='/' locale={i18n.language === 'en' ? 'jp' : 'en'} passHref>
                <a>
                    <Greetings>
                        <Title>{t('landing.hello')} <WavingHand/></Title>
                        <Subtitle />
                    </Greetings>
                </a>
            </Link>
            <Description>
                <Trans i18nKey="home:landing.about">
                    I am Bang, a passionate Front End Software Engineer. <br />
                    I build mobile applications and games for a living.
                </Trans>
                <ResumeDownloadContainer>
                    <ResumeLink
                        target="_blank" rel="noreferrer" href={resumeUrl}>
                        <ResumeDownloadIcon />
                        <span>{t('common:contact.downloadResume')}</span>
                    </ResumeLink>
                </ResumeDownloadContainer>
            </Description>
        </About>
        <CanvasContainer>
            <SaborScene />
        </CanvasContainer>
    </Container>
}