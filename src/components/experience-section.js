import React, { useState } from "react";
import { useTranslation, Trans } from 'next-i18next';

function Container(props)
{
    return <section className="container
        flex flex-col items-center
        p-10
        text-center
        overflow-hidden
        bg-indigo-100 dark:bg-black" id={props.id}>
        {props.children}
    </section>
}

function SectionTitle(props)
{
    return <h1 className="text-2xl
        mb-5
        font-bold" >
        {props.children}
    </h1>
}

function HistoryContainer(props)
{
    return <div className="w-full max-w-screen-lg
        flex flex-col md:flex-row justify-start" >
        {props.children}
    </div>
}

function HistoryNavigator(props)
{
    return <div className="flex md:flex-col
        mb-5 md:mb-0 md:mr-5
        w-full md:w-1/3 xl:w-1/5 max-w-screen-sm
        overflow-x-auto" >
        {props.children}
    </div>
}

function HistoryButton(props)
{
    return <button className="history-button" onClick={props.onClick} active={props.active?'true':undefined}>
        {props.children}
    </button>
}

function ContentContainer(props)
{
    return <div className="history-content" active={props.active?'true':undefined} >
        {props.children}
    </div>
}

function Title(props)
{
    return <h3 className="history-title text-base text-left" >
        {props.children}
    </h3>
}

function Time(props)
{
    return <p className="text-xs text-left" >
        {props.children}
    </p>
}

function Description(props)
{
    return <div className="history-desc">
        {props.children}
    </div>
}

export default function ExperienceSection() {
    var [activeSet, setActiveSet] = useState(0);
    const { t } = useTranslation("home");
    return <Container id='experiences'>
        <SectionTitle>{t('experience.title')}</SectionTitle>
        <HistoryContainer>
            <HistoryNavigator>
                <HistoryButton onClick={() => setActiveSet(0)} active={activeSet === 0}>
                    <h2>💼</h2><h3>{t('experience.nav.gc')}</h3>
                </HistoryButton>
                <HistoryButton onClick={() => setActiveSet(1)} active={activeSet === 1}>
                    <h2>🎓</h2><h3>{t('experience.nav.jpschool')}</h3>
                </HistoryButton>
                <HistoryButton onClick={() => setActiveSet(2)} active={activeSet === 2}>
                    <h2>💼</h2><h3>{t('experience.nav.glhan')}</h3>
                </HistoryButton>
                <HistoryButton onClick={() => setActiveSet(3)} active={activeSet === 3}>
                    <h2>💼</h2><h3>{t('experience.nav.fpt')}</h3>
                </HistoryButton>
                <HistoryButton onClick={() => setActiveSet(4)} active={activeSet === 4}>
                    <h2>🎓</h2><h3>{t('experience.nav.university')}</h3>
                </HistoryButton>
            </HistoryNavigator>
            <ContentContainer active={activeSet === 0}>
                <Title><Trans i18nKey="home:experience.position.gc">
                    Engineering Manager <sup>@</sup> <a target="_blank" rel="noreferrer" href="https://gc-c.co.jp/"><em>GoodCreate</em></a>
                </Trans></Title>
                <Time>{t('experience.time.gc')}</Time>
                <Description><Trans i18nKey="home:experience.desc.gc">
                    <ul>
                        <li>
                            I am in charge of software engineering department in GoodCreate.
                            I discuss the requirements, provide technical advices, propose high level solutions.
                        </li>
                        <li>
                            I developed highly interactive mobile applications using <code>Swift</code> and <code>Kotlin</code>.
                        </li>
                        <li>
                            I do research and development activity. Explore potential use of <code>Flutter</code> in future projects.
                        </li>
                    </ul>
                </Trans></Description>
            </ContentContainer>
            <ContentContainer active={activeSet === 1}>
                <Title><Trans i18nKey="home:experience.position.jpschool">
                    Student <sup>@</sup> <a target="_blank" rel="noreferrer" href="http://mizunogaigogakuin.com/"><em>Mizuno International Language School</em></a>
                </Trans></Title>
                <Time>{t('experience.time.jpschool')}</Time>
                <Description><Trans i18nKey="home:experience.desc.jpschool">
                    <ul>
                        <li>
                            I took 2-years course, but I graduated early, only study there for 1 year.
                        </li>
                        <li>
                            Started with almost zero Japanese, I was able to pass <em>JLPT N3</em> before graduation. One and a half year later I passed <em>JLPT N2</em>.
                        </li>
                        <li>
                            I can communicate in Japanese at business level.
                            I am able to discuss technical topic in Japanese with minimal difficulty.
                        </li>
                        <li>
                            I can act as English-Japanese-Vietnamese interpreter at conversational level.<br />
                            I can interpret business Japanese to some degree.
                        </li>
                    </ul>
                </Trans></Description>
            </ContentContainer>
            <ContentContainer active={activeSet === 2}>
                <Title><Trans i18nKey="home:experience.position.glhan">
                    Senior Game Programmer <sup>@</sup> <a target="_blank" rel="noreferrer" href="https://www.gameloft.com/"><em>Gameloft Hanoi</em></a>
                </Trans></Title>
                <Time>{t('experience.time.glhan')}</Time>
                <Description><Trans i18nKey="home:experience.desc.glhan">
                    <ul>
                        <li>
                            I have taken part in Gameloft AI Contest 2013, I finished at <em>Quater Final (rank #4~8)</em>.
                            I then soon joined Gameloft later on March 2014.
                        </li>
                        <li>
                            Deeply immersed in international environment, my English ability improved significantly.
                            Thanks to that, earlier in 2021, I took the TOEIC English test and achieved <em>945/990 points</em>.
                        </li>
                        <li>
                            Started out as a C++ Game Programmer, I developed my interest in Computer Graphics.
                            I am in charge of gameplay programming and graphics optimization for games.
                            I am well trained in OpenGL, shader programming and various graphics debugging tools.
                        </li>
                        <li>
                            I was in charge of gameplay programming and graphics optimization in the following games (all based on C++ and OpenGL):
                            <ul>
                                <li>
                                    Sharkdash, built using 2D in-house engine.
                                </li>
                                <li>
                                    Ice Age Adventures, built using in-house 3D engine.
                                </li>
                                <li>
                                    Brothers in Arms 3, built using Irrlicht-based in-house engine (3D).
                                </li>
                                <li>
                                    Order and Chaos 2, 3D MMORPG, built using in-house engine.
                                </li>
                                <li>
                                    Disney Magic Kingdom, built using Irrlicht-based in-house engine (3D).
                                </li>
                            </ul>
                        </li>
                    </ul>
                </Trans></Description>
            </ContentContainer>
            <ContentContainer active={activeSet === 3}>
                <Title><Trans i18nKey="home:experience.position.fpt">
                    Senior Software Developer <sup>@</sup> <a target="_blank" rel="noreferrer" href="https://www.fpt-software.com/"><em>FPT Software</em></a>
                </Trans></Title>
                <Time>{t('experience.time.fpt')}</Time>
                <Description><Trans i18nKey="home:experience.desc.fpt">
                    <ul>
                        <li>
                            I joined FPT Software on June 2016 and lead a team of 5 challenging a C++ project with <em>2 millions lines of code</em>.
                            That was a migration project, bringing an old 32-bit based system to 64-bit.
                            I was in charge of building custom developement tools (CLI) for the team.
                            I did review other member&apos;s code to ensure source code quality.
                        </li>
                        <li>
                            I developed application for an entertainment system running on Automobile devices (in parnership with LG).
                            That was media playing application, built with Qt.
                            I am in charge of feature implementation and <em>overall performance optimization</em>.
                        </li>
                        <li>
                            Over the course of 2 years at FPT Software, I have received various training on Project Management.
                            I learned how to manage a small team and was pretty successful at it.
                        </li>
                        <li>
                            I was received honorable mention as <em>Best Rookie of The Year 2016</em>.
                        </li>
                    </ul>
                </Trans></Description>
            </ContentContainer>
            <ContentContainer active={activeSet === 4}>
                <Title><Trans i18nKey="home:experience.position.university">
                    Bachelor Degree <sup>@</sup> <a target="_blank" rel="noreferrer" href="http://utehy.edu.vn/"><em>Hung Yen University of Technology and Education</em></a>
                </Trans></Title>
                <Time>{t('experience.time.university')}</Time>
                <Description><Trans i18nKey="home:experience.desc.university">
                    <ul>
                        <li>
                            My major was <code>Software Engineering</code>. Over the course of 4 years, I was well trained with <code>C/C++, C#</code>.
                            I got perfect mark <em>(10/10)</em> in Computer Programming, Semester Project #4.
                            I have most major subjects above A grade <em>(8.0+/10)</em>, with A+ in Graduation Project <em>(9.2/10)</em>.
                        </li>
                        <li>
                            I won an university programming contest. Both as an individual and as a team.
                        </li>
                        <li>
                            I represented my university taking part in National Olympiad of Informatics. I got an incentive prize.
                        </li>
                        <li>
                            My team represented my university taking part in ACM/ICPC.
                        </li>
                    </ul>
                </Trans></Description>
            </ContentContainer>
        </HistoryContainer>
    </Container>
}
