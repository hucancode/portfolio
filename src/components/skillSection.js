import React, { useState } from "react";
import styled, {css} from 'styled-components';
import tw from 'twin.macro';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDocker, faJs, faNode, faReact } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from 'react-i18next';

const Container = styled.section`
    ${tw`
        container
        flex
        flex-col
        items-center
        bg-indigo-100
        dark:bg-black
        p-10
        text-center
        overflow-hidden
    `}
`;
const SectionTitle = styled.h1`
    ${tw`
        text-2xl
        mb-5
        font-bold
    `}
`;

const SkillSwitchContainer = styled.div`
    ${tw`
        w-full
        flex
        items-center
        justify-center
    `}
`;

const SwitchButton = styled.input`
    height: 0;
    width: 0;
    visibility: hidden;
`;
const SwitchLabel = styled.h3`
    ${tw`
        w-1/3
        cursor-pointer
        select-none
        text-xs
        md:text-base
        duration-300
    `}
    ${props => props.active ?  
        css`${tw`
            text-blue-500
        `}` :
        css`${tw`
            text-gray-400
            hover:text-blue-500
        `}`
    }
`;
const SwitchButtonGraphic = styled.label`
    ${tw`
        bg-blue-300
        w-20
        h-8
        rounded-2xl
        cursor-pointer
        block
    `}
    position: relative;
    margin: 1rem;
        
    &:after {
        content: '';
        ${tw`
            absolute
            duration-300
            bg-white
            top-1
            left-1
            w-6
            h-6
            rounded-full
        `}
    }

    input:checked + & {
        ${tw`
            bg-green-300
        `}
    }
    input:checked + &:after {
        left: calc(100% - 0.2rem);
        transform: translateX(-100%);
    }
    &:active:after {
        width: 60%;
    }
`;

const SkillSet = styled.ul`
    ${tw`
        flex
        flex-wrap
        mt-3
        mb-3
        items-center
        justify-center
        duration-300
        origin-top
        overflow-hidden
    `}
    ${props => props.active ? `height: auto;transform: scaleY(1);` : `height: 0; display:hidden;transform: scaleY(0.0);`}
`;

const SkillContainer = styled.li`
    ${tw`
        w-12
        h-16
        flex
        flex-col
        items-center
        m-3
    `}
`;

const SkillIconContainer = styled.div`
    ${tw`
        w-12
        h-12
        flex
        items-center
        justify-center
        text-base
        text-gray-700
        dark:text-gray-400
    `}
`;

const SVGIcon = styled.svg`
    ${tw`
        w-full
        fill-current
        text-gray-700
        dark:text-gray-400
    `}
`;

const SVGIconHollow = styled.svg`
    ${tw`
        w-full
        stroke-current
        text-gray-700
        dark:text-gray-400
    `}
`;


const SkillName = styled.p`
    ${tw`
        text-xs
        font-mono
        text-center
    `}
`;

const FlutterViewBox = "0 0 237.9 238";
const FlutterSVGPath = [
    "M 126.8,205.6 126.7,205.6 80.1,159 106.7,132.3 179.9,205.6 z",
    "M 126.7,112.3 126.7,112.3 80,158.9 106.7,185.5 179.9,112.3 z",
    "M 126.7,32.5 126.6,32.4 39.9,119 66.6,145.7 179.8,32.5 z"
];
const DartViewBox = "-32 -32 192 192";
const DartSVGPath = [
    "M86.6 25l3 .1c1.1.1 2.2.3 3.4.5l-2.5-7.4L75.7 3.5c-3.4-3.4-8-4.4-10.4-2.3L29.2 25.1l57.4-.1zm6.1 3.6c-1.2-.2-2.3-.4-3.3-.5l-2.9-.1-56 .1 78.6 78.6 6.1-13.8-22.5-64.3zM28.9 92.2l64.3 22.7 13.8-6.1-78.6-78.6v56.1l.1 2.7c0 .9.1 2 .4 3.2z",
    "M106.9 34.3c-2.6-2.6-7-5.1-11.3-6.5L118.4 93l-6.9 15.7 15.8-5.2V54.8l-20.4-20.5zm-13.5 83.8l-65-22.9c1.4 4.3 3.8 8.7 6.5 11.4l21.3 21.2 47.6.1 5.3-16.7-15.7 6.9zm-67.9-29l-.1-2.7V28.9L1.7 65.1C-.4 67.3.7 72 4 75.5l14.7 14.8 7.3 2.6c-.3-1.3-.5-2.5-.5-3.8z"
];
const NestViewBox = "-32 -32 192 192";
const NestSVGPath = [
    "M75.4.3c-.9 0-1.8.2-2.6.5 1.7 1.1 2.6 2.6 3.1 4.3 0 .2.1.4.1.6 0 .2.1.4.1.6.1 2.9-.8 3.3-1.4 5-1 2.2-.7 4.6.5 6.5.1.2.2.5.4.7-1.3-8.4 5.7-9.6 7-12.2.1-2.3-1.8-3.8-3.3-4.9C77.8.5 76.6.3 75.4.3zm10.5 1.8c-.1.8 0 .6-.1 1 0 .3 0 .6-.1.9-.1.3-.1.5-.2.8-.1.3-.2.5-.3.8-.1.2-.2.4-.3.7-.1.1-.2.3-.3.4-.1.1-.1.2-.2.3-.2.2-.3.5-.5.7l-.6.6c-.2.2-.4.4-.6.5-.7.5-1.5.9-2.2 1.4-.2.2-.5.3-.7.5-.2.2-.4.3-.6.5l-.6.6c-.2.2-.4.4-.5.7-.2.2-.3.5-.5.7-.1.3-.2.5-.4.8-.1.3-.2.5-.3.8-.1.3-.2.6-.2.8 0 .1 0 .3-.1.4 0 .1 0 .3-.1.4v1.4c0 .3 0 .5.1.8 0 .3.1.5.2.8.1.3.2.5.3.8.1.2.2.3.2.5l-7.6-2.9c-1.3-.4-2.5-.7-3.8-1-.7-.2-1.4-.3-2.1-.5-2-.4-4-.7-6-.9h-.2c-2-.2-3.9-.3-5.9-.3-1.5 0-2.9.1-4.3.2-2 .1-4 .4-6 .7l-1.5.3c-1 .2-2 .4-3 .7-.5.1-1 .3-1.5.4-.5.2-1 .4-1.4.6-.4.2-.7.3-1.1.5-.1 0-.1 0-.2.1-.3.2-.6.3-.9.5-.1 0-.2.1-.2.1-.4.2-.7.4-1 .5-.2.1-.5.2-.7.3-.1.1-.2.1-.3.2-.3.2-.6.3-.9.5-.3.2-.6.3-.8.5-.2.2-.5.3-.7.5 0 0-.1 0-.1.1-.2.1-.4.3-.6.5l-.1.1c-.2.1-.3.3-.5.4-.1 0-.1.1-.2.1-.2.1-.3.3-.5.4 0 .1-.1.1-.1.1l-.6.6-.1.1-.6.6s0 .1-.1.1l-.5.5c-.1.1-.2.1-.2.2l-.6.6c0 .1-.1.1-.1.2l-.8.8-.1.1c-.5.6-1.1 1.1-1.7 1.6-.6.5-1.2 1-1.9 1.5s-1.3.9-2 1.3-1.4.7-2.1 1c-.7.3-1.4.6-2.1.8-1.4.3-2.8.9-4 1 0-.5-.3-.4-.6-.4-.3.1-.6.1-.8.2-.3.1-.5.2-.8.3-.3.1-.5.2-.8.4-.2.2-.5.3-.7.5-.2.2-.5.4-.7.6-.2.2-.5.4-.7.6-.2.2-.4.4-.6.7-.2.3-.4.5-.5.8-.2.2-.3.5-.5.8-.1.3-.3.6-.4.9l-.3.9c-.1.3-.1.5-.2.8v.1c-.1.3-.1.7-.1.9.1-.1.1.1.1.3v.4c0 .2.1.4.1.6.1.2.1.4.2.6.1.2.2.4.4.6.1.2.3.4.4.6.2.2.4.4.6.5.2.2.4.4.6.5.8.7 1 .9 2 1.5.2.1.3.2.5.3h.1v.2c0 .3.1.5.2.8.1.3.2.6.3.8l.3.6c0 .1.1.1.1.2.1.3.3.5.4.7.2.2.3.5.5.7l.6.6.6.6H8c.2.2.4.3.6.5.2.2.5.3.7.4.2.1.5.3.8.4.2.1.4.2.7.2 0 0 .1 0 .1.1.1 0 .3.1.4.1-.1 1.8-.1 3.5.1 4.1.3.7 1.8-1.4 3.2-3.7-.2 2.3-.3 5 0 5.8.4.8 2.3-1.8 4.1-4.6 23.4-5.4 44.8 10.8 47.1 33.7-.4-3.6-4.8-5.6-6.9-5.1-1 2.4-2.7 5.6-5.4 7.5.2-2.2.1-4.4-.3-6.6-.7 3-2.1 5.9-4.1 8.3-3.1.2-6.3-1.3-7.9-3.6-.1-.1-.2-.3-.3-.4-.1-.2-.2-.5-.3-.7-.1-.2-.2-.5-.2-.7v-.7-.5c0-.2.1-.5.2-.7.1-.2.1-.5.2-.7.1-.2.2-.5.4-.7.6-1.6.6-2.9-.5-3.6l-.6-.3c-.1 0-.3-.1-.4-.1-.1 0-.2-.1-.3-.1-.2-.1-.5-.1-.7-.2-.2-.1-.5-.1-.7-.1-.2 0-.5-.1-.7-.1h-.5c-.3 0-.5 0-.7.1-.2 0-.5.1-.7.1-.2.1-.5.1-.7.2-.2.1-.4.2-.7.3l-.6.3c-7.7 5-3.1 16.8 2.1 20.2-2 .4-4 .8-4.6 1.2l-.1.1c1.4.9 2.9 1.6 4.5 2.2 2.1.7 4.4 1.3 5.4 1.6 2.7.6 5.5.8 8.3.6 14.6-1 26.6-12.2 28.8-26.8.1.3.1.6.2.9.1.6.2 1.2.3 1.9.1.3.1.6.1.9v.1c0 .3.1.6.1.9 0 .4.1.7.1 1.1V91.6c0 .3-.1.5-.1.8v.3c0 .3-.1.6-.1 1-.1.3-.1.6-.2.9v.1c-.1.3-.1.6-.2.9v.1c-.1.3-.1.6-.2.9v.1l-.3.9v.1c-.1.3-.2.7-.3 1-.1.3-.2.6-.4 1-.1.3-.2.7-.4 1-.1.3-.3.6-.4 1-.1.3-.3.6-.4.9 0 .1-.1.2-.1.2s0 .1-.1.1c-2.1 4.3-5.3 8.1-9.3 11.1-.3.2-.5.4-.8.6-.1.1-.2.1-.2.2-.2.2-.5.3-.7.5l.1.2c.5-.1.9-.1 1.4-.2.9-.1 1.7-.3 2.6-.5.2 0 .5-.1.7-.2.2 0 .3-.1.5-.1s.5-.1.7-.1c.2-.1.4-.1.6-.2 3.3-.8 6.5-1.9 9.6-3.2-5.3 7.2-12.3 13-20.5 16.8 3.8-.3 7.6-.9 11.3-2 13.3-3.9 24.5-12.9 31.2-25-1.4 7.6-4.4 14.9-8.9 21.3 3.2-2.1 6.1-4.6 8.8-7.3 7.4-7.7 12.3-17.6 13.9-28.1 1.1 5.2 1.5 10.6 1 15.9 23.9-33.3 2-67.8-7.2-76.9 0-.1-.1-.1-.1-.2v0c0 .4 0 .8-.1 1.2-.1.8-.2 1.5-.3 2.2-.2.7-.4 1.5-.6 2.2-.2.7-.5 1.4-.8 2.1-.3.7-.6 1.4-1 2-.4.6-.8 1.3-1.2 1.9-.4.6-.9 1.2-1.4 1.8-.5.6-1 1.1-1.6 1.7-.3.3-.6.6-1 .8-.3.2-.5.4-.8.7-.6.5-1.2.9-1.9 1.3-.6.4-1.3.8-2 1.1l-2.1.9c-.7.3-1.4.5-2.1.7-.7.2-1.5.4-2.2.5-.8.1-1.5.2-2.2.3-.5 0-1.1.1-1.6.1-.8 0-1.5-.1-2.2-.1-.8-.1-1.5-.2-2.2-.3-.8-.1-1.5-.3-2.2-.6.7-.1 1.5-.1 2.2-.3.8-.1 1.5-.3 2.2-.5.7-.2 1.5-.4 2.1-.7l2.1-.9c.7-.3 1.3-.7 2-1.1.6-.4 1.3-.9 1.9-1.3.6-.5 1.2-1 1.7-1.5.6-.5 1.1-1.1 1.6-1.6.5-.6 1-1.2 1.4-1.8.1-.1.1-.2.2-.3.3-.5.7-1.1 1-1.6.4-.7.7-1.3 1-2 .3-.7.6-1.4.8-2.1l.6-2.1c.1-.8.3-1.5.3-2.2.1-.8.1-1.5.1-2.2 0-.5 0-1.1-.1-1.6-.1-.8-.2-1.5-.3-2.2-.1-.8-.3-1.5-.5-2.2-.2-.7-.5-1.4-.7-2.1-.3-.7-.6-1.4-.9-2-.4-.7-.7-1.3-1.1-2-.4-.6-.9-1.2-1.3-1.8-.5-.6-1-1.1-1.5-1.7-.3-.3-.6-.6-.9-.8-1.5-1.2-3-2.2-4.6-3.2-.2-.1-.4-.2-.7-.3-1.3-1.1-2.3-1.4-3.3-1.8z"
];
const ExpressViewBox = "0 0 128 128";
const ExpressSVGPath = [
    "M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z"
];
const MySQLViewBox = "0 0 128 128";
const MySQLSVGPath = [
    "M125.477 122.783l-2.616-2.537c-2.479-3.292-5.668-6.184-9.015-8.585-2.669-1.916-8.661-4.504-9.775-7.609l-.205-.195c1.893-.214 4.103-.898 5.85-1.367 2.934-.786 5.356-.583 8.386-1.365 1.366-.39 2.899-.781 3.899-1.171v-.78c-1-1.571-2.427-3.651-4.097-5.073-4.369-3.72-9.041-7.437-13.951-10.537-2.723-1.718-6.041-2.835-8.926-4.292-.971-.491-2.652-.746-3.294-1.562-1.517-1.932-2.328-4.382-3.498-6.633-2.449-4.717-4.849-9.868-7.019-14.831-1.48-3.384-2.443-6.72-4.289-9.756-8.86-14.567-18.395-23.358-33.167-32-3.145-1.838-6.929-2.563-10.929-3.513-2.144-.129-4.291-.26-6.437-.391-1.311-.546-2.674-2.149-3.902-2.927-4.896-3.092-17.449-9.817-21.074-.975-2.289 5.581 3.42 11.025 5.462 13.854 1.435 1.982 3.27 4.207 4.293 6.438.675 1.467.79 2.938 1.367 4.489 1.418 3.822 2.651 7.98 4.487 11.511.927 1.788 1.949 3.67 3.122 5.268.718.981 1.95 1.413 2.145 2.927-1.204 1.686-1.273 4.304-1.95 6.44-3.05 9.615-1.898 21.567 2.537 28.683 1.36 2.186 4.566 6.871 8.975 5.073 3.856-1.57 3.226-6.438 4.329-10.732.249-.972-.185-1.688.815-2.341v.195a128.6 128.6 0 0 0 3.282 7.024c2.6 4.187 6.889 8.562 10.798 11.514 2.027 1.531 3.92 4.177 5.92 5.073v-.101h.221c-.507-1-1.302-1.167-1.95-1.804-1.527-1.496-3.226-3.382-4.487-5.097-3.556-4.827-6.698-10.122-9.561-15.622-1.368-2.626-2.557-5.529-3.709-8.201-.443-1.03-.438-2.592-1.364-3.125-1.263 1.958-3.122 3.54-4.099 5.853-1.561 3.696-1.762 8.204-2.341 12.877-.343.122-.19.038-.391.194-2.718-.655-3.672-3.452-4.683-5.853-2.555-6.07-3.029-15.843-.781-22.829.582-1.809 3.211-7.501 2.146-9.172-.508-1.665-2.184-2.63-3.121-3.903-1.161-1.574-2.319-3.646-3.123-5.464-2.091-4.731-3.066-10.044-5.268-14.828-1.053-2.287-2.832-4.602-4.293-6.634-1.617-2.253-3.429-3.912-4.684-6.635-.445-.968-1.051-2.518-.39-3.513.21-.671.507-.951 1.171-1.17 1.133-.873 4.283.29 5.463.779 3.129 1.3 5.741 2.5 8.392 4.256 1.271.844 2.559 1.89 4.097 2.89h1.756c2.747 0 5.824.232 8.391 1.012 4.535 1.379 8.6 3.542 12.292 5.873 11.246 7.102 20.441 17.22 26.732 29.278 1.012 1.942 1.45 3.799 2.341 5.858 1.798 4.153 4.064 8.428 5.853 12.489 1.786 4.053 3.526 8.142 6.05 11.514 1.327 1.772 6.451 2.724 8.78 3.709 1.633.689 4.308 1.409 5.854 2.34 2.953 1.782 5.814 3.904 8.586 5.855 1.384.974 5.64 3.114 5.853 4.878-6.863-.188-12.104.452-16.585 2.341-1.273.537-3.305.552-3.513 2.147.7.733.809 1.829 1.365 2.731 1.069 1.73 2.876 4.052 4.488 5.268 1.762 1.33 3.576 2.751 5.464 3.902 3.359 2.047 7.107 3.217 10.341 5.268 1.906 1.21 3.958 2.733 5.815 4.097.92.675.891 1.724 2.891 2.147v-.194c-.999-.795-.946-1.893-1.522-2.728zM29.514 23.465c-1.431-.027-2.514.157-3.514.389V24h.198c.683 1 1.888 2.33 2.731 3.538l1.952 4.108.193-.187c1.209-.853 1.763-2.211 1.756-4.291-.483-.509-.556-1.146-.974-1.754-.558-.809-1.639-1.268-2.342-1.949z"
];
const GraphQLViewBox = "0, 0, 400, 400";
const GraphQLSVGPath = [
    "M57.468,302.66 L43.092,294.36 L203.242,16.98 L217.618,25.28 z",
    "M39.8,272.2 L360.1,272.2 L360.1,288.8 L39.8,288.8 z",
    "M206.348,374.026 L46.138,281.526 L54.438,267.15 L214.648,359.65 z",
    "M345.522,132.947 L185.312,40.447 L193.612,26.071 L353.822,118.571 z",
    "M54.482,132.883 L46.182,118.508 L206.392,26.008 L214.692,40.383 z",
    "M342.568,302.663 L182.418,25.283 L196.794,16.983 L356.944,294.363 z",
    "M52.5,107.5 L69.1,107.5 L69.1,292.5 L52.5,292.5 z",
    "M330.9,107.5 L347.5,107.5 L347.5,292.5 L330.9,292.5 z",
    "M203.522,366.999 L196.272,354.442 L335.611,273.992 L342.861,286.549 z",
    "M369.5,297.9 C359.9,314.6 338.5,320.3 321.8,310.7 C305.1,301.1 299.4,279.7 309,263 C318.6,246.3 340,240.6 356.7,250.2 C373.5,259.9 379.2,281.2 369.5,297.9",
    "M90.9,137 C81.3,153.7 59.9,159.4 43.2,149.8 C26.5,140.2 20.8,118.8 30.4,102.1 C40,85.4 61.4,79.7 78.1,89.3 C94.8,99 100.5,120.3 90.9,137",
    "M30.5,297.9 C20.9,281.2 26.6,259.9 43.3,250.2 C60,240.6 81.3,246.3 91,263 C100.6,279.7 94.9,301 78.2,310.7 C61.4,320.3 40.1,314.6 30.5,297.9",
    "M309.1,137 C299.5,120.3 305.2,99 321.9,89.3 C338.6,79.7 359.9,85.4 369.6,102.1 C379.2,118.8 373.5,140.1 356.8,149.8 C340.1,159.4 318.7,153.7 309.1,137",
    "M200,395.8 C180.7,395.8 165.1,380.2 165.1,360.9 C165.1,341.6 180.7,326 200,326 C219.3,326 234.9,341.6 234.9,360.9 C234.9,380.1 219.3,395.8 200,395.8",
    "M200,74 C180.7,74 165.1,58.4 165.1,39.1 C165.1,19.8 180.7,4.2 200,4.2 C219.3,4.2 234.9,19.8 234.9,39.1 C234.9,58.4 219.3,74 200,74"
];
const FirebaseViewBox = "0 0 128 128";
const FirebaseSVGPath = [
    "M27.35 80.52l10.68-68.44c.37-2.33 3.5-2.89 4.6-.8l11.48 21.48-26.76 47.76zm75.94 16.63L93.1 34.11c-.31-1.96-2.76-2.76-4.17-1.35L24.71 97.15l35.54 19.95a7.447 7.447 0 007.18 0l35.86-19.95zm-28.85-55L66.21 26.5c-.92-1.78-3.44-1.78-4.36 0L25.7 90.95l48.74-48.8z"
];
const CPPViewBox = "-32 -32 192 192";
const CPPSVGPath = [
    "M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c.1-.8 0-1.7-.4-2.6zM82 66v-4h5v-5h5v5h5v4h-5v5h-5v-5h-5zm3.3-14C81.1 44.5 73.1 39.5 64 39.5c-13.5 0-24.5 11-24.5 24.5s11 24.5 24.5 24.5c9.1 0 17.1-5 21.3-12.4l12.9 7.6c-6.8 11.8-19.6 19.8-34.2 19.8-21.8 0-39.5-17.7-39.5-39.5S42.2 24.5 64 24.5c14.7 0 27.5 8.1 34.3 20l-13 7.5zM115 66h-5v5h-4v-5h-6v-4h6v-5h4v5h5v4z"
]
const CSViewBox = "-32 -32 192 192";
const CSSVGPath = [
    "M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c.1-.8 0-1.7-.4-2.6zm-53.5 70c-21.8 0-39.5-17.7-39.5-39.5S42.2 24.5 64 24.5c14.7 0 27.5 8.1 34.3 20l-13 7.5C81.1 44.5 73.1 39.5 64 39.5c-13.5 0-24.5 11-24.5 24.5s11 24.5 24.5 24.5c9.1 0 17.1-5 21.3-12.4l12.9 7.6c-6.8 11.8-19.6 19.8-34.2 19.8zM115 62h-3.2l-.9 4h4.1v5h-5l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6H94v-5h3.5l.9-4H94v-5h5.3l1.2-6h4.9l-1.2 6h3.8l1.2-6h4.8l-1.2 6h2.2v5zm-12.7 4h3.8l.9-4h-3.8z"
]
const OpenGLViewBox = "0 0 128 128";
const OpenGLSVGPath = [
    "M26.289 75.031c-6.137 0-9.203-3.645-10.387-7.453 1.336 6.191 8.555 12.23 31.27 14.91 21.473 2.543 35.465-3.848 40.199-6.828 0 0 3.191-1.363 1.277.746 0 0-13.508 12.129-40.094 12.285C22.02 88.816.926 75.828 1.086 62.648.957 49.523 22.02 36.504 48.555 36.609c26.531.125 40.094 12.281 40.094 12.281 1.914 2.105-1.277.75-1.277.75-4.719-2.969-18.676-8.82-40.199-6.828-21.207 1.984-28.094 8.98-30.41 13.652a13.44 13.44 0 00-1.383 5.242c.57-4.496 3.449-9.77 10.871-9.77 8.398 0 10.98 6.828 10.98 11.551s-2.574 11.5-10.98 11.5zm85.57-4.543h11.195v3.965h-15.93V52.555h4.707v17.91zm-17.277-7.824H104v11.813h-3.137l-.469-2.738c-1.195 1.34-2.926 3.324-7.051 3.324-5.437 0-10.387-3.777-10.387-11.445 0-5.984 3.422-11.605 11.031-11.605 6.891 0 9.633 4.359 9.902 7.352h-4.707c0-.852-1.605-3.598-4.93-3.598-3.359 0-6.461 2.258-6.461 7.875 0 5.988 3.359 7.512 6.566 7.512 1.035 0 4.488-.395 5.438-4.816h-5.242v-3.687zm-68.348-8.031c-4.898 0-7.855 3.746-7.855 8.926 0 5.148 2.949 8.926 7.855 8.926 4.898 0 7.859-3.75 7.859-8.926 0-5.152-2.949-8.926-7.859-8.926zm12.703 5.828h2.285v1.98h.055c.582-.805 1.68-2.387 4.301-2.387 3.832 0 6.566 3.152 6.566 7.09 0 3.344-1.988 7.719-6.891 7.719-1.93 0-3.195-.883-3.832-1.875h-.055v7.035H38.94V60.488zm6.133 12.395c2.648 0 4.441-2.23 4.441-5.305 0-1.801-.75-5.359-4.496-5.359-3.496 0-3.883 3.668-3.883 5.938 0 3.715 2.398 4.711 3.938 4.711zm21.742-2.762c-.082.672-.742 2.652-2.562 3.828-.66.43-1.598.969-3.91.969-4.055 0-6.457-2.973-6.457-7.039 0-4.336 2.152-7.77 6.941-7.77 4.16 0 6.188 3.215 6.188 8.191H56.465c0 2.922 1.402 4.602 4.191 4.602 2.289 0 3.637-1.707 3.719-2.754h2.43zm-2.57-3.715c-.141-2.172-1.078-4.176-4.027-4.176-2.234 0-4 2.004-4 4.176zm16.145 8.082h-2.426v-8.609c0-2.434-.719-3.664-3.09-3.664-1.379 0-3.805.855-3.805 4.656v7.613h-2.43V60.441h2.289v1.977h.055c.523-.75 1.871-2.383 4.355-2.383 2.23 0 5.043.883 5.043 4.875v9.504m47.376-.695a1.95 1.95 0 01-.277 1.012 1.97 1.97 0 01-.758.742 2.07 2.07 0 01-1.035.273c-.367 0-.711-.094-1.031-.273s-.57-.426-.758-.742a1.95 1.95 0 01-.277-1.012c0-.359.094-.699.277-1.016a2.02 2.02 0 01.758-.738 2.07 2.07 0 011.031-.27c.367 0 .719.09 1.035.27s.574.426.758.738a1.98 1.98 0 01.277 1.016zm-.398 0a1.53 1.53 0 00-.492-1.152c-.324-.324-.719-.484-1.176-.484s-.855.16-1.18.484a1.54 1.54 0 00-.488 1.152 1.55 1.55 0 00.488 1.156 1.62 1.62 0 001.18.477c.461 0 .852-.156 1.176-.477a1.57 1.57 0 00.492-1.156zm-2.605-1.086h.988c.277 0 .484.059.609.168s.188.262.188.445c0 .145-.047.27-.145.379-.094.102-.246.18-.453.23a.597.597 0 01.188.098.92.92 0 01.176.223 47.6 47.6 0 01.359.625h-.652l-.426-.738c-.07-.082-.145-.125-.215-.125-.02 0-.039.004-.07.008v.855h-.551zm.551.922h.238c.156 0 .27-.027.336-.078a.24.24 0 00.098-.195.23.23 0 00-.094-.191c-.062-.051-.168-.078-.32-.078h-.258zm0 0"
]
const BlenderViewBox = "-64 -32 600 600";
const BlenderSVGPath = [
    "M510.003 279.642c-2.998-21.097-10.305-41.104-21.725-59.459-9.959-16.019-22.738-30.266-37.991-42.375l.041-.038L290.133 54.731a4.569 4.569 0 0 0-.361-.287c-5.326-4.08-12.537-6.325-20.297-6.325-7.77 0-15.263 2.25-21.088 6.338-6.263 4.375-9.843 10.18-10.093 16.359-.229 5.765 2.521 11.312 7.764 15.636 10.31 8.135 20.597 16.447 30.898 24.769 9.997 8.08 20.298 16.401 30.549 24.502l-196.213-.133c-22.439 0-37.718 10.537-40.861 28.178-1.381 7.727 1.056 16.223 6.504 22.73 5.78 6.898 14.172 10.703 23.629 10.703l14.958.01c20.664 0 41.419-.051 62.146-.101l19.766-.046-178.08 131.748-.707.517C8.7 336.953 2.188 347.642.783 358.653c-1.065 8.342.881 15.965 5.63 22.053 5.66 7.258 14.497 11.25 24.885 11.25 10.205 0 20.618-3.867 29.334-10.908l96.166-78.7c-.411 3.843-.91 9.481-.853 13.573.108 6.479 2.188 19.479 5.481 30.033 6.804 21.69 18.265 41.535 34.063 58.963 16.438 18.132 36.458 32.509 59.5 42.722 24.36 10.774 50.547 16.243 77.836 16.243h.253c27.376-.066 53.646-5.622 78.085-16.519 23.08-10.334 43.091-24.769 59.467-42.898 15.778-17.517 27.223-37.395 34.014-59.067a151.124 151.124 0 0 0 6.416-33.003c.839-10.83.478-21.85-1.057-32.753zM334.82 383.601c-60.141 0-108.911-43.627-108.911-97.447 0-53.814 48.771-97.441 108.911-97.441 60.142 0 108.907 43.627 108.907 97.441.002 53.82-48.765 97.447-108.907 97.447zm62.807-106.01c.887 16.063-5.529 30.978-16.796 42.019-11.461 11.248-27.815 18.313-46.103 18.313-18.28 0-34.637-7.065-46.102-18.313-11.262-11.041-17.665-25.954-16.783-42.006.864-15.603 8.475-29.376 19.939-39.128 11.273-9.589 26.41-15.439 42.945-15.439 16.537 0 31.67 5.852 42.944 15.439 11.47 9.752 19.083 23.515 19.956 39.115z"
];
// const VisualStudioViewBox = "0 0 128 128";
// const VisualStudioSVGPath = [
//     "M95 2.3l30.5 12.3v98.7l-30.7 12.4-49-48.7-31 24.1-12.3-6.2V33.1l12.3-5.9 31 24.3zM14.8 45.7v37.5l18.5-19zm48.1 18.5l31.9 25.1V39z"
// ];
const ThreeViewBox = "-8.964 -4.2527 226.77 226.77";
const ThreeSVGPath = [
    "m63.02 200.61-43.213-174.94 173.23 49.874z",
    "m106.39 50.612 21.591 87.496-86.567-24.945z",
    "m84.91 125.03-10.724-43.465 43.008 12.346z",
    "m63.458 38.153 10.724 43.465-43.008-12.346z",
    "m149.47 62.93 10.724 43.465-43.008-12.346z",
    "m84.915 125.06 10.724 43.465-43.008-12.346z"
];
const UnrealViewBox = "-32 -32 400 400";
const UnrealSVGPath = [
    "M264.11,191.3h0c-2.79,13.44-15.19,47.94-54.74,66.62l-15.88-17.86L166.69,267a98.9,98.9,0,0,1-78.22-40.12,38.53,38.53,0,0,0,8.76,1.65c4.39.08,9.14-1.53,9.14-8.9v-72.7a12,12,0,0,0-15.05-12C78.91,137.79,69,168.75,69,168.75a98.44,98.44,0,0,1,34.07-75.44,99.85,99.85,0,0,1,50.27-23.19c-13.55,7.72-21.16,20.31-21.16,30.87,0,17,10.24,14.94,13.27,12.44v98.12a15.6,15.6,0,0,0,2,3.45,14.49,14.49,0,0,0,11.85,6c10.25,0,23.55-11.7,23.55-11.7V129.88c0-8.08-6.09-17.84-12.19-21.19,0,0,11.29-2,20,4.67h0a74.63,74.63,0,0,1,5.21-5.73C216.2,87.68,235.35,82,251.3,79.16h0s-29,22.79-29,53.37c0,22.74.59,78.2.59,78.2C233.65,221.12,249.65,206.11,264.11,191.3Z",
    "M168,6.26A161.74,161.74,0,1,0,329.74,168,161.74,161.74,0,0,0,168,6.26Zm0,317A155.27,155.27,0,1,1,323.27,168,155.27,155.27,0,0,1,168,323.27Z"
];


function Skill(props) {
    return <SkillContainer>
        <SkillIconContainer>
            <FontAwesomeIcon icon={props.icon} size="2x"></FontAwesomeIcon>
        </SkillIconContainer>
        <SkillName>
            {props.name}
        </SkillName>
    </SkillContainer>
}

function SkillHollowSVG(props) {
    return <SkillContainer>
        <SkillIconContainer>
            <SVGIconHollow viewBox={props.viewBox} fill="none" strokeWidth="5">
            {props.paths.map((path,i) =><path key={i} d={path} />)}
            </SVGIconHollow>
        </SkillIconContainer>
        <SkillName>
            {props.name}
        </SkillName>
    </SkillContainer>
}

function SkillSVG(props) {
    return <SkillContainer>
        <SkillIconContainer>
            <SVGIcon viewBox={props.viewBox}>
                {props.paths.map((path,i) =><path key={i} d={path} />)}
            </SVGIcon>
        </SkillIconContainer>
        <SkillName>
            {props.name}
        </SkillName>
    </SkillContainer>
}


export default function SkillSection() {
    var [activeSet, setActiveSet] = useState(false);
    const { t } = useTranslation();
    
    return <Container id='skill'>
        <SectionTitle>{t('tools.title')}</SectionTitle>
        <SkillSwitchContainer>
            <SwitchLabel active={!activeSet} onClick={() => setActiveSet(false)}>{t('tools.game')}</SwitchLabel>
            <SwitchButton id="switch" type="checkbox" checked={activeSet} onChange={() => setActiveSet(!activeSet)} /><SwitchButtonGraphic htmlFor="switch"/>
            <SwitchLabel active={activeSet} onClick={() => setActiveSet(true)}>{t('tools.app')}</SwitchLabel>
        </SkillSwitchContainer>
        <SkillSet active={!activeSet}>
            <SkillSVG name="C++" viewBox={CPPViewBox} paths={CPPSVGPath}/>
            <SkillSVG name="C#" viewBox={CSViewBox} paths={CSSVGPath}/>
            <SkillSVG name="OpenGL" viewBox={OpenGLViewBox} paths={OpenGLSVGPath}/>
            <SkillSVG name="Blender" viewBox={BlenderViewBox} paths={BlenderSVGPath}/>
            <SkillSVG name="Unreal Engine" viewBox={UnrealViewBox} paths={UnrealSVGPath}/>
            <SkillHollowSVG name="ThreeJS" viewBox={ThreeViewBox} paths={ThreeSVGPath}/>
        </SkillSet>
        <SkillSet active={activeSet}>
            <Skill name="Javascript" icon={faJs}/>
            <Skill name="React" icon={faReact}/>
            <SkillSVG name="Nest" viewBox={NestViewBox} paths={NestSVGPath} />
            <SkillSVG name="Express" viewBox={ExpressViewBox} paths={ExpressSVGPath} />
            <SkillSVG name="Flutter" viewBox={FlutterViewBox} paths={FlutterSVGPath} />
            <div style={{display:'none'}}><SkillSVG name="Dart" viewBox={DartViewBox} paths={DartSVGPath} /></div>
            <SkillSVG name="MySQL" viewBox={MySQLViewBox} paths={MySQLSVGPath} />
            <SkillSVG name="GraphQL" viewBox={GraphQLViewBox} paths={GraphQLSVGPath} />
            <Skill name="NodeJS" icon={faNode}/>
            <Skill name="Docker" icon={faDocker}/>
            <SkillSVG name="Firebase" viewBox={FirebaseViewBox} paths={FirebaseSVGPath} />
        </SkillSet>
    </Container>
}