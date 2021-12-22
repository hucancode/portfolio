import React from "react";
import styled from 'styled-components';
import tw from 'twin.macro';
import DragonScene from "../scenes/dragon";
import { useTranslation, Trans } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { SiThreedotjs, SiBlender, SiOpengl } from "react-icons/si";
import Navbar from "../components/navigation-bar";
import FootNote from "../components/foot-note";

const Container = styled.div`
    ${tw`
        flex flex-col justify-start items-center gap-4
        w-screen md:h-full min-h-screen
        bg-indigo-200 dark:bg-gray-900
        text-gray-800 dark:text-white
    `}
`;
const Main = styled.main`
    ${tw`
        flex justify-center items-stretch
        w-full 
        py-2
        px-5
    `}
    flex-grow: 1;
`;

const ProjectCard = styled.div`
    ${tw`
        flex flex-col md:flex-row justify-start items-stretch
        text-center
        shadow-lg
        rounded-lg
        w-full max-w-screen-md
        overflow-hidden
    `}
    flex-grow: 1;
`;

const ProjectMedia = styled.div`
    ${tw`
        flex justify-start items-center
        w-full md:w-2/3 h-full
        p-4
        overflow-hidden
    `}
    flex-grow: 1;
    background: radial-gradient(closest-side, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.2));
`;

const ProjectDetail = styled.div`
    ${tw`
        flex flex-col justify-start items-start gap-4
        text-left
        relative
        right-0
        w-full md:w-1/3 h-full 
        bg-indigo-100 dark:bg-gray-600
        text-gray-600 dark:text-gray-100
        object-contain
        p-4
    `}
    h2 {
        ${tw`
            font-black
            dark:text-indigo-100 text-black
        `}
    }
    p, ul {
        ${tw`
            font-normal
            text-sm
        `}
    }
    small {
        ${tw`
            font-thin
            text-gray-500 dark:text-gray-300
            mb-3
        `}
    }
    & ul li {
        ${tw`
            relative
            pl-5
            before:content-["▸"]
            before:absolute
            before:left-0
        `}
    }
    span {
        ${tw`
            flex gap-2
        `}
    }
`;

export default function ProceduralDragon() {
    const { t } = useTranslation("challenge");
    return <Container>
        <Head>
            <title>{t("dragon.title")}</title>
        </Head>
        <Navbar />
        <Main>
            <ProjectCard>
                <ProjectMedia>
                    <DragonScene />
                </ProjectMedia>
                <ProjectDetail>
                    <h2>{t("dragon.title")}</h2>
                    <span><SiThreedotjs size="1.5em" /><SiBlender size="1.5em" /><SiOpengl size="1.5em" /></span>
                    <Trans i18nKey="challenge:dragon.description">
                        <p>Dragon animations are procedurally generated with following steps:</p>
                        <ul>
                            <li>Load static dragon mesh. Posed in a straight line</li>
                            <li>Build a curve using THREE.CatmullRomCurve3</li>
                            <li>Pass curve data down to GPU via a texture</li>
                            <li>Inside vertex shader, read texture data and set vertex position accordingly</li>
                        </ul>
                    </Trans>
                </ProjectDetail>
            </ProjectCard>
        </Main>
        <FootNote />
    </Container>
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'challenge'])),
            // Will be passed to the page component as props
        },
    };
}
