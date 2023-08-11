import React from "react"

type Props = {
    onClick?: (e:React.MouseEvent<HTMLDivElement>)=>void
    children:React.ReactNode
    className?: string
}
/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Button1 = ({onClick, children, className}:Props) => {
    return <div className={`bg-green-500 hover:bg-green-700 p-2 rounded text-center ${className} `}>{children}</div>;
};
