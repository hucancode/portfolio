import React from "react";
import { Trans, useTranslation } from 'next-i18next';

function Container(props)
{
    return <div className="container
        pb-5
        relative
        flex items-center justify-center
        max-w-screen-lg w-full
        overflow-hidden
        text-gray-500
        text-xs
        text-center">
            {props.children}
    </div>
}


export default function FootNote() {
    useTranslation();
    return <Container>
        <p>
            <Trans i18nKey="note.madeWith">
                Deployed with <code>Cloud Run</code><br/>Made with <code>Next.js, Three.js, TailwindCSS</code> and some other tools<br />
            </Trans>
        </p>
    </Container>
}