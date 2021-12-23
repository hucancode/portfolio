import React from "react";

export default function HamburgerButton(props) {
    return <div className="top-1/2
        -mt-0.5
        absolute before:absolute after:absolute
        block before:block after:block
        w-full before:w-full after:w-full
        h-1.5 before:h-1.5 after:h-1.5
        bg-gray-900 before:bg-gray-900 after:bg-gray-900
        dark:bg-gray-400 dark:before:bg-gray-400 dark:after:bg-gray-400
        before:top-3
        after:-top-3" />
}